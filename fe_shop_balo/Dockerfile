# Stage 1: Build the client
FROM node:16.16.0 as builder

WORKDIR /var/www/fe_shop_balo

# Copy source code into the image
COPY ./fe_shop_balo .

RUN yarn && yarn build

# Stage 2: Setup NGINX
FROM nginx:latest
COPY --from=builder /var/www/fe_shop_balo/build /var/www/fe_shop_balo/build
COPY --from=builder /var/www/fe_shop_balo/nginx.conf /etc/nginx/conf.d/fe_shop_balo.conf

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]