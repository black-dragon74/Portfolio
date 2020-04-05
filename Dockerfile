# Define the source image to use
FROM alpine

# Installed required stuff
RUN apk --no-cache add --update nodejs npm nginx

# Set the active work directory
WORKDIR /root/portfolio

# Copy the package files first, to levverage layered caching
COPY package*.json ./

# Install the NPM deps
RUN npm install --no-optional && npm cache clean --force

# Copy rest of the items from local storage to WORKDIR
COPY . ./

# Build the dist
RUN npm run build

# DEPLOY THE NGINX conf file as default APLINE config returns everything as a 404
RUN cp /root/portfolio/server.conf /etc/nginx/conf.d/default.conf

# Copy built files to NGINX htdocs directory
RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html
RUN chmod 755 /usr/share/nginx/html
RUN cp -rf /root/portfolio/dist/* /usr/share/nginx/html/

# Run the NGINX without the daemon as this is a standalone app
RUN mkdir -p /run/nginx
CMD ["nginx", "-g", "daemon off;"]

# We are done
#EOF
