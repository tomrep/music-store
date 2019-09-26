FROM node:8-alpine as build
ARG ENV_NAME

RUN apk update
RUN apk add --no-cache git

WORKDIR /var/www/archmesh-frontend

COPY package.json /var/www/archmesh-frontend
RUN npm i

COPY . /var/www/archmesh-frontend
RUN if [ "$ENV_NAME" = "production" ] ; then npm run build ; else npm run build-dev ; fi



FROM nginx:1.17.3-alpine

WORKDIR /var/www/archmesh-frontend

COPY nginx.template /etc/nginx/conf.d/nginx.template
COPY --from=build /var/www/archmesh-frontend/build /var/www/archmesh-frontend

COPY ./scripts /var/www/archmesh-frontend/scripts
