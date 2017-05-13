
FROM node:7.9.0-alpine

ENV NODE_ENV=production

RUN apk update \
&& apk upgrade \
&& apk add -q vim nano

RUN mkdir -p /usr/local/ops
WORKDIR /usr/local/ops

COPY package.json package.json
COPY README.md README.md
COPY LICENSE LICENSE

RUN npm install --production \
&& npm dedupe

COPY src/server src/server
COPY public public
COPY scripts/start.sh scripts/start.sh

EXPOSE 1337
ENTRYPOINT ["npm", "start"]
