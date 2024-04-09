import mongoose from "mongoose"
import { ticketManager } from "../../models/mongooseModels/Ticket.js"
import { MONGO_URL } from "../../config/config.js"
import { logger } from "../../utils/logger.js"

await mongoose.connect(MONGO_URL)
logger.info('Tickets: persistencia en MongoDB')

class TicketsDaoMongoose {

//    async readMany(parameters, paginateOptions) {
//       const products = await productManager.paginate(parameters, paginateOptions)
//       return products
//    }

//    async readOne(pid) {
//       const searched = await productManager.findById(pid).lean()
//       return searched
//    }

   async create({ amount, purchaser }) {
        console.log('amount ' + amount)
      const newTicket = await ticketManager.create({ amount, purchaser })
      return newTicket.toObject()
   }

//    async updateOne(id, data, images) {
//       console.log(data)
//       if (images) {
//          const updateImages = await productManager.findById(id)
//          updateImages.addThumbnail(images)
//       }
     
//       const updatedProduct = await productManager.findByIdAndUpdate(id, { $set: data }, { new: true })
//       return updatedProduct
//    }

//    async deleteOne(pid) {
//       const deletedProduct = await productManager.findByIdAndDelete(pid)
//       return deletedProduct
//    }
}

export const ticketsDaoMongoose = new TicketsDaoMongoose()