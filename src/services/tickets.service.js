import { cartsDaoMongoose } from "../dao/mongoose/carts.dao.mongoose.js"
import { ticketsDaoMongoose } from "../dao/mongoose/tickets.dao.mongoose.js"
import { Ticket } from "../models/validationModels/Ticket.js"
import { logger } from "../utils/logger.js"
import { productsService } from "./products.service.js"

class TicketsService {

    async postTicket(searchedCart, email) {

        let totalAmount = 0
        searchedCart.products.forEach(async prod => {

            console.log(prod.product._id)
            const searchedProd = await productsService.getProduct(prod.product._id)
            console.log('stock ' + searchedProd.stock)
            console.log('quantity ' + prod.quantity)
            if (searchedProd.stock >= prod.quantity) {
                console.log('entro')

                const stock = searchedProd.stock - prod.quantity
                console.log('stock ' + stock)
                productsService.putProduct(prod.product._id, { stock: stock })
                totalAmount = totalAmount + searchedProd.price * prod.quantity
                cartsDaoMongoose.deleteProduct(searchedCart._id, searchedProd._id)
                console.log('dentro del for ' + totalAmount)
                
            }
            return totalAmount
        })
        console.log('total compra1 ' + totalAmount)

        if (totalAmount !== 0) {
            console.log('total compra2 ' + totalAmount)
            const newTicket = await ticketsDaoMongoose.create({ amount: 50, purchaser: email })
            return newTicket
        } else {
            return searchedCart
        }
    }
}

export const ticketsService = new TicketsService()