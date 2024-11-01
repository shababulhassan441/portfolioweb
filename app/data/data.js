import image1 from "@/public/gallery/image1.jpg";
import image9 from "@/public/gallery/image9.jpg";
import image6 from "@/public/gallery/image6.jpg";
import image2 from "@/public/gallery/image2.jpg";
import image4 from "@/public/gallery/image4.jpg";
import image10 from "@/public/gallery/image10.jpg";
import image5 from "@/public/gallery/image5.jpg";
import image7 from "@/public/gallery/image7.jpg";
import image3 from "@/public/gallery/image3.jpg";
import profieimg from "@/public/me-ios.png";
import noImage from "@/public/no-image.jpg";

export const photoGallery = [
  { image: image1 },
  { image: image9 },
  { image: image6 },
  { image: image2 },
  { image: image4 },
  { image: image10 },
  { image: image5 },
  { image: image7 },
  { image: image3 },
];

export const heroData = [
  {
    heading: "hi, i'm dillion 👋",
    para: " Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
    image: profieimg,
  },
];

export const aboutData = [
  {
    heading: "About Me",
    para: (
      <p className="text-[16px] dark:text-white/70 text-[#737373]">
        {" "}
        At the end of 2022, I quit my job as a software engineer to go fulltime
        into building and scaling my own SaaS businesses. In the past,{" "}
        <span className="underline dark:text-white font-medium text-[#111827]">
          {" "}
          I pursued a double degree in computer science and business, interned
          at big tech companies in Silicon Valley,
        </span>{" "}
        and{" "}
        <span className="underline dark:text-white font-medium text-[#111827]">
          {" "}
          completed in over 21 hackathons for fun.
        </span>{" "}
        I also had the pleasure of being a part of the first ever in-person
        cohort of buildspace called{" "}
        <span className="underline dark:text-white font-medium text-[#111827]">
          buildspace sfl.
        </span>{" "}
      </p>
    ),
  },
];

export const projectData = [
  {
    heading: "Check out my latest work",
    label: "my projects",
    para: "i've  worked on variety of projects, from simple website to complex web applications. Here are a few of my favourites",
  },
];
export const projectData2 = [
  {
    heading: "i like to build things",
    label: "projects",
    para: "i've built a variety of projects ranging from web apps, iOS apps, open source projects, themes, ML models and more. some of them became businesses which make money. here are a few of my favorites.",
  },
];

export const projectCardData = [
  {
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    link: "https://chatcollect.com",
    title: "chat collect",
    time: "Jan 2024 - Feb 2024",
    para: (
      <p>
        {" "}
        With the release of the{" "}
        <a
          className="text-black dark:text-white font-semibold"
          href="https://openai.com/blog/introducing-the-gpt-store"
        >
          {" "}
          OpenAI GPT Store{" "}
        </a>{" "}
        , I decided to build a SaaS which allows users to collect email
        addresses from their GPT users. This is a great way to build an audience
        and monetize your GPT API usage.
      </p>
    ),
    technology: [
      "Next.js",
      "typescript",
      "postgresSql",
      "prisma",
      "tailwindcss",
      "stripe",
      "shadcn UI",
      "magic ui",
    ],
    source: ["website"],
  },
  {
    video: "https://cdn.magicui.design/bento-grid.mp4",
    link: "https://magicui.design/",
    title: "Magic UI",
    time: "June 2023 - Present",
    para: (
      <p>Designed, developed and sold animated UI components for developers.</p>
    ),
    technology: [
      "Next.js",
      "typeScript",
      "postgresSql",
      "prisma",
      "tailwindCss",
      "stripe",
      "shadcn UI",
      "magic ui",
    ],
    source: ["website", "source"],
  },
  {
    video: "https://cdn.llm.report/openai-demo.mp4",
    link: "https://llm.report",
    title: "llm.report",
    time: "April 2023 - September 2023",
    para: (
      <p>
        Developed an open-source logging and analytics platforms for OpenAi: Log
        your ChatGPT API request, analyze costs, and improve your prompts
      </p>
    ),
    technology: [
      "Next.js",
      "typescript",
      "postgresSql",
      "prisma",
      "tailwindCss",
      "stripe",
      "shadcn UI",
      "cloudflare workers",
      "magic ui",
    ],
    source: ["website", "source"],
  },
  {
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    link: "https://automatic.chat/",
    title: "Automatic Chat",
    time: "April 2023 - March 2024",
    para: (
      <p>
        Developed an AI Customers Support Chatbot which automatically responds
        to customers support tickets using the latest GPT models.
      </p>
    ),
    technology: [
      "Next.js",
      "typescript",
      "postgresSql",
      "prisma",
      "tailwindCss",
      "stripe",
      "shadcn UI",
      "cloudflare workers",
      "magic ui",
    ],
    source: ["website"],
  },
];

