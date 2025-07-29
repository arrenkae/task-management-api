# Task Management API

A simple backend API for a task management app.

## Setup

1. Make sure you have [Docker](https://www.docker.com/get-started) installed
2. Clone the repo and navigate to the folder

```
git clone https://github.com/arrenkae/task-management-api.git
cd task-management-api
```

3. Buld the docker app

```
docker build -t task-management-api --build-arg PORT=[container_port] .

# you can omit "--build-arg PORT=[container_port]" to use the default port
```

4. Run the docker app

```
docker run -p [host_port]:[container_port] task-management-api

# host_port is the port on your local machine
# container_port is the port on the Docker container (default: 3000)
```
5. Access the API at `http://localhost:[host_port]`

## API endpoints

| route                        | description                        | parameters          |
| ---------------------------- | ---------------------------------- | ------------------- |
| `POST` /tasks                | adds a new task                    | `body`:text, status |
| `PUT` /tasks/:id             | updates status of a task           | `id`, `body`:status |
| `DELETE` /tasks/:id          | deletes task                       | `id`                |
| `GET` /tasks                 | retrieves all tasks                |                     |
| `GET` /tasks?status=[status] | retrieves tasks filtered by status | `query`:status      |

### POST /tasks

#### Request

```
{
    "text": "Do the dishes",
    "status": "in progress"
}
```

#### Response

```
{
    "id": 42,
    "msg":"Task added successfully":
}
```

### PUT /tasks/:id

#### Request

```
{ "status": "completed" }
```

### GET /tasks

#### Response

```
[
    {
        "id": 42,
        "text": "Do the dishes",
        "status": "in progress"
    },
    {
        "id": 43,
        "text": "Throw out trash",
        "status": "in progress"
    },
    {
        "id": 44,
        "text": "Study",
        "status": "in progress"
    },
    {
        "id": 45,
        "text": "Play video games",
        "status": "completed"
    }
]
```

### GET /tasks?status=completed

#### Response

```
[
    {
        "id": 45,
        "text": "Play video games",
        "status": "completed"
    }
]
```

---

### HTTP response status codes

| code  | decription                    |
| ----- | ----------------------------- |
| `201` | Task added                    |
| `200` | OK                            |
| `404` | No task found                 |
| `400` | Bad request                   |
