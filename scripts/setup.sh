#!/bin/bash

# Install dependencies
npm install --legacy-peer-deps \
  @prisma/client \
  @tanstack/react-query \
  @trpc/client \
  @trpc/react-query \
  @trpc/server \
  chart.js \
  react-chartjs-2 \
  framer-motion \
  react-calendar \
  d3 \
  moment \
  socket.io-client \
  next-auth \
  @stripe/stripe-js \
  @sendgrid/mail \
  react-speech-recognition \
  react-toastify \
  react-table \
  react-pdf \
  react-share \
  tensorflow \
  @tensorflow/tfjs

# Install dev dependencies
npm install --save-dev --legacy-peer-deps \
  @types/react \
  @types/node \
  typescript \
  prisma \
  @types/d3 \
  @types/moment

# Initialize Prisma
npx prisma init

# Generate Prisma client
npx prisma generate

echo "Setup complete!" 