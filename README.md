# MOCKER

## Description
This project is built with [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/). It utilizes various scripts to manage development, linting, database operations, and more.

## Getting Started

### Prerequisites
- Node.js installed
- Docker (if working with Docker-related scripts)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/installation) installed (for database operations)
- Other dependencies specified in `package.json`

### Installation
1. Clone the repository: `git clone https://github.com/your-username/project-name.git`
2. Navigate to the project directory: `cd project-name`
3. Install dependencies: `npm install`

### Scripts
The project comes with several predefined scripts in the `package.json` file:

- `npm run prestart`: Runs the build process before starting.
- `npm start`: Starts the project using PM2 without running as a daemon.
- `npm run dev`: Starts the project in development mode using Nodemon.
- `npm run lint`: Runs ESLint to check for linting issues.
- `npm run lint:fix`: Runs ESLint with the `--fix` flag to automatically fix linting issues.
- `npm run prettier`: Checks TypeScript files for formatting using Prettier.
- `npm run prettier:fix`: Fixes formatting issues in TypeScript files using Prettier.
- `npm run db:push`: Forces reset and pushes changes to the database (Prisma).
- `npm run db:seed`: Seeds the database using Prisma.
- `npm run db:studio`: Opens Prisma Studio for database management.
- `npm run db:generate`: Generates Prisma client.
- `npm run prepare`: Installs Husky hooks.
- `npm run codegen`: Runs GraphQL code generation based on the `codegen.ts` configuration.
- `npm run build`: Removes the existing build directory, compiles TypeScript files, and copies GraphQL files to the build directory.
- `npm run docker:up`: Starts Docker containers.
- `npm run docker:down`: Stops Docker containers.
- `npm run docker:build`: Builds Docker containers.

### Usage
To run any of the scripts, use the following command in the terminal:
```
npm run <script-name>
```

For example, to start the project in development mode:
```
npm run dev
```

### Notes
- Make sure to configure environment variables as needed for your specific setup.
- Modify the scripts or configuration files according to your project requirements.