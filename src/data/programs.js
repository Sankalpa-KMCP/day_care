/**
 * Centralized programs placeholder data for Daycare Application
 * NOTE: All age ranges, program details, and schedules are prototype placeholders.
 * Small Daycare Refactor: Consolidated to 3 core program groups + integrated activity & schedule data.
 */
export const programsDisclaimer = 'Note: Age ranges, room placements, and daily structures are prototype placeholders designed for demonstration purposes.';
export const scheduleDisclaimer = 'Note: The daily routine below is a sample demonstration schedule. Actual daily timings are adapted based on room age groups and weather.';

export const programsData = [
  {
    id: 'infant-toddler',
    title: 'Infant & Toddler Care',
    ageGroup: '6 Weeks - 2 Years',
    category: 'Infants & Toddlers',
    icon: '👶',
    description: 'A gentle, warm, and responsive environment focusing on sensory exploration, motor coordination, and nurturing individual routines for our youngest learners.',
    environmentFocus: 'Quiet padded rest zones, sensory play tables, low activity centers, and safe outdoor play yards.',
    dailyFocusAreas: [
      'Responsive one-on-one caregiver interactions',
      'Sensory exploration with soft textures and music',
      'Supported motor coordination and balance play',
      'Daily feeding, nap, and routine communication'
    ],
    highlights: [
      'Personalized daily feeding and rest logs',
      'Hands-on tactile and sensory stimulation',
      'Safe, hygienic, and child-proofed rooms',
      'Daily verbal check-ins with parents'
    ]
  },
  {
    id: 'preschool-learning',
    title: 'Preschool Learning',
    ageGroup: '3 - 4 Years',
    category: 'Preschool',
    icon: '🎨',
    description: 'Fostering natural curiosity, early literacy, foundational math concepts, and guided social sharing through collaborative play.',
    environmentFocus: 'Interactive learning centers for art, reading, block building, rhythm, and imaginative play.',
    dailyFocusAreas: [
      'Storytime, vocabulary, and phonics games',
      'Shape sorting, counting, and pattern puzzles',
      'Cooperative group play and social sharing',
      'Expressive art, music, and dramatic play'
    ],
    highlights: [
      'Interactive reading and language circle time',
      'Early math and spatial reasoning tasks',
      'Guided social learning and empathy building',
      'Daily creative arts and outdoor recess'
    ]
  },
  {
    id: 'pre-k-readiness',
    title: 'Pre-K Readiness',
    ageGroup: '4 - 5 Years',
    category: 'Pre-K',
    icon: '🚀',
    description: 'Building confidence, structured concentration, emergent writing prep, and STEM concepts to prepare children for kindergarten.',
    environmentFocus: 'Structured learning layout with reading nooks, independent activity centers, and science stations.',
    dailyFocusAreas: [
      'Emergent reading comprehension and letter writing',
      'Basic math operations and hands-on science games',
      'Developing focus, active listening, and task completion',
      'Collaborative group projects and social confidence'
    ],
    highlights: [
      'Foundational reading and emergent writing prep',
      'Hands-on science discovery and counting',
      'Self-regulation and active listening skills',
      'Group problem-solving and creative projects'
    ]
  }
];

export const activityHighlights = [
  {
    id: 'art-crafts',
    icon: '🎨',
    title: 'Arts & Creative Crafts',
    desc: 'Exploring colors, textures, finger painting, and collage work to foster fine motor skills and creative confidence.'
  },
  {
    id: 'literacy-story',
    icon: '📚',
    title: 'Storytime & Language',
    desc: 'Interactive group reading sessions that build vocabulary, listening comprehension, and a love for reading.'
  },
  {
    id: 'music-rhythm',
    icon: '🎵',
    title: 'Music & Movement',
    desc: 'Rhythm instruments, dancing, and singing games to enhance coordination, auditory processing, and joy.'
  },
  {
    id: 'outdoor-play',
    icon: '🌳',
    title: 'Outdoor Exploration',
    desc: 'Supervised playground play, nature walks, and outdoor games to promote active physical health and gross motor play.'
  },
  {
    id: 'early-math',
    icon: '🧩',
    title: 'Early Math & Puzzles',
    desc: 'Pattern matching, shape sorting, block building, and simple counting games that foster logical thinking.'
  },
  {
    id: 'sensory-play',
    icon: '✨',
    title: 'Sensory Discovery',
    desc: 'Water tables, sand exploration, and tactile materials that encourage scientific curiosity and sensory integration.'
  }
];

export const dailySchedule = [
  {
    time: '7:00 AM - 8:30 AM',
    title: 'Arrival & Morning Welcome',
    desc: 'Flexible check-in, quiet table games, and gentle transition into the morning routine.'
  },
  {
    time: '8:30 AM - 9:00 AM',
    title: 'Morning Snack & Circle Time',
    desc: 'Healthy snack, morning songs, calendar check, and group greetings.'
  },
  {
    time: '9:00 AM - 10:30 AM',
    title: 'Guided Learning & Play Centers',
    desc: 'Rotations through literacy, math, sensory play, and creative art stations.'
  },
  {
    time: '10:30 AM - 11:30 AM',
    title: 'Outdoor Recess & Recreation',
    desc: 'Active outdoor playground fun, sandbox exploration, and gross motor play.'
  },
  {
    time: '11:30 AM - 12:30 PM',
    title: 'Lunch & Storytime',
    desc: 'Nutritious mealtime, handwashing, and calming storytime before rest.'
  },
  {
    time: '12:30 PM - 2:30 PM',
    title: 'Rest & Quiet Nap Time',
    desc: 'Peaceful environment for napping or quiet table reading for non-nappers.'
  },
  {
    time: '2:30 PM - 3:30 PM',
    title: 'Afternoon Snack & Music',
    desc: 'Refreshed snack time followed by group music, dancing, or story circle.'
  },
  {
    time: '3:30 PM - 6:00 PM',
    title: 'Free Exploration & Departure',
    desc: 'Child-directed outdoor play, table puzzles, parent updates, and evening pickup.'
  }
];
