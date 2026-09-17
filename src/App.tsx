import { useState, useRef, useEffect } from 'react'
import bonicaLogo from './assets/bonica-logo.png'
import rollerGirl from './assets/roller-girl.png'
import spriteDryer from './assets/sprite-dryer.png'
import spriteComb from './assets/sprite-comb.png'
import spriteScissors from './assets/sprite-scissors.png'
import spriteCurler from './assets/sprite-curler.png'
import after1 from './gallery/AFTER1.jpeg'
import after1Cut from './gallery/AFTER1CUT.jpeg'
import after2 from './gallery/AFTER2.jpeg'
import after3Color from './gallery/AFTER3COLOR.jpeg'
import after4Color from './gallery/AFTER4COLOR.jpeg'
import alaciados from './gallery/ALACIADOS.jpeg'
import alaciados2 from './gallery/ALACIADOS2.jpeg'
import alaciados3 from './gallery/ALACIADOS3.jpeg'
import before1 from './gallery/Before1.jpeg'
import before1Cut from './gallery/BEFORE1CUT.jpeg'
import before2 from './gallery/BEFORE2.jpeg'
import before3Color from './gallery/BEFORE3COLOR.jpeg'
import before4Color from './gallery/BEFORE4COLOR.jpeg'
import color1 from './gallery/COLOR1.png'
import color2 from './gallery/COLOR2.png'
import corte1 from './gallery/CORTE1.png'
import maquillaje1 from './gallery/MAQUILLAJE1.jpeg'
import maquillaje2 from './gallery/MAQUILLAJE2.jpeg'
import unas1 from './gallery/UNAS1.jpeg'
import unas2 from './gallery/UNAS2.jpeg'
import unas3 from './gallery/UNAS3.jpeg'
import unas4 from './gallery/UNAS4.jpeg'
import botoxCapilar from './gallery/PRODUCTOS/BOTOXCAPILAR.jpeg'
import nanoplastiaFrutosRojos from './gallery/PRODUCTOS/NANOPLASTIAFRUTOSROJOS.jpeg'
import serumYExtra from './gallery/PRODUCTOS/SERUMYEXTRA.jpeg'
import sistemaAlgodon100 from './gallery/PRODUCTOS/SISTEMAALGODON100.jpeg'

const whatsappUrl =
  'https://wa.me/528443068856?text=Hola%2C%20quisiera%20agendar%20una%20cita%20en%20Bonica%20Hair.'
const facebookUrl = 'https://www.facebook.com/bonicaasalon'
const googleMapsUrl =
  'https://www.google.com/search?kgmid=/g/11xyhttz5b&q=Bonica+Hair+by+Cris+Hdez'
const googleMapsEmbedUrl =
  'https://www.google.com/maps?q=Bonica%20Hair%20by%20Cris%20Hdez&output=embed'

const services = [
  { id: 'alisados', label: 'Alisados', featured: true, image: alaciados, imageAlt: 'Resultado de alaciado en Bonica Hair' },
  { id: 'color', label: 'Color', featured: false, image: color2, imageAlt: 'Resultado de color en Bonica Hair' },
  { id: 'cortes', label: 'Cortes', featured: false, image: corte1, imageAlt: 'Resultado de corte en Bonica Hair' },
  { id: 'peinados', label: 'Peinados', featured: false, image: after2, imageAlt: 'Resultado de peinado en Bonica Hair' },
  { id: 'maquillaje', label: 'Maquillaje', featured: false, image: maquillaje2, imageAlt: 'Maquillaje realizado en Bonica Hair' },
  { id: 'unas', label: 'Uñas', featured: false, image: unas2, imageAlt: 'Diseño de uñas en Bonica Hair' },
]

type GalleryPair = {
  type: 'pair'
  id: string
  label: string
  before: string
  after: string
}

type GallerySingle = {
  type: 'single'
  id: string
  label: string
  image: string
  alt: string
}

type GalleryItem = GalleryPair | GallerySingle

