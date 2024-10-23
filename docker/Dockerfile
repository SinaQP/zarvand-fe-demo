FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/node:20-alpine AS build

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm config set registry http://192.168.174.4/repository/npm-zaraamad/

RUN npm install

COPY . .

RUN npm run build

# CMD [ "yarn", "start" ]

FROM nexus.zaraamad.ir:5006/repository/docker-zaraamad/nginx:alpine

ARG VITE_APP_BACKEND
ENV VITE_APP_BACKEND=$VITE_APP_BACKEND

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


