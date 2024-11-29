# Utiliser une image Node.js comme base
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier et installer les dépendances pour le backend
COPY ./backend/package*.json ./backend/
RUN cd backend && npm install --production

# Copier et installer les dépendances pour le frontend
COPY ./frontend/package*.json ./frontend/
RUN cd frontend && npm install --production

# Copier le code source du backend et du frontend
COPY ./backend ./backend
COPY ./frontend ./frontend

# Construire le frontend
RUN cd frontend && npm run build

# Exposer les ports utilisés par le backend et le frontend
EXPOSE 3001 3000

# Lancer simultanément le backend et un serveur pour le frontend
CMD ["sh", "-c", "node backend/server.js & npx serve -s frontend/build"]
