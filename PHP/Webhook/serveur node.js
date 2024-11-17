const express = require('express');
const app = express();
const port = 1700;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/webhook', (req, res) => {
    console.log('=== WEBHOOK REÇU ===');
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Body brut:', req.body);
    console.log('Body notif:', req.body.notif);
    
    try {
        let webhookData;
        
        // Si c'est déjà un objet JSON
        if (typeof req.body === 'object' && req.body !== null) {
            webhookData = req.body;
        }
        // Si c'est une chaîne dans notif
        else if (req.body.notif) {
            webhookData = JSON.parse(req.body.notif);
        }
        // Si c'est une chaîne directe
        else if (typeof req.body === 'string') {
            webhookData = JSON.parse(req.body);
        }

        console.log('Données parsées:', JSON.stringify(webhookData, null, 2));
        
    } catch (error) {
        console.error('Erreur détaillée:');
        console.error('Type de req.body:', typeof req.body);
        console.error('Contenu de req.body:', req.body);
        console.error('Erreur:', error.message);
    }

    res.status(200).json({ message: 'Webhook received' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});