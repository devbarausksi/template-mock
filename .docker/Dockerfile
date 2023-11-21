FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["sh", "./.docker/entrypoint.sh"]