# Use 20 and not smth like 20.1.0 or else it won't work smh idk why
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
