import { prismaClient } from "db/client";

Bun.serve({
    port: 8000,
    fetch(req, server) {
        if (server.upgrade(req)) {
            return ;
        }
        return new Response("Upgrade failed ", { status : 500 });
    },
    websocket: {
        message(ws : any , message : any ) {
            prismaClient.user.create({
                data : {
                    username : new Date().getTime() + "  " + new Date().getMilliseconds,
                    password : "with websockets"
                }
            })
            ws.send(message);
        }
    }
})
