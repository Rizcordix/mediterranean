// Define the interface for a single Book object
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: any; // This will hold the imported image module
  blurb: string;
  previewPages: any[]; // This will hold an array of imported image modules
}

// import quietPreview3 from '../../assets/images/booksamples/pagepre1.png';
// import quietPreview4 from '../../assets/images/booksamples/1700x2550.png';

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

import sheriff1 from '../../assets/images/booksamples/Sheriffs_Tale/5.png';
import sheriff2 from '../../assets/images/booksamples/Sheriffs_Tale/6.png';
import sheriff3 from '../../assets/images/booksamples/Sheriffs_Tale/7.png';

import house1 from '../../assets/images/booksamples/The_House_You_Build_Within/9.png';
import house2 from '../../assets/images/booksamples/The_House_You_Build_Within/10.png';
import house3 from '../../assets/images/booksamples/The_House_You_Build_Within/11.png';

import Royal1 from '../../assets/images/booksamples/The_Royal_Ring/1.png';
import Royal2 from '../../assets/images/booksamples/The_Royal_Ring/2.png';
import Royal3 from '../../assets/images/booksamples/The_Royal_Ring/3.png';



// --- The main data array, using the imported assets ---
export const bookData: Book[] = [
  {
    id: 'b1',
    title: 'The House You Build Within',
    author: 'Liam  Green',
    cover: "/sample_cover/The-House-You-Build-Within-Mockup.jpg", 
    blurb: 'What if you cared for your inner self with the same attention you give your home? The House You Build Within is a unique guide that uses the metaphor of house-building to explore emotional well-being. Each chapter corresponds to a part of a house—from laying a foundation of values to installing the windows of awareness—offering gentle, practical wisdom for constructing a resilient, peaceful, and authentic inner life. This book is for anyone ready to move from self-criticism to self-renovation, providing the tools to build a sanctuary within.',
    previewPages: [house1, house2, house3],
  },
  {
    id: 'b2',
    title: 'Marshall\'s Keep',
    author: 'Ryan Marshall',
    cover: "/sample_cover/marshall.png", // Reusing the same image as in the source data
    blurb: 'In the wake of immense loss, Ryan Marshall built a fortress of security and grief to shield his daughter from the world. Now, six months after a harrowing trial and as his daughter leaves for college, he faces his final challenge: learning to let go. With quiet courage, Ryan begins to dismantle the physical and emotional walls of “The Keep,” discovering that true strength lies not in relentless protection, but in the vulnerable act of opening the door. A poignant conclusion to a story of healing, Marshall\'s Keep is a testament to the enduring power of love and the brave, beautiful choice to live again.',
    previewPages: [marshall1, marshall2, marshall3],
  },
  {
    id: 'b3',
    title: 'BILLI',
    author: 'Robert K Bateman',
    cover: "/sample_cover/billi.png", 
    blurb: 'Born into the poverty of 1920s Adelaide, Alma Shirley Smith— known as “Billi”—lived through the Great Depression and World War II with remarkable courage. Compiled by her son, this heartfelt memoir shares Billi’s own words and memories, painting a vivid picture of hardship, family bonds, and unyielding spirit in rural South Australia. More than a personal history, it is a tribute to a generation that endured, and an invitation to remember the sacrifices that shape a family. A powerful, intimate account of resilience and love across decades.',
    previewPages: [billi1, billi2, billi3],
  },
  {
    id: 'b4',
    title: 'Beyond The Resume:',
    author: 'Joshua Sciascia',
    cover: "/sample_cover/BEYOND-THE-RESUME-BOOK-MOCKUP.jpg", 
    blurb: ' A compelling critique of how resume-based hiring overlooks real talent. This book reveals the human cost of flawed systems through powerful, true stories of skilled professionals rejected by algorithms. It exposes the biases in AI-driven hiring and advocates for a more holistic approach that values character, creativity, and potential. Beyond The Resume is a call to action for employers to rethink recruitment, emphasizing empathy and human judgment over impersonal metrics. A must-read for anyone interested in fair hiring practices and the future of work.',
    previewPages: [beyondResume1, beyondResume2, beyondResume3],
  },
  {
    id: 'b5',
    title: 'The Last Good Liar',
    author: 'Clara Monet',
    cover: "/sample_cover/thelastgoodliar.png", 
    blurb: 'What happens when the world\'s most honest couple is forced to confess? In The Last Good Liar, podcast stars Leo and River Greene have built an empire on radical honesty—while hiding devastating secrets. When their son is taken, the ransom is a single, brutal demand: confess everything, live on air. No edits, no police. Just the truth. This explosive psychological thriller dissects a marriage and the terrifying lies we tell to survive, asking: How well can you really know someone? The answer might destroy everything.',
    previewPages: [lastgoodliar1, lastgoodliar2, lastgoodliar3],
  },
  {
    id: 'b6',
    title: 'The Magical Moon',
    author: 'Melissa Jacob',
    cover: "/sample_cover/magicalmoon.png", 
    blurb: 'A tender story for any child who has gazed at the night sky with a lonely heart. The Magical Moon is a gentle tale about love that spans any distance, offering comfort through the steadfast friendship of the moon itself. It reminds young readers that even when loved ones are far away, they are never truly alone—and that the biggest, most comforting feelings can be found in the quiet, constant light above. A lyrical and reassuring book for healing hearts and sparking hope.',
    previewPages: [magicalmoon1, magicalmoon2, magicalmoon3],
  },
  {
    id: 'b7',
    title: 'The Sheriff\'s Tale',
    author: 'Kira Elington',
    cover: "/sample_cover/Sheriff's_Tale_Book_Cover_Mockup.jpg", 
    blurb: 'A sheriff sworn to protect a town, a man bound to a memory. In this lyrical tale of quiet courage and unspoken love, Sheriff Elias Kane stands guard over a small town and the ghost of a chance he never took. When old shadows and new dangers threaten the peace he’s vowed to uphold, he must confront the hardest frontier of all: the wide-open space within his own guarded heart. A story for anyone who has ever loved from a distance, fought in silence, and wondered if it’s too late to let love in. This is a ballad for the steadfast, a tribute to quiet devotion, and a reminder that even the loneliest sentinel deserves to come home.',
    previewPages: [sheriff1, sheriff2, sheriff3],
  },
  {
    id: 'b8',
    title: 'The Librarian of Lost Things',
    author: 'Jennifer Delmont',
    cover: "/sample_cover/The_Librarian_of_Lost_Things_Book_Cover_Mockup.jpg", 
    blurb: 'For those who have survived love’s wreckage, The Librarian of Lost Things is a raw, haunting testament to rebuilding a self from the ruins. It tells the story of a woman who reads memories in objects and a man haunted by the ghosts of people, who find each other in the dark. More than a novel, it is a map of betrayal and becoming, written in the language of a shattered heart. This is not a gentle book, but a manifesto for the broken—and for the stronger, darker selves that emerge in the aftermath. If you are meant to find it, you will.',
    previewPages: [librarian1, librarian2, librarian3],
  },
  {
    id: 'b9',
    title: 'The Royal Ring',
    author: 'Jennifer Delmont',
    cover: "/sample_cover/RoyalRing.png", 
    blurb: 'A future queen must find the American girl she gave a promise ring to years ago and propose a marriage of convenience to secure her crown, forcing both women to confront a forgotten connection and choose between their dreams.',
    previewPages: [Royal1, Royal2, Royal3],
  },
];