const galleryItems: GalleryItem[] = [
  { type: 'pair', id: 'tratamiento-1', label: 'Alaciado', before: before1, after: after1 },
  { type: 'pair', id: 'corte-1', label: 'Corte', before: before1Cut, after: after1Cut },
  { type: 'pair', id: 'tratamiento-2', label: 'Alaciado', before: before2, after: after2 },
  { type: 'pair', id: 'color-3', label: 'Color', before: before3Color, after: after3Color },
  { type: 'pair', id: 'color-4', label: 'Color', before: before4Color, after: after4Color },
  { type: 'single', id: 'alaciados-1', label: 'Alaciados', image: alaciados, alt: 'Alaciado en Bonica Hair' },
  { type: 'single', id: 'alaciados-2', label: 'Alaciados', image: alaciados2, alt: 'Alaciado en Bonica Hair' },
  { type: 'single', id: 'alaciados-3', label: 'Alaciados', image: alaciados3, alt: 'Alaciado en Bonica Hair' },
  { type: 'single', id: 'color-1', label: 'Color', image: color1, alt: 'Color en Bonica Hair' },
  { type: 'single', id: 'color-2', label: 'Color', image: color2, alt: 'Color en Bonica Hair' },
  { type: 'single', id: 'corte-main', label: 'Corte', image: corte1, alt: 'Corte en Bonica Hair' },
  { type: 'single', id: 'maquillaje-1', label: 'Maquillaje', image: maquillaje1, alt: 'Maquillaje en Bonica Hair' },
  { type: 'single', id: 'maquillaje-2', label: 'Maquillaje', image: maquillaje2, alt: 'Maquillaje en Bonica Hair' },
  { type: 'single', id: 'unas-1', label: 'Uñas', image: unas1, alt: 'Uñas en Bonica Hair' },
  { type: 'single', id: 'unas-2', label: 'Uñas', image: unas2, alt: 'Uñas en Bonica Hair' },
  { type: 'single', id: 'unas-3', label: 'Uñas', image: unas3, alt: 'Uñas en Bonica Hair' },
  { type: 'single', id: 'unas-4', label: 'Uñas', image: unas4, alt: 'Uñas en Bonica Hair' },
]

