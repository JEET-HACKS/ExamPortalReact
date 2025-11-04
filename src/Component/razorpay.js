const handlePayment = async () => {
  const order = await fetch('http://localhost:3000/create-order', { method: 'POST' })
    .then(res => res.json());

  const options = {
    key: 'YOUR_KEY_ID',
    amount: order.amount,
    currency: order.currency,
    name: 'My Website',
    description: 'Test Transaction',
    order_id: order.id,
    handler: function (response) {
      alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
    },
    theme: {
      color: '#3399cc'
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};


<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
