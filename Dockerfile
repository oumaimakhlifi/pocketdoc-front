FROM node:12.7-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@8.1.2

COPY . .

RUN ng build

FROM nginx:latest

COPY --from=build app/dist/pocketdoc /usr/share/nginx/html

EXPOSE 80