const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process'); // Pour exécuter le script Python

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/receive-data', (req, res) => {
    const detection = req.body.detection;

    exec(`python3 moteur.py ${detection}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Erreur d'exécution: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }

        console.log({
          status: "OK",
          received: detection,
          output: stdout.trim()
        });
        res.json({ status: "OK", received: detection, output: stdout.trim() });
    });
});


// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
