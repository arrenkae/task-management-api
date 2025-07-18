FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT
CMD [ "npm", "start" ]