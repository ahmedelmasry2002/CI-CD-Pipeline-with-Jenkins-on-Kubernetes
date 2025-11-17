FROM node:18-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm install --only=production
COPY app/ .
EXPOSE 8080
CMD ["node", "index.js"]
