const {IncomingForm} = require('formidable');
const { json } = require("node:stream/consumers");
const { readTasksFromFile, WriteTasksTofile } = require("../utils/fileHandler");
const { request } = require("http");
const { Request } = require("undici-types");
const { error } = require('console');
const { title } = require('process');
const { copyFileSync } = require('fs');

exports.getTasks =(req, res) =>{
    const tasks = readTasksFromFile();
    read.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTask =
( req, res) =>{
    const form =new IncomingForm();
    form.parse(req, (error, fields, files) => {
        if(error){
            res.writeHead(400, {'content-type': 'application/json'})
            res.end(json.stringify({
                message: 'Error passing form'
            }))
            return
        }
        const task =readTasksFromFile()
        const newTask ={
            id: Date.now(),
            title: fields.title,
            description: files?.description || '',
            status: fields.status || 'pending',
            Image: files.Image ? '/uploads/${files.image.name' : null,
        }
        tasks.push(newTask);
        WriteTasksTofile(tasks)
        if(files.Image){
            copyFileSync(files.Image.path, path.join(__dirname, '../uploads' , files.Image.name));
            res.end(JSON.stringify(newTask))
        }
    })
    }

    exports.updateTask =(req, res) =>{
        res.enf(json.stringify({
            message: 'Not yet implemented'
        }))
    }

    exports.DateTask =(req, res) =>{
        res.enf(json.stringify({
            message: 'Not yet implemented'
        }))

    }
    

    