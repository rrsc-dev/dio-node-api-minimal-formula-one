import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
    {
        id: 1,
        name: "Time 1",
        base: "País A"
    },
    {
        id: 2,
        name: "Time 2",
        base: "País B"
    },
    {
        id: 3,
        name: "Time 3",
        base: "País C"
    }
];

const drivers = [
    {
        id: 1,
        name: "Um piloto 1",
        team: "Time 1"
    },
    {
        id: 2,
        name: "Um piloto 2",
        team: "Time 2"
    },
    {
        id: 3,
        name: "Um piloto 3",
        team: "Time 3"
    }
];

server.get("/teams", async ( request, response ) => {
    response.type("application/json").code(200);
    return {
        teams
    }
});

server.get("/drivers", async ( request, response ) => {
    response.type("application/json").code(200);
    return {
        drivers
    }
});

server.listen({ port: 3333 }, () => {
    console.log("server init");
});