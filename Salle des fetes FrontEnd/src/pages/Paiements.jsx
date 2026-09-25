import { useEffect, useState } from "react";
import { paiementsApi } from "../api";
import { clientFullName, formatPaymentMethod } from "../utils/format";

function CoinIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5c0-1.2 1.1-2 2.5-2s2.5.8 2.5 2c0 1.2-1.1 1.7-2.5 2s-2.5.8-2.5 2c0 1.2 1.1 2 2.5 2s2.5-.8 2.5-2" />
    </svg>
  );
}

function getClientName(paiement) {
  const client = paiement.reservation?.client;
  return client ? clientFullName(client) : "—";
}

function getSalleName(paiement) {
  return paiement.reservation?.formule?.salle?.name || "—";
}

export default function Paiements() {
  const [paiements, setPaiements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    paiementsApi
      .getAll()
      .then(setPaiements)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const totalEncaisse = paiements.reduce(
    (sum, p) => sum + Number(p.amount || 0),
    0
  );

  if (loading) return <div className="page"><p>Chargement...</p></div>;
  if (error) return <div className="page"><p className="login-error">{error}</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Paiements</h1>
      </div>

      <div className="stats-grid" style={{ marginBottom: 26 }}>
        <div className="stat-card">
          <div className="stat-icon icon-green">
            <CoinIcon />
          </div>
          <div>
            <h3>{totalEncaisse} DT</h3>
            <p>Total encaissé</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon icon-orange">
            <CoinIcon />
          </div>
          <div>
            <h3>{paiements.length}</h3>
            <p>Paiements enregistrés</p>
          </div>
        </div>
      </div>

      <div className="table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Salle</th>
              <th>Montant</th>
              <th>Type</th>
              <th>Méthode</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paiements.map((p) => (
              <tr key={p.id}>
                <td>{getClientName(p)}</td>
                <td>{getSalleName(p)}</td>
                <td>{p.amount} DT</td>
                <td>
                  <span className="badge badge-gray">{p.type}</span>
                </td>
                <td>{formatPaymentMethod(p.method)}</td>
                <td>{p.paymentDate || "—"}</td>
              </tr>
            ))}
            {paiements.length === 0 && (
              <tr>
                <td colSpan={6} className="empty-row">
                  Aucun paiement enregistré.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
