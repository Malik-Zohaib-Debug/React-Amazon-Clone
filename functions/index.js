/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const { AppPlatform } = require("firebase-admin/lib/project-management/app-metadata");
const stripe = require("stripe")("sk_test_51NUNAEJSNRgGQEtYub6Foc7rlZI9L4kMU3VsCnHlnyyw014YCI43gsd26FomPCoAUowk2FY9KCQBqa411jBDygDC00dX3YPt9Z")

//API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send
("Hello World"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount ->>> ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, 
        currency: "usd",
    })

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
,    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/clone-fc822/us-central1/api