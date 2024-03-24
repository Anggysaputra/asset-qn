const { statusGlobalControllers } = require("../controllers");
const statusGlobalRouters = require("express").Router();

statusGlobalRouters.get("/", statusGlobalControllers.getStatusReturn);
statusGlobalRouters.get(
  "/status_count",
  statusGlobalControllers.getCountStatus
);

module.exports = statusGlobalRouters;
