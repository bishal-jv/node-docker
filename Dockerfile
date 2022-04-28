FROM node:9-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . /app
CMD ["npm","start"]
