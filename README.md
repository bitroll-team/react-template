# React template

## How to use 🤔

1. Create a new repository using this template. You can do this by clicking the "Use this template" button on the repository page or by clicking [here](https://github.com/new?template_name=react-template&template_owner=bitroll-team).

2. Clone your new repository.

3. Install dependencies.

```bash
pnpm install
```

4. Configure the environment variables. You can do this by copying the [`.env.example`](./.env.example) file to `.env` and filling in the values or by modifying the [`config/environment.ts`](./src/config/environment.ts) defaults.

5. Start the development server.

```bash
pnpm dev
```

## Customization 🎨

Note that this template is meant to be customized. Here are some things you might want to change:

- [ ] The `name` field in the [`package.json`](./package.json) file.
- [ ] The `title` and `<meta>` tags in the [`index.html`](./index.html) file.
- [ ] The favicons in the [`public/icons`](./public/icons/) folder. You can use [this generator](https://realfavicongenerator.net/) to generate them from an image.
- [ ] The github username and email in the [`integration.yaml`](./.github/workflows/integration.yaml) file.
- [ ] The environment variables in the [`Dockerfile`](./Dockerfile) to match your production environment. Note that this is needed because, as React is a client-side framework, the environment variables are embedded in the build.
