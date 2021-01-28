import express from 'express'
import chatbot from '../src/controllers/chatbot.controller'
const router = express.Router()

router.post('/webhook', chatbot.webhook);

module.exports = router;