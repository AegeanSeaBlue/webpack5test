const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, '../src/env.json'), JSON.stringify(process.env), (err) => {
  if (err) throw err;
  console.log('The ENV file has been saved!');
});
