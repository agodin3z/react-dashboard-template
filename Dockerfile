FROM oven/bun:alpine AS base
RUN bun i -g vite@^6.2.0
WORKDIR /usr/src/app
COPY package.json bun.lockb ./

FROM base AS dependencies
ENV CI=1
RUN bun install --ignore-scripts

FROM base AS development
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS production
ARG PROD
ENV PROD=${PROD}
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=development /usr/src/app/dist ./dist
CMD bunx vite preview --host 0.0.0.0
