const fs = require('fs');
   const archiver = require('archiver');

   const output = fs.createWriteStream('project.zip');
   const archive = archiver('zip', {
     zlib: { level: 9 } // Sets the compression level.
   });

   output.on('close', function() {
     console.log(archive.pointer() + ' total bytes');
     console.log('Archiver has been finalized and the output file descriptor has closed.');
   });

   archive.on('error', function(err) {
     throw err;
   });

   archive.pipe(output);

   // Add files and directories
   archive.directory('.', false);

   archive.finalize();