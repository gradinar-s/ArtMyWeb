import { instance } from "./config";

export const fetchUsers = async (params) => {
  const data = await instance.get("/users", { params });
  return data.data;
};

export const fetchUser = async (id) => {
  const data = await instance.get(`/users/${id}`);
  return data.data;
};

export const updateUserInfo = async (user) => {
  await instance.patch(`/users/${user.id}`, user, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });
};
