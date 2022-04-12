FROM docker.io/library/node:16.9.1-buster-slim AS build
WORKDIR /build

# step 1: create a layer that contains the dependencies
#         this is slow so minimize how often we have to do this
COPY package.json package-lock.json ./
RUN npm ci

# step 2: copy the source and build the app
COPY . ./
RUN npm run-script build

FROM docker.io/library/node:16.9.1-buster-slim
WORKDIR /app
COPY --from=build /build/build public/

RUN npm i -g http-server

ENTRYPOINT [ "http-server" ]