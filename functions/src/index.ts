import * as functions from 'firebase-functions';
import { db } from './firestore';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((_, response) => {
  response.send("Hello from Firebase!");
});

interface Message {
  text: string
}

export const makeUppercase = functions.firestore.document('messages/{pushId}').onCreate((snapshot, context) => {
  const data = snapshot.data() as Message;
  data.text = data.text.toUpperCase();
  return snapshot.ref.set(data)
});

export const addMessage = functions.https.onRequest(async (req, res) => {
  const text = req.query.text;
  const snapshot = await db.collection('/messages').add({original: { text }});
  res.redirect(303, snapshot.path);
});
