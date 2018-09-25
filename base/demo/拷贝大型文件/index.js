const fs = require('fs');

function copyFile(sourcefileName, createFileName, isCover = true) {
    fs.access(sourcefileName, err => {
        if (!err) {
            fs.access(createFileName, err => {
                if(err || isCover){
                    const sfileStrem = fs.createReadStream(sourcefileName);
                    const cfileStrem = fs.createWriteStream(createFileName);
                    sfileStrem.on('data', chunck => {
                        cfileStrem.write(chunck);
                    });
                }else{
                    console.log('新文件名已存在');
                }
            })
        }
    });
}
copyFile('./base/demo/拷贝大型文件/test1.txt', './base/demo/拷贝大型文件/test2.txt', false);