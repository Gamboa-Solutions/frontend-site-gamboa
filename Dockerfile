# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (ou yarn.lock, se você estiver usando Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
