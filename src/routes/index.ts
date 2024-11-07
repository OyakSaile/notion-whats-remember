import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default async function routes(fastify: FastifyInstance) {
	fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {
		reply.send({ hello: "world" });
	});
}
