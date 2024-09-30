# syntax=docker/dockerfile:1

FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/node:18.14.0-alpine3.17 as build

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .
RUN yarn build

# CMD [ "yarn", "start" ]

# Use a lightweight production image
FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env
# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]


