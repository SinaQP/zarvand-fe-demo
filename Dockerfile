# syntax=docker/dockerfile:1

FROM node:18.14.0-alpine3.17

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
