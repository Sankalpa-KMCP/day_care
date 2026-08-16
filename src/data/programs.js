/**
 * Educational Programs, Activity Highlights, and Schedules
 * for Little Sunshine Daycare & Early Learning Academy
 */

export const programsData = [
  {
    id: 'infant-toddler',
    title: 'Infant & Toddler Care',
    ageGroup: '6 Weeks - 2 Years',
    category: 'Infants & Toddlers',
    ratio: '1:4 Caregiver Ratio',
    image: '/images/infant_toddler_room.jpg',
    badgeVariant: 'sage',
    description: 'A gentle, warm, and responsive environment focusing on sensory exploration, motor coordination, and nurturing individual routines for our youngest learners.',
    environmentFocus: 'Quiet padded rest zones, sensory exploration tables, low soft play stations, and secure indoor/outdoor crawler yards.',
    dailyFocusAreas: [
      'Responsive one-on-one caregiver bonding',
      'Sensory exploration with soft natural textures & calming music',
      'Supported motor coordination and tummy-time balance',
      'Individualized feeding, nap logs, and milestone tracking'
    ],
    highlights: [
      'Personalized daily feeding and nap logs in parent app',
      'Hands-on tactile and sensory stimulation stations',
      'Safe, ultra-hygienic, shoe-free nursery rooms',
      'Dedicated primary caregiver assignment'
    ]
  },
  {
    id: 'preschool-learning',
    title: 'Preschool Learning Academy',
    ageGroup: '2.5 - 4 Years',
    category: 'Preschool',
    ratio: '1:7 Teacher Ratio',
    image: '/images/preschool_art_play.jpg',
    badgeVariant: 'terracotta',
    description: 'Fostering natural curiosity, early language skills, foundational math concepts, and social sharing through collaborative play.',
    environmentFocus: 'Interactive learning centers for art, emergent reading, wooden block architecture, rhythm, and dramatic play.',
    dailyFocusAreas: [
      'Interactive morning circle, phonics games & vocabulary',
      'Shape sorting, counting, and pattern reasoning puzzles',
      'Cooperative group games and empathetic friendship building',
      'Expressive visual art, clay sculpting, and musical movement'
    ],
    highlights: [
      'Interactive reading and language circle time',
      'Early math and spatial reasoning discovery kits',
      'Guided social learning and emotion regulation',
      'Daily creative arts and supervised nature play'
    ]
  },
  {
    id: 'pre-k-readiness',
    title: 'Pre-K Kindergarten Readiness',
    ageGroup: '4 - 5 Years',
    category: 'Pre-Kindergarten',
    ratio: '1:10 Teacher Ratio',
    image: '/images/prek_reading_nook.jpg',
    badgeVariant: 'amber',
    description: 'Building self-confidence, concentration, emergent handwriting, STEM problem-solving, and independence to ensure smooth kindergarten transition.',
    environmentFocus: 'Structured classroom with cozy literacy nooks, hands-on STEM tables, and independent creative project stations.',
    dailyFocusAreas: [
      'Emergent reading comprehension, sight words & handwriting',
      'Early math operations, measurement & science discovery',
      'Developing focus, active listening, and self-directed projects',
      'Collaborative teamwork and conflict resolution skills'
    ],
    highlights: [
      'Kindergarten readiness curriculum with progress reviews',
      'Hands-on science discovery and nature lab experiments',
      'Self-regulation and active listening exercises',
      'Quarterly developmental parent-teacher conferences'
    ]
  }
];

export const activityHighlights = [
  {
    id: 'art-crafts',
    title: 'Arts & Creative Crafts',
    desc: 'Exploring colors, textures, finger painting, and collage work to foster fine motor skills and creative confidence.',
    iconSvg: 'palette'
  },
  {
    id: 'literacy-story',
    title: 'Storytime & Language',
    desc: 'Interactive group reading sessions that build vocabulary, listening comprehension, and a love for reading.',
    iconSvg: 'book'
  },
  {
    id: 'music-rhythm',
    title: 'Music & Movement',
    desc: 'Rhythm instruments, dancing, and singing games to enhance coordination, auditory processing, and joy.',
    iconSvg: 'music'
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Nature Exploration',
    desc: 'Supervised playground play, vegetable garden tending, and outdoor games to promote gross motor health.',
    iconSvg: 'sun'
  },
  {
    id: 'early-math',
    title: 'Early Math & STEM Puzzles',
    desc: 'Pattern matching, shape sorting, block building, and simple counting games that foster logical thinking.',
    iconSvg: 'puzzle'
  },
  {
    id: 'sensory-play',
    title: 'Sensory Discovery',
    desc: 'Water tables, sand exploration, and tactile materials that encourage scientific curiosity and sensory integration.',
    iconSvg: 'sparkles'
  }
];

