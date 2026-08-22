import { editorialImage } from '../utils/assetPath';

export const spacesData = [
  {
    id: 'atelier',
    name: 'The Light & Making Atelier',
    category: 'Creativity & Fine Motor',
    image: editorialImage('preschool-art.webp'),
    alt: 'Children engaged in creative making and sensory art at a sunlit wooden table',
    shortDesc: 'A studio where clay, watercolor, beeswax, and natural fibers invite deep open-ended investigation.',
    accent: 'clay',
    tag: 'Preschool & Pre-K Studio',
    pedagogyQuote: '“Materials are not craft assignments—they are a language children use to think aloud.”',
    stations: [
      {
        title: 'Botanical Clay Table',
        description: 'Terracotta and white earthenware clay paired with pinecones, seed pods, and wooden carving styluses.',
      },
      {
        title: 'Light & Transparency Board',
        description: 'Overhead sunlight and backlit tables for exploring colored glass pebbles, prisms, and leaf veins.',
      },
      {
        title: 'Natural Dye & Pigment Nook',
        description: 'Beetroot, turmeric, spirulina, and blueberry natural watercolors painted on unbleached rag paper.',
      },
    ],
  },
  {
    id: 'garden',
    name: 'The Nature Sanctuary & Mud Kitchen',
    category: 'Gross Motor & Ecology',
    image: editorialImage('outdoor-garden.webp'),
    alt: 'Children exploring an outdoor garden with wooden balancing logs and planting beds',
    shortDesc: 'Rain boots, mud soup, herb beds, balance logs, and long unhurried stretches of open sky.',
    accent: 'honey',
    tag: 'All Ages Daily Garden',
    pedagogyQuote: '“There is no bad weather when the soil is alive and the boots are sturdy.”',
    stations: [
      {
        title: 'Culinary Mud Kitchen',
        description: 'Stainless steel pots, wooden ladles, rainwater barrels, and crushed rosemary for sensory cooking.',
      },
      {
        title: 'Cedar Balance Log Trail',
        description: 'Fallen cedar trunks and stepping stumps calibrated for building balance and proprioceptive courage.',
      },
      {
        title: 'Seed-to-Snack Garden Beds',
        description: 'Child-height raised cedar planter boxes with sugar snap peas, strawberries, mint, and chamomile.',
      },
    ],
  },
  {
    id: 'library',
    name: 'The Quiet Nook & Story Library',
    category: 'Language & Emotional Calm',
    image: editorialImage('prek-reading.webp'),
    alt: 'Cozy classroom reading corner with wool cushions, wooden bookshelves, and children sharing books',
    shortDesc: 'Soft wool rugs, picture books with rich art, quiet corners to decompress, and gentle audio listening.',
    accent: 'sage',
    tag: 'Rest & Discovery Nook',
    pedagogyQuote: '“A peaceful corner to pause is just as vital as an energetic playground.”',
    stations: [
      {
        title: 'Living Picture Book Library',
        description: 'Curated international folklore, poetry, botany guides, and stories celebrating diverse families.',
      },
      {
        title: 'Acoustic Wool Retreat',
        description: 'Felted sheepskin cushions and soft linen canopies designed to absorb sound for children needing quiet.',
      },
      {
        title: 'Oral Storytelling Basket',
        description: 'Handmade wooden forest animals and felted landscape mats for children to reenact their own narratives.',
      },
    ],
  },
  {
    id: 'nest',
    name: 'The Infant Movement & Sensory Nest',
    category: 'Infant Attachment & Movement',
    image: editorialImage('infant-care.webp'),
    alt: 'A serene infant room with soft woven mats, low mirrors, and natural wooden grasp toys',
    shortDesc: 'Low wooden mirrors, unhurried floor exploration, gentle lullabies, and soothing natural light.',
    accent: 'clay',
    tag: 'Infants (6wk – 2yr)',
    pedagogyQuote: '“Infants move when they are ready. We provide space, stillness, and trusted loving eyes.”',
    stations: [
      {
        title: 'Pikler Movement Triangle & Ramp',
        description: 'Low-incline birch climbing ramp and crawl tunnels designed for self-paced gross motor discovery.',
      },
      {
        title: 'Natural Texture Grasp Trays',
        description: 'Unfinished beech teething rings, woven silk ribbons, coconut fiber bowls, and brushed steel rattles.',
      },
      {
        title: 'Low Wall Horizon Mirrors',
        description: 'Shatterproof ground-level mirrors enabling infants to observe body coordination and joyful eye contact.',
      },
    ],
  },
];
