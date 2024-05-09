"use client";
import Image from "next/image";

export const tutors = [
  {
    name: "FIDE Master Akintoye Abdulraheem",
    links: [{ instagram: "", facebook: "", linkedin: "", whatsapp: "" }],
    feats: [
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
      " Nigeria’s Number 20 by FIDE",
      "Winner of Millionaires Chess Tournament",
      "Winner of Awesome Classical Tournament 2022",
      "Winner of the President’s Cup, Ghana 2019",
      "Winner of several editions of Chess Heights Monthly Rapid",
      "2238 peak rating",
    ],
    image: (
      <Image
        src={require(`../public/images/others/tutor2.svg`)}
        height={200}
        alt="tutor"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
];
export const events = [
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
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
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic2.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic3.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic4.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic5.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic6.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic7.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
  {
    name: "Victor Nwankwo",
    details: "Award winning Junior Chess player of the year 2023",
    image: (
      <Image
        src={require(`../public/images/event/eventPic8.svg`)}
        height={100}
        alt="eventPicture"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
];
export const courses = [
  {
    type: "Beginner",
    stars: 5,
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
  // {
  //   type: "Advanced",
  //   stars: 5,
  //   details:
  //     "For serious tournament players, our advanced program focuses on high-level strategy, analysis of grandmaster games, complex openings and endgame technique to master competitive play.",
  //   image: (
  //     <Image
  //       src={require(`../public/images/courses/course-advance.svg`)}
  //       height={250}
  //       alt="course-image"
  //       className=" w-full rounded-xl"
  //     ></Image>
  //   ),
  // },
  {
    type: "Elite",
    stars: 5,
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
  // {
  //   type: "Youth",
  //   stars: 5,
  //   details:
  //     "The moving train chess academy offers fun, engaging chess lessons for kids and teens of all levels. Young students will learn openings, tactics, principles and theory from expert youth coaches",
  //   image: (
  //     <Image
  //       src={require(`../public/images/courses/course-youth.svg`)}
  //       height={250}
  //       alt="course-image"
  //       className=" w-full rounded-xl"
  //     ></Image>
  //   ),
  // },
  // {
  //   type: "Private",
  //   stars: 5,
  //   details:
  //     "For personalized one-on-one instruction, private chess lessons allow students to learn at their own pace from accomplished coaches tailored to their goals and ability.",
  //   image: (
  //     <Image
  //       src={require(`../public/images/courses/course-private.svg`)}
  //       height={250}
  //       alt="course-image"
  //       className=" w-full rounded-xl"
  //     ></Image>
  //   ),
  // },
];
export const testimonials = [
  {
    name: "Victor Nwankwo",
    title: "OLCC junior chess player",
    text: "The online chess class boosted my strategy understanding and confidence with expert instruction and clear explanations. It's a game-changer!",
    image: (
      <Image
        src={require(`../public/images/others/testimonial1.svg`)}
        height={20}
        alt="testimonial-image"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "Madamori Oloruntobi",
    title: "1892 FIDE Rating",
    text: "During the lockdown, I saw a flyer about online classes to mastering chess with FIDE Master Abdulrahman A. Akintoye. The classes were powerful and eye-opening. With every session, I learnt something new. On some days we studied openings, middlegames, and popular endgames. On other days we analyzed my games with some strong players and solved some masters puzzles on tactics. Chess got easier and more interesting for me simply because I was already playing like a master in less than a month. It was no surprise when I participated in my first ever masters category chess tournament and did well",
    image: (
      <Image
        src={require(`../public/images/others/testimonial2.svg`)}
        height={20}
        alt="testimonial-image"
        className=" w-full rounded-full"
      ></Image>
    ),
  },
  {
    name: "Fadhlullah AbdulRaheem",
    title: "OLCC Master chess player",
    text: "“I used to think that maybe chess wasn't for me because I could never really understand what was happening in the game, even after understanding how the pieces moved. Training with coach AbdulRahman these past few months have changed my view drastically and made me feel like, soon enough, I'll be going to competitions. My rating, which was roughly 1000 is now 1800+. I believe his explanations and the way he made me start looking at chess has helped me greatly”",
    image: (
      <Image
        src={require(`../public/images/others/testimonial3.svg`)}
        height={20}
        alt="testimonial-image"
        className=" w-full rounded-xl"
      ></Image>
    ),
  },
];

export const orders = [
  {
    name: "Marcus Bergos",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Refund",
  },
  {
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Paid",
  },
  {
    name: "Philip Lubin",
    date: "Nov 14, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];
