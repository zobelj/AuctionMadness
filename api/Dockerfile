from node:16

workdir /api

copy . /api

run npm ci

expose 3030

cmd ["npm", "run", "dev:server"]