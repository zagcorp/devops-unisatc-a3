FROM node:18

WORKDIR /srv/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install

COPY . .

EXPOSE 1337

CMD ["pnpm", "develop"]