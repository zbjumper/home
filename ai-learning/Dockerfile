FROM node:20-alpine3.17 as builder

LABEL maintainer="Bill Zhang <zbjumper@gmail.com>"

WORKDIR /code

COPY package.json pnpm-lock.yaml ./

RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    && npm install -g pnpm \
    && pnpm install --frozen-lockfile \
    && apk del .build-deps

COPY docs docs

RUN pnpm docs:build

FROM nginx:1.21-alpine as production

COPY --from=builder /code/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]