#!/bin/bash

# Start PostgreSQL service
brew services start postgresql

# Wait for PostgreSQL to start
sleep 5

# Create the database
createdb astrowellness

# Run Prisma migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

echo "PostgreSQL started and database initialized!" 