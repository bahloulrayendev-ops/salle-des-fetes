import { api } from "./client";

export const adminApi = {
  login: (username, password) =>
    api.post("/admin/login", { username, password }),

};

export const sallesApi = {
  getAll: () => api.get("/salles"),
  update: (id, salle) => api.put(`/salles/${id}`, salle),
  create: (salle) => api.post("/salles/create", salle),
  desactivation: (id) => api.put(`/salles/desactivation/${id}`),
};

export const clientsApi = {
  getAll: () => api.get("/clients/all"),
  search: (params) => {
    const query = new URLSearchParams(params).toString();
    return api.get(`/clients/search?${query}`);
  },
  create: (client) => api.post("/clients", client),
  update: (id, client) => api.put(`/clients/${id}`, client),
  delete: (id) => api.delete(`/clients/${id}`),
};

export const reservationsApi = {
  getAll: () => api.get("/reservations"),
  getById: (id) => api.get(`/reservations/${id}`),
  create: (reservation) => api.post("/reservations", reservation),
  update: (id, reservation) => api.put(`/reservations/${id}`, reservation),
  delete: (id) => api.delete(`/reservations/${id}`),
};

export const employersApi = {
  getAll: () => api.get("/employers"),
  create: (employer) => api.post("/employers", employer),
  update: (id, employer) => api.put(`/employers/${id}`, employer),
  delete: (id) => api.delete(`/employers/${id}`),
};

export const formulesApi = {
  getAll: () => api.get("/formules"),
  searchById: (id) => api.get(`/formules/${id}`),
  create: (formule) => api.post("/formules", formule),
  update: (id, formule) => api.put(`/formules/${id}`, formule),
  delete: (id) => api.delete(`/formules/${id}`),
};

export const paiementsApi = {
  getAll: () => api.get("/paiements"),
  getById: (id) => api.get(`/paiements/${id}`),
  getByClientId: (clientId) => api.get(`/paiements/client/${clientId}`),
  getBySalleId: (salleId) => api.get(`/paiements/salle/${salleId}`),
  getByPeriod: (startDate, endDate) =>
    api.get(`/paiements/period?start=${startDate}&end=${endDate}`),
  create: (paiement) => api.post("/paiements", paiement),
  delete: (id) => api.delete(`/paiements/${id}`),
};

export const notificationsApi = {
  getAll: () => api.get("/notifications"),
  getById: (id) => api.get(`/notifications/${id}`),
  create: (notification) => api.post("/notifications", notification),
  delete: (id) => api.delete(`/notifications/${id}`),
};
