/**
 * The Little Grove Early Years Developmental Framework
 * Shows progression across the 5 core learning domains through each room.
 */
export const curriculumDomains = [
  {
    id: 'language',
    title: 'Language, Stories & Voice',
    icon: '📚',
    accent: 'clay',
    summary: 'Building expressive confidence, phonemic joy, rich vocabulary, and personal storytelling.',
    progression: {
      'infant-toddler': {
        focus: 'Babble conversations & song rituals',
        examples: 'Eye-to-eye responsive sound mirroring, rhythmic nursery rhymes, tactile touch-and-feel books.',
      },
      'preschool-learning': {
        focus: 'Expressive vocabulary & collaborative tales',
        examples: 'Daily group story circles, puppet theatre, dictating observations, dramatic role-play dialogues.',
      },
      'pre-k-readiness': {
        focus: 'Emergent literacy & book authorship',
        examples: 'Letter-sound phonics through loose parts, handmade storybook binding, journaling daily theories.',
      },
    },
  },
  {
    id: 'math-science',
    title: 'Math, Pattern & Nature Inquiry',
    icon: '🌿',
    accent: 'honey',
    summary: 'Discovering quantity, spatial reasoning, cause-and-effect, and biological stewardship.',
    progression: {
      'infant-toddler': {
        focus: 'Sensory spatial exploration & object permanence',
        examples: 'Nesting wooden bowls, peek-a-boo gravity chutes, water splashing, feeling smooth vs rough stones.',
      },
      'preschool-learning': {
        focus: 'Counting, sorting & plant cycles',
        examples: 'Sorting river rocks by weight and hue, tending sunflower seedlings, balance scale experiments.',
      },
      'pre-k-readiness': {
        focus: 'Patterning, measurement & ecological mapping',
        examples: 'Measuring garden beds with twine, designing marble runs, tracking weather patterns in chart books.',
      },
    },
  },
  {
    id: 'physical',
    title: 'Movement, Balance & Sensory Courage',
    icon: '🏃',
    accent: 'sage',
    summary: 'Refining gross and fine motor coordination, spatial risk assessment, and bodily autonomy.',
    progression: {
      'infant-toddler': {
        focus: 'Self-initiated rolling, crawling & cruising',
        examples: 'Low ramps, firm floor mats, reaching for suspended silks, practicing self-feeding with child spoons.',
      },
      'preschool-learning': {
        focus: 'Climbing, balance & tool mastery',
        examples: 'Log walking, wheelbarrow pushing, pouring water from small ceramic pitchers, clay pinch pot sculpting.',
      },
      'pre-k-readiness': {
        focus: 'Agility, tool safety & complex construction',
        examples: 'Real child-safe wooden hammers/nails, running garden obstacle courses, intricate scissors and needlepoint.',
      },
    },
  },
  {
    id: 'social-emotional',
    title: 'Emotional Regulation & Empathy',
    icon: '💛',
    accent: 'clay',
    summary: 'Fostering deep psychological safety, peer conflict resolution, and community identity.',
    progression: {
      'infant-toddler': {
        focus: 'Secure attachment & gentle separation',
        examples: 'Consistent primary caregiver holding, predictable transitions, soothing calm-down snuggle corners.',
      },
      'preschool-learning': {
        focus: 'Turn-taking, naming feelings & friendship',
        examples: 'Emotion stone cards, co-building block towers, collaborative cleanup songs, sharing snack duties.',
      },
      'pre-k-readiness': {
        focus: 'Restorative conflict resolution & leadership',
        examples: 'Peace table negotiations, mentoring younger classroom visitors, setting classroom group community agreements.',
      },
    },
  },
  {
    id: 'creative-arts',
    title: 'Atelier Arts, Sound & Movement',
    icon: '🎨',
    accent: 'honey',
    summary: 'Unbounded creative expression using authentic natural materials, tone, and sculpture.',
    progression: {
      'infant-toddler': {
        focus: 'Sensory marks & organic soundscapes',
        examples: 'Finger painting with berry purees on easel paper, wooden xylophones, gentle chime bells.',
      },
      'preschool-learning': {
        focus: 'Clay sculpture & watercolor blending',
        examples: 'Terracotta pinch bowls, primary color mixing on wet rag paper, loose-part self-portrait collages.',
      },
      'pre-k-readiness': {
        focus: 'Multi-medium installations & shadow play',
        examples: 'Architectural cardboard and wood installations, overhead projector shadow theatre, acoustic song creation.',
      },
    },
  },
];
