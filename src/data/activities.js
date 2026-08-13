/**
 * Centralized activities and sample daily schedule data for Daycare Application
 */
export const activitiesData = [
  {
    id: 'arts-crafts',
    title: 'Arts & Crafts',
    category: 'Creative Expression',
    description: 'Exploring colors, textures, finger painting, and collage work to foster fine motor skills and creative expression.',
    icon: '🎨'
  },
  {
    id: 'story-time',
    title: 'Storytime & Literacy',
    category: 'Language Development',
    description: 'Interactive group reading sessions that build listening comprehension, vocabulary, and a love for reading.',
    icon: '📚'
  },
  {
    id: 'music-movement',
    title: 'Music & Movement',
    category: 'Physical & Creative',
    description: 'Rhythm instruments, dancing, and singing games to enhance coordination, auditory skills, and joy.',
    icon: '🎵'
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Exploration',
    category: 'Gross Motor Skills',
    description: 'Supervised playground play, outdoor games, and nature walks to promote active physical health and fresh air.',
    icon: '🌳'
  },
  {
    id: 'early-math',
    title: 'Early Math & Puzzles',
    category: 'Cognitive Skills',
    description: 'Pattern matching, shape sorting, block building, and simple counting games that build logical thinking.',
    icon: '🧩'
  },
  {
    id: 'sensory-play',
    title: 'Sensory Discovery',
    category: 'Exploration',
    description: 'Water tables, sand exploration, and tactile materials that encourage scientific curiosity and sensory integration.',
    icon: '✨'
  }
];

export const dailySchedule = [
  {
    id: 'arrival-greeting',
    time: '7:00 AM - 8:30 AM',
    title: 'Arrival & Morning Welcome',
    description: 'Flexible check-in, quiet table activities, and gentle transition into the morning routine.'
  },
  {
    id: 'breakfast-snack',
    time: '8:30 AM - 9:00 AM',
    title: 'Morning Snack & Circle Time',
    description: 'Gathering together for healthy snacks, songs, calendar check, and morning greetings.'
  },
  {
    id: 'guided-learning',
    time: '9:00 AM - 10:30 AM',
    title: 'Guided Learning & Activity Centers',
    description: 'Rotations through literacy, math, sensory discovery, and hands-on art stations.'
  },
  {
    id: 'outdoor-recess',
    time: '10:30 AM - 11:30 AM',
    title: 'Outdoor Play & Recreation',
    description: 'Active outdoor playground games, sandbox fun, and gross motor exercise.'
  },
  {
    id: 'lunch-time',
    time: '11:30 AM - 12:30 PM',
    title: 'Lunch & Storytime Prep',
    description: 'Nutritious mealtime, handwashing, and calming storytime before rest.'
  },
  {
    id: 'rest-nap',
    time: '12:30 PM - 2:30 PM',
    title: 'Rest & Quiet Nap Time',
    description: 'Peaceful environment for napping or quiet reading for non-nappers.'
  },
  {
    id: 'afternoon-snack',
    time: '2:30 PM - 3:30 PM',
    title: 'Afternoon Snack & Music',
    description: 'Refreshed snack time followed by group music, dancing, or drama play.'
  },
  {
    id: 'outdoor-freeplay',
    time: '3:30 PM - 5:00 PM',
    title: 'Free Exploration & Outdoor Fun',
    description: 'Child-directed outdoor play, building blocks, and group games.'
  },
  {
    id: 'departure',
    time: '5:00 PM - 6:00 PM',
    title: 'Quiet Centers & Evening Departure',
    description: 'Table puzzles, drawing, parent updates, and pickup transition.'
  }
];
