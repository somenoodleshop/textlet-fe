FROM alpine:latest AS build

WORKDIR /app

COPY . /app

RUN apk add --no-cache nodejs npm
RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN nginx -t
