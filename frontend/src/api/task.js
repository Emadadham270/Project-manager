import API from "../api";

export const createTask = async (data) => {
  const res = await API.post("/task", data);
  return res.data;
};

export const getTasksByProject = async (projectId) => {
  const res = await API.get(`/task/project/${projectId}`);
  return res.data;
};

export const getTaskById = async (id) => {
  const res = await API.get(`/task/${id}`);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await API.put(`/task/${id}`, data);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/task/${id}`);
  return res.data;
};
