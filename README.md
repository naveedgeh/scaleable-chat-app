# Scalable Chat Application

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [What is Turbo.build?](#what-is-turbobuild)
- [Features](#features)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Real-time Communication](#real-time-communication)
- [Redis Caching](#redis-caching)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a scalable chat application built using Turbo, Node.js, Next.js, Socket.io, and Redis. The application allows users to engage in real-time conversations, making it suitable for various chat scenarios, including group chats and private messages.

## Technologies Used
- **Node.js**: JavaScript runtime built on Chrome's V8 engine for building scalable network applications.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Socket.io**: Enables real-time, bidirectional communication between clients and servers.
- **Redis**: In-memory data structure store used for caching and session management.
- **Turbo.build**: A high-performance framework for building modern web applications.

## What is Turbo.build?
Turbo.build is a modern framework designed to optimize and accelerate the development of web applications. It focuses on providing fast builds, instant updates, and seamless integration with existing technologies, enhancing the developer experience and application performance.

### How Turbo.build Works
- **Incremental Builds**: Turbo.build speeds up builds by only recompiling the parts of your application that have changed, rather than rebuilding the entire codebase.
- **Live Reloading**: It provides live reloading capabilities during development, allowing you to see changes in real time without a full refresh.
- **Optimized Deployment**: Turbo.build ensures that your application is optimized for production, minimizing load times and improving overall performance.

## Features
- Real-time messaging with Socket.io.
- Group chats and private messaging support.
- User authentication and session management using Redis.
- Responsive user interface built with Next.js.
- Message history retrieval using Redis.
- User presence indication (online/offline status).
- Fast builds and live reloading with Turbo.build.

## Getting Started
### Prerequisites
- Node.js (>=14.x)
- npm or yarn
- Redis server running locally or remotely

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
