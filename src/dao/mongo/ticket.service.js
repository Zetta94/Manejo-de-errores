import ticketModel from "../../models/ticket.model.js"

export default class ticketManager {
    async newTicket(code, amount, purchaser) {
        try {
            if (typeof amount !== 'number' || isNaN(amount)) {
                throw new Error('Amount debe ser un número válido');
            }

            const newTicket = {
                code: code,
                amount: amount,
                purchaser: purchaser
            }
            const result = await ticketModel.create(newTicket);
            return result;
        } catch (error) {
            console.log('Error al crear el ticket:', error);
            throw error
        }
    }
}
