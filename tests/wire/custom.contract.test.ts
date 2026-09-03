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
            .jsonBody({ query: "Sample Contact", vault: "vault_example" })
            .respondWith()
            .statusCode(200)
            .jsonBody({ data: [{ id: "person_sample", name: "Sample Contact" }] })
            .build();

        const response = await client.knowledge.searchKnowledge({
            query: "Sample Contact",
            vault: "vault_example",
        });

        expect(response.data).toEqual([{ id: "person_sample", name: "Sample Contact" }]);
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
                vault: "vault_example",
                assigneeName: "Example Owner",
            })
            .respondWith()
            .statusCode(200)
            .jsonBody({ data: { identifier: "EX-9" } })
            .build();

        const response = await client.actions.addTask({
            title: "Confirm launch owner",
            vault: "vault_example",
            assigneeName: "Example Owner",
        });

        expect(response.data).toEqual({ identifier: "EX-9" });
    });
});
