#!/bin/bash

# Create the database
createdb astrowellness

# Run Prisma migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

echo "Database initialization complete!" 