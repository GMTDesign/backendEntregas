import { Router } from "express"
import { getController, getByIdController, postController, putController, deleteController } from "../../controllers/api/productsControllers.js"
import { extractFile } from "../../middlewares/middlewares.js"
import { loginValidation, onlyAdmin } from "../../middlewares/authorization.js"


export const productsRouter = Router()

productsRouter.get('/products', getController)

productsRouter.get('/products/:pid', getByIdController)

productsRouter.post('/products', loginValidation, onlyAdmin, extractFile('photo'), postController)

productsRouter.put('/products/:pid/', loginValidation, onlyAdmin, extractFile('photo'), putController)

productsRouter.delete('/products/:pid', loginValidation, onlyAdmin, deleteController)