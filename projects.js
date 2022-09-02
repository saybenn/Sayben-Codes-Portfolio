export const majorProjects = [
  {
    title: 'Chat App',
    description:
      "Chat App is a live messaging application that makes use of Next.js' Server Side Rendering. It supports 1-on-1 Chats as well as Group Chats. Sharing Images also isn't a problem thanks to Firebase's Storage plan.",
    stack: ['Next.js', 'FireBase', 'Next Auth', 'Sass', 'MUI'],
    role: 'Developer, Designer',
    inDepth:
      "This application was a real challenge to develop, but was nonetheless enjoyable and I learned a lot. It was my first time making use of Firebase in a serious project, so it took some getting used to understanding how they structure Collections and Documents and also making API calls for CRUD operations. </br> Once beyond that curve, next was creating Utility Functions that not only checked the Inputs, but also compared the Inputs to the data stored inside the database to ensure no duplicates were being made.</br> Purposely, I devised things a bit messily. Not having uniform data go into the database created a challenge that required me to get creative with my rendering, how I stored data, and also checked data. In more detail, there are Registered Users and Unregistered Users. On Log-In with a Google Account, the User's email, profile image, and their name are captured and stored in a Collection creating a Registered User. When a Logged-In User decides to Chat with a User who isn't registered in the Database, only the Email Input is stored, so this is where the challenge was created, but promptly solved by making good use of Built In Methods like includes, filter, and Firebase's Queries.  </br> Once I was acquainted with Firebase and I had my Helper Functions, the rest, like the Chat Info Page was rather easy to implement. My only regret is going lax on the UI, but this project was for the sake of learning the ins and outs of Firebase and Next.js.",
    link: 'https://chat-app-kappa-gold.vercel.app/',
    image: 'images/chatappshot.png',
    repo: 'https://github.com/saybenn/ChatApp',
    id: 1,
  },
  {
    title: 'eCoffee',
    description:
      'eCoffee is an online Coffee Shop and Blog. It allows users to register accounts, go through a standard checkout process to make purchases, enjoy reading the blog posts of others, or request an author role to make blog posts of their own. It supports both Stripe and PayPal.',
    stack: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Redux',
      'GoogleAPI',
      'JSON Web Token',
      'StripeAPI',
      'PayPalAPI',
      'BootStrap',
      'Font Awesome',
    ],
    role: 'Developer, Designer',
    inDepth:
      'Developing eCoffee was culminating all that I have learned from my online learning and then some. Building an eCommerce platform seemed pretty standard and straight-forward, so adding functionality that would qualify eCoffee as a Blog as well was a must.</br>I started from the Backend and worked my way to the Frontend, making use of Postman to ensure my Routing was working as intended and I was communicating with my MongoDB database. I find working from Backend to Frontend is a more enjoyable workflow, because then you just have to <i>hook up</i> clicks and buttons to things. These "things" being the Actions for my Redux Reducers. Redux is definitely a tool I like a lot, it makes State Management very digestable and rather simple.</br>The most challenging part of this project was probably devising the Admin Panel with means to sort Consumer Orders by the Date they placed them or if they were Paid or Delivered yet. Beyond that, the scope of the project, chipping away at it day-by-day, because ultimately it was putting into practice all that I had been studying till that point, so I had plenty of notes to guide me along the way as well as example code from previous projects. React Quill was a bit of a nuisance to get working as well, but that is about it!',
    link: 'https://ecoffeeapp.herokuapp.com/',
    image: 'images/ecoffeeshot.png',
    repo: 'https://github.com/saybenn/eCoffee',
    id: 2,
  },
  {
    title: 'Bubbles & Trashbags',
    description:
      'The beauty of Bubbles & Trashbags is within its design. This was a freelance project for a small-business owner, so I was inspired to create something that was essentially a side-scrolling business card. Extremely clean, simple, and to the point. Each slide delivers the information it needs and it closes with a contact form and Google Map.',
    stack: ['HTML', 'JavaScript', 'GoogleAPI', 'Sass'],
    role: 'Developer, Designer',
    inDepth:
      "Bubbles & Trashbags was my first freelance project I landed while in Virginia. There isn't too much to say about the creation process, as the client was just looking to spruce up his pre-existing web page and since the project only required HTML and CSS. PHP was included in the original release for the sake of emails, but my understanding of code was novice level at this point in my journey. So, while I could put together something that worked, it was insecure and left the intended recipient's email plain for all eyes in the GitHub repo. I've since learned about Environment Variables, so it's defintely something laugh worthy now. ",
    link: 'https://startling-frangipane-a36f6c.netlify.app/',
    image: 'images/BATshot.png',
    repo: 'https://github.com/saybenn/Bubbles-Trashbags',
    id: 3,
  },
]

export const minorProjects = [
  {
    title: 'Clock App',
    description:
      'Clock App does everything you would expect from a clock. It keeps track of your local time, but it also allows the user to change timezones to for anywhere in the US.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    role: 'Developer, Designer',
    inDepth:
      'Clock App does everything you would expect from a clock. It keeps track of your local time, but it also allows the user to change timezones to for anywhere in the US. It was a bit of a nuisance to develop, this was in my beginning stages, but I hammered through it and got familiar with the JavaScript Date Object in the process.',
    link: 'https://superlative-treacle-eec791.netlify.app/',
    image: 'images/clockshot.png',
    repo: 'https://github.com/saybenn/Clock-App',
    id: 4,
  },
  {
    title: 'Video Player',
    description:
      'This Video Player is preloaded with 3 videos. Sade, a silly cat video, and an anime video, my favorite, One Piece. It can pause, play, stop, skip, go back or forward in the queue, and it has a nice fade animation to give a movie theater vibe.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    role: 'Developer, Designer',
    inDepth:
      'This Video Player is preloaded with 3 videos. Sade, a silly cat video, and an anime video, my favorite, One Piece. It can pause, play, stop, skip, go back or forward in the queue, and it has a nice fade animation to give a movie theater vibe. Grab some popcorn and enjoy!',
    link: 'https://stupendous-paletas-573b08.netlify.app/',
    image: 'images/videoshot.png',
    repo: 'https://github.com/saybenn/Video-Player',
    id: 5,
  },
  {
    title: 'JailBreak',
    description:
      'JailBreak is a game that almost everyone is familiar with. Bounce a ball into tile bricks hanging overhead to break them. Clear all the bricks to win.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    role: 'Developer',
    inDepth:
      'JailBreak is a game that almost everyone is familiar with. Bounce a ball into tile bricks hanging overhead to break them. Clear all the bricks to win. This is an app I developed during my JavaScript course.',
    link: 'https://starlit-platypus-cce161.netlify.app/',
    image: 'images/breakshot.png',
    repo: 'https://github.com/saybenn/Jail-Break',
    id: 6,
  },
]
