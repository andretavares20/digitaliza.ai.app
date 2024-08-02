const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');
const app = express();

mercadopago.configurations.setAccessToken('TEST-1802293093399013-073020-58d6f180c111cec266dbde7ffa2c1452-511926509');

app.use(cors());

app.get('/create_preference', (req, res) => {
    let preference = {
        items: [
            {
                title: 'Meu produto',
                quantity: 1,
                unit_price: 25.00
            }
        ],
        back_urls: {
            success: 'http://localhost:4200',
            failure: 'http://localhost:4200/notfound',
            pending: 'http://localhost:4200/admin/pedidos'
        },
        auto_return: 'approved',
    };

    mercadopago.preferences.create(preference)
        .then(response => {
            res.json({ preferenceId: response.body.id });
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});