import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import creds from "./creds.js";

export default function dbConnect(){

    initializeApp({
        credential: cert(creds)
    })
    
    return getFirestore();
}