import { useEffect, useState } from "react";
import { formulesApi } from "../api";
import {
  formatEventType,
  formatPricingType,
} from "../utils/format";
import { IconPlus } from "../components/icons";

export default function Formules() {
  const [formules, setFormules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    formulesApi
      .getAll()
      .then(setFormules)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="page"><p>Chargement...</p></div>;
  if (error) return <div className="page"><p className="login-error">{error}</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Formules</h1>
        <button className="btn-primary">
          <IconPlus width={16} height={16} />
          Ajouter une formule
        </button>
      </div>

      <div className="formules-grid">
        {formules.map((f) => {
          const price =
            f.pricingType === "par_heure" ? f.pricePerHour : f.pricePerDay;
          const unit = f.pricingType === "par_heure" ? "DT/h" : "DT/jour";

          return (
            <div key={f.id} className="formule-card">
              <h3 className="formule-name">{f.name}</h3>
              <p className="formule-description">
                {formatEventType(f.eventType)} · {formatPricingType(f.pricingType)}
              </p>
              <div className="formule-price">
                {price ?? "-"} <span>{unit}</span>
              </div>
              <ul className="formule-services">
                <li>Capacité max : {f.maxGuests} invités</li>
                <li>Salle : {f.salle?.name || "—"}</li>
              </ul>
              <button
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
              >
                Modifier
              </button>
            </div>
          );
        })}
        {formules.length === 0 && (
          <p className="empty-row">Aucune formule enregistrée.</p>
        )}
      </div>
    </div>
  );
}
