import { Ticket } from "../models/validationModels/Ticket.js"
import { productsService } from "./products.service.js"

class TicketsService {

    async postTicket(searchedCart, email) {
        console.log(searchedCart)
        console.log(email)
        let totalAmount = 0
        // searchedCart.products.forEach(prod => {
        //     const searchedProd = productsService.getProduct(prod.product_id)
        //     console.log(searchedProd)
        //     if (searchedProd.quantity >= prod.quantity) {
        //         totalAmount = totalAmount + prod.price * prod.quantity
        //     }
        // })
        // console.log(totalAmount)
         return searchedCart
    }
}

export const ticketsService = new TicketsService()