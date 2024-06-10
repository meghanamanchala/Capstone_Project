const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, 
            currency: 'inr',
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
