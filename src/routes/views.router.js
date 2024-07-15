import { Router } from 'express'
import { isAuthenticated, isNotAuthenticated } from '../middleware/auth.js'
import ticketManager from '../dao/mongo/ticket.service.js'

const router = Router()

router.get('/login', isNotAuthenticated, (req, res) => {
    res.render('login')
})

router.get('/register', isNotAuthenticated, (req, res) => {
    res.render('register')
})

router.get('/profile', isAuthenticated, (req, res) => {
    console.log("perfil: ",req.session.user)
    res.render('profile', { user: req.session.user })
})

router.get('/sendTicket',(req,res)=>{
    res.render('ticket',{user : req.session.user})
})


export default router