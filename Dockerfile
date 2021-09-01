FROM node:14-alpine
USER ${USER}
COPY  package*.json \
  .env /
COPY . .
RUN npm install  \
  && npm run build \
  && npm run cinstall \
  && npm run cbuild
EXPOSE 3000
CMD npm run cstart