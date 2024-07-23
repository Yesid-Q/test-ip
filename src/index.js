const { fastify } = require("fastify");

const server = fastify({ logger: true, trustProxy: true });

server.get("/ip", {}, (req, reply) => {
	const clientIp = req.ip;
	reply.send(`ip address is ${clientIp}`);
});

server
	.listen({ host: "0.0.0.0", port: Number(process.env.PORT ?? "8080") })
	.catch(server.log.error);
