const { json } = require("node:stream/consumers");
const { getTasks } = require("../controllers/taskControlles");

const taskRoutes= (req, res) => {
    if (req.method == 'GET') {
        getTasks(req, res );
        
    }
    else if(req.method == 'POST') {
       getTasks(req, res)
    }
    else if ( req.method == 'PATCH'){
        updateTask(req, res)
    }
    else if(req.method == 'DELETE'){
        deleteTask(req, res)
    }
    else {
        res.writeHead(404, 'DATA NOT FOUND',{'content-type': 'application/json'})
        res.end(JSON.stringify({
            message: 'Unknown Method required.'
        }))

    }
}
module.exports = taskRoutes;