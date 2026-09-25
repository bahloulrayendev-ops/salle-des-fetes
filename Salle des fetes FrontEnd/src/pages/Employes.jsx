import { useEffect, useState } from "react";
import { employersApi } from "../api";
import { formatEmployerRole, getHourlyRate } from "../utils/format";
import { IconPlus, IconTrash, IconSearch, IconEdit } from "../components/icons";
import Modal from "../components/Modal";

const ROLES = [
  { value: "serveur", label: "Serveur" },
  { value: "chef_de_rang", label: "Chef de rang" },
  { value: "maitre_d_hotel", label: "Maître d'hôtel" },
  { value: "cuisinier", label: "Cuisinier" },
];

const emptyForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  role: "serveur",
  hourlyRate: "",
};

export default function Employes() {
  const [employes, setEmployes] = useState([]);
  const [query, setQuery] = useState("");
  const [modalMode, setModalMode] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const loadEmployes = () => {
    setLoading(true);
    employersApi
      .getAll()
      .then(setEmployes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadEmployes();
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = employes.filter((e) => {
    if (!q) return true;
    const fullName = `${e.firstName} ${e.lastName}`.toLowerCase();
    return (
      fullName.includes(q) ||
      String(e.id).includes(q) ||
      (e.phone || "").toLowerCase().includes(q)
    );
  });

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setModalMode("add");
  };

  const openEdit = (employe) => {
    setForm({
      firstName: employe.firstName,
      lastName: employe.lastName,
      phone: employe.phone,
      email: employe.email,
      role: employe.role,
      hourlyRate: String(getHourlyRate(employe)),
    });
    setEditingId(employe.id);
    setModalMode("edit");
  };

  const closeModal = () => setModalMode(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      role: form.role,
      hourlyRate: Number(form.hourlyRate) || 0,
    };

    try {
      if (modalMode === "add") {
        await employersApi.create(payload);
      } else {
        await employersApi.update(editingId, payload);
      }
      closeModal();
      loadEmployes();
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
      await employersApi.delete(id);
      loadEmployes();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="page"><p>Chargement...</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Employés</h1>
        <button className="btn-primary" onClick={openAdd}>
          <IconPlus width={16} height={16} />
          Ajouter un employé
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
              <th>Nom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Taux horaire</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id}>
                <td>
                  {e.firstName} {e.lastName}
                </td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{formatEmployerRole(e.role)}</td>
                <td>{getHourlyRate(e)} DT/h</td>
                <td>
                  <div className="row-actions">
                    <button
                      className="btn-icon"
                      title="Modifier"
                      onClick={() => openEdit(e)}
                    >
                      <IconEdit width={16} height={16} />
                    </button>
                    <button
                      className="btn-icon-danger"
                      title="Supprimer"
                      onClick={() =>
                        handleDelete(e.id, `${e.firstName} ${e.lastName}`)
                      }
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
                  Aucun employé ne correspond à "{query}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalMode && (
        <Modal
          title={modalMode === "add" ? "Ajouter un employé" : "Modifier l'employé"}
          onClose={closeModal}
        >
          <form className="modal-form" onSubmit={handleSubmit}>
            <label htmlFor="e-first">Prénom</label>
            <input
              id="e-first"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />

            <label htmlFor="e-last">Nom</label>
            <input
              id="e-last"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />

            <label htmlFor="e-phone">Téléphone</label>
            <input
              id="e-phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <label htmlFor="e-email">Email</label>
            <input
              id="e-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label htmlFor="e-role">Rôle</label>
            <select
              id="e-role"
              required
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              {ROLES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>

            <label htmlFor="e-rate">Taux horaire (DT/h)</label>
            <input
              id="e-rate"
              type="number"
              min="0"
              step="0.5"
              required
              value={form.hourlyRate}
              onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
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
