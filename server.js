const express = require("express");

const ProjectRouter = require("./api/router");

const ResourcesRouter = require("./api/ResourceRouter");

const TaskRouter = require("./api/TaskRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", ProjectRouter);

server.use("/api/resources", ResourcesRouter );

server.use("/api/tasks", TaskRouter );

server.get("/", (req, res) => {
    res.send("server is up we good");
});

module.exports = server;