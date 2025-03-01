# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the React app using Vite
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the app in production mode
CMD ["serve", "-s", "dist", "-l", "3000"]
