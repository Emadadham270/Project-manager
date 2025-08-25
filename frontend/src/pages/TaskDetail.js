import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask, deleteTask } from "../api/task";

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [form, setForm] = useState({ title: "", status: "ToDo" });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchTask = async () => {
    try {
      const data = await getTaskById(id);
      setTask(data);
      setForm({ title: data.title, status: data.status });
    } catch (err) {
      setError("Failed to fetch task");
    }
  };

  useEffect(() => {
    fetchTask();
    // eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await updateTask(id, form);
      setEditing(false);
      fetchTask();
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      navigate(-1); // Go back to previous page
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  if (!task) {
    return <div className="text-center py-10">Loading task...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 max-w-xl mx-auto py-10">
      <button
        className="mb-4 text-blue-500 underline"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-2 text-white">Task Details</h1>
      {!editing ? (
        <div className="bg-gray-800 p-6 rounded shadow mb-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-2 text-white">
            {task.title}
          </h2>
          <p className="mb-2 text-gray-400">
            Status: <span className="font-semibold">{task.status}</span>
          </p>
          <p className="text-gray-400 mb-2">
            Created At: {new Date(task.createdAt).toLocaleString()}
          </p>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleUpdate}
          className="bg-gray-800 p-6 rounded shadow mb-6 border border-gray-700"
        >
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="ToDo">ToDo</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done</option>
          </select>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
