import * as firebaseFunctionsTest from 'firebase-functions-test';

export const test = firebaseFunctionsTest();

process.on('unhandledRejection', (err) => {
  console.error('UnhandledRejection', err);
  process.exit(1);
})
