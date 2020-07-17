const db  = require("../data/dbConfig.js");

module.exports = {
    getAllProjects,
    getProjectById,
    getAllResources,
    addResource,
    addProject,
    getAllTasks,
    getFullTasks,
};

function getAllProjects() {
    return db.select("*").from("project");
  }

function getAllTasks() {
    return db.select("*").from("tasks");
}

function getProjectById(id) {
    let query = db("project as p");
    return query.where("p.id", id).first();
  }

  function getAllResources() {
    return db.select("*").from("resources");
  }
  
  function addResource(resource) {
    return db("resources")
      .insert(resource, "id")
      .then(([id]) => getAllResources());
  }
  function addProject(project) {
    return db("project")
      .insert(project, "id")
      .then(([id]) => getAllProjects());
  }
  
  function getFullTasks(id) {
    return db("tasks")
      .select(
        "project.id",
        "project.name",
        "project.description",
        "tasks.description",
        "tasks.notes"
      )
      .join("project", "project.id", "tasks.project_id");
}

