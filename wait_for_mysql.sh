#!/bin/bash

echo "Waiting for MySQL to start..."

while ! mysqladmin ping -h127.0.0.1 -P5433 --silent; do
    echo "MySQL is not ready yet. Retrying in 5 seconds..."
    sleep 5
done

echo "MySQL is up and running. Proceeding with Prisma migration..."

# Run your Prisma migration command here
npx prisma migrate dev
