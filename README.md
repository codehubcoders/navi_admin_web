# Navi BMS Web

## Deploy

```bash
yarn run build
rsync -r ./build/ root@158.247.212.186:/var/www/html/
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
sudo apt update
sudo apt install nginx -y

ufw allow 'Nginx Full'

sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
# sudo certbot renew --dry-run

sudo nano /etc/nginx/sites-enabled/default
# location / {
#     try_files $uri $uri/ /index.html;
# }
```

## Links

- [adapters](https://kit.svelte.dev/docs/adapters)
