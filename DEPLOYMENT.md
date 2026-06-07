# Flujo de Publicacion

Este proyecto es un sitio estatico de la landing **El Panadero**. El flujo usado para publicarlo fue:

## GitHub

Repositorio publico:

https://github.com/jpscorp21/panadero-site

Pasos generales:

```bash
git status -sb
git add .
git commit -m "Mensaje del cambio"
git push
```

Si Git pide credenciales despues de iniciar sesion con GitHub CLI:

```bash
gh auth setup-git
```

## Netlify

Sitio publicado:

https://panadero-site.netlify.app

El proyecto tiene `netlify.toml` con esta configuracion:

```toml
[build]
  publish = "."
```

Para desplegar manualmente desde la carpeta del proyecto:

```bash
npm_config_cache=/tmp/netlify-npm-cache npx --yes netlify-cli@26.1.0 deploy --prod --dir=. --message "Deploy El Panadero landing"
```

Si la CLI de Netlify no tiene sesion iniciada:

```bash
npm_config_cache=/tmp/netlify-npm-cache npx --yes netlify-cli@26.1.0 login
```

Luego aprobar el acceso en el navegador.

## Flujo para nuevos cambios

1. Editar los archivos del sitio.
2. Probar localmente si hace falta:

```bash
python3 -m http.server 8000
```

3. Abrir:

```text
http://localhost:8000
```

4. Guardar el cambio en Git:

```bash
git status -sb
git add .
git commit -m "Describe el cambio"
git push
```

5. Desplegar en Netlify:

```bash
npm_config_cache=/tmp/netlify-npm-cache npx --yes netlify-cli@26.1.0 deploy --prod --dir=. --message "Describe el deploy"
```

## Notas

- La carpeta `.netlify` es local y no se sube a GitHub.
- El repositorio usa la rama `main`.
- El sitio es estatico, asi que no requiere comando de build.
