# --- Build stage ---
FROM node:20.5.1-alpine3.18 AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

ENV NODE_ENV=production
ENV VITE_API_BASE_URL=http://localhost:8080

COPY . .
RUN pnpm build

# --- Production stage ---
FROM nginx:mainline-alpine3.18-slim as runner
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