export const contactData = [
  {
    heading: "Get in Touch",
    label: "contact",
    para: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
  },
];

export const notesHead = [
  {
    heading: "i like to learn ",
    label: "notes",
    para: "i study a lot, write notes, and share them with friends. here are some of my notes from school",
  },
];

export const courses = [
  {
    university: "University of Waterloo",
    courses: [
      {
        code: "CS 246",
        title: "Object-Oriented Software Development",
        link: "https://github.com/dillionverma/cs246-exam-review",
      },
      {
        code: "CS 343",
        title: "Concurrent and Parallel Programming",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtypUOpqPBFf1U2CYsB",
      },
      {
        code: "CS 348",
        title: "Databases",
        link: "https://onedrive.live.com/?id=721BFCCC9BAA9F83!4813&resid=721BFCCC9BAA9F83!4813&authkey=!AMA2fjBxHqAdwJM&cid=721bfccc9baa9f83",
      },
      {
        code: "CS 349",
        title: "User Interfaces",
        link: "https://onedrive.live.com/?authkey=%21AE%5FJ4HV6Zm1c1dg&id=721BFCCC9BAA9F83%214679&cid=721BFCCC9BAA9F83&parId=root&parQt=sharedby&action=defaultclick",
      },
      {
        code: "CS 350",
        title: "Operating Systems",
        link: "https://github.com/dillionverma/cs350-exam-review",
      },
      {
        code: "CS 486",
        title: "Introduction to Artificial Intelligence",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtylksutQT3xhXYnKe9",
      },
    ],
  },
  {
    university: "Wilfrid Laurier University",
    courses: [
      {
        code: "ECON 120",
        title: "Introduction to Microeconomics",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtyixuizaYOVTZabNMW",
      },
      {
        code: "ECON 140",
        title: "Introduction to Macroeconomics",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtyjS7ARzMGgLQmSuIc",
      },
      {
        code: "BU 121",
        title: "Functional Areas of the Organization",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtyjSprJubtdC4q-puC",
      },
      {
        code: "BU 127",
        title: "Introduction to Financial Accounting",
        link: "https://1drv.ms/u/s!AoOfqpvM_Btyjz_QbYmRgI3mangA",
      },
      {
        code: "BU 283",
        title: "Financial Management I",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtyjzMCZ74cXf-N2ayE",
      },
      {
        code: "BU 288",
        title: "Organizational Behaviour I",
        link: "https://1drv.ms/u/s!AoOfqpvM_Btyj0KdZEFlpUXLdznJ",
      },
      {
        code: "BU 231",
        title: "Business Law",
        link: "https://1drv.ms/u/s!AoOfqpvM_Btyj3BXrFJaMZwuou0s",
      },
      {
        code: "BU 247",
        title: "Managerial Accounting",
        link: "https://1drv.ms/u/s!AoOfqpvM_Btyj3SVGpO40FHTbXwr",
      },
      {
        code: "BU 352",
        title: "Introduction to Marketing Management",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtykSPQliFj6ODG60W4",
      },
      {
        code: "BU 354",
        title: "Human Resources Management",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtykSemB9FCT0H2DjN0",
      },
      {
        code: "BU 375",
        title: "Operations Management",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtylE95U58qU4Yy32J5",
      },
      {
        code: "BU 393",
        title: "Financial Management II",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtykSyQcOpbeUcKrc5p",
      },
      {
        code: "BU 398",
        title: "Organizational Behaviour II",
        link: "https://1drv.ms/u/s!AoOfqpvM_BtylUYs0b_dNybQ6Ab-",
      },
    ],
  },
  {
    university: "international Baccalaureate",
    courses: [
      {
        title: "Chemistry",
        link: "https://ibalchemy.com/",
      },
    ],
  },
];

