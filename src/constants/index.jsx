export const NAVIGATION_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Work Experience', href: '#work' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' }
]

export const PROFILE = {
  name: 'Tushar Verma',
  role: 'Frontend Developer',
  subheading:
    'Passionate about creating modern, responsive and impactful solutions. Excited to work with a team, take on challenges, and gain real-world experience while growing my skills in software development.'
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Wordpress Build #1',
    description:
      'This project showcases my no-code web development skills by creating a modern, responsive multi-page website on WordPress, deployed using AWS and developed using LocalWP software and Elementor, All-in-One Migration WordPress plugins.',
    techStack: ['WordPress', 'LocalWP', 'Elementor', 'AWS'],
    videoSrc: 'https://www.youtube.com/embed/nRyZNpC1E5M?si=dP03hrP-4CPqkmkF',
    preview_link: 'http://finalwp.infinityfreeapp.com/?i=1',
    code_link: '' // NA
  },
  {
    id: 2,
    title: 'Bootstrap Build #2',
    description:
      'This project highlights my Bootstrap skills, created for a recruitment assignment. Using the CDN method, I added subtle CSS animations as instructed and hosted the outcome on Netlify.',
    techStack: [
      'Bootstrap',
      'JavaScript',
      'unDraw.co',
      'CSS animations',
      'GitHub',
      'Netlify'
    ],
    videoSrc: '', // no need for video
    preview_link: 'https://jilliontechnologies-assignment.netlify.app/',
    code_link: 'https://github.com/gitboytushar/bootstrap-website2'
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'This app provides real-time weather updates for any searched location or the user’s device geolocation. It features a fully responsive interface with synced weather icons reflecting live conditions.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vercel',
      'openweathermap Api',
      'Git',
      'GitHub'
    ],
    videoSrc: 'https://www.youtube.com/embed/ChTQgtNTq_4?si=sK2GMjtMBH8VjSk-',
    preview_link: 'https://weather-app-nine-ochre.vercel.app/',
    code_link: 'https://github.com/gitboytushar/weatherApp'
  },
  {
    id: 4,
    title: '🌟 Bootstrap Build #1',
    description:
      'This website demonstrates my Bootstrap skills in creating a responsive and modern user interface. Designed as an educational platform with placeholder content, it marks my first project using Bootstrap.',
    techStack: [
      'Bootstrap',
      'HTML',
      'Google Maps embed',
      'CSS',
      'randomuser.me Api',
      'Git',
      'GitHub'
    ],
    videoSrc: 'https://www.youtube.com/embed/PBjDMEX4Z5I?si=oRwTVUcv35p4LdO2',
    preview_link: 'https://gitboytushar.github.io/WebsiteWithBootstrap/',
    code_link: 'https://github.com/gitboytushar/WebsiteWithBootstrap'
  },
  {
    id: 5,
    title: 'Flutter App #1',
    description:
      'This app demonstrates API integration and dynamic UI updates, working on both Android and iOS devices. Users can select global locations from a list to see real-time updates with backgrounds reflecting day or night. Developed using Android Studio, inspired by a YouTube tutorial by NetNinja.',
    techStack: [
      'Flutter',
      'Android Studio',
      'Dart',
      'worldtimeapi',
      'Git',
      'GitHub',
      'Xcode'
    ],
    videoSrc: '', // add video
    preview_link:
      'https://appetize.io/app/b_lh74aeeogtmeo7zqbszfesxrre?device=iphone14promax&osVersion=16.2',
    code_link: 'https://github.com/gitboytushar/WorldTime_FlutterApp'
  },
  {
    id: 6,
    title: '🌟 Flutter App #2',
    description:
      'This app lets vendors manage food orders, inventory, and revenue stats. Developed for a friend, it features a modern UI and seamless user experience on Android and iOS. The UI was redesigned in Figma before coding.',
    techStack: [
      'Figma',
      'Android Studio',
      'Flutter',
      'Dart',
      'Git',
      'GitHub',
      'Xcode',
      'Appetize.io'
    ],
    videoSrc: '', // add video
    preview_link:
      'https://appetize.io/app/b_e2a34lzvqc57t2kgnbxy4w4b6e?device=iphone15promax&osVersion=17.2',
    code_link: ''
  },
  {
    id: 7,
    title: '🌟 News Aggregator',
    description:
      "It display's latest news using the gNews API, offering search functionality and predefined categories for easy navigation. Works across all devices and it's free of advertisements.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'gNews API'],
    videoSrc: 'https://www.youtube.com/embed/LcRQHhaFb8A',
    preview_link: 'https://gitboytushar.github.io/The-NewsBlocks/',
    code_link: 'https://github.com/gitboytushar/The-NewsBlocks'
  },
  {
    id: 8,
    title: '🌟 ServiSpot Website',
    description:
      'A modern, responsive web app bringing together useful services in one place accessible through a simple user login. Ads are displayed before login to generate revenue. Developed as a major college project.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
      'Firebase Auth',
      'GitHub',
      'Web3Forms',
      'Google Analytics',
      'Monetag Ads'
    ],
    videoSrc: 'https://www.youtube.com/embed/miP1INfMZG4',
    preview_link: 'http://servispot.shop/',
    code_link: 'https://github.com/gitboytushar/serviSpot'
  },
  {
    id: 9,
    title: 'Simple Chat App',
    description:
      'A basic implementation of the Socket.IO library for a real-time chat app that provides private chat with socket IDs, or users can join custom-created rooms for a multi-user messaging experience. To try this, follow the guidelines mentioned in my GitHub readme.',
    techStack: [
      'ReactJs',
      'Material UI',
      'Socket.io',
      'ExpressJs',
      'NodeJs',
      'git',
      'github'
    ],
    videoSrc: 'https://www.youtube.com/embed/x0vAYMjXzqQ',
    preview_link: '',
    code_link: 'https://github.com/gitboytushar/Socket.io-Mini-Project'
  }
]

