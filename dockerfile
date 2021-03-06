FROM node:10-stretch
WORKDIR /app
COPY ./dist /app/dist
COPY ./package.json /app/
RUN yarn install --production
COPY ./csp.json /app/
COPY ./env.prod.json /app/
ENV NODE_ENV=production
EXPOSE 3001
CMD /app/node_modules/.bin/mc-http-server --config /app/env.prod.json --csp /app/csp.json --use-local-assets
