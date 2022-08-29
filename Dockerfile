FROM node:16

COPY . /app

WORKDIR /app

RUN npm install
# forever for auto restart
RUN npm install forever -g
RUN npm install jsdoc -g
RUN npm install jest -g
RUN npm run create-doc
RUN npm test

EXPOSE 3000

CMD [ "forever", "src/index.js" ]
