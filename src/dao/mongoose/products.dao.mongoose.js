import mongoose from "mongoose"
import { productManager } from "../../models/mongooseModels/Product.js"
import { MONGO_URL } from "../../config/config.js"
import { logger } from "../../utils/logger.js"

await mongoose.connect(MONGO_URL)
logger.info('Productos: persistencia en MongoDB')

class ProductsDaoMongoose {

   async readMany(parameters, paginateOptions) {
      const products = await productManager.paginate(parameters, paginateOptions)
      return products
   }

   async readOne(pid) {
      const searched = await productManager.findById(pid).lean()
      return searched
   }

   async create({ title, description, code, price, status, stock, category, thumbnails }) {
      const newProduct = await productManager.create({ title, description, code, price, status, stock, category, thumbnails })
      return newProduct.toObject()
   }

   async updateOne(id, data, images) {
      if (images) {
         const updateImages = await productManager.findById(id)
         updateImages.addThumbnail(images)
      }
      const updatedProduct = await productManager.findByIdAndUpdate(id, { $set: data }, { new: true })
      return updatedProduct
   }

   async deleteOne(pid) {
      const deletedProduct = await productManager.findByIdAndDelete(pid)
      return deletedProduct
   }
}

export const productsDaoMongoose = new ProductsDaoMongoose()