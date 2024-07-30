# Étape 1 : Construction de l'application Angular
FROM node:18 AS builder

# Répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Création de l'image finale avec Nginx
FROM nginx:alpine

# Copier les fichiers de construction dans le répertoire de Nginx
COPY --from=builder /app/dist/pocket-doc-ui /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
