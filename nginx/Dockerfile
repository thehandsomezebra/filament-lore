FROM nginx

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static HTML files
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
