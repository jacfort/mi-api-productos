import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necesario para rutas en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer serviceAccount.json
const serviceAccountPath = path.join(__dirname, "serviceAccount.json");
const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
