# Portafolio de Soluciones Digitales y Automatizacion

Aplicacion web profesional creada con React, Vite y Tailwind CSS para presentar proyectos de Power Platform, automatizacion, RPA, dashboards e integraciones empresariales.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Agregar un nuevo proyecto

Edita `src/data/projects.js` y agrega un objeto al arreglo `projects` con esta estructura:

```js
{
  id: 19,
  title: "Nombre del proyecto",
  client: "Cliente o empresa",
  category: "Power Apps",
  description: "Resumen corto de la solucion",
  solution: "Descripcion de la solucion implementada",
  tools: ["Power Apps", "Power Automate", "SharePoint"],
  database: "SharePoint Lists",
  integrations: ["Outlook", "Teams"],
  benefits: ["Centralizacion de informacion", "Ahorro de tiempo"],
  license: "Office E3",
  image: "/projects/mi-imagen.png",
  gallery: ["/projects/vista1.png", "/projects/vista2.png"],
  featured: false
}
```

Si necesitas una categoria nueva, agregala tambien en `projectCategories`.

## Cambiar imagenes

Coloca tus capturas dentro de `public/projects/` y referencia la ruta como `/projects/nombre-archivo.png`.

Si una imagen no existe, la tarjeta usa el placeholder `public/projects/placeholder-project.svg`.

## Editar datos personales

Actualiza nombre, rol, correo, WhatsApp, LinkedIn, GitHub y CV en `src/data/profile.js`.

Para habilitar la descarga del CV, coloca un archivo `cv.pdf` en la carpeta `public/` o cambia `cvUrl`.

## Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, crea un nuevo proyecto e importa el repositorio.
3. Framework: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.
