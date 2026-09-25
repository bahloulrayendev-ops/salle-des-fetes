import { useEffect, useState } from "react";
import { sallesApi } from "../api";
import { IconPlus } from "../components/icons";

export default function Salles() {
  const [salles, setSalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const loadSalles = () => {
    setLoading(true);
    sallesApi
      .getAll()
      .then(setSalles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };


  
  useEffect(() => {
    loadSalles();
  }, []);

  const toggleActive = async (salle) => {
    setUpdatingId(salle.id);
    try {
      const updated = await sallesApi.update(salle.id, {
        ...salle,
        active: !salle.active,
      });
      setSalles((prev) => prev.map((s) => (s.id === salle.id ? updated : s)));
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <div className="page"><p>Chargement...</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Salles</h1>
        <button className="btn-primary">
          <IconPlus width={16} height={16} />
          Ajouter une salle
        </button>
      </div>

      {error && <p className="login-error">{error}</p>}

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Capacité</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salles.map((salle) => (
              <tr key={salle.id}>
                <td>{salle.name}</td>
                <td>{salle.address}</td>
                <td>{salle.capacity} pers.</td>
                <td>
                  <span
                    className={`badge ${salle.active ? "badge-green" : "badge-gray"}`}
                  >
                    {salle.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-secondary"
                    disabled={updatingId === salle.id}
                    onClick={() => toggleActive(salle)}
                  >
                    {updatingId === salle.id
                      ? "..."
                      : salle.active
                        ? "Désactiver"
                        : "Activer"}
                  </button>
                </td>
              </tr>
            ))}
            {salles.length === 0 && (
              <tr>
                <td colSpan={5} className="empty-row">
                  Aucune salle enregistrée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
