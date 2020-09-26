// import { test } from './setup';
import { expect } from 'chai';
import { helloWorld } from '../src/index';

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
})
