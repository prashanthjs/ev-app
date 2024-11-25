FROM  nginx:alpine

RUN addgroup --system ev-frontend2 && \
          adduser --system -G ev-frontend2 ev-frontend2

COPY  dist/apps/ev-frontend2 /usr/share/nginx/html
RUN chown -R ev-frontend2:ev-frontend2 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
