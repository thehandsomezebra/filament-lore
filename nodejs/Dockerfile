FROM node:16-alpine

# Set the working directory
# WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code
COPY server.js .

# Expose the server port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
