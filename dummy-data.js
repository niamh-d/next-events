const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Coding for beginners",
    description:
      "Everyone can learn to code! Yes, everyone! In this event, you'll be introduced to the basics of coding and you'll get to write your first lines of code in the popular language Python.",
    location: "111 Brixton Hill, London SW2 1AA",
    date: "2023-03-20",
    image: "images/coding.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But knowing where to focus one's efforts is always a good skill to practice.",
    location: "136 Shoreditch High St, London E1 6JE",
    date: "2023-04-04",
    image: "images/networking.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Women in Tech Meetup",
    description: "Network with and learn from other women in tech.",
    location: "17 The Pavement, London SW4 0HY",
    date: "2023-04-07",
    image: "images/tech-women.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Networking for introverts",
    description:
      "We know networking is no fun if you're an introvert. That's why we've put together this event – it'll be fun. Promise!",
    location: "17 The Pavement, London SW4 0HY",
    date: "2023-05-17",
    image: "images/chatting.jpg",
    isFeatured: false,
  },
  {
    id: "e5",
    title: "Language exchange",
    description:
      "Come and speak different languages with like-minded lingophiles!",
    location: "111 Brixton Hill, London SW2 1AA",
    date: "2023-05-20",
    image: "images/lang-meetup.jpg",
    isFeatured: false,
  },
  {
    id: "e6",
    title: "German Language Meetup",
    description:
      "Willkommen! Meet other learners of German to practice your conversational skills. All welcome!",
    location: "17 The Pavement, London SW4 0HY",
    date: "2023-05-12",
    image: "images/german.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "French Language Meetup",
    description:
      "Bienvenue! Meet other Francophiles to practice your French language skills. All skill levels welcome!",
    location: "17 The Pavement, London SW4 0HY",
    date: "2023-06-14",
    image: "images/french.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
