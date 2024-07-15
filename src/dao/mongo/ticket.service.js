import ticketModel from "../../models/ticket.model.js"

export default class ticketManager{
    async newTicket(code, amount, purchase) {
        try {
            const newTicket ={
                code: code,
                amount: amount,
                purchaser : purchase
            }
            const result = await ticketModel.create(newTicket)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}