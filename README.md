!["Taskio"](./docs/media/taskio.png)

# What is this?

Taskio is a solution to the never-ending problem of procrastination. It uses multiple powerful techniques such as: timeboxing, and SMART goals to ensure you actually get things done.

### Features

- Project/Task Management - Create projects, add tasks, and organize them into sections
- Multiple views - list view, and kanban view (Not yet implemented)
- Timebox - Put a task into the timebox and it will auto-start a countdown to finish it by! (Not yet implemented)
- Checklists - Break down tasks into smaller items by adding a checklist

### Can I just try it?

Yeah! It's definitely not stable yet but you should be able to get it up and running. Just expect to encounter some bugs and app-breaking errors. Read below on how to set it up on your machine.

## Setup

DISCLAIMER - These instructions have only been used on linux (as of yet), please understand it might not work on your system.

##### Pre-Req's

[Node](https://nodejs.org/en/download/)
npm (Installed alongside node) _or_ [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

##### Steps

1. Clone the directory into a folder you'd like
   - `git clone git@github.com:AWash227/taskio.git`
2. Change directory into ./taskio
   - `cd ./taskio`
3. Install required node_modules into both directories (npm, yarn)
   - npm - `cd ./server && npm install && cd ../client && npm install`
   - yarn - `cd ./server && yarn install && cd ../client && yarn install`
4. [Install](https://docs.mongodb.com/manual/installation/) and boot up mongodb on port 27017 in another terminal
   - Ubuntu - `sudo systemctl start mongod`
   - Check the mongodb docs for how to start it on your system
5. Go back to your other terminal and cd into the server directory and run the 'dev' script (npm, yarn)
   - npm - `cd ../server && npm run dev`
   - yarn - `cd ../server && yarn dev`
6. ...
7. Profit?

#### Tech Stack:

- Back End
  - Express
  - Mongoose
  - MongoDB
  - Node.js
- Front End
  - React
  - Sass / SCSS
  - Storybook
