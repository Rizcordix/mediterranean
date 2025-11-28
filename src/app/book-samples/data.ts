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
import coverImage from '../../assets/images/booksamples/book1.webp'; 
import coverImage2 from '../../assets/images/booksamples/840x1240.png';

// Preview Pages for "The Quiet Editor" (b1)
// import quietPreview1 from '../../assets/images/booksamples/book1.webp';
// import quietPreview2 from '../../assets/images/booksamples/page1.jpeg';
import quietPreview3 from '../../assets/images/booksamples/pagepre1.png';
import quietPreview4 from '../../assets/images/booksamples/1700x2550.png';


// --- The main data array, using the imported assets ---
export const bookData: Book[] = [
  {
    id: 'b1',
    title: 'The Quiet Editor',
    author: 'A. N. Author',
    cover: coverImage2, 
    blurb: 'A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiA crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit.scing elit. A crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit. A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b2',
    title: 'Paper & Ink',
    author: 'B. Writer',
    cover: coverImage, // Reusing the same image as in the source data
    blurb: 'An illustrated guide to book production and its culture. lorem ipsum dolor sit amet, consectetur adipiA crisp manual about editing prose for clarity and rhythm. lorem ipsum dolor sit amet, consectetur adipiscing elit.scing elit. A crisp manual about editing prose for clarity and rhythm. ',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
  {
    id: 'b3',
    title: 'The Quiet Editor',
    author: 'A. N. Author',
    cover: coverImage, 
    blurb: 'A crisp manual about editing prose for clarity and rhythm.',
    previewPages: [quietPreview4, quietPreview3, quietPreview3],
  },
];