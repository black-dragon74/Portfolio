# Define the source image to use
FROM alpine

# Installed required stuff
RUN apk --no-cache add --update nodejs npm

# Set the active work directory
WORKDIR /root/portfolio

# Copy the items from local storage to WORKDIR
COPY . ./

# Finally, run the launch CMD
RUN chmod a+x /root/portfolio/launch.sh

# Execute
CMD ["/root/portfolio/launch.sh"]
