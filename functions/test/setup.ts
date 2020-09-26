import firebaseFunctionsTest from 'firebase-functions-test';
export const test = firebaseFunctionsTest({
  databaseURL: 'https://fir-sandbox-5ed2d.firebaseio.com',
  storageBucket: 'fir-sandbox-5ed2d.appspot.com',
  projectId: 'fir-sandbox-5ed2d',
}, '../../credentials/serviceAccountKey.json');
