## Description
A simple example using `worker_threads` module of Node.js

## Running project
**On local machine:**
1. Install dependencies: `npm install`
2. Running project: `npm start`

**On Docker container:**

1. Build image: `docker build -t worker_job:latest .`
2. Running container: `docker run --rm -it  worker_job:latest`

## Context
Each worker thread is started with a random sleeping time, in the log you will see the start and end of each one
