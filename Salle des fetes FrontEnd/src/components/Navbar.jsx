import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Composant de la barre de navigation supérieure (Navbar)
export default function Navbar() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Formater la date du jour pour l'afficher élégamment
  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="navbar-date">{today}</span>
      </div>
      <div className="navbar-right">
        {/* Badge profil de l'administrateur */}
        <div className="admin-profile">
          <div className="admin-avatar">
            {admin?.fullName ? admin.fullName.charAt(0).toUpperCase() : "A"}
          </div>
          <div className="admin-info">
            <span className="admin-name">{admin?.fullName || "Administrateur"}</span>
            <span className="admin-role">Admin Général</span>
          </div>
        </div>

        {/* Bouton de déconnexion */}
        <button className="btn-logout" onClick={handleLogout} title="Se déconnecter">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logout-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span>Déconnexion</span>
        </button>
      </div>
    </header>
  );
}
