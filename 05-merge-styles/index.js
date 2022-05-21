const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  fs.writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'),
    '',
    (err) => {
      if (err) throw err;
    }
  );

  files.forEach(file => {
    if (file.isFile() && file.name.split('.')[1] === 'css') {
      fs.readFile(path.join(__dirname, 'styles', file.name), (err, file) => {
        if (err) throw err;

        fs.appendFile(
          path.join(__dirname, 'project-dist', 'bundle.css'),
          file,
          err => {
            if (err) throw err;
          }
        );
      });
    }
  });
});
