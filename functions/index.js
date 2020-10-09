const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe =  require("stripe")
('sk_test_51HPzK2DxfYMrUwHIg9aqyfz6uruc69tqc2dkCpPeTe0XMwxp8cXgE983dRaBowPcfZUZ6k3Yn7g1kIJbwbCiybBQ00SZTZM7hh')
//api
// App config
const app = express();
//Middlewares
app.use(cors({origin: true}))
app.use(express.json());

//Api roots
app.get('/',(request, response) => response.status(200).send('hello,world'))

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this amount >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    });
})

//listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-3c651/us-central1/api