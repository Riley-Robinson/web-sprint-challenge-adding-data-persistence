const express = require("express");

const Project = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
    
    Project.getAllProjects()
            
            .then((project) => {
                res.status(200).json(project);
            })

            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    errMessage: " Sorry Master wayne, a error has arisen with retrieving the projects",
                });
            });
});

router.get("/resources", (req, res) => {
    Resource.getAllResources()
            
            .then((resources) => {
                res.status(200).json(resources);
            })

            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    errMessage: "Sorry Master wayne, a error has occurred with retrieving resources",
                });
            });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Project.getProjectById(id)

            .then((project) => {
                if (id) {
                    res.status(200).json(project);
                } else {
                    res.status(404),json({
                        errMessage: "No project with that ID",
                    });
                }
            })

            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    errMessage: "Sorry Master wayne, no bat project information can be found",
                });
            });
});

router.post("/", (req, res) => {

       Project.addProject(req.body)
               
               .then((project) => {
                   res.json(project);
               })

               .catch((err) => {
                   console.log(err);
                   res.status(500).json({ message: "Sorry Master wayne, Failed to post your new bat project."});
               });
});

module.exports = router;