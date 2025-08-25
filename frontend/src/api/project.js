import API from "../api";

export const createProject = async (data) => {
  const res = await API.post("/project", data);
  return res.data;
};

export const getProjects = async () => {
  const res = await API.get("/project");
  return res.data;
};

export const getProjectById = async (id) => {
  const res = await API.get(`/project/${id}`);
  return res.data;
};

export const updateProject = async (id, data) => {
  const res = await API.put(`/project/${id}`, data);
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await API.delete(`/project/${id}`);
  return res.data;
};
