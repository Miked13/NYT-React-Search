const path = require("path");
const router = require("express").Router();
const APIRoutes = require("./api");

router.use("/api", APIRoutes);
// In case APIRoutes is not found
router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
