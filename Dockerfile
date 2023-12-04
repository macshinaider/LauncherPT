FROM node:18 as build


WORKDIR /Launcher

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]