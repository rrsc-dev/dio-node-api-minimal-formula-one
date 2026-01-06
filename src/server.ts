import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
    { id: 1, name: "Oracle Red Bull Racing", base: "United Kingdom" },
    { id: 2, name: "Mercedes-AMG PETRONAS", base: "United Kingdom" },
    { id: 3, name: "Scuderia Ferrari", base: "Italy" },
    { id: 4, name: "McLaren Formula 1 Team", base: "United Kingdom" },
    { id: 5, name: "Aston Martin Aramco", base: "United Kingdom" },
    { id: 6, name: "BWT Alpine F1 Team", base: "France" },
    { id: 7, name: "Williams Racing", base: "United Kingdom" },
    { id: 8, name: "Visa Cash App RB", base: "Italy" },
    { id: 9, name: "Stake F1 Team Kick Sauber", base: "Switzerland" },
    { id: 10, name: "MoneyGram Haas F1 Team", base: "United States" },
    { id: 11, name: "Lotus F1 Team", base: "United Kingdom" },
    { id: 12, name: "Renault DP World", base: "France" },
    { id: 13, name: "Racing Point", base: "United Kingdom" },
    { id: 14, name: "Force India", base: "United Kingdom" },
    { id: 15, name: "AlphaTauri", base: "Italy" },
    { id: 16, name: "Alfa Romeo Racing", base: "Switzerland" },
    { id: 17, name: "Toro Rosso", base: "Italy" },
    { id: 18, name: "Benetton Formula", base: "United Kingdom" },
    { id: 19, name: "Jordan Grand Prix", base: "United Kingdom" },
    { id: 20, name: "Tyrrell Racing", base: "United Kingdom" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Oracle Red Bull Racing" },
    { id: 2, name: "Sergio Perez", team: "Oracle Red Bull Racing" },
    { id: 3, name: "Lewis Hamilton", team: "Mercedes-AMG PETRONAS" },
    { id: 4, name: "George Russell", team: "Mercedes-AMG PETRONAS" },
    { id: 5, name: "Charles Leclerc", team: "Scuderia Ferrari" },
    { id: 6, name: "Carlos Sainz", team: "Scuderia Ferrari" },
    { id: 7, name: "Lando Norris", team: "McLaren Formula 1 Team" },
    { id: 8, name: "Oscar Piastri", team: "McLaren Formula 1 Team" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin Aramco" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin Aramco" },
    { id: 11, name: "Pierre Gasly", team: "BWT Alpine F1 Team" },
    { id: 12, name: "Esteban Ocon", team: "BWT Alpine F1 Team" },
    { id: 13, name: "Alexander Albon", team: "Williams Racing" },
    { id: 14, name: "Logan Sargeant", team: "Williams Racing" },
    { id: 15, name: "Daniel Ricciardo", team: "Visa Cash App RB" },
    { id: 16, name: "Yuki Tsunoda", team: "Visa Cash App RB" },
    { id: 17, name: "Valtteri Bottas", team: "Stake F1 Team Kick Sauber" },
    { id: 18, name: "Zhou Guanyu", team: "Stake F1 Team Kick Sauber" },
    { id: 19, name: "Nico Hulkenberg", team: "MoneyGram Haas F1 Team" },
    { id: 20, name: "Kevin Magnussen", team: "MoneyGram Haas F1 Team" }
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

interface RouteParams {
    id: string;
}

server.get<{Params: RouteParams}>("/drivers/:id", async ( request, response) => {
    const id = Number(request.params.id);
    const driver = drivers.find( driver => driver.id === id);

    if (!driver) {
        response.type("application/json").code(404);
        return {
            message: "Driver not found"
        }
    }

    response.type("application/json").code(200);
    return {
        driver
    }
});

server.listen({ port: 3333 }, () => {
    console.log("server init");
});