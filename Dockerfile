FROM nginx:latest

COPY public /usr/share/nginx/html

ENV API_URL=http://localhost:5000/api/games

EXPOSE 80