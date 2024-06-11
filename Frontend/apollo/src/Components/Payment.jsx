// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './payment.css'

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { clientSecret, patientDetails } = location.state || {};
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${patientDetails.firstName} ${patientDetails.lastName}`,
        },
      },
    });

    if (error) {
      setPaymentStatus('Payment failed: ' + error.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment succeeded!');
      } else {
        setPaymentStatus('Payment failed: ' + paymentIntent.status);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="payment-form">
        <CardElement className="card-element" />
        <button type="submit" disabled={!stripe} className="pay-button">
          Pay with Card
        </button>
        <div className="payment-status">{paymentStatus}</div>
      </form>
    </div>
  );
}

export default Payment;
