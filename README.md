# Navi BMS Web

## Deploy

```bash
yarn run build
rsync -r ./build/ root@175.45.201.101:/var/www/html/
# PASS: U3NDLmA6nia
```

## CLI

```bash
# create a new project in the current directory
yarn create svelte@latest

# create a new project in my-app
yarn create svelte@latest my-app

# start dev mode
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open

# create a production version
npm run build

# preview the production build
npm run preview
```

## Setup

```bash
apt update
apt install nginx -y
apt install snapd -y

snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
certbot --nginx
# certbot renew --dry-run

nano /etc/nginx/sites-enabled/default
# location / {
#     try_files $uri $uri/ /index.html;
# }
```

## Links

- [adapters](https://kit.svelte.dev/docs/adapters)
