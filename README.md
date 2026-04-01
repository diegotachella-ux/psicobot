# PsicoBot — Guía de Deploy en Vercel

Seguí estos pasos para publicar tu bot en internet. No necesitás saber programar.

---

## Paso 1 — Crear una cuenta en GitHub

1. Andá a [github.com](https://github.com) y creá una cuenta gratuita (si ya tenés, salteá este paso).

---

## Paso 2 — Subir los archivos a GitHub

1. Ingresá a tu cuenta de GitHub.
2. Hacé clic en el botón verde **"New"** para crear un nuevo repositorio.
3. Poné un nombre (ej: `psicobot`) y dejá el resto por defecto. Clic en **"Create repository"**.
4. En la página siguiente, hacé clic en **"uploading an existing file"**.
5. Subí **todos los archivos** que descargaste (manteniendo la estructura de carpetas):
   ```
   api/
     chat.js
   public/
     index.html
   vercel.json
   ```
6. Hacé clic en **"Commit changes"**.

---

## Paso 3 — Crear una cuenta en Vercel

1. Andá a [vercel.com](https://vercel.com) y creá una cuenta gratuita con tu cuenta de GitHub.

---

## Paso 4 — Conectar tu repositorio a Vercel

1. En el dashboard de Vercel, hacé clic en **"Add New Project"**.
2. Seleccioná el repositorio `psicobot` que creaste.
3. Hacé clic en **"Deploy"** (sin cambiar nada más).

---

## Paso 5 — Agregar las variables de entorno (¡IMPORTANTE!)

Aquí es donde guardás tu API key y el prompt de forma segura.

1. Una vez deployado, andá a tu proyecto en Vercel.
2. Hacé clic en **"Settings"** → **"Environment Variables"**.
3. Agregá estas dos variables:

### Variable 1: API Key de Anthropic
- **Name:** `ANTHROPIC_API_KEY`
- **Value:** Tu API key (la encontrás en [console.anthropic.com](https://console.anthropic.com))

### Variable 2: El prompt secreto
- **Name:** `SYSTEM_PROMPT`
- **Value:** Pegá aquí tu prompt completo (el que te proporcioné)

4. Hacé clic en **"Save"**.

---

## Paso 6 — Redesployar para aplicar los cambios

1. Andá a la pestaña **"Deployments"**.
2. Hacé clic en los tres puntos del último deployment y seleccioná **"Redeploy"**.
3. Esperá unos segundos.

---

## ¡Listo!

Vercel te da un link del tipo `https://psicobot-xxxx.vercel.app` que podés compartir con tus alumnos.

El prompt **nunca es visible** desde el navegador de los alumnos. Solo vive como variable de entorno en el servidor de Vercel.

---

## Preguntas frecuentes

**¿Cuánto cuesta?**
Vercel tiene un plan gratuito más que suficiente para uso académico.

**¿Puedo personalizar el nombre del link?**
Sí, en Settings → Domains podés agregar un dominio propio o cambiar el subdominio.

**¿Cómo actualizo el prompt?**
Cambiá la variable de entorno `SYSTEM_PROMPT` en Vercel y redesplegá.

**¿Y si necesito ayuda?**
Consultá la documentación de Vercel en [vercel.com/docs](https://vercel.com/docs).
