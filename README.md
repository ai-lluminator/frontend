# AI/lluminator

## API Documentation

### Links

```text
# GET /api/links

// Headers
Authorization=TOKEN

// Response
{ data: [{ id, url, paper_id, user_id, prompt_id }]}
```

```text
# POST /api/links

// Headers
Authorization=TOKEN

// Body
{ paper_id, paper_url: string, prompt_id, user_id }

// Response
{ data: { id, url, paper_id, user_id, prompt_id }}
```

