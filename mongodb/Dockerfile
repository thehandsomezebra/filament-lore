FROM mongo

# Optionally, you can set environment variables for MongoDB configuration
# ENV MONGO_INITDB_ROOT_USERNAME=admin
# ENV MONGO_INITDB_ROOT_PASSWORD=secret

# Create a Docker volume for MongoDB data
VOLUME /data/db

# Copy any initialization scripts or configuration files (if needed)
# COPY init-script.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB when the container launches
CMD ["mongod", "--bind_ip_all"]
