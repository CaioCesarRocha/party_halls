FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node

COPY . . 

CMD npm run start:dev




