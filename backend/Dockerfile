FROM node:12-alpine

WORKDIR /home/backend

COPY ./yarn.lock .
COPY ./package.json .

RUN yarn install && \
  yarn cache clean --force

CMD yarn start