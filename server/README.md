# Docs

There are the two endpoints that can be hit:

- /api/projects
- /api/tasks

## API

### /api/projects

- GET / : Return all Projects w/ tasks as ids
- GET /list : Return all projects w/ minified fields and tasks as ids
- GET /:id : Return a single Project w/ populated (yet minified) tasks

- POST / : Create a project
- PUT / : Update a project completely

- DELETE /:id : Delete a project based on id

### /api/tasks

- GET / : Return all Tasks w/ subtasks and tags as ids
- GET /:id : Return a single task w/ populated tasks and tags

- POST / : Create a task
- PUT / : Update a task completely

- DELETE /:id : Delete a task based on id (Does NOT delete subtasks)
