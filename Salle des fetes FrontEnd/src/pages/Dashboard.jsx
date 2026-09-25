import { useEffect, useState } from "react";
import { sallesApi, reservationsApi, employersApi } from "../api";
import { IconBuilding, IconCalendar, IconUsers } from "../components/icons";

export default function Dashboard() {
  const [stats, setStats] = useState({ salles: 0, sallesActives: 0, reservations: 0, reservationsEnAttente: 0, employes: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([sallesApi.getAll(), reservationsApi.getAll(), employersApi.getAll()])
      .then(([salles, reservations, employes]) => {
        setStats({
          salles: salles.length,
          sallesActives: salles.filter((s) => s.active).length,
          reservations: reservations.length,
          reservationsEnAttente: reservations.filter((r) => r.status === "en_attente").length,
          employes: employes.length,
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="page"><p>Chargement...</p></div>;
  if (error) return <div className="page"><p className="login-error">Une erreur est survenue! (communication avec la base de données)</p></div>;

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <IconBuilding />
          </div>
          <div>
            <h3>{stats.salles}</h3>
            <p>Salles ({stats.sallesActives} actives)</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-orange">
            <IconCalendar />
          </div>
          <div>
            <h3>{stats.reservations}</h3>
            <p>Réservations ({stats.reservationsEnAttente} en attente)</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-green">
            <IconUsers />
          </div>
          <div>
            <h3>{stats.employes}</h3>
            <p>Employés</p>
          </div>
        </div>
      </div>
    </div>
  );
}
