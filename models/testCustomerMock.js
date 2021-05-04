let testCustomerMock = [
    {
        locale: "en",
        conversationId: "123456789",
        price: "10.91",
        basketId: "basketID",
        paymentGroup: "OTHER",
        callbackUrl: "https://webhook.site/ad1e4b23-d1f1-473f-a1fd-795bacf63f98",
        currency: "TRY",
        paidPrice: "1.91",
        enabledInstallments: [
            2,
            3,
            6,
            9,
            12
        ],
        buyer: {
            id: "buyerID",
            name: "buyerName",
            surname: "buyerSurname",
            identityNumber: "11111111111",
            email: "email@email.com",
            gsmNumber: "+905350000000",
            registrationAddress: "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
            city: "Istanbul",
            country: "Turkey",
            ip: "85.34.78.112"
        },
        shippingAddress: {
            address: "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
            contactName: "Contact Name",
            city: "Istanbul",
            country: "Turkey"
        },
        billingAddress: {
            address: "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
            contactName: "Contact Name",
            city: "Istanbul",
            country: "Turkey"
        },
        basketItems: [
            {
                id: "ItemID",
                price: "10.91",
                name: "product Name",
                category1: "Category Name",
                itemType: "PHYSICAL"
            }
        ]
    }
]

module.exports = testCustomerMock;