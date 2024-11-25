FROM docker.io/node:lts-alpine

ENV PORT=4200

WORKDIR /app

RUN addgroup --system ev-api1 && \
          adduser --system -G ev-api1 ev-api1

COPY dist/apps/ev-api1 ev-api1/
RUN chown -R ev-api1:ev-api1 .


RUN npm --prefix ev-api1 --omit=dev -f install

EXPOSE 4200

CMD [ "node", "ev-api1" ]
