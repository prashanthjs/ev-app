FROM docker.io/node:lts-alpine

ENV PORT=4300

WORKDIR /app

RUN addgroup --system ev-api2 && \
          adduser --system -G ev-api2 ev-api2

COPY dist/apps/ev-api2 ev-api2/
RUN chown -R ev-api2:ev-api2 .


RUN npm --prefix ev-api2 --omit=dev -f install

EXPOSE 4300

CMD [ "node", "ev-api2" ]
