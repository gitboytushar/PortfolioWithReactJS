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
    'I’m a B.tech graduate passionate about frontend development for web and mobile. I’m new to the industry but excited to roll up my sleeves, learn fast, and add value to dynamic projects and teams.'
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Food Order Management App',
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
    id: 2,
    title: 'ServiSpot',
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
    id: 3,
    title: 'News Aggregator',
    description:
      "It display's latest news using the gNews API, offering search functionality and predefined categories for easy navigation. Works across all devices and it's free of advertisements.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'gNews API'],
    videoSrc: 'https://www.youtube.com/embed/LcRQHhaFb8A',
    preview_link: 'https://gitboytushar.github.io/The-NewsBlocks/',
    code_link: 'https://github.com/gitboytushar/The-NewsBlocks'
  },
  {
    id: 4,
    title: 'WorldTime Mobile App',
    description:
      'This app demonstrates API integration and dynamic UI updates, working on both Android and iOS devices. Users can select global locations from a list to see real-time updates with backgrounds reflecting day or night. Developed using Android Studio, inspired by a YouTube tutorial by NetNinja.',
    techStack: [
      'Android Studio',
      'Flutter',
      'C++ & Dart',
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
    id: 5,
    title: 'Bootstrap Website',
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
    id: 6,
    title: 'Weather App',
    description:
      'This app provides real-time weather updates for any searched location or the user’s device geolocation. It features a fully responsive interface with synced weather icons reflecting live conditions.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'openweathermap Api',
      'Git',
      'GitHub'
    ],
    videoSrc: 'https://www.youtube.com/embed/ChTQgtNTq_4?si=sK2GMjtMBH8VjSk-',
    preview_link: 'https://weather-app-nine-ochre.vercel.app/',
    code_link: 'https://github.com/gitboytushar/weatherApp'
  },
  {
    id: 7,
    title: 'Bootstrap Assignment Website',
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
    id: 8,
    title: 'Wordpress Project',
    description:
      'This project showcases my no-code web development skills by creating a modern, responsive multi-page website on WordPress, deployed using AWS and developed using LocalWP software and Elementor, All-in-One Migration WordPress plugins.',
    techStack: ['WordPress', 'LocalWP', 'Elementor', 'AWS'],
    videoSrc: 'https://www.youtube.com/embed/nRyZNpC1E5M?si=dP03hrP-4CPqkmkF',
    preview_link: 'http://finalwp.infinityfreeapp.com/?i=1',
    code_link: '' // NA
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
    name: 'Python',
    logo: (
      <img
        src='/assets/skillsIcons/python.png'
        alt='python'
        draggable='false'
      />
    )
  },
  {
    name: 'Html5',
    logo: (
      <img src='/assets/skillsIcons/html.png' alt='html5' draggable='false' />
    )
  },
  {
    name: 'Css3',
    logo: <img src='/assets/skillsIcons/css.png' alt='css3' draggable='false' />
  },
  {
    name: 'Javascript',
    logo: <img src='/assets/skillsIcons/js.png' alt='js' draggable='false' />
  },
  {
    name: 'Bootstrap5',
    logo: (
      <img
        src='/assets/skillsIcons/bootstrap.png'
        alt='bootstrap'
        draggable='false'
      />
    )
  },
  {
    name: 'ReactJS',
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
    name: 'Figma',
    logo: (
      <img src='/assets/skillsIcons/figma.png' alt='figma' draggable='false' />
    )
  },
  {
    name: 'NodeJS',
    logo: (
      <img src='/assets/skillsIcons/node.png' alt='node' draggable='false' />
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
    name: 'Aws',
    logo: <img src='/assets/skillsIcons/aws.png' alt='aws' draggable='false' />
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
    name: 'WordPress',
    logo: (
      <img
        src='/assets/skillsIcons/wordpress.png'
        alt='wordpress'
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
  }
]

export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'The Northcap University, Gurugram',
    institutionWebsiteLink:
      'https://www.ncuindia.edu/the-northcap-university/#the-northcap-university',
    duration: '2020 - 2024',
    description:
      'Graduated in Computer Science with a specialization in Cloud Computing, achieving a 7.9 CGPA. Developed hands-on experience with leading cloud service providers, including Google Cloud Platform and Amazon Web Services. Additionally, focused on web development and completed a major project, Servispot—a modern, responsive platform designed as a hub for multiple small web applications accessible via user login.'
  },
  {
    id: 2,
    degree: 'Non-Medical with Computer Science',
    institution: 'Kendriya Vidyalaya No.1 AFS Gurugram',
    institutionWebsiteLink: 'https://afsno1gurgaon.kvs.ac.in/',
    duration: 'Senior Secondary (XII) - 2019',
    description:
      'I chose the Non-Medical stream with Computer Science as an elective in senior secondary, where I built a solid foundation in C++ coding under a supportive teacher. As a bright student, I mentored classmates and developed a C++ command-line application for my Class 12 project, featuring shopping and lottery functionalities while managing user data in text files. I completed my studies with 82% in the CBSE board exams.'
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Kendriya Vidyalaya No.1 AFS Gurugram',
    institutionWebsiteLink: 'https://afsno1gurgaon.kvs.ac.in/',
    duration: 'Secondary (X) - 2017',
    description:
      'I completed Class 10 with a CGPA of 8.8, and while performing well in my studies, I was recognized for my creative skills in art and craft, earning several prizes and trophies. I also enjoyed playing table tennis at a regional level, where I achieved bronze and silver medals, showcasing my commitment to extracurricular activities and skill development.'
  }
]

export const HOBBIES = [
  {
    id: 1,
    image: '/assets/hobby_images/artist.webp',
    name: 'Artist and Designer',
    rewards:
      'Creative mind celebrated for unique art throughout school and college; now exploring UI design through Figma in development projects.'
  },
  {
    id: 2,
    image: '/assets/hobby_images/tabletennis.jpg',
    name: 'Table Tennis Champ',
    rewards:
      'A competitive player with multiple wins; led my CSE branch team as captain in the 2023 inter-college tournament.'
  },
  {
    id: 3,
    image: '/assets/hobby_images/techy.jpg',
    name: 'Tech Enthusiast',
    rewards:
      'Passionate about tech innovations and gadgets; enjoys exploring cutting-edge developments, especially within the Apple ecosystem.'
  },
  {
    id: 4,
    image: '/assets/hobby_images/music.jpg',
    name: 'Movie and Music Lover',
    rewards:
      'Finds relaxation and inspiration through diverse music and films, drawing fresh perspectives and creative ideas.'
  },
  {
    id: 5,
    image: '/assets/hobby_images/photography.jpg',
    name: 'Smartphone Photographer',
    rewards:
      'Captures moments with a smartphone, gaining appreciation from friends and family; cherishes the nostalgia of saved memories.'
  }
]
