// Configuración centralizada — edita aquí los textos, número de WhatsApp y servicios.

export const SITE = {
  name: "colocapisos.com",
  domain: "colocapisos.com",
  tagline: "Especialistas en instalación de porcelanato y cerámico",
  shortDescription: "Instalación profesional de porcelanato y cerámico",
  area: "Puebla",
};

// Número de WhatsApp en formato internacional, sin signos ni espacios.
// Ejemplo: "525555555555" para +52 555 555 5555.
export const WHATSAPP_NUMBER = "522227086824";
// Versión legible para mostrar en footer/contacto.
export const WHATSAPP_DISPLAY = "+52 222 708 6824";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría cotizar la instalación de mi piso.";

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
  hero: { full: "Cotizar por WhatsApp", short: "Cotizar" },
  clarification: { full: "Hablar por WhatsApp", short: "Hablar" },
  especialidad: { full: "Cotizar instalación", short: "Cotizar" },
  services: { full: "Cotizar mi piso", short: "Cotizar" },
  proceso: {
    full: "Agendar revisión",
    short: "Agendar",
    message:
      "Hola, me gustaría agendar una revisión presencial para mi proyecto.",
  },
  foryou: { full: "Cotizar mi proyecto", short: "Cotizar" },
  earlystage: { full: "Hablar con nosotros", short: "Hablar" },
  faq: {
    full: "Resolver mi duda",
    short: "Resolver",
    message: "Hola, tengo una duda sobre la instalación de mi piso.",
  },
  finalcta: { full: "Cotizar por WhatsApp", short: "Cotizar" },
};

export const DEFAULT_CTA: SectionCta = HEADER_CTA_BY_SECTION.hero;

export const TRUST_ITEMS = [
  {
    title: "Cotización clara",
    description: "Sin sorpresas: precios transparentes y desglosados.",
  },
  {
    title: "Instaladores profesionales",
    description: "Equipos enfocados en colocación, no en venta.",
  },
  {
    title: "Trabajo limpio y ordenado",
    description: "Cuidamos tu obra y dejamos el espacio en orden.",
  },
  {
    title: "Especialistas en porcelanato y cerámico",
    description: "Es lo que hacemos todos los días.",
  },
];

export const SPECIALTY_CARDS = [
  {
    title: "Preparación correcta de superficie",
    description:
      "Una base mal preparada compromete el piso. Revisamos nivelación, humedad y estado del firme.",
  },
  {
    title: "Nivelación y alineación",
    description:
      "Usamos sistemas de nivelación para evitar cejas y mantener un plano uniforme.",
  },
  {
    title: "Cortes precisos",
    description:
      "Cortes a medida en bordes, columnas y registros, sin desperdicio innecesario.",
  },
  {
    title: "Juntas limpias y uniformes",
    description:
      "Distribución pareja de juntas y boquilla bien ejecutada, para un acabado prolijo.",
  },
];

export const SERVICE_TYPES = [
  {
    title: "Porcelanato",
    description:
      "Ideal para interiores modernos, formatos grandes y acabados de alta resistencia.",
    highlight: true,
    image: "/images/colocapisos-porcelanato.webp",
    imageAlt: "Sala minimalista con porcelanato pulido de gran formato",
    whatsappMessage:
      "Hola, me gustaría cotizar la instalación de porcelanato.",
  },
  {
    title: "Cerámico",
    description:
      "Una opción práctica y versátil que requiere buena colocación para durar.",
    highlight: true,
    image: "/images/colocapisos-ceramico.webp",
    imageAlt: "Sala con piso cerámico beige y luz natural cálida",
    whatsappMessage:
      "Hola, me gustaría cotizar la instalación de cerámico.",
  },
  {
    title: "Madera",
    description:
      "Piso de madera o símil madera. Cuidamos nivelación, juntas y acabados para que dure parejo.",
    highlight: false,
    image: "/images/colocapisos-madera.webp",
    imageAlt: "Sala con piso de madera y sofá blanco al fondo",
    whatsappMessage:
      "Hola, me gustaría cotizar la instalación de piso de madera.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Primer contacto por WhatsApp",
    description:
      "Nos escribes y nos cuentas sobre tu proyecto. Podemos resolver dudas iniciales y coordinar una visita si es necesario.",
  },
  {
    step: 2,
    title: "Visita e inspección del espacio",
    description:
      "Agendamos una visita para revisar el área, tomar medidas y evaluar condiciones como nivelación, superficie y tipo de piso.",
  },
  {
    step: 3,
    title: "Cotización clara",
    description:
      "Con base en la inspección, te enviamos una cotización detallada de la instalación, sin sorpresas.",
  },
  {
    step: 4,
    title: "Coordinación de instalación",
    description:
      "Definimos fecha de inicio y organizamos todo para ejecutar el trabajo de forma ordenada y profesional.",
  },
  {
    step: 5,
    title: "Ejecución y seguimiento",
    description:
      "Realizamos la instalación cuidando cada detalle y manteniendo comunicación durante el proceso.",
  },
];

export const VISIT_WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una revisión presencial para mi proyecto.";

export const FAQS = [
  {
    q: "¿Venden pisos?",
    a: "No. Nos especializamos únicamente en la instalación.",
  },
  {
    q: "¿Pueden instalar piso que yo ya compré?",
    a: "Sí, ese es nuestro servicio principal.",
  },
  {
    q: "¿Me pueden orientar antes de comprar el piso?",
    a: "Sí, podemos ayudarte a revisar si el material es adecuado para tu espacio.",
  },
  {
    q: "¿Qué información necesitan para cotizar?",
    a: "Medidas aproximadas, fotos del espacio, tipo de piso y ubicación.",
  },
  {
    q: "¿Instalan porcelanato de gran formato?",
    a: "Sí, lo evaluamos según el espacio, formato y condiciones de superficie.",
  },
  {
    q: "¿Dónde trabajan?",
    a: "Estamos comenzando operaciones en Puebla.",
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

export const FOR_YOU_POINTS = [
  "Ya tienes el porcelanato o cerámico… pero no quieres que lo arruinen",
  "Te preocupa que quede mal nivelado o con detalles visibles",
  "Quieres un acabado limpio, alineado y bien terminado",
  "Prefieres alguien que llegue, mida bien y te diga exactamente qué hacer",
  "Buscas evitar retrabajos, pérdidas de material y estrés",
];
