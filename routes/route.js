const express = require("express");
const router = express.Router();
const TaskList = require('../models/task');

router.route("/savetask").post((req, res) => {
    let newTask = new TaskList ({
        Time: req.body.Time,
        Task: req.body.Task
    })

    newTask.save();
})

module.exports = router;