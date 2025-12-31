// Define the interface for a single Book object
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: any; // This will hold the imported image module
  blurb: string;
  previewPages: any[]; // This will hold an array of imported image modules
}

// --- Import all necessary image assets ---

// Cover Image (Used for both books in the provided data)

// Preview Pages for "The Quiet Editor" (b1)
// import quietPreview1 from '../../assets/images/booksamples/book1.webp';
// import quietPreview2 from '../../assets/images/booksamples/page1.jpeg';
import quietPreview3 from '../../assets/images/booksamples/pagepre1.png';
import quietPreview4 from '../../assets/images/booksamples/1700x2550.png';


// --- The main data array, using the imported assets ---
export const bookData: Book[] = [
  {
    id: 'b1',
    title: 'The House You Build Within',
    author: 'Liam  Green',
    cover: "/sample_cover/1.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiA crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit.scing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b2',
    title: 'Marshall\'s Keep',
    author: 'Ryan Marshall',
    cover: "/sample_cover/2.png", // Reusing the same image as in the source data
    blurb: 'An illustrated guide to book production and its culture. lorem ipsum dolor sit amet, consectetur adipiA crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit.scing elit. A crisp manual about editing prose for clarity and rhythm. ',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b3',
    title: 'BILLI',
    author: 'Robert K Bateman',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b4',
    title: 'Beyond The Resume:',
    author: 'Joshua Sciascia',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b5',
    title: 'The Last Good Liar',
    author: 'Clara Monet',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b6',
    title: 'The Magical Moon',
    author: 'Melissa Jacob',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b7',
    title: 'The Sheriff\'s Tale',
    author: 'Kira Elington',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b8',
    title: 'The Librarian of Lost Things',
    author: 'Jennifer Delmont',
    cover: "/sample_cover/3.png", 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
];