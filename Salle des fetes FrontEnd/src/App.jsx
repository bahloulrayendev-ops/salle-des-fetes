import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Salles from "./pages/Salles";
import Reservations from "./pages/Reservations";
import Employes from "./pages/Employes";
import Clients from "./pages/Clients";
import Formules from "./pages/Formules";
import Paiements from "./pages/Paiements";
import Notifications from "./pages/Notifications";

import "./App.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/salles"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Salles />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Reservations />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/employes"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Employes />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/clients"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Clients />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/formules"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Formules />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/paiements"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Paiements />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Notifications />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
