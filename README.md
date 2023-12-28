# Supercom Task Frontend

A responsive web application to manage tasks.

## Prerequisites

Before running the project, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/HenriqueKleinberger/supercom-task-front.git
   ```

2. Navigate to the project directory:

   ```bash
   cd supercom-task-front
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Environment Configuration

In this exercise project, the `.env` file is committed to the repository for simplicity. In a production environment, it's recommended to keep sensitive information, such as API keys or environment-specific configurations, out of version control. Ensure that you handle sensitive information securely in real-world applications.

## The project

This project uses Redux for state management, Styled Components for CSS-in-JS, and Redux Toolkit Query to connect with the database. Additionally, it utilizes a middleware to log API errors on a toast component.

## Data Management with Redux Toolkit Query (RTK Query)

This project leverages Redux Toolkit Query for efficient data fetching and management. RTK Query is used for CRUD operations in the database. Here's how it works:

- **GET Operation:**

  - Data fetched using GET operations is cached for improved performance.
  - Subsequent requests for the same data are served from the cache without making additional network requests.

- **Mutations:**
  - Each mutation (create, update, delete) automatically invalidates the cache associated with the affected data.
  - After a mutation, a fresh fetch is required to update the data in the cache.

This approach ensures that the application stays in sync with the backend data while optimizing network requests by utilizing a cache for read operations.
