import {Server} from "hapi";
import {expect} from 'chai';

describe('app.ts', () => {
    it('run GET /', async () => {
        const server: Server = new Server();
        server.connection({ port: 8000, host: 'localhost' });

        server.route({
            method: 'GET',
            path:'/',
            handler: function (request: any, reply: any) {
                return reply('Welcome to the API');
            }
        });

        const response = await server.inject({
            url: '/',
            method: 'GET',
        });

        expect(response.statusCode).to.eql(200);
    });
});