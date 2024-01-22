# Navi BMS Web

## Deploy

```bash
yarn run build
rsync -r ./build/ root@158.247.212.186:/var/www/html/
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

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
