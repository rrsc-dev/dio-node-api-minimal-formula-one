import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/teams", async ( request, response ) => {
    response.type("application/json").code(200);
    return [{
        id: 1,
        name: "Time 1"
    }]
});

server.get("/drivers", async ( request, response ) => {
    response.type("application/json").code(200);
    return [{
        id: 1,
        name: "Um piloto",
        team: "Time 1"
    }]
});

server.listen({ port: 3333 }, () => {
    console.log("server init");
});