# Scalable Chat Application

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [What is Turbo.build?](#what-is-turbobuild)
- [What is Socket.io?](#what-is-socketio)
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

## What is Socket.io?
Socket.io is a powerful library that enables real-time, bidirectional communication between web clients and servers. It provides an easy-to-use API for establishing WebSocket connections, which allow for low-latency communication. In this chat application, Socket.io is used to facilitate instant messaging and notifications.

### Key Features of Socket.io
- **Real-time Communication**: Allows clients to send and receive messages instantly without needing to refresh the page.
- **Event-based Communication**: Enables sending and listening for events, which simplifies the handling of different message types.
- **Automatic Reconnection**: Handles connection drops and attempts to reconnect clients automatically.
- **Fallback Options**: If WebSockets are not supported, Socket.io can fall back to other techniques like polling.

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
   git clone https://github.com/naveedgeh/scaleable-chat-app
   cd scaleable-chat-app
