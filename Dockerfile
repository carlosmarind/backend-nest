FROM node:22 AS build

WORKDIR /usr/app

COPY ./dist ./dist
COPY ./package*.json ./
RUN npm install --only=production


EXPOSE 3010

CMD ["node", "dist/main.js"]