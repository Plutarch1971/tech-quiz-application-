// client/src/_tests_/global.d.ts

declare namespace NodeJS {
    interface Global {
      fetch: jest.Mock;
    }
  }
  
  declare var global: NodeJS.Global & typeof globalThis;