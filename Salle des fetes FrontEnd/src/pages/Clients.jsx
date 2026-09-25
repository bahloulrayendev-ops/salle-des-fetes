import { useEffect, useState } from "react";
import { clientsApi, reservationsApi } from "../api";
import { clientFullName, splitFullName } from "../utils/format";
import { IconPlus, IconTrash, IconSearch, IconEdit } from "../components/icons";
import Modal from "../components/Modal";

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

const emptyForm = { 
  fullName: "", 
  phone: "", 
  email: "" 
};

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [reservationCounts, setReservationCounts] = useState({});
  const [query, setQuery] = useState("");
  const [modalMode, setModalMode] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const loadClients = () => {
    setLoading(true);
    clientsApi
      .getAll()
      .then(setClients)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadClients();
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = clients.filter((c) => {
    if (!q) return true;
    const fullName = clientFullName(c).toLowerCase();
    return (
      fullName.includes(q) ||
      String(c.id).includes(q) ||
      (c.phone || "").toLowerCase().includes(q)
    );
  });

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setModalMode("add");
  };

  const openEdit = (client) => {
    setForm({
      fullName: clientFullName(client),
      phone: client.phone,
      email: client.email || "",
    });
    setEditingId(client.id);
    setModalMode("edit");
  };

  const closeModal = () => setModalMode(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const { firstName, lastName } = splitFullName(form.fullName);
    const payload = {
      firstName,
      lastName,
      phone: form.phone,
      email: form.email,
    };

    try {
      if (modalMode === "add") {
        await clientsApi.create(payload);
      } else {
        await clientsApi.update(editingId, payload);
      }
      closeModal();
      loadClients();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Supprimer ${name} ? Cette action est irréversible.`)) {
      return;
    }
    try {
      await clientsApi.delete(id);
      loadClients();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="page"><p>Chargement...</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Clients</h1>
        <button className="btn-primary" onClick={openAdd}>
          <IconPlus width={16} height={16} />
          Ajouter un client
        </button>
      </div>

      {error && <p className="login-error">{error}</p>}

      <div className="search-bar">
        <IconSearch width={17} height={17} />
        <input
          type="text"
          placeholder="Rechercher par nom, ID ou numéro..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Réservations</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="client-cell">
                    <div className="client-avatar">{initials(clientFullName(c))}</div>
                    {clientFullName(c)}
                  </div>
                </td>
                <td>{c.phone}</td>
                <td>{c.email || "—"}</td>
                <td>
                  <span className="badge badge-gray">
                    {reservationCounts[c.id] || 0}
                  </span>
                </td>
                <td>
                  <div className="row-actions">
                    <button
                      className="btn-icon"
                      title="Modifier"
                      onClick={() => openEdit(c)}
                    >
                      <IconEdit width={16} height={16} />
                    </button>
                    <button
                      className="btn-icon-danger"
                      title="Supprimer"
                      onClick={() => handleDelete(c.id, clientFullName(c))}
                    >
                      <IconTrash width={16} height={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-row">
                  Aucun client ne correspond à "{query}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalMode && (
        <Modal
          title={modalMode === "add" ? "Ajouter un client" : "Modifier le client"}
          onClose={closeModal}
        >
          <form className="modal-form" onSubmit={handleSubmit}>
            <label htmlFor="c-name">Nom complet</label>
            <input
              id="c-name"
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />

            <label htmlFor="c-phone">Téléphone</label>
            <input
              id="c-phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <label htmlFor="c-email">Email</label>
            <input
              id="c-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <div className="modal-actions">
              <button type="button" className="btn-secondary" onClick={closeModal}>
                Annuler
              </button>
              <button type="submit" className="btn-primary" disabled={saving}>
                {saving ? "Enregistrement..." : modalMode === "add" ? "Ajouter" : "Enregistrer"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
