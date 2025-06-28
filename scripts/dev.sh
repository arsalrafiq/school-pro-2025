#!/bin/bash
# Run Next.js and API server concurrently
npx concurrently "npm run dev" "npm run api:dev" 