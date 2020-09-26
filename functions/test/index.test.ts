import { test } from './setup';
import { expect } from 'chai';
import { helloWorld, addMessage, makeUppercase } from '../src';
import { db } from '../src/firestore';

after(() => {
  test.cleanup();
})
describe("onRequest", () => {
  it("helloWorld", done => {
    const req: any = {}
    const res: any = {
      send: (body: string) => {
        expect(body).equal("Hello from Firebase!");
        done();
      }
    }
    helloWorld(req, res);
  });
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
