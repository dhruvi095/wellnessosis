FROM nginx:latest

COPY wellnessosis-main/dist /usr/share/nginx/html

EXPOSE 80