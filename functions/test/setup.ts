import * as firebaseFunctionsTest from 'firebase-functions-test';
import * as path from 'path';

const config = {
  databaseURL: 'https://fir-sandbox-5ed2d.firebaseio.com',
  storageBucket: 'fir-sandbox-5ed2d.appspot.com',
  projectId: 'fir-sandbox-5ed2d',
};

export const test = firebaseFunctionsTest(config, path.join(__dirname, '../../.credentials/serviceAccountKey.json'));

process.on('unhandledRejection', (err) => {
  console.error('UnhandledRejection', err);
  process.exit(1);
})
