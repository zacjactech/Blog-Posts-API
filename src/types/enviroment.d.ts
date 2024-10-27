// src/types/environment.d.ts
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PORT: string;
        MONGODB_URI: string;
        // add other env variables you use
      }
    }
  }
  
  export {};