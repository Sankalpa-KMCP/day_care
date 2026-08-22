/**
 * Transparent tuition estimates and scheduling options for The Little Grove
 */
export const tuitionPlans = {
  'infant-toddler': {
    name: 'The Nest',
    ageRange: '6 weeks – 2 years',
    ratio: '1:3 (Planned 1 guide per 3 infants)',
    maxGroupSize: '9 infants in dedicated nest room',
    baseDailyRate: 118,
    rates: {
      '5-day': { monthly: 2360, days: 5, label: 'Full Week (Mon–Fri)' },
      '3-day': { monthly: 1485, days: 3, label: '3 Days (Mon / Wed / Fri)' },
      '2-day': { monthly: 1015, days: 2, label: '2 Days (Tue / Thu)' },
    },
    hoursOptions: {
      core: { label: 'Core Day (8:30 AM – 3:30 PM)', surcharge: 0 },
      extended: { label: 'Extended Day (7:30 AM – 5:30 PM)', surcharge: 190 },
    },
    inclusions: [
      'Primary consistent attachment caregiver',
      'All organic purees, finger foods, and snacks',
      'Organic bamboo nappies, wipes, and sleep linen',
      'Daily individual rhythm journal & photo notes',
      'Peaceful, sound-dampened infant sanctuary room',
    ],
  },
  'preschool-learning': {
    name: 'The Meadow',
    ageRange: '2 – 4 years',
    ratio: '1:5 (Planned 1 guide per 5 toddlers)',
    maxGroupSize: '15 children in meadow studio',
    baseDailyRate: 104,
    rates: {
      '5-day': { monthly: 2080, days: 5, label: 'Full Week (Mon–Fri)' },
      '3-day': { monthly: 1310, days: 3, label: '3 Days (Mon / Wed / Fri)' },
      '2-day': { monthly: 895, days: 2, label: '2 Days (Tue / Thu)' },
    },
    hoursOptions: {
      core: { label: 'Core Day (8:30 AM – 3:30 PM)', surcharge: 0 },
      extended: { label: 'Extended Day (7:30 AM – 5:30 PM)', surcharge: 175 },
    },
    inclusions: [
      'Natural atelier studio materials (clay, paint, beeswax)',
      'Daily garden, mud kitchen & nature exploration',
      'Farm-to-table warm organic family lunch & 2 snacks',
      'Gentle toilet learning partnership & spare clothes care',
      'Weekly music, rhythm, and storytelling circles',
    ],
  },
  'pre-k-readiness': {
    name: 'The Canopy',
    ageRange: '4 – 5 years',
    ratio: '1:8 (Planned 1 guide per 8 pre-K learners)',
    maxGroupSize: '16 children in canopy studio',
    baseDailyRate: 96,
    rates: {
      '5-day': { monthly: 1920, days: 5, label: 'Full Week (Mon–Fri)' },
      '3-day': { monthly: 1210, days: 3, label: '3 Days (Mon / Wed / Fri)' },
      '2-day': { monthly: 825, days: 2, label: '2 Days (Tue / Thu)' },
    },
    hoursOptions: {
      core: { label: 'Core Day (8:30 AM – 3:30 PM)', surcharge: 0 },
      extended: { label: 'Extended Day (7:30 AM – 5:30 PM)', surcharge: 160 },
    },
    inclusions: [
      'Emergent literacy, storytelling & bookmaking projects',
      'Mathematics through loose parts & woodworking tools',
      'Environmental stewardship & garden harvest cooking',
      'Social conflict resolution & cooperative game play',
      'Comprehensive school transition portfolio',
    ],
  },
};
