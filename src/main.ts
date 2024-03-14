import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {setupWorker} from 'msw/browser';
import {http, HttpResponse} from 'msw';

const handlers = [
  http.get('/movies/:id', ({ params }) => {

    const options = {
      "e80d5a37-620e-4be2-92b9-fb1f5262494f": {
        "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
        "title": "Harry Potter and the Philosopher's Stone",
        "duration": "152",
        "budget": "125",
        "release_date": "2001-11-04",
        "box_office": "1.018",
        "cinematographers": [ "John Seale" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-1.png",
        "producers": [ "Chris Columbus", "David Heyman", "Mark Radcliffe" ],
        "summary": "Harry Potter’s dull life is completely changed on his eleventh birthday when a mysterious letter addressed to him arrives in the mail. After finding out about his real parents and a whole hidden wizarding world, he goes on to Hogwarts, his new magical school. From battling a troll to flying on broomsticks to catch golden snitches, Harry’s new life promises to be full of joy and adventure, until he finds out about a certain Dark Lord who murdered his parents is trying to regain power. With his friends Hermione and Ron, Harry sets out to find the philosopher’s stone before Voldemort to prevent his return. After advancing through a particularly difficult set of traps designed by the school, Harry faces the Dark Lord and manages to keep the Philosopher’s Stone safe."
      },
      "1e04ad42-c21f-40d3-9a7e-0a521980c192": {
        "id": "1e04ad42-c21f-40d3-9a7e-0a521980c192",
        "title": "Harry Potter and the Chamber of Secrets",
        "duration": "161",
        "budget": "125",
        "release_date": "2002-11-15",
        "box_office": "879.6",
        "cinematographers": [ "Roger Pratt" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-2.png",
        "producers": [ "Chris Columbus", "David Heyman", "Mark Radcliffe" ],
        "summary": "Harry's second year at Hogwarts begins with a series of mishaps when he and Ron miss the train to Hogwarts. Furthermore, a mysterious Chamber of Secrets has been opened inside Hogwarts and students are getting petrified one after the another. Harry, Ron and Hermione start to uncover the dark tale behind the chamber using a diary Harry found, which leads them into the lair of an Acromantula. Ginny gets kidnapped and it is up to Harry to save her and the school from the monster of the Chamber of Secrets."
      },
      "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982": {
        "id": "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "duration": "142",
        "budget": "130",
        "release_date": "2002-11-15",
        "box_office": "797.4",
        "cinematographers": [ "Michael Seresin" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-3.png",
        "producers": [ "Chris Columbus", "David Heyman", "Mark Radcliffe" ],
        "summary": " After unintentionally using magic against Aunt Marge, Harry arrives at the Leaky Cauldron and learns that a killer named Sirius Black is after him. Hogwarts is under a dark and grim spell with Dementors, the ghostly guardians of Azkaban, looking for Black. Harry and his friends spend their third year learning how to handle a half-horse half-eagle Hippogriff, repel shape-shifting Boggarts and master the art of Divination. Harry also inherits a strange map and finds out the truth about Sirius Black being his godfather. Battling against dementors and werewolves, an incredible story unfolds as Harry masters advanced magic, crosses the barriers of time and changes the course of more than one life."
      },
      "cae233c5-6b08-4201-a665-194110d9c889": {
        "id": "cae233c5-6b08-4201-a665-194110d9c889",
        "title": "Harry Potter and the Goblet of Fire",
        "duration": "157",
        "budget": "150",
        "release_date": "2005-11-06",
        "box_office": "896.7",
        "cinematographers": [ "Roger Pratt" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-4.png",
        "producers": [ "David Heyman" ],
        "summary": "In his fourth year at Hogwarts, Harry is mysteriously selected as a champion for the Triwizard Tournament. Three dangerous tasks await the champions from different schools, each tougher than the next. With the help of his new Defence Against the Dark Arts teacher, Professor Moody, Harry manages to advance through dragons, water demons and enchanted mazes to find himself in the clutches of Lord Voldemort. With the return of the Dark Lord and the Ministry denying Harry’s claims, will things ever return to how they were?"
      },
      "d8a28625-0704-45fe-9be5-cd795eb1b8f4": {
        "id": "d8a28625-0704-45fe-9be5-cd795eb1b8f4",
        "title": "Harry Potter and the Order of the Phoenix",
        "duration": "138",
        "budget": "150-200",
        "release_date": "2007-07-11",
        "box_office": "942.2",
        "cinematographers": [ "Sławomir Idziak" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-5.png",
        "producers": [ "David Heyman", "David Barron" ],
        "summary": "Harry’s fifth year at Hogwarts is no short of trouble when a new Defence Against the Dark Arts teacher, Dolores Umbridge, is appointed by the ministry of magic. Umbridge refuses to teach any actual defensive spells, causing Harry to form a secret group of students called “Dumbledore’s Army” to learn and teach defensive spells. The connection between Harry and Voldemort’s mind grows stronger, and a concerned Dumbledore asks Snape to teach Occlumency to Harry. Harry experiences a surge of romantic feelings for someone. Things only get worse as Dumbledore’s Army is discovered and Umbridge is appointed as the new Headmistress. As Voldemort grows in power and the danger grows ever more, Harry might lose someone very close to him."
      },
      "37acb245-c015-4bee-be87-c8f7d93d6d24": {
        "id": "37acb245-c015-4bee-be87-c8f7d93d6d24",
        "title": "Harry Potter and the Half-Blood Prince",
        "duration": "153",
        "budget": "250",
        "release_date": "2009-07-07",
        "box_office": "934.5",
        "cinematographers": [ "Bruno Delbonnel" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-6.png",
        "producers": [ "David Heyman", "David Barron" ],
        "summary": "The sixth installment in the Harry Potter series begins with Harry accompanying Dumbledore to persuade Horace Slughorn to return to teaching at Hogwarts. Harry suspects Malfoy is now a Death Eater and is determined to find out the truth. Harry eventually becomes Slughorn’s favorite student upon finding a book belonging to the “Half-Blood Prince”. Using this connection, Dumbledore successfully obtains a memory from Slughorn linking to a young Voldemort and his inquiries about Horcruxes. Harry and Dumbledore venture out to find and destroy a Horcrux unaware of the grave fate that awaits them."
      },
      "e0fcd0ca-609c-4dd0-82e0-020482856380": {
        "id": "e0fcd0ca-609c-4dd0-82e0-020482856380",
        "title": "Harry Potter and the Deathly Hallows - Part 1",
        "duration": "146",
        "budget": "250",
        "release_date": "2010-11-11",
        "box_office": "977",
        "cinematographers": [ "Eduardo Serra" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-7.png",
        "producers": [ "David Heyman", "David Barron", "J. K. Rowling" ],
        "summary": "After Dumbledore's death, it is up to Harry, Ron, and Hermione to seek out the remaining Horcruxes and destroy them if they hope to defeat Voldemort. Each of them is passed on something from Dumbledore as clues to finding the Horcruxes. On their own, without the guidance of their professors or the protection of Professor Dumbledore, the three friends must now rely on one another more than ever. After managing to recover and destroy Slytherin’s locket, one of the Horcruxes, Hermione discovers about the Deathly Hallows from the book Dumbledore passed on to her. Will Harry be able to stop Voldemort if he recovers all the deathly hallows and becomes the Master of Death?"
      },
      "ffa6d8a5-4054-46ca-b8e6-9945283c8f18": {
        "id": "ffa6d8a5-4054-46ca-b8e6-9945283c8f18",
        "title": "Harry Potter and the Deathly Hallows – Part 2",
        "duration": "130",
        "budget": "250",
        "release_date": "2011-07-07",
        "box_office": "1,342",
        "cinematographers": [ "Eduardo Serra" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-8.png",
        "producers": [ "David Heyman", "David Barron", "J. K. Rowling" ],
        "summary": "In the epic conclusion to the Harry Potter series, Harry, Ron and Hermione rush to find the remaining Horcruxes and destroy them. Their search leads them to robbing the Gringotts bank and finally back to their home, Hogwarts. Voldemort kills Snape to win over the allegiance of the Elder Wand, who gives Harry a memory before dying. Going through the memory, Harry comes to realize the bitter truth that he must sacrifice himself to bring down Voldemort. As the final battle rages on at Hogwarts, death and destruction follow, and many of the loved characters draw their last breath. This final movie, takes all the previous installments and builds upon it, painting a beautiful end to the much loved tale of Harry Potter."
      },
      "42f67e56-ec62-4e1a-9c26-04039b0e2494": {
        "id": "42f67e56-ec62-4e1a-9c26-04039b0e2494",
        "title": "Fantastic Beasts and Where to Find Them",
        "duration": "133",
        "budget": "175-200",
        "release_date": "2016-11-10",
        "box_office": "814",
        "cinematographers": [ "Philippe Rousselot" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-9.png",
        "producers": [ "David Heyman", "J. K. Rowling", "Steve Kloves", "Lionel Wigram" ],
        "summary": "Fantastic Beasts and Where to Find Them tells the tale of magizoologist Newton (Newt) Scamander and his adventure through New York City in the 1920s. A thrilling chase ensues when the magical creatures inside Newt’s suitcase are freed inside the city. Along with his new friends Jacob, a muggle, and Queenie, Newt must recapture all the creatures before they lay destruction to the city. However, things get complicated as a lurking Obscurial reveals itself and the Magical Congress of United States (MACUSA) intervenes."
      },
      "2cc602f2-e544-4f00-aec3-6439fad910b9": {
        "id": "2cc602f2-e544-4f00-aec3-6439fad910b9",
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "duration": "134",
        "budget": "200",
        "release_date": "2018-11-16",
        "box_office": "654.9",
        "cinematographers": [ "Philippe Rousselot" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-10.png",
        "producers": [ "David Heyman", "J. K. Rowling", "Steve Kloves", "Lionel Wigram" ],
        "summary": "Fantastic Beasts: The Crimes of Grindelwald continues the story of Newt Scamander as he chases Credence Barebone on orders by Dumbledore, who suspects him to be Corvus Lestrange V. A twisted tale of vengeance and treachery unveils itself as the story advances and the true identity of Credence becomes even more obscure. Grindelwald’s plan to cause a war between muggles and wizards is set into motion, and Credence joins him."
      },
      "bcfd5548-da79-44df-a37b-511aa97d1834": {
        "id": "bcfd5548-da79-44df-a37b-511aa97d1834",
        "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "duration": "142",
        "budget": "200",
        "release_date": "2022-04-08",
        "box_office": "379.8",
        "cinematographers": [ "George Richmond" ],
        "poster": "https://www.wizardingworld.com/images/products/films/rectangle-11.png",
        "producers": [ "David Heyman", "J. K. Rowling", "Steve Kloves", "Lionel Wigram" ],
        "summary": "The third movie in the Fantastic Beast Series sees Grindelwald trying to destroy the muggle world as Newt and his allies including Dumbledore try to stop him. Grindelwald kills a Qilin, a magical beast, to become the Supreme Leader of the ICW. Credence rethinks his decision to join Grindelwald upon realizing that he is the illegitimate son of Aberforth Dumbledore. The epic showdown takes place in Bhutan, where Dumbledore and Grindelwald fight it out after the blood pact that prevented them from dueling breaks. Grindelwald disapparates from the place and his plans are put to end."
      }
    };
    // @ts-ignore
    return HttpResponse.json(options[params.id]);
  }),
  http.get('/movies', ({ request, params, cookies }) => {
    return HttpResponse.json([
      {
        "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
        "title": "Harry Potter and the Philosopher's Stone",
        "duration": "152",
        "budget": "125",
        "release_date": "2001-11-04"
      }, {
        "id": "1e04ad42-c21f-40d3-9a7e-0a521980c192",
        "title": "Harry Potter and the Chamber of Secrets",
        "duration": "161",
        "budget": "125",
        "release_date": "2002-11-15"
      }, {
        "id": "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "duration": "142",
        "budget": "130",
        "release_date": "2002-11-15"
      }, {
        "id": "cae233c5-6b08-4201-a665-194110d9c889",
        "title": "Harry Potter and the Goblet of Fire",
        "duration": "157",
        "budget": "150",
        "release_date": "2005-11-06"
      }, {
        "id": "d8a28625-0704-45fe-9be5-cd795eb1b8f4",
        "title": "Harry Potter and the Order of the Phoenix",
        "duration": "138",
        "budget": "150-200",
        "release_date": "2007-07-11"
      }, {
        "id": "37acb245-c015-4bee-be87-c8f7d93d6d24",
        "title": "Harry Potter and the Half-Blood Prince",
        "duration": "153",
        "budget": "250",
        "release_date": "2009-07-07"
      }, {
        "id": "e0fcd0ca-609c-4dd0-82e0-020482856380",
        "title": "Harry Potter and the Deathly Hallows - Part 1",
        "duration": "146",
        "budget": "250",
        "release_date": "2010-11-11"
      }, {
        "id": "ffa6d8a5-4054-46ca-b8e6-9945283c8f18",
        "title": "Harry Potter and the Deathly Hallows – Part 2",
        "duration": "130",
        "budget": "250",
        "release_date": "2011-07-07"
      }, {
        "id": "42f67e56-ec62-4e1a-9c26-04039b0e2494",
        "title": "Fantastic Beasts and Where to Find Them",
        "duration": "133",
        "budget": "175-200",
        "release_date": "2016-11-10"
      }, {
        "id": "2cc602f2-e544-4f00-aec3-6439fad910b9",
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "duration": "134",
        "budget": "200",
        "release_date": "2018-11-16"
      }, {
        "id": "bcfd5548-da79-44df-a37b-511aa97d1834",
        "title": "Fantastic Beasts: The Secrets of Dumbledore",
        "duration": "142",
        "budget": "200",
        "release_date": "2022-04-08"
      }
    ]);
  }),
];

setupWorker(...handlers).start()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));
