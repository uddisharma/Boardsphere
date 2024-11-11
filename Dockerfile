FROM node:20-alpine

WORKDIR /src

COPY package.json package-lock.json ./

RUN  npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

CMD ["npx", "convex","dev"]
