# Define the source image to use
FROM nginx:stable-alpine

# Installed required stuff
RUN apk --no-cache add --update nodejs npm

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

# Copy built files to NGINX htdocs directory
RUN rm -rf /usr/share/nginx/html/*
RUN cp -rf /root/portfolio/dist/* /usr/share/nginx/html/

# We are done
#EOF
