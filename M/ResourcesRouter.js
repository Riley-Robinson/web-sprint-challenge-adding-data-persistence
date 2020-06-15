const express = require("express");

const Project = require("./model");

const router = express.Router();

router.get("/", (req,res) => {
    Project.getAllResources()
    
            .then((resources) => {
                res.status(200).json(resources);
            })
    
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    errMessage: "Sorry master wayne, a error has occurred",
                });
            });
});

router.post("/", (req, res) => {
    Project.addResource(req.body)
            
            .then((resource) => {
                res.json(resource);
            })

            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: "Failed to post your post master wayne."});
            });          
});

module.exports = router;