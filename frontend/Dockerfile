FROM node:12-alpine

WORKDIR /home/frontend

COPY ./yarn.lock .
COPY ./package.json .

RUN yarn install && \
  yarn cache clean --force

COPY . .

EXPOSE 3001

CMD yarn serve 