# Étape 1 : Construction du frontend
FROM node:16 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Étape 2 : Serveur backend
FROM node:16
WORKDIR /app
COPY --from=build /app/build ./public
COPY . ./
RUN npm install

# Expose les ports nécessaires
EXPOSE 3000 3001

# Commande pour démarrer le serveur
CMD ["node", "server/server.js"]
