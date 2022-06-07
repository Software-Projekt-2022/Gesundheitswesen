FROM node:16.13.0 AS development

ENV PORT=3000

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install

CMD [ "npm", "start" ]

FROM development AS builder

RUN npm run build

FROM nginx:1.13-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d