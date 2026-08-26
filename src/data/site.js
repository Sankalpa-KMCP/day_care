export const business = {
  name: 'Parkdale Daycare',
  shortName: 'Parkdale',
  neighbourhood: 'Parkdale',
  tagline: 'A caring place to learn, play & grow.',
  positioning:
    'Warm, play-filled childcare for Edmonton families — right in the Parkdale neighbourhood.',
  phone: {
    display: '+1 780-250-2524',
    friendly: '780-250-2524',
    tel: 'tel:+17802502524',
  },
  address: {
    street: '8608 112 Ave NW',
    city: 'Edmonton',
    province: 'AB',
    postalCode: 'T5B 0G4',
    short: '8608 112 Ave NW, Edmonton',
    oneLine: '8608 112 Ave NW, Edmonton, AB T5B 0G4',
  },
  hours: {
    days: 'Monday – Friday',
    time: '7:00 AM – 6:00 PM',
    short: 'Mon – Fri · 7 AM – 6 PM',
    note: 'Closed weekends',
  },
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=8608%20112%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5B%200G4',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Parkdale%20Daycare%2C%208608%20112%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5B%200G4&output=embed',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Parkdale+Daycare+8608+112+Ave+NW+Edmonton+AB',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
]

export const meta = {
  home: {
    title: 'Parkdale Daycare | Daycare & After School Care in Edmonton, AB',
    description:
      "Warm, play-filled daycare and after school care in Edmonton's Parkdale neighbourhood. Open Monday–Friday, 7 AM–6 PM. Call 780-250-2524 to book a visit.",
  },
  about: {
    title: 'About Us | Parkdale Daycare, Edmonton AB',
    description:
      "Get to know Parkdale Daycare — a warm, neighbourhood childcare centre in central Edmonton built around play, comfort and family connection.",
  },
  programs: {
    title: 'Programs | Daycare & After School Care — Parkdale Daycare',
    description:
      'Child care and after school care at Parkdale Daycare in Edmonton. See how our days are structured and find the right fit for your family.',
  },
  contact: {
    title: 'Contact | Parkdale Daycare Edmonton · 780-250-2524',
    description:
      'Call, visit or send an inquiry to Parkdale Daycare. 8608 112 Ave NW, Edmonton — open Monday–Friday, 7 AM–6 PM.',
  },
  notFound: {
    title: 'Page Not Found | Parkdale Daycare',
    description:
      'The page you’re looking for isn’t here. Head back to the Parkdale Daycare home page for programs, hours and contact details.',
  },
}

export const heroFacts = [
  { icon: 'pin', text: business.address.short },
  { icon: 'clock', text: business.hours.short },
]

export const photos = {
  hero: { src: null, alt: 'Children playing together at Parkdale Daycare', variant: 0 },
  heroPolaroid: { src: null, alt: 'Craft time at Parkdale Daycare', variant: 3 },
  why: { src: null, alt: 'Caregiver reading with children at Parkdale Daycare', variant: 2 },
  aboutIntro: { src: null, alt: 'Inside Parkdale Daycare', variant: 1 },
  filmstrip: [
    { src: null, alt: 'Play area at Parkdale Daycare', variant: 1 },
    { src: null, alt: 'Quiet reading time at Parkdale Daycare', variant: 2 },
    { src: null, alt: 'Arts and crafts at Parkdale Daycare', variant: 3 },
  ],
}

export const whyPoints = [
  {
    title: 'A caring environment',
    text: 'Comfort comes first. Children settle best when they feel safe and known, so warmth, patience and steady routines guide everything we do.',
  },
  {
    title: 'Learning through everyday experiences',
    text: 'Blocks, paint, stories, puddles. Ordinary moments are full of chances to explore, communicate, solve little problems and try new things.',
  },
  {
    title: 'Time to play',
    text: 'Play is serious work around here — room to move, imagine, build friendships and burn off energy.',
  },
  {
    title: 'Family connection',
    text: 'You know your child best. We keep conversation open with families so that care at Parkdale feels like a team effort.',
  },
]

export const afterSchool = {
  kicker: 'After School Care',
  title: 'When the bell rings, they have a place to land.',
  lead:
    'Our After School Care gives school-aged children a relaxed, welcoming spot to spend their afternoons — with time to unwind, play, create, catch up with friends and just be kids until pickup.',
  points: [
    'Room to unwind after a full school day',
    'Games, crafts and active play',
    'Afternoons spent with friends',
    'Open weekdays until 6 PM',
  ],
  ticket: {
    heading: 'School-day afternoons',
    rows: [
      { label: 'Days', value: 'Monday – Friday' },
      { label: 'Open until', value: '6:00 PM' },
      { label: 'Ages', value: 'Ask us about eligible ages' },
      { label: 'Availability', value: 'Ask about current spots' },
    ],
    footnote: 'Questions about pickup or transportation? Just ask us.',
  },
}

