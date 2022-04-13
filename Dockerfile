FROM docker.io/library/node:16.9.1-buster-slim
WORKDIR /app

# step 1: create a layer that contains the dependencies
#         this is slow so minimize how often we have to do this
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
EXPOSE 3000

#CMD ["npm", "start"]
#RUN npm i -g http-server

ENTRYPOINT [ "/usr/local/bin/npm", "start" ]