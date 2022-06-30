FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY dist/apps/angular-to-azure .
EXPOSE 80