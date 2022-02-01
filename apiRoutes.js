const express = require("express");
const multer = require("multer");

const upload = multer({dest: "uploads/"});
const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
    const file = req.file;
    res.json({
        mime: file.mimetype,
        size: file.size
    });
});

module.exports = router;