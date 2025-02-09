const returnAssetRouter = require("express").Router();

const { returnAssetControllers } = require("../controllers");
const userExtractor = require("../middleware/userExtractor");

returnAssetRouter.get("/", returnAssetControllers.getTransReturn);
returnAssetRouter.get(
  "/details/:transHid",
  returnAssetControllers.getDetailReturn
);

returnAssetRouter.post(
  "/rt",
  userExtractor,
  returnAssetControllers.createReturnAsset
);

returnAssetRouter.post(
  "/confirmasi",
  userExtractor,
  returnAssetControllers.confirmasiReturn
);

module.exports = returnAssetRouter;
