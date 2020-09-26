import 'mocha';
import { test } from './setup';
import { expect } from 'chai';
import { addMessage, makeUppercase } from '../src';
import { db } from '../src/firestore';

after(async () => {
  test.cleanup();
})
describe("onRequest", () => {
  it("addMessage", done => {
    const req: any = { query: {text: 'input'} };
    const res: any = {
      redirect: (code, url) => {
        expect(code).equal(303);
        const expectedRef = new RegExp('messages/');
        expect(expectedRef.test(url)).true;
        done();
      }
    };
    addMessage(req, res);
  })
})
describe("onFirestore", () => {
  it("makeUppercase", async () => {
    const snap = test.firestore.makeDocumentSnapshot({ text: "input" }, 'messages/11111');
    const wrapped = test.wrap(makeUppercase);
    await wrapped(snap)
    const createdSnap = await db.collection('messages').doc('11111').get();
    expect(createdSnap.data()!.text).equal('INPUT');
  })
})