export const SKILLS = [
  {
    name: 'Java',
    logo: (
      <img src='/assets/skillsIcons/java.png' alt='java' draggable='false' />
    )
  },
  {
    name: 'Html',
    logo: (
      <img src='/assets/skillsIcons/html.png' alt='html5' draggable='false' />
    )
  },
  {
    name: 'Css',
    logo: <img src='/assets/skillsIcons/css.png' alt='css3' draggable='false' />
  },
  {
    name: 'Javascript',
    logo: <img src='/assets/skillsIcons/js.png' alt='js' draggable='false' />
  },
  {
    name: 'Bootstrap',
    logo: (
      <img
        src='/assets/skillsIcons/bootstrap.png'
        alt='bootstrap'
        draggable='false'
      />
    )
  },
  {
    name: 'ReactJs',
    logo: (
      <img
        src='/assets/skillsIcons/react.png'
        alt='reactjs'
        draggable='false'
      />
    )
  },
  {
    name: 'Tailwindcss',
    logo: (
      <img
        src='/assets/skillsIcons/tailwind.png'
        alt='tailwindcss'
        draggable='false'
      />
    )
  },
  {
    name: 'Framer motion',
    logo: (
      <img
        src='/assets/skillsIcons/motion.png'
        alt='framer motion icon'
        draggable='false'
      />
    )
  },
  {
    name: 'NodeJs',
    logo: (
      <img src='/assets/skillsIcons/node.png' alt='node' draggable='false' />
    )
  },
  {
    name: 'ExpressJs',
    logo: (
      <img src='/assets/skillsIcons/express.png' alt='node' draggable='false' />
    )
  },
  {
    name: 'MongoDB',
    logo: (
      <img
        src='/assets/skillsIcons/mongodb.png'
        alt='mongodb'
        draggable='false'
      />
    )
  },
  {
    name: 'MySQL',
    logo: (
      <img
        src='/assets/skillsIcons/mysql.png'
        alt='mongodb'
        draggable='false'
      />
    )
  },
  {
    name: 'Git',
    logo: <img src='/assets/skillsIcons/git.png' alt='git' draggable='false' />
  },
  {
    name: 'GitHub',
    logo: (
      <img
        src='/assets/skillsIcons/github.png'
        alt='github'
        draggable='false'
      />
    )
  },
  {
    name: 'Flutter',
    logo: (
      <img
        src='/assets/skillsIcons/flutter.png'
        alt='flutter'
        draggable='false'
      />
    )
  },
  {
    name: 'Firebase',
    logo: (
      <img
        src='/assets/skillsIcons/firebase.png'
        alt='firebase'
        draggable='false'
      />
    )
  },
  {
    name: 'Aws',
    logo: <img src='/assets/skillsIcons/aws.png' alt='aws' draggable='false' />
  },
  {
    name: 'Figma',
    logo: (
      <img src='/assets/skillsIcons/figma.png' alt='figma' draggable='false' />
    )
  },
  {
    name: 'WordPress',
    logo: (
      <img
        src='/assets/skillsIcons/wordpress.png'
        alt='wordpress'
        draggable='false'
      />
    )
  }
]

export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    institution: 'The Northcap University',
    institutionWebsiteLink:
      'https://www.ncuindia.edu/the-northcap-university/#the-northcap-university',
    duration: 'Batch of 2020',
    description:
      'Graduated in CSE with a specialization in Cloud Computing. Gained hands-on experience with GCP and AWS cloud service providers. Primarily focused on software development to attain the status of a full-stack developer, aligning with my career aspirations.'
  },
  {
    id: 2,
    degree: 'Intermediate',
    institution: 'Kendriya Vidyalaya',
    institutionWebsiteLink: 'https://afsno1gurgaon.kvs.ac.in/',
    duration: 'Senior Secondary (XII)',
    description:
      'With the Non-medical stream, I chose Computer Science as an elective, where a supportive teacher taught me coding. In lab sessions, I excelled in coding assignments. This ignited my passion for becoming a software developer.'
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Kendriya Vidyalaya',
    institutionWebsiteLink: 'https://afsno1gurgaon.kvs.ac.in/',
    duration: 'Secondary (X)',
    description:
      'With good academic results, I was also known for my creative talents in art and craft, winning numerous awards. I also played table tennis, winning bronze and silver medals at a regional level.'
  }
]

export const HOBBIES = [
  {
    id: 1,
    image: '/assets/hobby_images/artist.webp',
    name: 'Artist and Designer',
    rewards:
      'Recognized throughout school and college, now applying my skills and passion for UI design to software development projects.'
  },
  {
    id: 2,
    image: '/assets/hobby_images/tabletennis.webp',
    name: 'Table Tennis Professional',
    rewards:
      'A competitive player with multiple wins in school and college, I led my CSE team as captain in the 2023 inter-college tournament.'
  },
  {
    id: 3,
    image: '/assets/hobby_images/techy.webp',
    name: 'Technology Enthusiast',
    rewards:
      'Passionate about tech innovations and gadgets, thus always eager to learn about the latest updates and trends in the tech world.'
  },
  {
    id: 4,
    image: '/assets/hobby_images/photography.webp',
    name: 'Smartphone Photographer',
    rewards:
      'I enjoy capturing moments that my friends and family cherish. I find satisfaction in post-editing to enhance their visual impact.'
  }
]
