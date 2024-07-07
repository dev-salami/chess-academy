"use client";
import Image from "next/image";

export const tutors = [
  {
    name: "FIDE Master Akintoye Abdulraheem",
    links: [{ instagram: "", facebook: "", linkedin: "", whatsapp: "" }],
    feats: [
      "West African Chess champion",
      "Nigeria’s Number 3 by FIDE",
      "Winner of the Challenger A category at the Gibraltar Chess Festival 2019",
      "Winner of the CPAN C4 Chevron Chess Challenge 2018",
      "Winner of National Friends Of Chess 2018",
      "Certified Lawyer",
      "2283 peak rating",
    ],
    image: (
      <Image
        src={require(`../public/images/others/tutor1.svg`)}
        height={200}
        alt="tutor"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Master Oluwadurotimi Lapite",
    links: [{ instagram: "", facebook: "", linkedin: "", whatsapp: "" }],
    feats: [
      " Nigeria’s Number 11 by FIDE",
      "Winner of Millionaires Chess Tournament",
      "Winner of Awesome Classical Tournament 2022",
      "Winner of the President’s Cup, Ghana 2019",
      "Winner of several editions of Chess Heights Monthly Rapid",
      "2238 peak rating",
    ],
    image: (
      <Image
        src={require(`../public/images/others/tutor2.svg`)}
        alt="tutor"
        className=" w-full h-auto rounded-xl"
      ></Image>
    ),
  },
];
export const events = [
  {
    name: "Victor Nwankwo",
    details: "Under 14 National champion",
    image: (
      <Image
        src={require(`../public/images/event/eventPic1.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Danielle Unuigboje",
    details:
      "Danielle Unuigboje with Mr Kunle Kasunmu, President OLCC chess club",
    image: (
      <Image
        src={require(`../public/images/recent/danielle-min.jpg`)}
        // height={100}
        alt="eventPicture"
        className=" w-full h-auto rounded-full"
      ></Image>
    ),
  },
  {
    name: "Gabrielle Unuigboje",
    details: "",
    image: (
      <Image
        src={require(`../public/images/recent/gabrielle-min.jpg`)}
        alt="eventPicture"
        className=" w-full h-auto rounded-full"
      ></Image>
    ),
  },
  {
    name: "Imtiyaz Sorunke",
    details: "",
    image: (
      <Image
        src={require(`../public/images/recent/imtiyaz-min.jpg`)}
        alt="eventPicture"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "Jason Nwankwo",
    details: "",
    image: (
      <Image
        src={require(`../public/images/recent/jas-nwak-min.jpg`)}
        alt="eventPicture"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "Chidubem Nwankwo",
    details: "",
    image: (
      <Image
        src={require(`../public/images/recent/chidubem-min.jpg`)}
        alt="eventPicture"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "David Enmechukwu",
    details: "",
    image: (
      <Image
        src={require(`../public/images/david-enme.jpeg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  // {
  //   name: "Danielle Unuigboje",
  //   details:
  //     "Danielle Unuigboje with Mr Kunle Kasunmu, President OLCC chess club",
  //   image: (
  //     <Image
  //       src={require(`../public/images/danielle.jpeg`)}
  //       height={80}
  //       alt="eventPicture"
  //       className=" w-full rounded-full"
  //     ></Image>
  //   ),
  // },
];
export const courses = [
  {
    type: "Beginner",
    stars: 5,
    link: "https://wa.link/8eeib2",
    details:
      "Our beginner chess program teaches the rules, basic principles, and fundamentals to new students. Learn openings, tactics, strategy and more from expert coaches.",
    imagePath: "course-beginner",
    image: (
      <Image
        src={require(`../public/images/courses/course-beginner.svg`)}
        height={250}
        alt="course-image"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    type: "Intermediate",
    stars: 5,
    link: "https://wa.link/rphgnm",
    details:
      "Take your game to the next level with our intermediate training. Classes cover advanced tactics, positional play, endgames and complex openings to step up your skills.",
    image: (
      <Image
        src={require(`../public/images/courses/course-intermediate.svg`)}
        height={250}
        alt="course-image"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },

  {
    type: "Elite",
    stars: 5,
    link: "https://wa.link/w90b5d",
    details:
      "Our elite training is tailored for committed students pursuing a career in competitive chess. Learn from international master and grandmaster coaches to take your game to the master level.",
    image: (
      <Image
        src={require(`../public/images/courses/course-elite.svg`)}
        height={250}
        alt="course-image"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
];
export const testimonials = [
  {
    name: "Victor Nwankwo",
    title: "OLCC junior chess player",
    text: "The online chess class boosted my strategy understanding and confidence with expert instruction and clear explanations. It's a game-changer!",
    image: (
      <Image
        src={require(`../public/images/recent/vic-nwak-min.jpg`)}
        height={40}
        alt="testimonial-image"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "Mr Enmechukwu ",
    title: "David's Dad",
    text: `I cannot recommend the Moving Train Chess Academy highly enough for anyone looking to improve their chess skills, especially young learners. My son has been attending classes for several months, and the progress has been remarkable. When we first enrolled, my son had a basic understanding of the game but lacked the skills and strategies to compete at a higher level. His progress has been closely monitored, and the feedback has been instrumental in his rapid improvement. Today, he proudly holds several trophies and medals, a testament to the quality of instruction and support at the Moving Train Chess Academy. I am deeply grateful to the entire team for their commitment to fostering a love for chess and helping my son achieve his potential.`,
    image: "",
  },

  {
    name: "Madamori Oloruntobi",
    title: "1892 FIDE Rating",
    text: "During the lockdown, I saw a flyer about online classes to mastering chess with FIDE Master Abdulrahman A. Akintoye. The classes were powerful and eye-opening. With every session, I learnt something new. On some days we studied openings, middlegames, and popular endgames. On other days we analyzed my games with some strong players and solved some masters puzzles on tactics. Chess got easier and more interesting for me simply because I was already playing like a master in less than a month. It was no surprise when I participated in my first ever masters category chess tournament and did well",
    image: "",
    //  (
    //   <Image
    //     src={require(`../public/images/others/testimonial2.svg`)}
    //     height={20}
    //     alt="testimonial-image"
    //     className=" w-full rounded-full"
    //   ></Image>
    // ),
  },
  {
    name: "Fadhlullah AbdulRaheem",
    title: "OLCC Master chess player",
    text: `I used to think that maybe chess wasn't for me because I could never really understand what was happening in the game, even after understanding how the pieces moved. Training with coach AbdulRahman these past few months have changed my view drastically and made me feel like, soon enough, I'll be going to competitions. My rating, which was roughly 1000 is now 1800+. I believe his explanations and the way he made me start looking at chess has helped me greatly`,
    image: "",
    //  (
    //   <Image
    //     src={require(`../public/images/others/testimonial3.svg`)}
    //     height={20}
    //     alt="testimonial-image"
    //     className=" w-full rounded-xl"
    //   ></Image>
    // ),
  },
];
