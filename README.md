# Portfolio — Tito Santino Montivero

Portfolio construido con React, Vite y Tailwind CSS. Incluye una muestra visual del proyecto de restaurante (`/#/pv`).

## Desarrollo

```bash
npm ci
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

## Publicación en GitHub Pages

El proyecto utiliza `HashRouter`, por lo que las rutas públicas funcionan con `/#/` y `/#/pv` sin requerir reescritura del servidor.

La descarga del CV se realiza desde `public/CV_Tito_Montivero_Detallado_ATS.pdf`. **Actualizar este archivo** al modificar el currículum. Después de ejecutar `npm run build`, comprobar que exista en `dist/`.

Para desplegar con `npm run deploy`, configurar GitHub Pages para servir la rama `gh-pages` (raíz) si todavía no lo está, o usar el flujo de Actions del repositorio. No ejecutar ambos métodos de despliegue simultáneamente.

## Alcance y pendientes

- La vista `/#/pv` es exclusivamente una demo visual responsive de categorías. El backend, las pantallas de productos y el carrito del proyecto original no forman parte de este repositorio.
- MalditoClub se puede explorar en `/#/maldito-club`: reutiliza las pantallas y datos locales de `srcMC`, con noticias, categorías y paginación. Es una demo histórica sin backend ni autenticación; no enlaza el sitio actual como si fuera ese desarrollo. Los recursos referenciados pero no incluidos se omiten para evitar imágenes rotas. Para restaurarlos, agregar las imágenes originales a `srcMC/assets` con sus nombres correspondientes.
- Agregar, cuando se disponga de ellos, repositorios y capturas verificables del sistema comercial, punto de venta e investigación de corrección de respuestas.
- Verificar títulos, fechas y enlaces a publicaciones científicas antes de publicarlos como citas bibliográficas formales.

## Certificados de investigación

Agregar `public/certificados/conaiisi-2025.pdf` y `public/certificados/wicc-2026.pdf`. Los enlaces aparecen en la ficha MCP solo si existen los respectivos archivos al compilar; no se muestran enlaces pendientes ni documentos inventados. Volver a compilar y desplegar al agregarlos.

Las rutas de la demo (`/#/maldito-club/noticia/0` y `/#/maldito-club/etiqueta/1`) admiten enlaces directos y recarga en GitHub Pages. Desde la demo se puede volver a la sección Proyectos del portfolio.
