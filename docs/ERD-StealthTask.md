# StealthTask - Engineering Review Document (ERD)

## Overview
This document explores the design of StealthTask, a to-do website to manage your tasks and projects with simple user interface to stealth your task. 

We'll use a basic client/server architecture, where a single server is deployed on a cloud provider next to a relational database, and serving HTTP traffic from a public endpoint.

## Storage 
Firstly, we'll use a relational database, although we can potentially switch to something with a little more power such as document database in the future.

A minimal relational database implementation such as sqlite3 suffices, but we will use postgresql for more powerful feature, and for learning purposes!

### Entity Relationship Diagram (ERD):
<img align='center' src='./ER-Diagram.png' alt='ERD'>

## Server
We will use a simple HTTP server to handle authentication, serving stored data.

* Node.js will be used to for implementing the server.
* Express.js will be used as a web framework.
* Sequelize will be used as ORM.

### API
**Tasks**:
```
/tasks/     [GET] 
/tasks/     [POST]
/tasks/{id} [GET]
/tasks/{id} [PUT]
/tasks/{id} [DELETE]
```