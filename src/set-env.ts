// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require("dotenv").config();

import { argv } from "yargs";
import { writeFile, mkdir } from "fs";

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
let key: any = process.env.FIREBASE_KEY || null;
const targetPath = `./src/environments/environment.ts`;
const directoryPath = `./src/environments`;
const isProd = environment === "prod";
console.log(key);

if (!key && (argv.key !== "" || argv.key != null || argv.key !== undefined)) {
  key = argv.key;
}

const envConfigFile = `
export const environment = {
  production: ${isProd},
  firebase: {
    apiKey: '${key}',
    authDomain: 'portfolio-a8df4.firebaseapp.com',
    databaseURL: 'https://portfolio-a8df4.firebaseio.com',
    projectId: 'portfolio-a8df4',
    storageBucket: 'portfolio-a8df4.appspot.com',
    messagingSenderId: '924371232404',
    appId: '1:924371232404:web:ff5d898070c2426d'
  }
};
`;

mkdir(directoryPath, "0777", (err) => {
  if (err) {
    console.log(err);
  }
});

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
