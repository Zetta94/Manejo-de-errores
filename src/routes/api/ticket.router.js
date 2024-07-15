import { Router } from "express"
import ticketManager from "../../dao/mongo/ticket.service.js"

const router = Router()
const manager = new ticketManager()

router.post('/', async (req, res) => {
    try {
        const {code, amount, purchase} = req.body
        const status = await manager.newTicket(code, amount, purchase)
        console.log(status)
        res.status(status.code).json({status: status.status})
    } catch (error) {
        res.status(500).json({ error: `Server error: ${error}` })
    }
    
})

export default router