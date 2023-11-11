FROM node:20-alpine

WORKDIR /usr/share/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD [ "node", "src/main.js" ]
