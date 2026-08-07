import API from "./api";

export const getAllDaycares = () => {
  return API.get("/daycare");
};

export const getDaycareById = (id) => {
  return API.get(`/daycare/${id}`);
};

export const createDaycare = (data, token) => {
  return API.post("/daycare", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateDaycare = (id, data, token) => {
  return API.put(`/daycare/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteDaycare = (id, token) => {
  return API.delete(`/daycare/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};