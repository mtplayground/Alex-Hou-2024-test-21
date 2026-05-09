FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine AS runtime

RUN rm /etc/nginx/conf.d/default.conf && \
    printf '%s\n' \
      'server {' \
      '    listen       8080;' \
      '    listen       [::]:8080;' \
      '    server_name  _;' \
      '    root   /usr/share/nginx/html;' \
      '    index  index.html;' \
      '' \
      '    location / {' \
      '        try_files $uri $uri/ =404;' \
      '    }' \
      '}' \
      > /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
