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
- El portal que se desarrolló para MalditoClub es un trabajo histórico; **no enlazar el dominio actual como si mostrara ese código**. Hay una captura local en `public/assets/imageMalditoClub.png`.
- Agregar, cuando se disponga de ellos, repositorios y capturas verificables del sistema comercial, punto de venta e investigación de corrección de respuestas.
- Verificar títulos, fechas y enlaces a publicaciones científicas antes de publicarlos como citas bibliográficas formales.
