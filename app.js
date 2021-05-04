const app           = require('express')();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');
const dotEnv        = require('dotenv');
const axios         = require('axios');


// Models
const testCustomerData = require('./models/testCustomerMock.js');


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
dotEnv.config();


// Variables
var initializeRequestPath = 'https://sandbox-api.iyzipay.com/payment/pay-with-iyzico/initialize'
const port = 3000
let redirectUrlPath;


// TODO: PKI String Algorithm
// Header&Credentials Sandbox iyzico
const configSandbox = {
    headers: {
        'Authorization': 'IYZWS sandbox-Uc8cxE7Y2c1kXdJ7JyiSgkyCSW8m8pth:zsDALTAGC6TxpOE/FMs9TFYy9fM=',
        'Content-Type': 'application/json',
        'x-iyzi-rnd': '123456789'
    }
};


// Payload
var requestBody = {
    locale: testCustomerData[0].locale,
    conversationId: testCustomerData[0].conversationId,
    price: testCustomerData[0].price,
    basketId: testCustomerData[0].basketId,
    paymentGroup: testCustomerData[0].paymentGroup,
    callbackUrl: testCustomerData[0].callbackUrl,
    currency: testCustomerData[0].currency,
    paidPrice: testCustomerData[0].paidPrice,
    enabledInstallments: testCustomerData[0].enabledInstallments,
    buyer : {
        id: testCustomerData[0].buyer.id,
        name: testCustomerData[0].buyer.name,
        surname: testCustomerData[0].buyer.surname,
        identityNumber: testCustomerData[0].buyer.identityNumber,
        email: testCustomerData[0].buyer.email,
        gsmNumber: testCustomerData[0].buyer.gsmNumber,
        registrationAddress: testCustomerData[0].buyer.registrationAddress,
        city: testCustomerData[0].buyer.city,
        country: testCustomerData[0].buyer.country,
        ip: testCustomerData[0].buyer.ip
    },
    shippingAddress : {
        address: testCustomerData[0].shippingAddress.address,
        contactName: testCustomerData[0].shippingAddress.contactName,
        city: testCustomerData[0].shippingAddress.city,
        country: testCustomerData[0].shippingAddress.country
    },
    billingAddress : {
        address: testCustomerData[0].billingAddress.address,
        contactName: testCustomerData[0].billingAddress.contactName,
        city: testCustomerData[0].billingAddress.city,
        country: testCustomerData[0].billingAddress.country
    },
    basketItems: [
        {
            id: testCustomerData[0].basketItems[0].id,
            price: testCustomerData[0].basketItems[0].price,
            name: testCustomerData[0].basketItems[0].name,
            category1: testCustomerData[0].basketItems[0].category1,
            itemType: testCustomerData[0].basketItems[0].itemType
        }
    ]
}


// POST
axios.post(initializeRequestPath, requestBody, configSandbox)
.then(res=> {
    redirectUrlPath = res.data.payWithIyzicoPageUrl;
})
.catch(function (error) {
    console.log(error);
});


// Redirect
app.get('/', (req, res) => {
  res.redirect(redirectUrlPath)
})


app.listen(port)