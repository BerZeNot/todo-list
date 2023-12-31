# todo-list

Simple to do list API REST developed using NodeJS, Express and MySQL.

## How to run the project?
To run the API you need a MYSQL instance running and need to create the project database.
You can find the database creation script at '/todo-list/db/db-create.sql'.

Having the database created and runnig, you need to configure the database credentials on .env file.
Use the file /todo-list/backend/.env.example as a template to create your own .env file. You'll need to 
provide these informations:

```
MYSQL_HOST={ip-or-localhost}
MYSQL_USER={mysql-user}
MYSQL_PASSWORD={password}
MYSQL_DB=todolist
```

Open your terminal, browse to the folder /todo-list/backend and run the command:

```bash
npm run start
```

## Endpoints:

### List all tasks
To list all saved tasks, send a GET request to /tasks


### Save a task
To save a task, send a POST request to /tasks with the following body:

```json
{
  "title": "Some title to the task"
}
```
If you don't send any text or an empty text, you'll receive a "bad request" 
status code with a message explaining what's wrong with the payload.


### Update task
To update an existing task, send a PUT request to /tasks/{id} with this payload:

```json
{
  "title": "Some title to tasks",
  "status": "PENDENTE"
}
```

or
```json
{
  "title": "Some title to tasks",
  "status": "CONCLUIDO"
}
```

Here, as mentioned before, if you don't send or send any empty parameters, you will get a "Bad Request" 
explaining what is wrong with the payload. It is worth remembering that the only accepted values 
for the “status” parameter are “PENDENTE” and “CONCLUIDO” (in uppercase).


### Delete task
To delete a task you only need to send a DELETE request to /tasks/{id}.
