# Reference
## Metadata
<details><summary><code>client.metadata.<a href="/src/api/resources/metadata/client/Client.ts">getApiIndex</a>() -> Alpha.ApiIndexResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.metadata.getApiIndex();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MetadataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.metadata.<a href="/src/api/resources/metadata/client/Client.ts">listTools</a>() -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the live tool catalog and JSON input schemas used by both the REST API and MCP.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.metadata.listTools();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MetadataClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Vaults
<details><summary><code>client.vaults.<a href="/src/api/resources/vaults/client/Client.ts">listVaults</a>() -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the vaults the credential holder may access. If more than one vault is returned, pass the exact vault id to later calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vaults.listVaults();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VaultsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Knowledge
<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">suggestVaultScope</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resolve the minimum safe vault scope from the user's recent conversation, using only this API key holder's authorized vault names, keywords, known people and cached summaries. Call it after list_vaults when the right vault is not explicit. Returns selected vault ids or a focused clarification question; it does not search vault content.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.suggestVaultScope({
    conversation: "conversation"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.SuggestVaultScopeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">searchKnowledge</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search the discovery knowledge base (departments, people, processes, systems, problems, opportunities, KPIs) by name or alias. Returns matching entities with descriptions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.searchKnowledge({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.SearchKnowledgeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getEntity</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one entity in depth: core fields (description, aliases, recency) plus slim deduped graph edges ({entityId, name, type, relation, direction, weight}. weight = number of co-mentions across meetings). Set includeEvidence=true to also get the verbatim quotes (who said it, in which meeting). A conflicts array appears when the evidence contains contradictory claims needing validation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getEntity({
    entityId: "entityId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.GetEntityRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">searchTranscripts</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Semantic search over the meeting transcripts. Returns the most relevant verbatim excerpts with speakers and meeting names.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.searchTranscripts({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.SearchTranscriptsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listMeetings</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the discovery meetings (name, date, attendees, extraction status).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listMeetings();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListMeetingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listCalendar</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Project calendar events, recent (45 days back) and scheduled ahead: title, ISO datetime, a happened flag, attendees, Meet link. Cross with list_meetings (recorded) to distinguish what already happened from what is merely booked.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listCalendar();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListCalendarRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getMeeting</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one meeting: metadata, notes (markdown), and the entities extracted from it (with per-meeting mention counts). use it to answer 'what came out of meeting X'.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getMeeting({
    meetingId: "meetingId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.GetMeetingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listFindings</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Paginated findings inventory. Filters: type, source, meetingId (only entities from that meeting). sort: 'mentions' (default) or 'recent' (by lastMentionedAt). compact=true returns only {id, name, type, mentionCount, lastMentionedAt}. recommended for orientation; fetch details with get_entity. Returns {findings, total, nextCursor}.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listFindings();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListFindingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listTasks</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Action-plan tasks with the full board surface: id (for update_task), board identifier, t-shirt estimate, priority, labels, checklist, due date and milestone. owner "us" = our team, "client" = the counterparty; status "open" = everything not done.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listTasks();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListTasksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listFiles</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the project's PUBLIC files (name, description, download URL). Internal files are never served here. Give the URL to the user as a link when they ask for a file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listFiles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getFile</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one PUBLIC file: metadata, a temporary download URL, and a content excerpt when the file was parsed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getFile({
    fileId: "fileId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.GetFileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listPlanSteps</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The mutual action plan timeline (macro project steps, status, and whether each was proposed by the agent or a person).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listPlanSteps();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListPlanStepsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">changesSince</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

What's new since a given moment: entities first seen after it, entities re-mentioned after it, and new meetings. The natural 'what changed since we last talked' call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.changesSince({
    since: "since"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ChangesSinceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">stats</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cheap orientation: entity counts by type, meetings extracted/total, tasks by status. Call this first to size the knowledge base.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.stats();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.StatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getBrief</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The latest agent-written brief. kind 'daily' (default) is the current 'what's going on' snapshot of the vault; 'weekly-plan' and 'weekly-digest' mirror the Monday plan and Friday digest e-mails. Good second call after stats for orientation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getBrief();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.GetBriefRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getTranscript</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read a meeting transcript sequentially in chunks (complements semantic search). Returns {chunks: [{index, speakers, text}], totalChunks, nextOffset}.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getTranscript({
    meetingId: "meetingId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.GetTranscriptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listConflicts</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Contradictions detected across the evidence: pairs of credible claims about the same entity that cannot both be true (with speakers and meetings). Default shows open ones needing client validation; filter by status or 'all' to see resolved/dismissed history with notes. Use the id with resolve_conflict.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listConflicts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListConflictsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listMilestones</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Project milestones with task tallies (id, title, target date, tasks done/total). Use to resolve milestone ids before add_task/update_task, or to answer 'what's left in milestone X'.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listMilestones();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListMilestonesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">findPerson</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Look someone up in this vault's people registry: name, e-mail, title, organisation. The ONLY authoritative source for an address. never guess one or assume a pattern like first.last@company.com.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.findPerson();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.FindPersonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listSentEmails</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Messages this vault's agent already sent, newest first, with the handles needed to reply INSIDE the same conversation (replyToThreadId, inReplyToMessageId). Pass one back to send_email so a reply threads instead of starting a parallel conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.listSentEmails();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ListSentEmailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">findEmailThread</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search the vault's connected Gmail for an existing conversation, including mail sent before this deployment started logging. Gmail search syntax, e.g. "to:ana@client.com inventory" or "subject:report newer_than:7d". Returns thread ids for send_email's replyToThreadId.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.findEmailThread({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.FindEmailThreadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">findArtifact</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find a file that already exists in this vault: something the agent generated (chart, workbook, CSV, report) or a document a member added. Search by title, newest first. Use it BEFORE rebuilding anything, and to get the artifactId that send_email attaches.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.findArtifact();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.FindArtifactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">searchAgentMemory</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search the agent's OWN past conversations in this vault. e-mail, MCP and portal chat. for what was already asked, answered or decided. This is conversation history, NOT the knowledge base: use search_knowledge or search_transcripts for what was said in meetings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.searchAgentMemory({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.SearchAgentMemoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">expandGraph</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Graph traversal from an entity: depth 1 = its slim edges; depth 2 = neighborhood expansion (capped at 120 edges, second-hop relations prefixed with the intermediate node). Use to explore paths between areas.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.expandGraph({
    entityId: "entityId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ExpandGraphRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Actions
<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">resolveConflict</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Close out a contradiction by id (from list_conflicts): status 'resolved' (validated with the client. say what the truth turned out to be in the note) or 'dismissed' (duplicate, transcription noise, not a real conflict. note why). Passing 'open' reopens one. Requires a manager API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.resolveConflict({
    conflictId: "conflictId",
    status: "resolved"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ResolveConflictRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">addTask</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a task on the vault's board (owner: 'client' = the counterparty, 'us' = our team). Supports the full kanban surface: assignee, t-shirt estimate, priority, labels, checklist, due date and milestone (resolve ids with list_milestones). Requires a manager API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.addTask({
    title: "title",
    owner: "client"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.AddTaskRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">updateTask</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit an existing task. address it by its board identifier (e.g. 'ACME-5', or just 5; the prefix is whatever this vault uses) or by taskId from list_tasks. Fields: status, owner, assignee, t-shirt estimate, priority, labels, checklist, due date, milestone, title, description. Pass null to clear a clearable field (estimate, dueDate, milestoneId, assigneeName, description). Requires a manager API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.updateTask();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.UpdateTaskRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">sendEmail</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an e-mail from the vault agent's mailbox to a VAULT MEMBER or registered stakeholder. Can carry files: pass artifact ids from find_artifact. Can also reply INSIDE an existing thread, or be left as a draft in the connected Gmail account for a person to review and send. Requires a manager API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.sendEmail({
    to: "to",
    subject: "subject",
    body: "body"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.SendEmailRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">exportWorkbook</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Build a styled multi-sheet Excel workbook (.xlsx) from rows you provide, store it in this vault, and return a url plus an artifactId that send_email can attach. Use it when the answer is a table someone will sort, filter or forward. Formatting, freezing and the provenance sheet are automatic. Requires a manager API key, since it stores a file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.exportWorkbook({
    title: "title",
    sheets: [{
            "key": "value"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ExportWorkbookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">exportReport</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a whole dataset from this vault as a file: every finding, or every contradiction, as xlsx, csv or PDF. The only path that produces a PDF. For a table you assembled yourself, use export_workbook. Returns a url and an artifactId that send_email can attach. Requires a manager API key, since it stores a file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.exportReport();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ExportReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">renderChart</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Render a chart PNG from a Vega-Lite v5 spec with the data inline, and store it as an artifact in this vault. Returns a url to embed and an artifactId that send_email can attach. Do not set colors: the vault's theme is applied automatically. Match the mark to the question. anything over time is a line, a ranking is a sorted horizontal bar, part-of-whole is an arc. Requires a manager API key, since it stores a file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.renderChart({
    title: "title",
    vega_lite_spec: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.RenderChartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">scheduleMeeting</a>({ ...params }) -> Alpha.DataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Google Calendar event with a Meet link via the project's connected calendar. Requires a manager API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.scheduleMeeting({
    title: "title",
    startIso: "startIso",
    attendees: ["attendees"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Alpha.ScheduleMeetingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

