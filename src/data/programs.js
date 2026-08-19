import { editorialImage } from '../utils/assetPath';

export const programsData = [
  {
    id: 'infant-toddler', title: 'The Nest', category: 'Infants & young toddlers', ageGroup: '6 weeks–2 years', ratio: 'Planned small groups',
    image: editorialImage('infant-care.webp'), imageAlt: 'Illustrative caregiver sharing gentle sensory play with two infants',
    description: 'A soft landing for first separations, built around familiar rhythms, unhurried care, and close attention.',
    environmentFocus: 'Quiet floor play, restful corners, familiar caregivers, and room to move at each child’s pace.',
    dailyFocusAreas: ['Responsive care and secure attachment', 'Sensory play with simple natural materials', 'Individual feeding and rest rhythms'],
    highlights: ['A consistent primary caregiver', 'Daily rhythm notes for families', 'Calm, low-stimulation spaces']
  },
  {
    id: 'preschool-learning', title: 'The Meadow', category: 'Toddlers & preschool', ageGroup: '2–4 years', ratio: 'Planned small groups',
    image: editorialImage('preschool-art.webp'), imageAlt: 'Illustrative preschool children making nature-inspired art together',
    description: 'A lively studio for language, messy making, friendship, movement, and the serious work of play.',
    environmentFocus: 'Open-ended art, block building, story circles, music, and a daily stretch of outdoor discovery.',
    dailyFocusAreas: ['Conversation, stories, and early language', 'Collaborative art and imaginative play', 'Movement, nature, and growing independence'],
    highlights: ['Long blocks of uninterrupted play', 'Small-group stories and projects', 'Daily outdoor exploration']
  },
  {
    id: 'pre-k-readiness', title: 'The Canopy', category: 'Older preschool & pre-K', ageGroup: '4–5 years', ratio: 'Planned small groups',
    image: editorialImage('prek-reading.webp'), imageAlt: 'Illustrative pre-K children sharing books and natural counting materials',
    description: 'A thoughtful bridge to school, with deeper projects, growing independence, and plenty of time to wonder.',
    environmentFocus: 'Inviting literacy corners, loose-parts mathematics, nature inquiry, and self-directed project tables.',
    dailyFocusAreas: ['Emergent reading, mark-making, and storytelling', 'Mathematical thinking through real materials', 'Collaboration, self-regulation, and confidence'],
    highlights: ['Project-based investigations', 'Everyday early literacy and maths', 'Gentle preparation for school routines']
  }
];

export const ageSchedules = {
  infants: [
    { time: 'Morning', icon: '01', title: 'Arrive & settle', desc: 'A familiar handoff, feeding or rest, and time to reconnect.' },
    { time: 'Mid-morning', icon: '02', title: 'Sensory floor play', desc: 'Textures, songs, mirrors, movement, and one-to-one conversation.' },
    { time: 'Midday', icon: '03', title: 'Food & rest', desc: 'Individual rhythms guide meals, bottles, sleep, and quiet care.' },
    { time: 'Afternoon', icon: '04', title: 'Fresh air & reunion', desc: 'Garden time, gentle play, and an unhurried family handoff.' }
  ],
  toddlers: [
    { time: 'Morning', icon: '01', title: 'Welcome & choose', desc: 'Children ease in through books, puzzles, building, or a quiet cuddle.' },
    { time: 'Mid-morning', icon: '02', title: 'Make & explore', desc: 'Art, stories, music, and small-group invitations shaped by curiosity.' },
    { time: 'Midday', icon: '03', title: 'Gather & rest', desc: 'A shared meal, a familiar story, then sleep or quiet time.' },
    { time: 'Afternoon', icon: '04', title: 'Garden & go home', desc: 'Outdoor play followed by a personal recap at pickup.' }
  ],
  preschool: [
    { time: 'Morning', icon: '01', title: 'Meet & plan', desc: 'A warm arrival followed by a short gathering to shape the day.' },
    { time: 'Mid-morning', icon: '02', title: 'Long project time', desc: 'Children investigate, build, draw, write, and work together.' },
    { time: 'Midday', icon: '03', title: 'Lunch & reset', desc: 'Conversation over lunch, then rest, reading, or quiet making.' },
    { time: 'Afternoon', icon: '04', title: 'Move & reflect', desc: 'Outdoor movement, project revisiting, and family handoff.' }
  ]
};

export const dailySchedule = ageSchedules.toddlers;
