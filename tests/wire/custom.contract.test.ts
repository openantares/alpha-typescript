import { AlphaClient } from "../../src/Client";
import { mockServerPool } from "../mock-server/MockServerPool";

describe("Alpha API contract", () => {
    it("sends the bearer token and explicit vault scope", async () => {
        const server = mockServerPool.createServer();
        const client = new AlphaClient({
            environment: server.baseUrl,
            maxRetries: 0,
            token: "alpha_test_key",
        });

        server
            .mockEndpoint()
            .post("/v1/tools/search_knowledge")
            .header("authorization", "Bearer alpha_test_key")
            .jsonBody({ query: "Eduardo", vault: "vault_azzas" })
            .respondWith()
            .statusCode(200)
            .jsonBody({ data: [{ id: "person_eduardo", name: "Eduardo Maia" }] })
            .build();

        const response = await client.knowledge.searchKnowledge({
            query: "Eduardo",
            vault: "vault_azzas",
        });

        expect(response.data).toEqual([{ id: "person_eduardo", name: "Eduardo Maia" }]);
    });

    it("sends named task owners without the retired side field", async () => {
        const server = mockServerPool.createServer();
        const client = new AlphaClient({
            environment: server.baseUrl,
            maxRetries: 0,
            token: "alpha_test_key",
        });

        server
            .mockEndpoint()
            .post("/v1/tools/add_task")
            .header("authorization", "Bearer alpha_test_key")
            .jsonBody({
                title: "Confirm launch owner",
                vault: "vault_northstar",
                assigneeName: "Jordan Lee",
            })
            .respondWith()
            .statusCode(200)
            .jsonBody({ data: { identifier: "NS-9" } })
            .build();

        const response = await client.actions.addTask({
            title: "Confirm launch owner",
            vault: "vault_northstar",
            assigneeName: "Jordan Lee",
        });

        expect(response.data).toEqual({ identifier: "NS-9" });
    });
});
