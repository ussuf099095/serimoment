const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'assets');
const baseFiles = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
//   '/assets/favicon.png'
];

const files = fs.readdirSync(directory);
const assetFiles = files.map(file => `/assets/${file}`);

const cacheList = [...baseFiles, ...assetFiles];

console.log("FILES_TO_CACHE = [");
cacheList.forEach(f => console.log(`  '${f}',`));
console.log("];");