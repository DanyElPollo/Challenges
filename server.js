const manejoTexto = require('./logica/encrip-desenc');
const express = require('express');
const app = express();

app.use(express.static('public_html'));

app.use(express.json());

app.post('/mi-back', async (req, res) => {
    const opcion = req.body.opcion;
    const texto = req.body.texto;
    if (texto == "") {
        res.status(400).json({ error: "No se encontró frase para encriptar/desencriptar." });
    } else {
        const text = await  manejoTexto(opcion, texto);
        res.json({ text:text}); 
    }
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});