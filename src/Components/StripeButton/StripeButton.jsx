import React from "react";
import StripeCheckout from "react-stripe-checkout";
export default function StripeButton({ price }) {
  const stripePrice = price * 100;
  const publicKey = "pk_test_TeTxwavklHr79V5vrO6geXCB00kc1x8R5m";
  const onToken = token => {
    alert("Payment Successful!");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay now!"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is ${price} INR`}
        amount={stripePrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publicKey}
      />
    </div>
  );
}
