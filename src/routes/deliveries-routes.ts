import { Router } from "express"

import { DeliveriesController } from "@/controllers/deliveries-controller"
import { DeliveiesStatusController } from "@/controllers/deliveries-status-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const deliveriesRoutes = Router()
const deliveresController = new DeliveriesController()
const deliveiesStatusController = new DeliveiesStatusController()

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))
deliveriesRoutes.post("/", deliveresController.create)
deliveriesRoutes.get("/", deliveresController.index)
deliveriesRoutes.patch("/:id/status", deliveiesStatusController.update)

export { deliveriesRoutes }
