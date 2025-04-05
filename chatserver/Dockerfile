# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose backend port
EXPOSE 5001

# Start the server
CMD ["npm", "run", "dev"]
