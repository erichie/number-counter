FROM node:16

# Create app directory
WORKDIR /usr/src/

# copy files
COPY package*.json ./
COPY prisma ./prisma/
COPY .env.example .env
# COPY tsconfig.json tsconfig.json

# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]