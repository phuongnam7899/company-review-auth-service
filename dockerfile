FROM node:22.2.0

WORKDIR /app

COPY company-review-auth-service/package.json company-review-auth-service/package-lock.json ./

RUN npm install

COPY company-review-auth-service ./

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]