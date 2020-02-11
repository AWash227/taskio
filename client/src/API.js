import axios from "axios";

const API = (() => {
  const URL = path => `http://localhost:5000/api/${path}`;
  const project = (() => {
    // ADD a new project
    const add = (title, complete, img, duedate, tasks) => {
      axios
        .post(URL("projects"), {
          title,
          complete,
          img,
          duedate,
          tasks
        })
        .then(res => console.log(res))
        .catch(err => console.error(err.response.data));
    };

    // ADD a task to the project
    const addTask = (projectId, task, section, callback) => {
      axios
        .post(URL(`projects/addTask`), {
          task: task,
          section: section,
          projectId: projectId
        })
        .then(res => callback(res.data))
        .catch(err => console.error(err));
    };
    // GET all projects
    const get = callback => {
      axios
        .get(URL("projects"))
        .then(res => callback(res.data))
        .catch(err => console.error(err));
    };
    const getById = (id, callback) => {
      axios
        .get(URL("projects/" + id))
        .then(res => callback(res.data))
        .catch(err => console.error(err));
    };
    const list = callback => {
      axios
        .get(URL("projects/list"))
        .then(res => callback(res.data))
        .catch(err => console.error(err));
    };
    // DELETE a project
    const remove = id => {
      axios
        .delete(URL(`projects/${id}`))
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    };
    return { add, get, getById, list, remove, addTask };
  })();

  const task = (() => {
    const add = (title, complete, description, tags, tasks, callback) => {
      axios
        .post(URL("tasks"), {
          title,
          complete,
          description,
          tags,
          tasks
        })
        .then(res => callback(res.data))
        .catch(err => console.error(err));
    };
    const get = callback => {
      axios
        .get(URL("tasks"))
        .then(res => callback(res))
        .catch(err => console.error(err));
    };
    return { add, get };
  })();
  return { project, task };
})();

export default API;
