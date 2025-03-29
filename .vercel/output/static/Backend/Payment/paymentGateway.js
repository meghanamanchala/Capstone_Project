const express = require('express');
const stripe = require('stripe')('sk_test_51POxSU05WctnSMfqyB2IHUvSaQ1O2Si1Dk7IWFotfmQm96ekX6Hk1cKwf4TODaHQ55YNKhOkG1U3L5XAFfPNjEJh001kuptBIw'); 
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    try {
      const { amount } = req.body;
  
      if (!amount) {
        return res.status(400).send('Amount is required');
      }
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount*100 ,
        currency: 'inr',
        payment_method_types: ['card'],
      });
  
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