export const hackathonsHead = [
  {
    heading: "i like going to hackathons ",
    label: "hackathons head",
    para: "during my time in university, I attended 21+ hackathons. It was energizing to see the endless possibilities brought to life by a group of motivated and passionate individuals in 2-3 days.",
  },
];

export const hackathonsCardData = [
  {
    event: "Hack Western 5",
    date: "November 23rd - 25th, 2018",
    location: "London, Ontario",
    project:
      "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    image: noImage,
  },
  {
    event: "Hack The North",
    date: "September 14th - 16th, 2018",
    location: "Waterloo, Ontario",
    project:
      "Developed a mobile application which delivers university campus-wide events in real time to all students.",
    image: noImage,
  },
  {
    event: "FirstNet Public Safety Hackathon",
    date: "March 23rd - 24th, 2018",
    location: "San Francisco, California",
    project:
      "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at the hospital.",
    image: noImage,
  },
  {
    event: "DeveloperWeek Hackathon",
    date: "February 3rd - 4th, 2018",
    location: "San Francisco, California",
    project:
      "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    image: noImage,
    source: ["github"],
  },
  {
    event: "HackDavis",
    date: "January 20th - 21st, 2018",
    location: "Davis, California",
    project:
      "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    source: ["Github", "Devpost", "ML", "iOS", "Server"],
    image: noImage,
  },
  {
    event: "ETH Waterloo",
    date: "October 13th - 15th, 2017",
    location: "Waterloo, Ontario",
    project:
      "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    image: noImage,
    source: ["Organization"],
  },
  {
    event: "Hack The North",
    date: "September 15th - 17th, 2017",
    location: "Waterloo, Ontario",
    project:
      "Developed a virtual reality application allowing users to see themselves in third person.",
    image: noImage,
    source: ["Streamer Source", "Client Source"],
  },
  {
    event: "Hack The 6ix",
    date: "August 26th - 27th, 2017",
    location: "Toronto, Ontario",
    project:
      "Developed an open platform for people shipping items to the same place to combine shipping costs and save money.",
    image: noImage,
    source: ["Source", "site"],
  },
  {
    event: "Stupid Hack Toronto",
    date: "July 23rd, 2017",
    location: "Toronto, Ontario",
    project:
      "Developed a Chrome extension which tracks which Facebook profiles you have visited and immediately texts your girlfriend if you visited another girl's page.",
    image: noImage,
    source: ["Source"],
  },
  {
    event: "Global AI Hackathon - Toronto",
    date: "June 23rd - 25th, 2017",
    location: "Toronto, Ontario",
    project:
      "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset] (https://www.kaggle.com/c/challenges-in-representation- learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow] (https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st Place prize at the Global A1 Hackathon - Toronto and was also invited to demo at [NextAl Canada](https://www.nextcanada.com/next-ai).",
    source: ["Article", "Source"],
    image: noImage,
  },
  {
    event: "McGill AI for Social Innovation Hackathon",
    date: "June 17th - 18th, 2017",
    location: "Montreal, Quebec",
    project: "Developed real-time facial microexpression analyzer using AI.",
    image: noImage,
  },
  {
    event: "Open Source Circular Economy Days Hackathon",
    date: "June 10th, 2017",
    location: "Toronto, Ontario",
    project:
      "Developed a custom admin interface for food waste startup Genecis to manage their data and provide analytics.",
    source: ["Source"],
    image: noImage,
  },
  {
    event: "Make School's Student App Competition 2017",
    date: "May 19th - 21st, 2017",
    location: "International",
    project: "Improved PocketDoc and submitted to online competition.",
    source: ["Medium Article", "Devpost", "YouTube", "source"],
    image: noImage,
  },
  {
    event: "HackMining",
    date: "May 12th - 14th, 2017",
    location: "Toronto, Ontario",
    project: "Developed a neural network to optimize a mining process.",
    image: noImage,
  },
  {
    event: "Waterloo Equithon",
    date: "May 5th - 7th, 2017",
    location: "Waterloo, Ontario",
    project:
      "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    source: ["Devpost", "YouTube", "source"],
    image: noImage,
  },
  {
    event: "SpaceApps Waterloo",
    date: "April 28th - 30th, 2017",
    location: "Waterloo, Ontario",
    project:
      "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    source: ["Source"],
    image: noImage,
  },
  {
    event: "MHacks 9",
    date: "March 24th - 26th, 2017",
    location: "Ann Arbor, Michigan",
    project:
      "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    image: noImage,
    source: ["Source"],
  },
  {
    event: "StartHacks I",
    date: "March 4th - 5th, 2017",
    location: "Waterloo, Ontario",
    project:
      "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack..",
    source: ["Source (Mobile)", "Source (Server)"],
    image: noImage,
  },
  {
    event: "QHacks II",
    date: "February 3rd - 5th, 2017",
    location: "Kingston, Ontario",
    project:
      "Developed a mobile game enabling a city-wide manhunt with random lobbies.",
    image: noImage,
    source: ["Source (Mobile)", "Source (API)"],
  },
  {
    event: "Terrible Hacks V",
    date: "November 26th, 2016",
    location: "Waterloo, Ontario",
    project:
      "Developed a mock of Windows 11 with unique notifications and functionality.",
    image: noImage,
    source: ["Source"],
  },
  {
    event: "Portal Hackathon",
    date: "October 29th, 2016",
    location: "Kingston, Ontario",
    project:
      "Developed an internal widget for uploading assignments using Waterloo's portal app.",
    image: noImage,
    source: ["Source"],
  },
];