const treatmentPlaceholders = [
  {
    id: 1,
    num: '01',
    name: 'Sistema 100',
    intro: 'Alisado progresivo de alto rendimiento para todo tipo de cabello.',
    products: [
      { key: 's100-1', label: 'Producto 1' },
      { key: 's100-2', label: 'Producto 2' },
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'Sistema 100 de Algodón',
    intro: 'Fórmula suave con proteínas naturales ideal para cabellos sensibles.',
    products: [
      { key: 'alg-1', label: 'Producto 1' },
      { key: 'alg-2', label: 'Producto 2' },
    ],
  },
  {
    id: 3,
    num: '03',
    name: 'Nanoplastia de Frutos Rojos',
    intro: 'Tratamiento nutritivo con antioxidantes para cabello brillante y sedoso.',
    products: [
      { key: 'nano-1', label: 'Producto 1' },
      { key: 'nano-2', label: 'Producto 2' },
      { key: 'nano-3', label: 'Producto 3' },
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'Botox Capilar',
    intro: 'Reconstrucción intensiva que rellena la fibra capilar desde adentro.',
    products: [
      { key: 'btx-1', label: 'Producto 1' },
      { key: 'btx-2', label: 'Producto 2' },
    ],
  },
]

const previousTreatmentDraft = [
  {
    id: 1,
    num: '01',
    name: 'Sistema 100',
    intro: 'Alacia 100%, hidrata, elimina el frizz y deja el cabello suave y manejable.',
    description: 'Tratamiento alaciante para cabello virgen, grueso, grifo, crespo o con tinte, siempre que no tenga daños por decoloración.',
    benefits: ['Alacia 100%', 'Hidrata', 'Elimina el frizz', 'Deja el cabello suave y manejable'],
    hairTypes: 'Cabello virgen, grueso, grifo, crespo y con tinte, sin daños por decoloración.',
    duration: 'De 5 a 7 meses.',
    processNote: 'Se lava el mismo día para ver los resultados reales.',
    formulaNote: 'Información de la marca: tratamientos a base de ácido hialurónico y aceites, respaldados por ELIXIUM.',
    verificationNote: '',
    products: [
      { key: 's100-1', label: 'Producto 1' },
      { key: 's100-2', label: 'Producto 2' },
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'Sistema 100 de Algodón',
    intro: 'Especial para cabellos decolorados; alacia 100%, hidrata y elimina el frizz.',
    description: 'Tratamiento alaciante pensado para cabellos decolorados, con mechas, tratamientos de decoloración o tintes extremos.',
    benefits: ['Alacia 100%', 'Regenera la fibra capilar', 'Hidrata', 'Elimina el frizz', 'Deja el cabello suave y manejable'],
    hairTypes: 'Cabellos decolorados, con mechas, con tratamientos de decoloración o tintes extremos.',
    duration: 'De 4 a 5 meses.',
    processNote: 'Se lava el mismo día para ver los resultados reales.',
    formulaNote: 'Información de la marca: tratamiento a base de ácido hialurónico y aceites, respaldado por ELIXIUM.',
    verificationNote: 'La afirmación “no pica, no irrita” debe verificarse según la sensibilidad de cada persona.',
    products: [
      { key: 'alg-1', label: 'Producto 1' },
      { key: 'alg-2', label: 'Producto 2' },
    ],
  },
  {
    id: 3,
    num: '03',
    name: 'Nanoplastia de Frutos Rojos',
    intro: 'Alacia 90%, hidrata, elimina el frizz y deja el cabello suave y manejable.',
    description: 'Tratamiento alaciante de efecto más suave, recomendado para cabello delgado, ondulado, esponjado o con decoloración sin daños extremos.',
    benefits: ['Alacia 90%', 'Hidrata', 'Elimina el frizz', 'Deja el cabello suave y manejable'],
    hairTypes: 'Cabello delgado, ondulado, esponjado y con decoloración sin daños extremos.',
    duration: 'De 4 a 5 meses.',
    processNote: 'Se lava el mismo día para ver los resultados reales.',
    formulaNote: 'Información de la marca: tratamientos a base de ácido hialurónico y aceites, respaldados por ELIXIUM.',
    verificationNote: 'La recomendación para embarazadas, mamás en lactancia y niñas desde 10 años, así como la afirmación “no pica, no irrita”, debe verificarse antes de presentarse como garantía.',
    products: [
      { key: 'nano-1', label: 'Producto 1' },
      { key: 'nano-2', label: 'Producto 2' },
      { key: 'nano-3', label: 'Producto 3' },
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'Botox Capilar',
    intro: 'No alacia; relaja el cabello, hidrata, elimina el frizz y ayuda a mantenerlo suave.',
    description: 'Tratamiento para relajar el cabello, reducir lo esponjado, hidratar y suavizar sin alaciar.',
    benefits: ['No alacia', 'Relaja el cabello', 'Regenera la fibra capilar', 'Hidrata', 'Elimina el frizz', 'Deja el cabello suave y manejable'],
    hairTypes: 'Cabello poroso, chicloso o delgado con daños por decoloraciones extremas.',
    duration: 'De 2 a 3 meses.',
    processNote: 'Lo recomendable es lavarlo al siguiente día para mejores resultados.',
    formulaNote: 'Información de la marca: tratamientos sin formol, a base de ácido hialurónico, aceites y colágeno, respaldados por ELIXIUM.',
    verificationNote: 'La afirmación “no pica, no irrita” debe verificarse según la sensibilidad de cada persona.',
    products: [
      { key: 'btx-1', label: 'Producto 1' },
      { key: 'btx-2', label: 'Producto 2' },
    ],
  },
]

const treatments = [
  {
    id: 1,
    num: '01',
    name: 'Sistema 100',
    intro: 'Alaciado de efecto liso, diseñado para reducir el frizz y dejar el cabello suave y manejable.',
    price: '$1,000–$5,000',
    description: 'Tratamiento de alaciado que busca transformar la textura del cabello para conseguir un acabado liso y facilitar su manejo diario.',
    benefits: [
      '**Alacia 100%**.',
      'Hidrata el cabello.',
      'Elimina el frizz.',
      'Deja el cabello suave y manejable.',
    ],
    hairTypes: '**Recomendado para cabello virgen, grueso, grifo, crespo o con tinte**, siempre que no presente daños por decoloración.',
    duration: '**De 5 a 7 meses aproximadamente.**',
    aftercare: 'El cabello se lava el mismo día del tratamiento para que la clienta pueda apreciar los resultados reales antes de salir del salón.',
    formula: ['Elaborado a base de ácido hialurónico y aceites.'],
  },
  {
    id: 2,
    num: '02',
    name: 'Sistema 100 de Algodón',
    intro: 'Alaciado diseñado especialmente para cabellos decolorados, con mechas o sometidos a procesos de coloración.',
    price: '$1,000–$5,000',
    description: 'Tratamiento de alaciado enfocado en conseguir un acabado liso mientras ayuda a mejorar la apariencia y manejabilidad del cabello procesado químicamente.',
    benefits: [
      '**Alacia 100%**.',
      'Ayuda a regenerar la fibra capilar, según la descripción del salón.',
      'Hidrata el cabello.',
      'Elimina el frizz.',
      'Deja el cabello suave y manejable.',
    ],
    hairTypes: '**Especialmente indicado para cabellos decolorados, con mechas, tratamientos de decoloración o tintes extremos.**',
    duration: '**De 4 a 5 meses aproximadamente.**',
    aftercare: 'El cabello se lava el mismo día del tratamiento para que la clienta pueda apreciar los resultados reales antes de salir del salón.',
    formula: ['Elaborado a base de ácido hialurónico y aceites.', 'Un tratamiento que **NO PICA, NO IRRITA**.'],
  },
  {
    id: 3,
    num: '03',
    name: 'Nanoplastia de Frutos Rojos',
    intro: 'Tratamiento de alaciado para reducir el frizz y conseguir un cabello más liso, suave y manejable.',
    price: '$1,000–$5,000',
    description: 'Tratamiento capilar enfocado en suavizar la textura del cabello, controlar el esponjado y conseguir un acabado liso con movimiento natural.',
    benefits: [
      '**Alacia 90%**.',
      'Hidrata el cabello.',
      'Elimina el frizz.',
      'Deja el cabello suave y manejable.',
    ],
    hairTypes: '**Recomendado para cabello delgado, ondulado, esponjado o con decoloración que no presente daños extremos.**',
    duration: '**De 4 a 5 meses aproximadamente.**',
    aftercare: 'El cabello se lava el mismo día del tratamiento para que la clienta pueda apreciar los resultados reales antes de salir del salón.',
    formula: [
      'Elaborado a base de ácido hialurónico y aceites.',
      'Un tratamiento que **NO PICA, NO IRRITA**.',
      '**Apto para mujeres embarazadas, madres en periodo de lactancia y niñas a partir de los 10 años.**',
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'Botox Capilar',
    intro: 'Tratamiento que hidrata, suaviza y reduce el frizz sin alaciar el cabello.',
    price: '$700–$2,000',
    description: 'Tratamiento capilar enfocado en mejorar la apariencia y manejabilidad del cabello, aportando suavidad e hidratación sin modificarlo para conseguir un acabado liso.',
    benefits: [
      'Relaja el cabello **sin alaciarlo**.',
      'Ayuda a regenerar la fibra capilar, según la descripción del salón.',
      'Hidrata el cabello.',
      'Elimina el frizz.',
      'Reduce el esponjado.',
      'Deja el cabello suave y manejable.',
    ],
    hairTypes: '**Recomendado para cabello poroso, chicloso o delgado con daños por decoloraciones extremas.** También es una opción para quienes desean relajar el cabello, reducir el esponjado e hidratarlo sin buscar un alaciado.',
    duration: '**De 2 a 3 meses aproximadamente.**',
    aftercare: 'Se recomienda esperar 48 horas antes de lavar el cabello para obtener mejores resultados.',
    formula: ['**NO ALACIA**.', '**Sin formol.**', 'Elaborado a base de ácido hialurónico y aceites.', 'Un tratamiento que **NO PICA, NO IRRITA**.'],
  },
]

const elixiumProducts = [
  {
    id: 'sistema-100',
    name: 'Sistema 100',
    image: null,
    description: 'Tratamiento profesional de alaciado diseñado para transformar el cabello rebelde, grueso o crespo, proporcionando un acabado liso, suave y manejable.',
    ingredients: ['Keratina', 'Ácido hialurónico'],
  },
  {
    id: 'sistema-100-algodon',
    name: 'Sistema 100 de Algodón',
    image: sistemaAlgodon100,
    description: 'Tratamiento profesional de alaciado especialmente diseñado para cabellos decolorados, con mechas o procesados químicamente.',
    ingredients: ['Aceite de semilla de algodón'],
  },
  {
    id: 'nanoplastia-frutos-rojos',
    name: 'Nanoplastia de Frutos Rojos',
    image: nanoplastiaFrutosRojos,
    description: 'Tratamiento capilar enfocado en suavizar la textura del cabello, controlar el frizz y conseguir un acabado más liso y brillante.',
    ingredients: ['Células madre de guaraná'],
  },
  {
    id: 'botox-capilar',
    name: 'Botox Capilar / Botox Orgánico',
    image: botoxCapilar,
    description: 'Tratamiento capilar extrahidratante que ayuda a mejorar la apariencia del cabello dañado, reducir el frizz y aportar suavidad, nutrición y brillo.',
    ingredients: ['Nuez moscada', 'Almendras dulces', 'Avellanas', 'Vitaminas', 'Antioxidantes', 'Biotina'],
  },
]

const complementaryProducts = {
  id: 'productos-complementarios',
  name: 'Sérum + Mascarillas complementarias',
  image: serumYExtra,
}

function EmphasisText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useIntersection()
  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}

function GalleryCard({ item }: { item: GalleryItem }) {
  const badgeStyle = {
    backgroundColor: 'rgba(255, 245, 247, 0.88)',
    color: '#995B70',
  }

  if (item.type === 'pair') {
    return (
      <div
        className="grid h-full grid-cols-2 overflow-hidden rounded-sm"
        style={{ backgroundColor: '#F5E0E5', border: '1px solid #EDD0D8' }}
      >
        <div className="relative min-w-0 border-r border-[#EDD0D8]">
          <img src={item.before} alt={`${item.label} antes`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] tracking-[0.12em] uppercase" style={badgeStyle}>
            Antes
          </span>
        </div>
        <div className="relative min-w-0">
          <img src={item.after} alt={`${item.label} después`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] tracking-[0.12em] uppercase" style={badgeStyle}>
            Después
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative h-full overflow-hidden rounded-sm"
      style={{ backgroundColor: '#F5E0E5', border: '1px solid #EDD0D8' }}
    >
      <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
      <span className="absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] tracking-[0.12em] uppercase" style={badgeStyle}>
        {item.label}
      </span>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openTreatment, setOpenTreatment] = useState<number | null>(null)
  const [elixiumOpen, setElixiumOpen] = useState(false)

  const toggleTreatment = (id: number) => {
    setOpenTreatment(prev => (prev === id ? null : id))
  }

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Resultados', href: '#resultados' },
  ]
  const navLinksRight = [
    { label: 'Estudio', href: '#estudio' },
  ]

  return (
    <div className="min-h-screen bg-white text-[#30242B] font-[Inter,system-ui,sans-serif]">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-3">
        {/* Desktop: floating pill nav */}
        <div
          className="hidden md:flex items-center justify-between h-10 px-5 rounded-full max-w-2xl mx-auto"
          style={{ backgroundColor: '#BC7F91CC' }}
        >
          <nav className="flex gap-7 flex-1">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/85 text-[11px] tracking-[0.14em] uppercase hover:text-white transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#" className="flex-none px-4">
            <img
              src={bonicaLogo}
              alt="Bonica Hair"
              className="h-6 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          <nav className="flex gap-7 flex-1 justify-end items-center">
            {navLinksRight.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/85 text-[11px] tracking-[0.14em] uppercase hover:text-white transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#agenda"
              className="px-4 py-1.5 rounded-full text-[11px] tracking-[0.14em] uppercase text-[#BC7F91] bg-white hover:bg-white/90 transition-colors whitespace-nowrap font-medium"
            >
              Agenda
            </a>
          </nav>
        </div>

        {/* Mobile: compact rounded bar */}
        <div
          className="flex md:hidden items-center justify-between h-10 px-5 rounded-full"
          style={{ backgroundColor: '#BC7F91CC' }}
        >
          <a href="#">
            <img
              src={bonicaLogo}
              alt="Bonica Hair"
              className="h-6 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
            className="text-white p-1"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className="md:hidden mx-0 overflow-hidden rounded-2xl mt-2"
          style={{
            maxHeight: menuOpen ? '280px' : '0',
            transition: 'max-height 0.35s ease',
            backgroundColor: '#995B70',
          }}
        >
          <nav className="flex flex-col py-4 px-5 gap-1">
            {[...navLinks, ...navLinksRight].map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 text-sm tracking-[0.1em] uppercase py-2.5 border-b border-white/10 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="#agenda"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2.5 rounded-full text-sm tracking-[0.1em] uppercase bg-white text-[#995B70] font-medium hover:bg-white/90 transition-colors"
              >
                Agenda
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#FFF5F7' }}
      >
        {/* Inner container: padding-top clears the fixed nav, padding-bottom keeps hero compact */}
        <div
          className="relative mx-auto px-6"
          style={{
            maxWidth: '1100px',
            paddingTop: 'clamp(4.5rem, 9vh, 6rem)',
            paddingBottom: 'clamp(2rem, 4vh, 3.5rem)',
          }}
        >
          {/* ── Sprite: blow dryer — upper-left of container ── */}
          <img src={spriteDryer} alt="" aria-hidden style={{
            position: 'absolute', top: '8%', left: '0%',
            width: 'clamp(60px, 8vw, 110px)', transform: 'rotate(-20deg)',
            mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 5, opacity: 0.85,
          }} />

          {/* ── Sprite: comb — lower-left ── */}
          <img src={spriteComb} alt="" aria-hidden style={{
            position: 'absolute', bottom: '10%', left: '1%',
            width: 'clamp(50px, 6vw, 88px)', transform: 'rotate(20deg)',
            mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 5, opacity: 0.8,
          }} />

          {/* ── Sprite: scissors — upper-right ── */}
          <img src={spriteScissors} alt="" aria-hidden style={{
            position: 'absolute', top: '6%', right: '1%',
            width: 'clamp(52px, 6.5vw, 92px)', transform: 'rotate(10deg)',
            mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 5, opacity: 0.85,
          }} />

          {/* ── Sprite: curler — lower-right ── */}
          <img src={spriteCurler} alt="" aria-hidden style={{
            position: 'absolute', bottom: '8%', right: '0%',
            width: 'clamp(56px, 7vw, 100px)', transform: 'rotate(-18deg)',
            mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 5, opacity: 0.82,
          }} />

          {/* ── Desktop: side-by-side layout ── */}
          <div className="hidden md:flex items-center justify-center gap-10 relative z-10">
            {/* Text block */}
            <div className="flex flex-col gap-1">
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300, color: '#795B50',
                letterSpacing: '-0.02em', lineHeight: 0.88,
                fontSize: 'clamp(5rem, 8.5vw, 9.5rem)', margin: 0, whiteSpace: 'nowrap',
              }}>
                Bonica&thinsp;<span style={{ fontStyle: 'italic' }}>Hair</span>
              </h1>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontSize: '0.95rem',
                letterSpacing: '0.22em', color: '#795B50', opacity: 0.82,
                paddingLeft: '0.25rem', marginTop: '0.6rem',
              }}>
                by Cris Hdz
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontSize: '1.2rem',
                color: '#4A3728', opacity: 0.72, paddingLeft: '0.25rem',
              }}>
                Cuida tu cabello, es la única corona que no te quitas
              </p>
            </div>

            {/* Roller girl — beside the title */}
            <img
              src={rollerGirl}
              alt="Bonica Hair illustration"
              style={{
                width: 'clamp(140px, 16vw, 220px)',
                flexShrink: 0,
                mixBlendMode: 'multiply',
                display: 'block',
              }}
            />
          </div>

          {/* ── Mobile: stacked layout ── */}
          <div className="flex md:hidden flex-col items-center text-center gap-4 relative z-10">
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300, color: '#795B50',
              letterSpacing: '-0.02em', lineHeight: 0.88,
              fontSize: 'clamp(3.6rem, 18vw, 5.2rem)', margin: 0,
            }}>
              Bonica<br /><span style={{ fontStyle: 'italic' }}>Hair</span>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontSize: '0.86rem',
                letterSpacing: '0.2em', color: '#795B50', opacity: 0.82,
              }}>
                by Cris Hdz
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontSize: '1.06rem',
                color: '#4A3728', opacity: 0.72,
              }}>
                Cuida tu cabello, es la única corona que no te quitas
              </p>
            </div>
            {/* Roller girl below text on mobile */}
            <img
              src={rollerGirl}
              alt="Bonica Hair illustration"
              style={{
                width: 'clamp(120px, 36vw, 180px)',
                mixBlendMode: 'multiply',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="pt-12 pb-10 px-6">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="flex items-baseline mb-7">
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
            >
              Servicios
            </h2>
          </div>

          {/* Mobile: horizontal scroll — flush px-5, scrollbar hidden, dot indicator */}
          <div
            className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory hide-scrollbar"
            style={{
              paddingLeft: '0.25rem',
              paddingRight: '1.25rem',
              paddingBottom: '0.75rem',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
            }}
          >
            {services.map(s => (
              <div
                key={s.id}
                className="flex-none snap-start flex flex-col gap-2"
                style={{ width: '48vw', maxWidth: '190px' }}
              >
                <div
                  className="w-full aspect-[3/4] overflow-hidden rounded-sm"
                  style={{ backgroundColor: s.featured ? '#F5E0E5' : '#FFF5F7', border: '1px solid #F5E0E5' }}
                >
                  <img src={s.image} alt={s.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide">{s.label}</p>
                  {s.featured && (
                    <p className="text-xs text-[#BC7F91] mt-0.5">Especialidad</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Swipe indicator dots */}
          <div className="md:hidden flex justify-center gap-1.5 mt-3">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="rounded-full"
                style={{
                  width: i === 0 ? '16px' : '6px',
                  height: '6px',
                  backgroundColor: i === 0 ? '#BC7F91' : '#F5E0E5',
                  transition: 'width 0.2s',
                }}
              />
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-5">
            {services.map(s => (
              <div key={s.id} className="flex flex-col gap-3 group cursor-pointer">
                <div
                  className="w-full aspect-[3/4] overflow-hidden rounded-sm"
                  style={{ backgroundColor: s.featured ? '#F5E0E5' : '#FFF5F7', border: '1px solid #F5E0E5' }}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide">{s.label}</p>
                  {s.featured && (
                    <p className="text-xs text-[#BC7F91] mt-0.5">Especialidad</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-[#F5E0E5]" />
      </div>

      {/* ── TRATAMIENTOS ── */}
      <section id="tratamientos" className="pt-10 pb-12 px-6" style={{ backgroundColor: '#FAF7F2' }}>
        <FadeIn className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
          >
            Tratamientos
          </h2>
          <p className="text-sm mb-10" style={{ color: '#4A3728', opacity: 0.5 }}>
            Elige el tratamiento ideal para tu cabello.
          </p>

          <div className="flex flex-col">
            {treatments.map((t, i) => (
              <div key={t.id}>
                {i > 0 && <div className="h-px" style={{ backgroundColor: '#E8DDD4' }} />}
                <button
                  type="button"
                  aria-expanded={openTreatment === t.id}
                  className="w-full text-left py-6 flex items-center gap-5 group"
                  onClick={() => toggleTreatment(t.id)}
                >
                  <span className="text-xs tracking-[0.15em] pt-0.5 flex-none" style={{ color: '#BC7F91' }}>
                    {t.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-lg md:text-xl transition-colors group-hover:text-[#BC7F91]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#4A3728' }}
                    >
                      {t.name}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: '#4A3728', opacity: 0.56 }}>{t.price}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: '#BC7F91' }}>
                      {openTreatment === t.id ? 'Ocultar detalles' : 'Ver detalles'}
                    </span>
                    <span
                      className="flex-none text-xl"
                      style={{ color: '#BC7F91', transform: openTreatment === t.id ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-block' }}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: openTreatment === t.id ? '1100px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.45s ease',
                  }}
                >
                  <div className="pb-8 pl-10 pr-2 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Descripción</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}><EmphasisText text={t.description} /></p>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Beneficios</p>
                        <ul className="space-y-1">
                          {t.benefits.map(benefit => (
                            <li key={benefit} className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}>
                              <EmphasisText text={benefit} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Tipo de cabello</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}><EmphasisText text={t.hairTypes} /></p>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Duración aprox.</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}><EmphasisText text={t.duration} /></p>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Cuidados posteriores</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}><EmphasisText text={t.aftercare} /></p>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.12em] uppercase mb-1" style={{ color: '#BC7F91' }}>Características de la fórmula</p>
                        <ul className="space-y-1">
                          {t.formula.map(item => (
                            <li key={item} className="text-sm leading-relaxed" style={{ color: '#4A3728', opacity: 0.72 }}>
                              <EmphasisText text={item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="#agenda"
                      className="self-start px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#BC7F91' }}
                    >
                      Agendar este tratamiento
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-center text-[11px] tracking-[0.12em] uppercase" style={{ color: '#BC7F91' }}>
              Los precios pueden variar según el largo y la cantidad de cabello.
            </div>
            <div className="h-px mt-6" style={{ backgroundColor: '#E8DDD4' }} />
          </div>

          <div className="mt-10 rounded-sm p-6" style={{ backgroundColor: '#FFF5F7', border: '1px solid #E8DDD4' }}>
            <button
              type="button"
              onClick={() => setElixiumOpen(prev => !prev)}
              className="w-full text-left flex items-start justify-between gap-6"
            >
              <div>
                <p className="text-xs tracking-[0.18em] uppercase mb-2" style={{ color: '#BC7F91' }}>
                  La marca que utilizamos
                </p>
                <h3
                  className="text-2xl md:text-3xl mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
                >
                  ELIXIUM
                </h3>
                <p className="text-sm leading-relaxed max-w-xl" style={{ color: '#4A3728', opacity: 0.62 }}>
                  Trabajamos con productos de ELIXIUM, una marca mexicana de tratamientos capilares.
                </p>
                <p className="text-xs tracking-[0.15em] uppercase mt-5" style={{ color: '#BC7F91' }}>
                  Conoce nuestros productos →
                </p>
              </div>
              <span
                className="flex-none text-xl mt-1"
                style={{ color: '#BC7F91', transform: elixiumOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', display: 'inline-block' }}
              >
                +
              </span>
            </button>

            <div
              style={{
                maxHeight: elixiumOpen ? '2200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.45s ease',
              }}
            >
              <div className="pt-6 mt-6 border-t" style={{ borderColor: '#E8DDD4' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {elixiumProducts.map(product => (
                    <div key={product.id} className="rounded-sm p-3 flex h-full flex-col" style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DDD4' }}>
                      <p className="text-xs tracking-[0.14em] uppercase mb-3" style={{ color: '#BC7F91' }}>
                        {product.name}
                      </p>
                      {product.image ? (
                        <div className="mb-4 overflow-hidden rounded-sm border" style={{ aspectRatio: '1 / 1', backgroundColor: '#F5E0E5', borderColor: '#E8DDD4' }}>
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ) : (
                        <div
                          className="mb-4 flex items-center justify-center rounded-sm"
                          style={{ height: '18rem', backgroundColor: '#F0EAE0', border: '1px solid #E8DDD4' }}
                        >
                          <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: '#C4B5A5' }}>
                            Producto ELIXIUM
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A3728', opacity: 0.72 }}>{product.description}</p>
                        {product.ingredients && (
                          <div className="mb-3">
                            <p className="text-[10px] tracking-[0.12em] uppercase mb-1" style={{ color: '#C4B5A5' }}>
                              Ingredientes destacados
                            </p>
                            <ul className="space-y-1">
                              {product.ingredients.map(ingredient => (
                                <li key={ingredient} className="text-xs leading-relaxed" style={{ color: '#4A3728', opacity: 0.7 }}>
                                  • {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-sm border" style={{ aspectRatio: '1 / 1', backgroundColor: '#F5E0E5', borderColor: '#E8DDD4' }}>
                  <img
                    src={complementaryProducts.image}
                    alt={complementaryProducts.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── RESULTADOS ── */}
      <section id="resultados" style={{ backgroundColor: '#FFF5F7' }} className="pt-10 pb-12 px-6">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
            >
              Resultados
            </h2>
            <span className="text-xs tracking-[0.15em] uppercase" style={{ color: '#BC7F91' }}>
              Galería
            </span>
          </div>

          {/* Mobile: horizontal swipe */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto flex gap-3 pb-4 snap-x snap-mandatory hide-scrollbar">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="flex-none snap-start"
                style={{ width: item.type === 'pair' ? '82vw' : '58vw' }}
              >
                <div className="w-full aspect-[3/4]">
                  <GalleryCard item={item} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: masonry-like grid */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className="rounded-sm"
                style={{
                  aspectRatio: item.type === 'pair' ? '4/3' : i % 5 === 0 ? '3/5' : '3/4',
                }}
              >
                <GalleryCard item={item} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── ESTUDIO ── */}
      <section id="estudio" className="pt-10 pb-12 px-6" style={{ backgroundColor: '#F0EAE0' }}>
        <FadeIn className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div
              className="w-full md:w-2/5 aspect-[4/5] rounded-sm flex-none"
              style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DDD4' }}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-xs tracking-[0.12em] uppercase" style={{ color: '#C4B5A5' }}>
                  Fotografía del estudio
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#BC7F91' }}>El Estudio</p>
              <h2
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
              >
                Un espacio creado<br />
                <span style={{ fontStyle: 'italic' }}>para ti.</span>
              </h2>
              <div className="space-y-3">
                <div className="h-3 rounded w-full" style={{ backgroundColor: '#E8DDD4' }} />
                <div className="h-3 rounded w-5/6" style={{ backgroundColor: '#E8DDD4' }} />
                <div className="h-3 rounded w-4/5" style={{ backgroundColor: '#E8DDD4' }} />
                <div className="h-3 rounded w-3/4" style={{ backgroundColor: '#E8DDD4' }} />
              </div>
              <p className="text-sm italic" style={{ color: '#4A3728', opacity: 0.45 }}>
                Descripción del estudio próximamente.
              </p>
              <a
                href="#agenda"
                className="self-start text-xs tracking-[0.15em] uppercase pb-0.5 hover:opacity-70 transition-opacity"
                style={{ color: '#BC7F91', borderBottom: '1px solid #BC7F91' }}
              >
                Conoce más →
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── AGENDA ── */}
      <section id="agenda" className="pt-12 pb-16 px-6" style={{ backgroundColor: '#FAF7F2' }}>
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#BC7F91' }}>Agenda</p>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#4A3728' }}
          >
            ¿Lista para tu cambio?
          </h2>
          <p className="text-sm mb-10 max-w-sm mx-auto" style={{ color: '#4A3728', opacity: 0.5 }}>
            Trabajamos con cita previa. Escríbenos por WhatsApp y con gusto te atendemos.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.1em] uppercase text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#BC7F91' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp para agendar
          </a>

          <div
            className="mt-10 overflow-hidden rounded-sm"
            style={{ border: '1px solid #E8DDD4', backgroundColor: '#F0EAE0' }}
          >
            <iframe
              title="Ubicación de Bonica Hair by Cris Hdez"
              src={googleMapsEmbedUrl}
              className="block w-full"
              style={{ height: 'clamp(240px, 42vw, 340px)', border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#BC7F91] hover:text-[#995B70] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Ver ubicación en Google Maps
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.12em] uppercase text-[#BC7F91]/70 hover:text-[#995B70] transition-colors"
            >
              Facebook
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#BC7F91' }} className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={bonicaLogo}
            alt="Bonica Hair"
            className="h-8 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-white/60 text-xs text-center">
            © {new Date().getFullYear()} Bonica Hair. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#servicios" className="text-white/70 text-xs tracking-[0.12em] uppercase hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#agenda" className="text-white/70 text-xs tracking-[0.12em] uppercase hover:text-white transition-colors">
              Agenda
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