export const ageSchedules = {
  'infants': [
    { time: '7:00 AM - 8:30 AM', title: 'Gentle Arrival & Individual Feedings', desc: 'Flexible parent handoff, cozy infant greeting, individualized morning feeding or nap.' },
    { time: '8:30 AM - 9:30 AM', title: 'Sensory & Tummy Time Exploration', desc: 'Soft texture play, soothing musical rhymes, guided tummy-time and mirror exploration.' },
    { time: '9:30 AM - 10:30 AM', title: 'Morning Nap / Stroller Fresh Air', desc: 'Quiet crib resting or peaceful outdoor buggy stroll through our secure garden.' },
    { time: '10:30 AM - 11:30 AM', title: 'Mid-Morning Feeding & Motor Play', desc: 'Organic puree or bottle feeding, sensory water pads, gentle rattle reach play.' },
    { time: '11:30 AM - 1:30 PM', title: 'Afternoon Rest & Soft Music', desc: 'Dimly lit rest room with white noise and gentle caregiver soothing.' },
    { time: '1:30 PM - 3:00 PM', title: 'Tactile Play & Finger Painting', desc: 'Non-toxic edible finger paints, soft block building, and language vocalization games.' },
    { time: '3:00 PM - 6:00 PM', title: 'Afternoon Feeding & Family Reunion', desc: 'Afternoon bottle/snack, quiet cuddles, daily app log finalization, and parent pickup.' }
  ],
  'toddlers': [
    { time: '7:00 AM - 8:30 AM', title: 'Arrival & Free Choice Play', desc: 'Gentle check-in, puzzle tables, and comfortable transition into the classroom.' },
    { time: '8:30 AM - 9:00 AM', title: 'Organic Snack & Circle Time', desc: 'Morning songs, weather chart, simple stories, and group hello songs.' },
    { time: '9:00 AM - 10:15 AM', title: 'Creative Discovery Centers', desc: 'Rotations between art studio, sensory sand tables, and block building.' },
    { time: '10:15 AM - 11:30 AM', title: 'Outdoor Nature Playground', desc: 'Sandbox exploration, tricycle riding, running, and garden exploration.' },
    { time: '11:30 AM - 12:30 PM', title: 'Chef-Prepared Lunch & Story', desc: 'Nutritious family-style lunch, table manners, and calming storybook.' },
    { time: '12:30 PM - 2:30 PM', title: 'Rejuvenating Nap & Rest Time', desc: 'Cozy cots with personalized sleep items in a quiet, darkened room.' },
    { time: '2:30 PM - 3:30 PM', title: 'Afternoon Fruit Snack & Music', desc: 'Fresh fruit snack followed by movement songs and rhythm instruments.' },
    { time: '3:30 PM - 6:00 PM', title: 'Outdoor Recess & Parent Pickup', desc: 'Afternoon playground playtime, story time, and daily recap with parents.' }
  ],
  'preschool': [
    { time: '7:00 AM - 8:30 AM', title: 'Arrival & Morning Journal/Puzzles', desc: 'Independent activity stations, drawing, puzzle solving, and sign-in.' },
    { time: '8:30 AM - 9:15 AM', title: 'Morning Meeting & Phonics Circle', desc: 'Calendar, phonetic sounds, letter of the week, and interactive story.' },
    { time: '9:15 AM - 10:30 AM', title: 'STEM & Guided Literacy Stations', desc: 'Math manipulatives, emergent writing practice, and science observations.' },
    { time: '10:30 AM - 11:45 AM', title: 'Outdoor Gross-Motor Exploration', desc: 'Team field games, climbing structures, nature specimen collection.' },
    { time: '11:45 AM - 12:45 PM', title: 'Healthy Lunch & Social Dining', desc: 'Balanced warm lunch, table cleanup skills, and conversational sharing.' },
    { time: '12:45 PM - 2:15 PM', title: 'Quiet Rest & Independent Reading', desc: 'Rest time with audiobooks or quiet chapter book nooks.' },
    { time: '2:15 PM - 3:30 PM', title: 'Creative Arts & Music Lab', desc: 'Watercolor painting, dramatic theater play, rhythm and ensemble music.' },
    { time: '3:30 PM - 6:00 PM', title: 'Enrichment Clubs & Family Handoff', desc: 'Outdoor garden clubs, free play centers, parent conversation and pickup.' }
  ]
};

export const dailySchedule = ageSchedules['toddlers'];
