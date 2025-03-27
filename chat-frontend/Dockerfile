# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json first to cache dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose frontend port
EXPOSE 3000

# Run the frontend
CMD ["npm", "run", "dev"]
