Contributing to Mosqueway
We welcome contributions to the Mosqueway project! By contributing, you help us improve and expand the platform. Please take a moment to review this document to ensure a smooth contribution process.

Table of Contents
Code of Conduct

How to Contribute

Reporting Bugs

Suggesting Enhancements

Your First Code Contribution

Pull Request Guidelines

Development Setup

Prerequisites

Cloning the Repository

Installing Dependencies

Running the Applications

Database Setup

Style Guides

Git Commit Messages

Code Style

License

1. Code of Conduct
This project adheres to the mention your Code of Conduct, e.g., Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code.

2. How to Contribute
Reporting Bugs
Ensure the bug hasn't already been reported.

Provide clear and concise steps to reproduce the bug.

Include screenshots or error messages if applicable.

Specify your operating system, browser, and relevant software versions.

Suggesting Enhancements
Clearly describe the proposed feature or enhancement.

Explain why this feature would be useful.

Provide examples or mockups if possible.

Your First Code Contribution
If you're new to the project, consider starting with issues tagged good first issue or help wanted.

Pull Request Guidelines
Fork the repository and create a new branch from dev.

Branch naming convention: feature/your-feature-name or fix/your-bug-description.

Ensure your code adheres to the project's coding style (see Code Style).

Write clear, concise commit messages (see Git Commit Messages).

Test your changes thoroughly.

Update documentation if your changes affect existing functionality or add new features.

Submit your pull request to the dev branch.

Provide a detailed description of your changes in the pull request.

Be responsive to feedback during the review process.

3. Development Setup
Prerequisites
Node.js (LTS version recommended)

npm or Yarn (Yarn is preferred for monorepos)

Git

Docker (for database setup, recommended) or a local PostgreSQL instance.

Cloning the Repository
git clone https://github.com/your-username/mosqueway.git
cd mosqueway

Installing Dependencies
This project uses a monorepo setup (e.g., Yarn Workspaces or Lerna).

# Using Yarn (recommended)
yarn install

# Or using npm
npm install

Running the Applications
Database Setup (Edger - Prisma)
Ensure PostgreSQL is running.

If using Docker: docker-compose up -d postgres (assuming you'll add a docker-compose.yml)

Configure .env files:

Create .env files in apps/api-server and prisma based on .env.example (you'll need to create these example files).

Ensure DATABASE_URL is correctly set to your PostgreSQL connection string.

Run Prisma migrations:

cd prisma
npx prisma migrate dev --name init
# Or for production: npx prisma migrate deploy
cd ..

This will create your database schema.

API Server (Einstein)
cd apps/api-server
yarn dev # or npm run dev

The API server should now be running, typically on http://localhost:3000 (or as configured).

Admin Portal (Leo)
cd apps/admin-portal
yarn dev # or npm run dev

The Admin Portal should now be running, typically on http://localhost:4000 (or as configured).

4. Style Guides
Git Commit Messages
We follow the Conventional Commits specification. Examples:

feat: add user authentication

fix: resolve login redirect bug

docs: update contributing guide

refactor(api): improve error handling

chore: update dependencies

Code Style
We use Prettier and ESLint for code formatting and linting. Ensure your code is formatted correctly before submitting a pull request. Most IDEs have integrations for these tools.

Run yarn lint and yarn format (or npm run lint, npm run format) before committing.

5. License
By contributing your code, you agree to license your contributions under the [mention your project's license] license.