export const workExperienceData = [
  {
    company: "Atomic Finance",
    image: noImage,
    position: "Bitcoin Protocol Engineer",
    duration: "May 2021 - Oct 2022",
    description:
      "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  },
  {
    company: "Shopify",
    image: noImage,
    position: "Software Engineer",
    duration: "January 2021 - April 2021",
    description:
      "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  },
  {
    company: "Nvidia",
    image: noImage,
    position: "Software Engineer",
    duration: "January 2020 - April 2020",
    description:
      "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  },
  {
    company: "Splunk",
    image: noImage,
    position: "Software Engineer",
    duration: "January 2019 - April 2019",
    description:
      "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  },
  {
    company: "Lime",
    image: noImage,
    position: "Software Engineer",
    duration: "January 2018 - April 2018",
    description:
      "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  },
  {
    company: "Mitre Media",
    image: noImage,
    position: "Software Engineer",
    duration: "May 2017 - August 2017",
    description:
      "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener.",
  },
];

export const educationData = [
  {
    institution: "Buildspace",
    degree: ["s3", "s4", "sf1", "s5"],
    years: "2023 - 2024",
    image: noImage,
  },
  {
    institution: "University of Waterloo",
    degree: "Bachelor's in Computer Science (BCS)",
    years: "2016 - 2021",
    image: noImage,
  },
  {
    institution: "Wilfrid Laurier University",
    degree: "Bachelor's Business Administration (BBA)",
    years: "2016 - 2021",
    image: noImage,
  },
  {
    institution: "International Baccalaureate",
    degree: "IB Diploma",
    years: "2012 - 2016",
    image: noImage,
  },
];
