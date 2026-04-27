// Configuración centralizada — edita aquí los textos, número de WhatsApp y servicios.

export const SITE = {
  name: "colocapisos.com",
  domain: "colocapisos.com",
  tagline: "Especialistas en instalación de porcelanato y cerámico",
  shortDescription: "Instalación profesional de porcelanato y cerámico",
  area: "CDMX y zona metropolitana",
};

// Reemplaza el placeholder por el número real (formato internacional, sin signos).
// Ejemplo: "525555555555".
export const WHATSAPP_NUMBER = "52XXXXXXXXXX";
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
  },
  {
    title: "Cerámico",
    description:
      "Una opción práctica y versátil que requiere buena colocación para durar.",
    highlight: true,
  },
  {
    title: "Otros pisos bajo evaluación",
    description: "Podemos revisar otros materiales según el proyecto.",
    highlight: false,
  },
];

export const PROCESS_STEPS = [
  { step: 1, title: "Nos escribes por WhatsApp" },
  { step: 2, title: "Nos compartes medidas, fotos y tipo de piso" },
  { step: 3, title: "Revisamos detalles del proyecto" },
  { step: 4, title: "Te damos una cotización clara" },
  { step: 5, title: "Coordinamos fecha de instalación" },
];

export const FOR_YOU_BULLETS = [
  "Ya compraste porcelanato o cerámico y necesitas instalarlo",
  "Quieres evitar una mala colocación",
  "Buscas un trabajo limpio y bien terminado",
  "Necesitas claridad antes de iniciar la obra",
  "Quieres cotizar rápido por WhatsApp",
];

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
    a: "Principalmente en CDMX y zona metropolitana.",
  },
];

// Imágenes (Unsplash). Sustituibles por imágenes propias en /public.
export const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
  process:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
};
