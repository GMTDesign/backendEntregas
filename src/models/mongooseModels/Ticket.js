import { Schema, model } from "mongoose"
import { randomUUID } from 'crypto'

export const Ticket = new Schema({
    _id: { type: String, default: randomUUID },
    code: { type: String, default: randomUUID },
    purchase_datetime: { type: Date },
    amount: { type: Number, required: true},
    purchaser: { type: String, required: true},
}, {
    strict: 'throw',
    versionKey: false
})

export const ticketManager = model('tickets', Ticket)