FROM node:14-alpine
USER ${USER}
COPY  package*.json ./
COPY . ./
RUN npm install  \
  && npm run build \
  && pwd \
  && ls -al
EXPOSE 3000
CMD npm start