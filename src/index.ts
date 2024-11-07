import Fastify from "fastify";
import routes from "./routes/index.js";

const fastify = Fastify({
	logger: true,
});

fastify.register(routes);

fastify.listen({ port: 3333 }, (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
