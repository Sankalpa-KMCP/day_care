/**
 * Centralized activities and sample daily schedule data for Daycare Application
 * NOTE: Activity categories and daily schedule entries are prototype demonstration data.
 */
export const activitiesDisclaimer = 'Note: The activities and daily routine timeline below represent a sample demonstration schedule. Actual daily timings and center activities are adapted to weather and room age groups.';

export const activityCategories = [
  { id: 'all', label: 'All Activities' },
  { id: 'Creative Expression', label: 'Creative' },
  { id: 'Language Development', label: 'Literacy & Speech' },
  { id: 'Cognitive Skills', label: 'Math & Logic' },
  { id: 'Gross Motor Skills', label: 'Outdoor & Motor' }
];

export const activitiesData = [
  {
    id: 'arts-crafts',
    title: 'Arts & Crafts',
    category: 'Creative Expression',
    learningFocus: 'Fine motor precision, color exploration, and creative confidence.',
    description: 'Exploring colors, textures, finger painting, and collage work to foster fine motor skills and creative expression.',
    icon: '🎨'
  },
  {
    id: 'story-time',
    title: 'Storytime & Literacy',
    category: 'Language Development',
    learningFocus: 'Auditory processing, vocabulary expansion, and narrative listening.',
    description: 'Interactive group reading sessions that build listening comprehension, vocabulary, and a love for reading.',
    icon: '📚'
  },
  {
    id: 'music-movement',
    title: 'Music & Movement',
    category: 'Creative Expression',
    learningFocus: 'Rhythmic coordination, balance, and spatial awareness.',
    description: 'Rhythm instruments, dancing, and singing games to enhance coordination, auditory skills, and joy.',
    icon: '🎵'
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Exploration',
    category: 'Gross Motor Skills',
    learningFocus: 'Physical strength, active exercise, and cooperative group play.',
    description: 'Supervised playground play, outdoor games, and nature walks to promote active physical health and fresh air.',
    icon: '🌳'
  },
  {
    id: 'early-math',
    title: 'Early Math & Puzzles',
    category: 'Cognitive Skills',
    learningFocus: 'Spatial reasoning, pattern recognition, and problem-solving.',
    description: 'Pattern matching, shape sorting, block building, and simple counting games that build logical thinking.',
    icon: '🧩'
  },
  {
    id: 'sensory-play',
    title: 'Sensory Discovery',
    category: 'Cognitive Skills',
    learningFocus: 'Tactile exploration, scientific curiosity, and focus.',
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

export const parentActivityTips = [
  {
    icon: '👟',
    title: 'Comfortable Play Clothing',
    description: 'Dress children in comfortable, machine-washable clothing and closed-toe shoes suitable for art painting and playground play.'
  },
  {
    icon: '☀️',
    title: 'Seasonal Outdoor Items',
    description: 'Provide appropriate outdoor items for bright sunny days or cooler morning outdoor play periods.'
  },
  {
    icon: '🗣️',
    title: 'Sharing Daily Highlights',
    description: 'Ask your child about their favorite story or art project during pickup to reinforce learning confidence.'
  }
];
