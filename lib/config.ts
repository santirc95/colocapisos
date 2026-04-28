// Configuración centralizada — edita aquí los textos, número de WhatsApp y servicios.

export const SITE = {
  name: "colocapisos.com",
  domain: "colocapisos.com",
  tagline: "Instalación profesional de porcelanato y cerámico",
  shortDescription: "Instalación profesional de porcelanato y cerámico",
  area: "Puebla, Pue.",
};

// Número de WhatsApp en formato internacional, sin signos ni espacios.
// Ejemplo: "525555555555" para +52 555 555 5555.
export const WHATSAPP_NUMBER = "522227086824";
// Versión legible para mostrar en footer/contacto.
export const WHATSAPP_DISPLAY = "+52 222 708 6824";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría cotizar la instalación de mi piso.";
export const VISIT_WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una revisión presencial para mi proyecto.";

export const whatsappLink = (
  message: string = WHATSAPP_DEFAULT_MESSAGE
): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Especialidad", href: "#especialidad" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

// Etiqueta y mensaje del botón del header según la sección visible.
// Las claves coinciden con los `data-cta-section` de cada <section>.
export type SectionCta = {
  full: string;
  short: string;
  message?: string;
};

export const HEADER_CTA_BY_SECTION: Record<string, SectionCta> = {
  hero: {
    full: "Agendar revisión",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
  clarification: {
    full: "Agendar por WhatsApp",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
  services: { full: "Cotizar mi piso", short: "Cotizar" },
  especialidad: {
    full: "Agendar revisión",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
  proceso: {
    full: "Agendar revisión",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
  foryou: {
    full: "Agendar revisión",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
  confidence: {
    full: "Hablar con nosotros",
    short: "Hablar",
  },
  faq: {
    full: "Resolver mi duda",
    short: "Resolver",
    message: "Hola, tengo una duda sobre la instalación de mi piso.",
  },
  finalcta: {
    full: "Agendar por WhatsApp",
    short: "Agendar",
    message: VISIT_WHATSAPP_MESSAGE,
  },
};

export const DEFAULT_CTA: SectionCta = HEADER_CTA_BY_SECTION.hero;

export const SPECIALTY_BULLETS = [
  "Preparación correcta de superficie",
  "Nivelación y alineación",
  "Cortes precisos",
  "Juntas limpias y uniformes",
];

export const SERVICE_TYPES = [
  {
    title: "Porcelanato",
    description:
      "Ideal para formatos grandes y espacios modernos. Requiere precisión y nivelación correcta.",
    highlight: true,
    image: "/images/colocapisos-porcelanato.webp",
    imageAlt: "Sala minimalista con porcelanato pulido de gran formato",
    whatsappMessage:
      "Hola, me gustaría cotizar la instalación de porcelanato.",
  },
  {
    title: "Cerámico",
    description:
      "Una opción versátil que necesita buena colocación para lograr un acabado limpio y duradero.",
    highlight: true,
    image: "/images/colocapisos-ceramico.webp",
    imageAlt: "Sala con piso cerámico beige y luz natural cálida",
    whatsappMessage:
      "Hola, me gustaría cotizar la instalación de cerámico.",
  },
  {
    title: "Otros bajo evaluación",
    description: "Podemos revisar otros tipos de piso según el proyecto.",
    highlight: false,
    image: "/images/colocapisos-madera.webp",
    imageAlt: "Sala con piso de madera y sofá blanco al fondo",
    whatsappMessage:
      "Hola, tengo otro tipo de piso y me gustaría saber si pueden instalarlo.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Primer contacto por WhatsApp",
    description:
      "Nos escribes y nos cuentas sobre tu proyecto. Podemos resolver dudas iniciales y coordinar una visita.",
  },
  {
    step: 2,
    title: "Visita e inspección",
    description:
      "Agendamos una visita para revisar el área, tomar medidas y evaluar condiciones del espacio.",
  },
  {
    step: 3,
    title: "Cotización clara",
    description:
      "Con base en la inspección, te enviamos una cotización detallada sin sorpresas.",
  },
  {
    step: 4,
    title: "Coordinación",
    description: "Definimos fecha y organizamos la instalación.",
  },
  {
    step: 5,
    title: "Ejecución",
    description:
      "Realizamos el trabajo cuidando cada detalle y manteniendo comunicación.",
  },
];

export const FOR_YOU_POINTS = [
  "Ya compraste porcelanato o cerámico",
  "Quieres evitar errores en la instalación",
  "Buscas un trabajo limpio y bien terminado",
  "Necesitas claridad antes de iniciar",
  "Prefieres una revisión presencial antes de cotizar",
];

export const FAQS = [
  {
    q: "¿Venden pisos?",
    a: "No. Nos especializamos únicamente en la instalación.",
  },
  {
    q: "¿Pueden instalar piso que ya compré?",
    a: "Sí, ese es nuestro servicio principal.",
  },
  {
    q: "¿Pueden asesorarme antes de comprar?",
    a: "Sí, podemos ayudarte a revisar el material antes de instalarlo.",
  },
  {
    q: "¿Qué necesitan para cotizar?",
    a: "Podemos darte una idea inicial por WhatsApp, pero lo ideal es hacer una visita para revisar el espacio.",
  },
  {
    q: "¿Dónde trabajan?",
    a: "Trabajamos en Puebla, Pue.",
  },
];

// Imágenes locales en /public/images. Sustituye por archivos propios.
export const IMAGES = {
  hero: {
    desktop: "/images/colocapisos-hero-desktop.webp",
    mobile: "/images/colocapisos-hero-mobile.webp",
  },
  installation: "/images/colocapisos-mosaico.webp",
  installer: "/images/colocapisos-instalador.webp",
};
