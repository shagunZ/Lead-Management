//this is for stripe

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51O4OycSDlAtgNkuDLrtsY265RsSKMAwcWrcS7sx904wlMJU8sEV5ikHgknH7cD0TBKVwzat1JaJXJD9bq9tsDzkR006DrAndd7');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1O4PCISDlAtgNkuDu5TEe4FE',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));