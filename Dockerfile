# Use official Node.js image
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the port your API uses
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
