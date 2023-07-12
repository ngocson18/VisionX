export const environment = {
    production: false,
    firebase: {
      apiKey: "AIzaSyCDJbUcMUAlpjiuMRYXW8HuZg9eMFK45h0",
      authDomain: "base-no-be.firebaseapp.com",
      projectId: "base-no-be",
      storageBucket: "base-no-be.appspot.com",
      messagingSenderId: "588926697223",
      appId: "1:588926697223:web:87daa2fc3c57197d778fa2",
      measurementId: "G-3ZHXGM7X0J"
    },
    locales: [
      'en'
    ],
    localeDefault: 'en',
    apiServer: {
      host: 'localhost',
      ssl: false,
      port: '3000',
      prefix: 'api',
      url: 'localhost',
      paths: {
        user: {
          list: 'users',
        },
        conversation: {
          list: 'conversation',
          listByUserId: 'conversation/participant',
        }
      }
    }
  };
  