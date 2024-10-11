# AI/lluminator

## API Documentation

### Papers

```text
# GET /api/papers

// Headers
Authorization=TOKEN

// Response
{ data: [{ id: int, title, summary, paper_url, created_at }]}
```

```text
# POST /api/papers

// Headers
Authorization=TOKEN

// Body
{ paper_url: string, title: string | null, summary: string | null }

// Response
{ data: [{ id: int, title, summary, paper_url, created_at }]}
```

### Links

```text
# GET /api/links

// Headers
Authorization=TOKEN

// Response
{ data: [{ id, public_id, paper_id, user_id, prompt_id }]}
```

```text
# POST /api/links

// Headers
Authorization=TOKEN

// Body
{ paper_id, paper_slug, prompt_id, user_id }

// Response
{ data: { id, url }}
```

