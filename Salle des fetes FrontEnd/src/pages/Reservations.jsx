import { useEffect, useState } from "react";
import { reservationsApi } from "../api";
import {
  formatBalanceStatus,
  formatReservationStatus,
  formatTime,
} from "../utils/format";

function badgeClass(status) {
  if (status === "confirmee") return "badge-green";
  if (status === "en_attente") return "badge-orange";
  return "badge-gray";
}

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    reservationsApi
      .getAll()
      .then(setReservations)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="page"><p>Chargement...</p></div>;
  if (error) return <div className="page"><p className="login-error">{error}</p></div>;


  
  return (
    <div className="page">
      <h1>Réservations</h1>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Salle</th>
              <th>Date</th>
              <th>Horaire</th>
              <th>Invités</th>
              <th>Statut</th>
              <th>Paiement</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id}>
                <td>
                  {r.clientFirstName} {r.clientLastName}
                </td>
                <td>{r.salleName}</td>
                <td>{r.eventDate}</td>
                <td>
                  {formatTime(r.startTime)} - {formatTime(r.endTime)}
                </td>
                <td>{r.guestsCount}</td>
                <td>
                  <span className={`badge ${badgeClass(r.status)}`}>
                    {formatReservationStatus(r.status)}
                  </span>
                </td>
                <td>{formatBalanceStatus(r.balanceStatus)}</td>
              </tr>
            ))}
            {reservations.length === 0 && (
              <tr>
                <td colSpan={7} className="empty-row">
                  Aucune réservation enregistrée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
