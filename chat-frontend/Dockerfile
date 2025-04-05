# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose frontend port
EXPOSE 5173

# Start the frontend
CMD ["npm", "run", "dev"]
