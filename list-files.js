const fs = require('fs');
const path = require('path');

function listFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.bolt') {
        listFiles(filePath, fileList);
      }
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const projectFiles = listFiles('.');
console.log('Project files:');
projectFiles.forEach(file => console.log(file));