const comics = [
  {
    id: 0,
    title: "The Dark Knight Returnseseses",
    editorial: "Norma",
    description:
      'The Dark Knight Returns is set in a dystopian version of Gotham City in 1986. Bruce Wayne, aged 55, has given up the mantle of Batman after the death of Jason Todd ten years prior. Crime is running rampant throughout the city and a gang calling themselves "The Mutants" has begun terrorizing the people of Gotham. After watching news reports about the Mutants’ crimes, Wayne decides to return to his role as a vigilante. On his first night as Batman, stops multiple assaults –including one on two young girls, Carrie Kelley and her friend Michelle– and targets the Mutants.',
    category: "America",
    idCategory: 0,
    price: 13000,
    pictureUrl:
      "https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png",
    cover_size: "100px",
    stock: 5,
  },
  {
    id: 1,
    title: "Watchmen",
    editorial: "Planeta",
    description:
      "In October 1985, New York City detectives are investigating the murder of Edward Blake. With the police having no leads, costumed vigilante Rorschach decides to probe further. Rorschach deduces Blake to have been the true identity of The Comedian, a costumed hero employed by the U.S. government, after finding his costume and signature smiley-face pin badge. Rorschach believes he has discovered a plot to terminate costumed adventurers and sets about warning four of his retired comrades: Daniel Dreiberg (an inventor and formerly the second Nite Owl), the superpowered and emotionally detached Jon Osterman (codenamed Doctor Manhattan) and his lover Laurie Juspeczyk (the second Silk Spectre), and Adrian Veidt (once the hero Ozymandias, and now a successful businessman).",
    category: "America",
    idCategory: 0,
    price: 20000,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Watchmen-cover.svg/800px-Watchmen-cover.svg.png",
    cover_size: "100px",
    stock: 8,
  },
  {
    id: 2,
    title: "From Hell",
    editorial: "Planeta",
    description:
      "Prince Albert Victor, Duke of Clarence, also known as Prince Eddy, marries and fathers a child with Annie Crook, a shop girl in London’s East End. Prince Eddy had visited the area under an assumed name and Annie is unaware of her husband’s royal position. Queen Victoria becomes aware of the marriage and has Albert separated forcibly from his wife, whom she places in an asylum. Victoria then instructs her royal physician Sir William Gull to impair Annie’s sanity, which he does by damaging or impairing her thyroid gland. The prince’s daughter is taken to Annie’s parents by the artist Walter Sickert, a friend of Eddy’s who had accompanied him on his trips to the East End. Annie’s father believes the child to be his through an incestuous relationship with his daughter. Sickert reluctantly leaves the child with Annie’s parents. The potentially scandalous matter is resolved, until a group of prostitutes — Annie’s friends Mary Kelly, Polly Nichols, Anne Chapman, and Liz Stride — who are aware of the illegitimate child and its royal connections, attempt to blackmail Sickert to pay off a gang of thugs who are threatening them. After Queen Victoria learns of the blackmail attempt, Gull is once again enlisted, this time to silence the group of women who are threatening the crown. The police are complicit in the crimes — they are granted prior knowledge of Gull’s intentions, and are adjured not to interfere until the plot is completed.",
    category: "Europe",
    idCategory: 1,
    price: 18000,
    pictureUrl: "https://i.ebayimg.com/images/g/MC0AAOSwzcdfvnUK/s-l1600.jpg",
    cover_size: "100px",
    stock: 8,
  },
  {
    id: 3,
    title: "The Invisibles 1: Say You Want a Revolution",
    editorial: "Vertigo",
    description:
      'The first volume of The Invisibles introduces Dane McGowan, an angry teen from Liverpool, as he attempts to burn down his school. Abandoned by his father and neglected by his mother, Dane takes out his anger and frustration through destruction. In the first issue of the series, Dane is recruited by the Invisibles, a ragtag band of freedom fighters led by King Mob, a charismatic, cold-blooded assassin. The next arc, "Down and Out in Heaven and Hell", shows Dane as he tries to survive on his own in London after being abandoned by the Invisibles. Dane is mentored by Tom O’Bedlam, an elderly homeless man who is secretly a member of the Invisibles. Tom shows Dane the magic in the everyday world and helps him realize that his anger prevents him from experiencing real emotions. While wandering with Tom, Dane has a partially remembered alien abduction experience and is transported into a different dimension. Eventually Dane returns to the Invisibles, taking the codename "Jack Frost". The next arc, "Arcadia", follows the Invisibles as they go back in time via astral projection to the French Revolution. Jack is almost killed by a demonic agent of the Outer Church, the Invisibles’ chief enemy. As the arc closes, Jack declares that he is leaving the Invisibles.',
    category: "Europe",
    idCategory: 1,
    price: 3700,
    pictureUrl:
      "https://static.wikia.nocookie.net/marvel_dc/images/e/e5/The_Invisibles_Vol_1_1.jpg",
    cover_size: "100px",
    stock: 4,
  },
  {
    id: 4,
    title: "Gideon Falls: The Black Barn",
    editorial: "Image",
    description:
      "The lives of a reclusive young man obsessed with a conspiracy in the city’s trash, and a washed-up Catholic priest arriving in a small town full of dark secrets, become intertwined around the mysterious legend of The Black Barn, an otherworldly building that is alleged to have appeared in both the city and the small town, throughout history, bringing death and madness in its wake.",
    category: "America",
    idCategory: 0,
    price: 1100,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Gideon_Falls.jpeg",
    cover_size: "100px",
    stock: 3,
  },
  {
    id: 5,
    title: "Cosmic Odissey: Discovery",
    editorial: "ECC",
    description:
      'In Book One: Discovery, Darkseid finds a comatose Metron and takes him captive. After going over Metron’s data, Darkseid makes a startling discovery. There is something out there more powerful than him and he needs help to conquer it. Darkseid goes to Highfather. An ambassador, Lonar, arrives on Earth and asks the President of the United States to help him contact Superman, Batman, Martian Manhunter, Starfire, Etrigan, Green Lantern and "lastly, an old man with the unusual name of Mr. Blood".',
    category: "America",
    idCategory: 0,
    price: 5000,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Cosmic_Odyssey_TPB_Cover.jpg",
    cover_size: "100px",
    stock: 2,
  },
  {
    id: 6,
    title: "Black Monday Murders",
    editorial: "Image",
    description:
      "The series takes place in the aftermath of Black Monday, the stock market crash of 1987. The story concerns a group of elite financiers who have made a blood pact with a god, in exchange for power and wealth. A second narrative strand follows NYPD detective Theodore Dumas, as he unravels the secrets of magic at the heart of the global financial market.",
    category: "America",
    idCategory: 0,
    price: 2500,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/The_Black_Monday_Murders_issue1A.png",
    cover_size: "100px",
    stock: 2,
  },
  {
    id: 7,
    title: "Monsters",
    editorial: "Fantagraphics",
    description:
      "The year is 1964 . Bobby Bailey doesn’t realize he is about to fulfill his tragic destiny when he walks into a US Army recruitment office to join up. Close-mouthed, damaged, innocent, trying to forget a past and looking for a future, it turns out that Bailey is the perfect candidate for a secret U.S. government experimental program, an unholy continuation of a genetics program that was discovered in Nazi Germany nearly 20 years earlier in the waning days of World War II. Bailey’s only ally and protector, Sergeant McFarland, intervenes, which sets off a chain of cascading events that spin out of everyone’s control. As the titular monsters of the title multiply, becoming real and metaphorical, literal and ironic, the story reaches its emotional and moral reckoning. Monsters is the legendary project Barry Windsor-Smith has been working on for over 35 years. A 380-page tour de force of visual storytelling, Monsters’ narrative canvas is both vast and deep: part familial drama, part political thriller, part metaphysical journey, it is an intimate portrait of individuals struggling to reclaim their lives and an epic political odyssey across two generations of American history. Trauma, fate, conscience, and redemption are just a few of the themes that intersect in the most ambitious graphic novel of Windsor-Smith’s career. Monsters is rendered in Windsor-Smith’s impeccable pen-and-ink technique, the visual storytelling with its sensitivity to gesture and composition is the most sophisticated of the artist’s career. There are passages of heartbreaking tenderness, of excruciating pain, and devastating violence. It is surely one of the most intense graphic novels ever drawn.",
    category: "Europe",
    idCategory: 1,
    price: 8000,
    pictureUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629723869l/53458056._SX318_.jpg",
    cover_size: "100px",
    stock: 6,
  },
  {
    id: 8,
    title: "Monster 3",
    editorial: "Ivrea",
    description:
      "Naoki Urasawa’s unforgettable thriller follows a brilliant doctor’s journey into the darkest depths of the human soul.Johan is a cold and calculating killer with a mysterious past, and brilliant Dr. Kenzo Tenma is the only one who can stop him! Conspiracy and serial murder open the door to a compelling, intricately woven plot in this masterwork of suspense. Could Johan have a dual personality, like Jekyll and Hyde? Tenma calls on Dr. Gillen, an authority on criminal psychology, to psychoanalyze Johan. But Dr. Gillen secretly concludes that it is not Johan but Tenma who has committed all the serial murders. Dr. Gillen then tries to lure Tenma into various traps, intending to use him in his own experiments.Karl, a student at Munich University, visits a blind billionaire every week to read books to him as a way to pay for school. One day he encounters another young man named Johan who once did the same job for the billionaire. From that point on, strange events continue to befall Karl. Who is this young man named Johan? Is he the Johan that we know?",
    category: "Manga",
    idCategory: 2,
    price: 2900,
    pictureUrl:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421569086_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    cover_size: "100px",
    stock: 6,
  },
  {
    id: 9,
    title: "Evangelion",
    editorial: "Ivrea",
    description:
      "In 2000, the first disastrous contact with the mysterious beings known as Angels resulted in the global cataclysm referred to as the Second Impact, which wiped out half of the human race. To defend humanity against future Angel attacks, the United Nations established the NERV organization in Tokyo-3 to develop giant bio-mechanical mecha known as Evangelions. Fifteen years later, the Angels have finally returned, and the untested Evangelions can only be piloted by specially selected 14-year-olds. Shinji Ikari, estranged son of the director of NERV commander Gendo Ikari, arrives in Tokyo-3 and is dragooned into piloting Evangelion Unit 01 to fight the Angel, Sachiel, which is attacking the city.",
    category: "Manga",
    idCategory: 2,
    price: 30000,
    pictureUrl:
      "http://elvortex.com/wp-content/uploads/2013/05/33-evangelion.jpg",
    cover_size: "100px",
    stock: 1,
  },
  {
    id: 10,
    title: "The Incal",
    editorial: "Norma",
    description:
      "The story is set in the dystopian capital city of an insignificant planet in a human-dominated galactic empire, wherein the Bergs, aliens who resemble featherless birds and reside in a neighboring galaxy, make up another power bloc. It starts in medias res with Difool thrown from the Suicide Alley to the great acid lake below by a masked group, luckily saved by a police cruiser. During the questioning he denies that he received the Light Incal, a crystal of enormous and infinite powers (it guides and protects those who believe in it), from a dying Berg. The Incal is then sought by many factions: the Bergs; the corrupt government of the great pit-city; the rebel group Amok (led by Tanatah); and the Church of Industrial Saints, commonly referred to as the Techno-Technos or the Technopriests, a sinister technocratic cult which worships the Dark Incal. Animah (an allusion to anima), the keeper of the Light Incal, seeks it as well. During the journey Difool and Deepo (Difool’s loyal concrete seagull) are joined by Animah, The Metabaron, Solune, Tanatah (sister of Animah) and Kill Wolfhead, with a task of saving the universe from the forces of the Dark Incal, and the Technopriests manufacture and launch into outer space the sun-eating Dark Egg. As the darkness is overcome, Difool is brought before Orh, the fatherlike divinity, who tells him he must remember what he witnessed. As Difool falls away, he finds himself where he was at the beginning, falling down the shaft.",
    category: "Europe",
    idCategory: 1,
    price: 15000,
    pictureUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/4c/05/4c05466d634d57ec3833195992cbd30f.jpg",
    cover_size: "100px",
    stock: 1,
  },
];

module.exports = {
  comics,
};
