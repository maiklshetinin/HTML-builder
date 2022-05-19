const fs = require('fs');
const path = require('path');
const process = require('node:process');
const { stdin, stdout } = process;
const readline = require('readline');


fs.writeFile(
    path.join(__dirname, 'text.txt'),
    '',
    (err) => {
        if (err) throw err;
    }
);

//----------------------------------------------

stdout.write('Enter your string:\n');

stdin.on('data', data => {


    if(data.toString().trim()==='exit'){
        console.log('Good bye!')
        process.exit()    
    }
    
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        data,
        err => {
            if (err) throw err;
        }
    ); 
}

);

process.on('SIGINT',()=>{
    console.log('Good bye!')
    process.exit()
})