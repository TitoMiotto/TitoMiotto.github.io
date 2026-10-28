// Only use assets actually supplied with the archived project.
const assets = import.meta.glob('./assets/*.{png,jpg,jpeg,avif,webp}', { eager: true, query: '?url', import: 'default' });
export function demoImage(filename) {
  return assets[`./assets/${filename}`] || null;
}
