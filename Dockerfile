# Étape 1: Construire l'application Angular
FROM node:18 AS build

WORKDIR /app

COPY angular-app/package*.json ./
RUN npm install

COPY angular-app ./
RUN npm run build --prod

# Étape 2: Servir l'application Angular avec Nginx
FROM nginx:alpine

COPY --from=build /app/dist/pocket-doc-ui /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
