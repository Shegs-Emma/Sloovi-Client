import baseAxios from "../core/axios/baseAxios";

class TaskService {
  static async userDetails() {
    const res = await baseAxios.get("user");

    return res?.data || res;
  }

  static async createTask(payload) {
    const res = await baseAxios.post("", payload);

    return res?.data || res;
  }

  static async editTask(id, data) {
    const res = await baseAxios.put(`/${id}`, data);

    return res?.data || res;
  }

  static async getTasks() {
    const res = await baseAxios.get("");

    return res?.data || res;
  }

  static async getTask(id) {
    const res = await baseAxios.get(`/${id}`);

    return res?.data || res;
  }

  static async deleteTask(id) {
    const res = await baseAxios.delete(`/${id}`);

    return res?.data || res;
  }
}

export default TaskService;
