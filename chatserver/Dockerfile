# Use official Node.js 18 image
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the backend server port
EXPOSE 5001

# Start the server
CMD ["npm", "run", "dev"]
