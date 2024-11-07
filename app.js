const http = require("http");
const { type } = require("os");
const { json } = require("stream/consumers");
const taskRoutes = require("./routes/taskRoutes");

const HOSTNAME ="localhost"
const PORT = 9000
const server = http.createServer( (req, res) => {
if ( req.url.startsWith('/tasks')){
    taskRoutes(req, res)
} else{
    res.writeHead(404, 'NOT FOUND',{ 'content-type': 'application/json'
    } )
    res.end(JSON.stringify({
        message: 'Sorry , you got lost!'

    }))
}

});

server.listen(PORT, HOSTNAME, () => {
    console.log('server running on port ${PORT}')
})