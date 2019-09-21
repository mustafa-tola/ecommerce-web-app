import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log('Stripe Token', token);
};

const Purchase = ({
 price, title, children, ...props
}) => (
  <StripeCheckout
    name="ShoeStore@appbase.io"
    description={title}
    token={onToken}
    amount={price * 100}
    stripeKey={'pk_test_PpMOSRv99A4JjhJS8sSCXZHF008uFzBKBw'}
  >
    {children || <span {...props}>PURCHASE</span>}
  </StripeCheckout>
);

export default Purchase;