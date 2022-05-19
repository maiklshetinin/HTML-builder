const fs = require('fs/promises');
const path = require('path');


(async () => {
    const files = await fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true });

    for (const file of files) {
        if (file.isFile()) {
            const s = await fs.stat(path.join(__dirname, 'secret-folder', file.name))
            console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${s.size}kb`)
        }
    }
})()



