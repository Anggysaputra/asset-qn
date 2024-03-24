const { roleControllers } = require("../controllers");
const roleRouter = require("express").Router();

roleRouter.get("/", roleControllers.getAllRole);
roleRouter.get("/details/:roleId", roleControllers.DetailRoleAccess);
roleRouter.post("/updated-access", roleControllers.updateRoleAccess);

module.exports = roleRouter;
