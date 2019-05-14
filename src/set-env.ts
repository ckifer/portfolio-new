

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

const fs = require('fs');
const yargs = require('yargs');

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = yargs.argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  firebase: {
    apiKey: '${process.env.FIREBASE_KEY}',
    authDomain: 'portfolio-a8df4.firebaseapp.com',
    databaseURL: 'https://portfolio-a8df4.firebaseio.com',
    projectId: 'portfolio-a8df4',
    storageBucket: 'portfolio-a8df4.appspot.com',
    messagingSenderId: '924371232404',
    appId: '1:924371232404:web:ff5d898070c2426d'
  }
};
`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
