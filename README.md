# GPU-Passthru

This website is built using [Fumadocs](https://fumadocs.dev/) on [Astro](https://astro.build/).

## Installation

To get started, install the necessary dependencies:

```bash
bun install
```

## Local Development

To start a local development server, run:

```bash
bun start
```

## Deployment

`bun run build` outputs a static site to `dist/`. Any static host (Vercel, Netlify, GitHub Pages) works.

### GitHub CI

We provide a CI script for automation. Just push your changes and the workflow will automatically build, commit, and push.

### Custom Domain

Set the `site` field in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://gpu.passthru.info',
});
```

## Writing docs

Documentation lives in `content/docs`. Each page needs a `title` in its frontmatter, and folder ordering/labels are set in the folder's `meta.json`.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds!

Please adhere to the conventional commits specification and keep commit messages clear.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
