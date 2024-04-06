import { Router } from "express"
import { deleteController, deleteProductController, getByIdController, postController, postProductController, postPurchaseController, putController, putProductController } from "../../controllers/api/cartsControllers.js"
import { loginValidation, onlyUser } from "../../middlewares/authorization.js"

export const cartsRouter = Router()

cartsRouter.get('/carts/:cid', getByIdController)

cartsRouter.post('/carts', postController)

cartsRouter.post('/carts/:cid/product/:pid', loginValidation, onlyUser, postProductController)

cartsRouter.put('/carts/:cid', putController)

cartsRouter.put('/carts/:cid/product/:pid', loginValidation, onlyUser, putProductController)

cartsRouter.delete('/carts/:cid', deleteController)

cartsRouter.delete('/carts/:cid/product/:pid', loginValidation, onlyUser, deleteProductController)

cartsRouter.post('/carts/:cid/purchase', loginValidation, onlyUser, postPurchaseController)
