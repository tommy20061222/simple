import {Server} from "hapi";

const server = new Server();

const port = process.env.PORT || 8080;

server.connection({port});

// main ==========================================
server.route({
    method: 'GET',
    path:'/',
    handler: function (request: any, reply: any) {
        return reply('Welcome to the API');
    }
});

server.start((err: any) => {
    if (err) { throw err; }
    console.log('Server running at:', port);
});