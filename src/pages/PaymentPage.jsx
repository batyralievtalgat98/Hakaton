import React from 'react';
import PaymentForm from '../components/payment/PaymentForm';
import './payment.css'

const PaymentPage = () => {
  return (
    <div className='payment' id='paymentt'>
      Payment Page
      <PaymentForm/>
    </div>
  );
};

export default PaymentPage;