FROM  nginx:alpine

RUN addgroup --system ev-frontend1 && \
          adduser --system -G ev-frontend1 ev-frontend1

COPY  dist/apps/ev-frontend1 /usr/share/nginx/html
RUN chown -R ev-frontend1:ev-frontend1 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
