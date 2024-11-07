const fs = require('fs');
const { json } = require('node:stream/consumers');
const path = require('path');
const filepath ='/data/tasks.json';

exports.WriteTasksTofile =(tasks) =>{
    fs.writeFileSync(filepath, JSON.stringify(tasks));{

    }
exports.readTasksFromFile =() =>{
    if (!fs.existsSync(filepath)) {
        this.WriteTasksTofile([])
    }
    const data = fs.readFileSync(filepath);
    return json.parse(data)

}


}

request