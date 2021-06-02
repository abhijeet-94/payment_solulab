const express = require('express');
const router = express.Router();
const Card = require('../models/cards')
const Payment = require('../models/payment')






router.post('/', async (req, res) => {
    try {
        if (req.body.Payment.Type == "boleto") {
            res.status(200).send({ 'boleto_number': 123 })
        }
        if (req.body.Payment.Type == "credit_card") {
            let userCard = Card.Card.filter(ele => {
                return ele.Card_number == req.body.card
            })
            res.status(200).send(userCard)
        }
    } catch (err) {
        res.status(500).send("Something Failed")
    }
})
router.get('/:id', async (req, res) => {
    try {
        console.log(Payment)
        let item=Payment.Payment.filter(ele=>{
            return ele.orderId==req.params.id
        })
        res.send(item);
    } catch (err) {
        res.status(500).send("Something Failed")
    }
})
module.exports = router;