export const programsPreview = {
  childCare: {
    name: 'Child Care',
    blurb:
      'A full day of play, rest and discovery for our youngest crew — in bright, comfortable spaces made with little people in mind.',
    image: { src: null, alt: 'Bright play space at Parkdale Daycare' },
  },
  afterSchool: {
    name: 'After School Care',
    blurb:
      'School-aged kids get their own rhythm in the afternoons — time to decompress, play and hang out together until six.',
    note: 'after the bell rings…',
  },
}

export const philosophy = {
  quote: 'Small moments make big memories.',
  lead:
    'The painting that took all morning. The tower that finally stayed up. The friend made over snack time. Childhood is built out of little things — and we protect the time and space for them.',
}

export const galleryItems = [
  { id: 'g1', span: 'a', variant: 0, caption: 'The playroom', alt: 'Bright play space at Parkdale Daycare' },
  { id: 'g2', span: 'b', variant: 1, caption: 'Building & blocks', alt: 'Toys and blocks at Parkdale Daycare' },
  { id: 'g3', span: 'c', variant: 3, caption: 'Little artists', alt: 'Arts and crafts at Parkdale Daycare' },
  { id: 'g4', span: 'd', variant: 2, caption: 'Story time', alt: 'Story time at Parkdale Daycare' },
  { id: 'g5', span: 'e', variant: 0, caption: 'Playtime', alt: 'Children playing at Parkdale Daycare' },
  { id: 'g6', span: 'f', variant: 4, caption: 'Our home on 112 Ave', alt: 'Parkdale Daycare building on 112 Avenue, Edmonton' },
]

export const aboutSpaceItems = galleryItems.slice(0, 4)

export const approachItems = [
  {
    icon: 'heart',
    title: 'Care & belonging',
    text: 'Every child needs to feel seen. Warm, steady relationships come first — learning grows from there.',
  },
  {
    icon: 'sparkle',
    title: 'Play & curiosity',
    text: 'Open-ended play invites questions, experiments and discoveries, guided by children’s own interests.',
  },
  {
    icon: 'sprout',
    title: 'Confidence & independence',
    text: 'We cheer children on as they try, wobble, retry and master new things at their own pace.',
  },
  {
    icon: 'sun',
    title: 'Creativity & expression',
    text: 'Art, music, movement and pretend — plenty of outlets for big ideas and bigger imaginations.',
  },
]

export const teamMembers = [
  {
    id: 't1',
    name: 'Team member name',
    role: 'Role title',
    bio: 'A short introduction will appear here once staff profiles are finalized.',
    image: { src: null, alt: 'Parkdale Daycare team member' },
  },
  {
    id: 't2',
    name: 'Team member name',
    role: 'Role title',
    bio: 'A short introduction will appear here once staff profiles are finalized.',
    image: { src: null, alt: 'Parkdale Daycare team member' },
  },
  {
    id: 't3',
    name: 'Team member name',
    role: 'Role title',
    bio: 'A short introduction will appear here once staff profiles are finalized.',
    image: { src: null, alt: 'Parkdale Daycare team member' },
  },
]

export const programs = [
  {
    id: 'child-care',
    name: 'Child Care',
    kicker: 'Full days · Little ones',
    blurb:
      'Our full-day child care program gives younger children a safe, cheerful place to spend their days — balanced between active play, quiet time, creative activities and rest.',
    highlights: ['Bright play spaces', 'Rest & quiet time', 'Creative activities', 'Active play'],
    specs: [
      { label: 'Accepted ages', value: 'Ask us about eligible ages' },
      { label: 'Schedule', value: 'Monday – Friday · 7:00 AM – 6:00 PM' },
      { label: 'Current availability', value: 'Ask about current availability' },
      { label: 'Registration & fees', value: 'Shared during registration — just ask' },
    ],
    image: { src: null, alt: 'Children playing inside Parkdale Daycare' },
    featured: false,
  },
  {
    id: 'after-school-care',
    name: 'After School Care',
    kicker: 'After the bell',
    blurb:
      'A comfortable, supervised place for school-aged children to land after their school day — with opportunities to relax, play, create and spend time with friends until pickup.',
    highlights: ['Relaxed after-school pace', 'Creative & active play', 'Time with friends', 'Supervised until 6 PM'],
    specs: [
      { label: 'Schedule', value: 'School days · Monday – Friday' },
      { label: 'Open until', value: '6:00 PM' },
      { label: 'Accepted ages', value: 'Ask us about eligible ages' },
      { label: 'Transportation & pickup', value: 'Ask us about pickup options' },
      { label: 'Current availability', value: 'Ask about current availability' },
      { label: 'Fees & registration', value: 'Shared during registration — just ask' },
    ],
    image: { src: null, alt: 'School-aged children playing at Parkdale Daycare' },
    featured: true,
  },
]

export const testimonials = []

export const placeholderQuote =
  'We’re collecting stories from our Parkdale families — real words from real parents will live here soon.'


