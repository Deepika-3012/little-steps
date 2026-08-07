import API from "./api";

export const bookDaycare = (daycareId, token) => {
  return API.post(
    "/bookings",
    { daycareId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMyBookings = (token) => {
  return API.get("/bookings/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const cancelBooking = (id, token) => {
  return API.put(
    `/bookings/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};