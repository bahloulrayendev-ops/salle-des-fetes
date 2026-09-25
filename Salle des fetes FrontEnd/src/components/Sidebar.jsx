import { NavLink } from "react-router-dom";
import { IconCeremonyHall } from "./icons";

// Composant de la barre latérale (Sidebar) de navigation
export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* En-tête de la sidebar avec logo/titre */}
      <div className="sidebar-brand">
        <IconCeremonyHall className="brand-icon" />
        <span className="brand-text">Prestige Event</span>
      </div>

      <nav className="sidebar-nav">
        {/* Lien Dashboard */}
        <NavLink to="/" end className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          <span>Dashboard</span>
        </NavLink>

        {/* Lien Salles */}
        <NavLink to="/salles" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
          <span>Salles</span>
        </NavLink>

        {/* Lien Réservations */}
        <NavLink to="/reservations" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <span>Réservations</span>
        </NavLink>

        {/* Lien Employés */}
        <NavLink to="/employes" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20.5c-2.029 0-3.923-.526-5.5-1.453v-.109c0-3.472 2.774-6.33 6.209-6.33h7.002c1.673 0 3.18.663 4.298 1.737M8.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <span>Employés</span>
        </NavLink>

        {/* Lien Clients */}
        <NavLink to="/clients" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <rect x="2.5" y="5" width="19" height="14" rx="2" />
            <circle cx="8" cy="11" r="2.3" />
            <path strokeLinecap="round" d="M5.3 17c.5-2 1.6-3 2.7-3s2.2 1 2.7 3" />
            <path strokeLinecap="round" d="M13.5 9.5h5M13.5 12.5h5M13.5 15.5h3" />
          </svg>
          <span>Clients</span>
        </NavLink>

        {/* Lien Formules */}
        <NavLink to="/formules" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l9 5 9-5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.5l9 5 9-5" />
          </svg>
          <span>Formules</span>
        </NavLink>

        {/* Lien Paiements */}
        <NavLink to="/paiements" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <rect x="2.5" y="6" width="19" height="13" rx="2" />
            <path strokeLinecap="round" d="M2.5 10h19" />
            <path strokeLinecap="round" d="M6 14.5h4M6 17h2.5" />
          </svg>
          <span>Paiements</span>
        </NavLink>

        {/* Lien Notifications */}
        <NavLink to="/notifications" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a5 5 0 00-5 5c0 5-2 6.5-2 6.5h14s-2-1.5-2-6.5a5 5 0 00-5-5z" />
            <path strokeLinecap="round" d="M10.3 18.5a1.8 1.8 0 003.4 0" />
          </svg>
          <span>Notifications</span>
        </NavLink>
      </nav>
    </aside>
  );
}
