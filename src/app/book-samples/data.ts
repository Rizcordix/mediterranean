// Define the interface for a single Book object
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: any; // This will hold the imported image module
  blurb: string;
  previewPages: any[]; // This will hold an array of imported image modules
}

import quietPreview3 from '../../assets/images/booksamples/pagepre1.png';
import quietPreview4 from '../../assets/images/booksamples/1700x2550.png';

import marshall1 from '../../assets/images/booksamples/Marshalls_Keep/1.png';
import marshall2 from '../../assets/images/booksamples/Marshalls_Keep/2.png';
import marshall3 from '../../assets/images/booksamples/Marshalls_Keep/3.png';

import billi1 from '../../assets/images/booksamples/Billi/1.png';
import billi2 from '../../assets/images/booksamples/Billi/2.png';
import billi3 from '../../assets/images/booksamples/Billi/3.png';

import beyondResume1 from '../../assets/images/booksamples/beyond_the_resume/1.png';
import beyondResume2 from '../../assets/images/booksamples/beyond_the_resume/2.png';
import beyondResume3 from '../../assets/images/booksamples/beyond_the_resume/3.png';

import lastgoodliar1 from '../../assets/images/booksamples/The_last_good_liar/1.png';
import lastgoodliar2 from '../../assets/images/booksamples/The_last_good_liar/2.png';
import lastgoodliar3 from '../../assets/images/booksamples/The_last_good_liar/3.png';

import magicalmoon1 from '../../assets/images/booksamples/The_Magical_moon/1.png';
import magicalmoon2 from '../../assets/images/booksamples/The_Magical_moon/2.png';
import magicalmoon3 from '../../assets/images/booksamples/The_Magical_moon/3.png';

import librarian1 from '../../assets/images/booksamples/Librarian_of_lost_things/1.png';
import librarian2 from '../../assets/images/booksamples/Librarian_of_lost_things/2.png';
import librarian3 from '../../assets/images/booksamples/Librarian_of_lost_things/3.png';



// --- The main data array, using the imported assets ---
export const bookData: Book[] = [
  {
    id: 'b1',
    title: 'The House You Build Within',
    author: 'Liam  Green',
    cover: "/sample_cover/The-House-You-Build-Within-Mockup.jpg", 
    blurb: 'An evocative exploration of personal growth and self-discovery. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. An evocative exploration of personal growth and self-discovery. An evocative exploration of personal growth and self-discovery. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm. An evocative exploration of personal growth and self-discovery.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b2',
    title: 'Marshall\'s Keep',
    author: 'Ryan Marshall',
    cover: "/sample_cover/marshall.png", // Reusing the same image as in the source data
    blurb: 'An illustrated guide to book production and its culture. lorem ipsum dolor sit amet, consectetur adipiA crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit.scing elit. A crisp manual about editing prose for clarity and rhythm. ',
    previewPages: [marshall1, marshall2, marshall3],
  },
  {
    id: 'b3',
    title: 'BILLI',
    author: 'Robert K Bateman',
    cover: "/sample_cover/billi.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [billi1, billi2, billi3],
  },
  {
    id: 'b4',
    title: 'Beyond The Resume:',
    author: 'Joshua Sciascia',
    cover: "/sample_cover/BEYOND-THE-RESUME-BOOK-MOCKUP.jpg", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [beyondResume1, beyondResume2, beyondResume3],
  },
  {
    id: 'b5',
    title: 'The Last Good Liar',
    author: 'Clara Monet',
    cover: "/sample_cover/thelastgoodliar.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [lastgoodliar1, lastgoodliar2, lastgoodliar3],
  },
  {
    id: 'b6',
    title: 'The Magical Moon',
    author: 'Melissa Jacob',
    cover: "/sample_cover/magicalmoon.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [magicalmoon1, magicalmoon2, magicalmoon3],
  },
  {
    id: 'b7',
    title: 'The Sheriff\'s Tale',
    author: 'Kira Elington',
    cover: "/sample_cover/Sheriff's_Tale_Book_Cover_Mockup.jpg", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b8',
    title: 'The Librarian of Lost Things',
    author: 'Jennifer Delmont',
    cover: "/sample_cover/The_Librarian_of_Lost_Things_Book_Cover_Mockup.jpg", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [librarian1, librarian2, librarian3],
  },
];