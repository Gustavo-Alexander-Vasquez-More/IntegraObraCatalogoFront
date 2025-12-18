# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Sitemap

Se ha generado un archivo `sitemap.xml` en la raíz del proyecto. Antes de subirlo al servidor, reemplaza la URL base `https://example.com` dentro de `sitemap.xml` por la URL real de tu sitio (por ejemplo `https://midominio.com`).

Para regenerar el sitemap manualmente, actualiza las rutas en `src/Router.jsx` y vuelve a crear el archivo `sitemap.xml` con las nuevas rutas.

Sube `sitemap.xml` al directorio público del sitio (raíz del dominio) y envíalo a Google Search Console o similar.
