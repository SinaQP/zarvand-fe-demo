FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/node:18.14.0-alpine3.17 as build

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

ARG VITE_APP_BACKEND
ENV VITE_APP_BACKEND=$VITE_APP_BACKEND

RUN npm run build

# CMD [ "yarn", "start" ]

FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


