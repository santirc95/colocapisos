# Coloca Pisos

Landing page para [colocapisos.com](https://colocapisos.com) — servicio especializado en instalación de porcelanato y cerámico.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Empezar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Editar contenido

Casi todo el contenido de la página se controla desde un solo archivo:

- `lib/config.ts` — número de WhatsApp, textos principales, servicios, FAQ, imágenes.

Para cambiar el número de WhatsApp, edita `WHATSAPP_NUMBER` en `lib/config.ts` (formato internacional sin signos, p. ej. `525555555555`).

## Estructura

```
app/
  layout.tsx        // metadata + body
  page.tsx          // composición de secciones
  globals.css       // Tailwind + utilidades
components/
  Header.tsx
  Hero.tsx
  TrustBar.tsx
  Clarification.tsx
  Specialty.tsx
  ServiceTypes.tsx
  Process.tsx
  ForYou.tsx
  EarlyStage.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  WhatsAppFloat.tsx
  WhatsAppIcon.tsx
lib/
  config.ts         // contenido editable
```
