import { editorialImage } from '../utils/assetPath';

export const teamData = [
  {
    id: 'sample-guide-elena', name: 'Elena', role: 'Sample founding guide profile', credential: 'Illustrative role · credentials not final',
    bio: 'A calm listener who notices the small things: a new word, a brave goodbye, a friendship beginning.',
    focusAreas: ['Attachment-led care', 'Stories & language', 'Family partnership'],
    image: editorialImage('sample-educator-elena.webp'), imageAlt: 'Illustrative portrait of a future early-years guide in a classroom'
  },
  {
    id: 'sample-guide-marcus', name: 'Marcus', role: 'Sample studio guide profile', credential: 'Illustrative role · credentials not final',
    bio: 'A maker and thoughtful play partner who helps children turn loose parts, questions, and stories into shared projects.',
    focusAreas: ['Open-ended making', 'Outdoor inquiry', 'Social learning'],
    image: editorialImage('sample-educator-marcus.webp'), imageAlt: 'Illustrative portrait of a future studio guide arranging classroom materials'
  }
];
