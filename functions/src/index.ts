import * as functions from 'firebase-functions';
import { db } from './firestore';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((_, response) => {
  response.send("Hello from Firebase!");
});

export const createAda = functions.https.onRequest((_, response) => {
  const docRef = db.collection('users').doc('alovelace');
  const setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
  response.json({ setAda });
})
