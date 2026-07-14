FROM nginx:1.27-alpine

COPY public/ /usr/share/nginx/html/
COPY src/ /usr/share/nginx/html/src/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80