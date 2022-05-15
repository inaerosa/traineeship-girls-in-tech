const router = require("express").Router();
const merchantController = require("./../controller/merchantController");

router
  .get("/", merchantController.showAll)
  .get("/branch", merchantController.getBranch)
  .get("/headOffice", merchantController.getHeadOffice)
  .get("/:id", merchantController.getMerchantById)
  .post("/", merchantController.postMerchant)
  .patch("/:id/status", merchantController.updateStatus)
  .delete("/:id", merchantController.deleteMerchant)
  .post("/:id/send-message", merchantController.sendMessage);

module.exports = router;

/**
 * a rota headOffice esta em camelCase, já a rota send-message está em quebec-case.
 * Sugiro definir um unico padrão para as rotas, de preferencia quebec-case
 */
