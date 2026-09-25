import { useEffect, useState } from "react";
import { notificationsApi } from "../api";
import { formatNotificationStatus } from "../utils/format";
import { IconCalendar } from "../components/icons";

function CoinIcon(props) {
  return (
    <svg
      width="18"
      height="18"
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

const typeConfig = {
  rappel_paiement: { icon: CoinIcon, cls: "icon-green" },
  rappel_affectation: { icon: IconCalendar, cls: "icon-orange" },
  confirmation: { icon: IconCalendar, cls: "" },
};

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return (
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) +
    " à " +
    d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
  );
}

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    notificationsApi
      .getAll()
      .then(setNotifications)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const pendingCount = notifications.filter((n) => n.status === "en_attente").length;

  if (loading) return <div className="page"><p>Chargement...</p></div>;
  if (error) return <div className="page"><p className="login-error">{error}</p></div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Notifications</h1>
        {pendingCount > 0 && (
          <span className="badge badge-orange">{pendingCount} en attente</span>
        )}
      </div>

      <div className="notif-list">
        {notifications.map((n) => {
          const config = typeConfig[n.type] || typeConfig.confirmation;
          const Icon = config.icon;
          const isPending = n.status === "en_attente";

          return (
            <div
              key={n.id}
              className={`notif-item${isPending ? " unread" : ""}`}
            >
              <div className={`notif-icon ${config.cls}`}>
                <Icon width={18} height={18} />
              </div>
              <div className="notif-body">
                <p>{n.message}</p>
                <span className="notif-date">
                  {formatDate(n.sentDate)} · {formatNotificationStatus(n.status)}
                </span>
              </div>
              {isPending && <span className="notif-dot" />}
            </div>
          );
        })}
        {notifications.length === 0 && (
          <p className="empty-row">Aucune notification.</p>
        )}
      </div>
    </div>
  );
}
