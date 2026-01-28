import time
import board
import sys
from adafruit_motorkit import MotorKit

kit = MotorKit(i2c=board.I2C())

# Vérifier l'argument passé
if len(sys.argv) > 1:
    commande = sys.argv[1]

    if commande == "carton":
        print("🟩 Carton détecté!")  # Afficher "carton détecté" dans la console
        kit.motor1.throttle = 1.0  # Mettre le moteur à pleine vitesse
        
    else:
        print("❌ Commande inconnue.")
        kit.motor1.throttle = 0  # Arrêter le moteur
else:
    print("⚠️ Aucune commande reçue.")
