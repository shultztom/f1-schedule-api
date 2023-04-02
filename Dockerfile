FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm ci

# Bundle app source
COPY . .

EXPOSE 8080
USER node
CMD [ "yarn", "start" ]