import * as functions from 'firebase-functions';
import { db } from './firestore';

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
  const snapshot = await db.collection('/messages').add({ text });
  res.redirect(303, snapshot.path);
});
