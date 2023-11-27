FROM node:20.9-alpine3.17

LABEL maintainer="Bill Zhang <zbjumper@gmail.com>"

# 默认编码为 UTF-8
ENV LANG C.UTF-8

ENV TIME_ZONE=Asia/Shanghai

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN echo 'http://mirrors.ustc.edu.cn/alpine/v3.17/main' > /etc/apk/repositories \
    && echo 'http://mirrors.ustc.edu.cn/alpine/v3.17/community' >>/etc/apk/repositories \
    && apk update && apk upgrade \
    && apk add --no-cache tzdata \
    && apk add --no-cache git \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

RUN npm install -g pnpm

# install dependencies


# copy the app, note .dockerignore
COPY public /usr/src/nuxt-app/public
COPY server /usr/src/nuxt-app/server
COPY .npmrc /usr/src/nuxt-app/.npmrc
COPY package.json /usr/src/nuxt-app/package.json
COPY pnpm-lock.yaml /usr/src/nuxt-app/pnpm-lock.yaml
COPY tsconfig.json /usr/src/nuxt-app/tsconfig.json
COPY nuxt.config.ts /usr/src/nuxt-app/nuxt.config.ts
COPY app.vue /usr/src/nuxt-app/app.vue




RUN pnpm i --prefer-frozen-lockfile

RUN pnpm build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
