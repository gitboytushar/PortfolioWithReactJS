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
    title: 'ServiSpot: Multi-Service Platform',
    description:
      'I developed a responsive platform integrating services like a weather and news app, accessible via user sign-in. Ads were implemented to drive engagement and revenue.',
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
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1', // yt embed URL
    preview_link: 'http://servispot.shop/',
    code_link: 'https://github.com/gitboytushar/serviSpot'
  },
  {
    id: 2,
    title: 'Social Media App',
    description:
      'A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.',
    techStack: ['React', 'Firebase', 'Redux'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.',
    techStack: ['Next.js', 'Tailwind CSS'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A blogging platform with a content management system, user authentication, and an intuitive editor.',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 5,
    title: 'Task Management App',
    description:
      'A task management tool with user authentication, reminders, and collaboration features.',
    techStack: ['Angular', 'Firebase', 'Material UI'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 6,
    title: 'Online Learning Platform',
    description:
      'An e-learning platform offering video courses, quizzes, and progress tracking for students.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 7,
    title: 'Online Learning Platform',
    description:
      'An e-learning platform offering video courses, quizzes, and progress tracking for students.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 8,
    title: 'Online Learning Platform',
    description:
      'An e-learning platform offering video courses, quizzes, and progress tracking for students.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  },
  {
    id: 9,
    title: 'Online Learning Platform',
    description:
      'An e-learning platform offering video courses, quizzes, and progress tracking for students.',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    videoSrc:
      'https://www.youtube.com/embed/miP1INfMZG4?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1',
    preview_link: 'https://example-ecommerce.com',
    code_link: 'https://example-ecommerce.com'
  }
]

export const SKILLS = [
  {
    name: 'Java',
    logo: (
      <img src='src/assets/skillsIcons/java.png' alt='java' draggable='false' />
    )
  },
  {
    name: 'Python',
    logo: (
      <img
        src='src/assets/skillsIcons/python.png'
        alt='python'
        draggable='false'
      />
    )
  },
  {
    name: 'Html5',
    logo: (
      <img
        src='src/assets/skillsIcons/html.png'
        alt='html5'
        draggable='false'
      />
    )
  },
  {
    name: 'Css3',
    logo: (
      <img src='src/assets/skillsIcons/css.png' alt='css3' draggable='false' />
    )
  },
  {
    name: 'Javascript',
    logo: <img src='src/assets/skillsIcons/js.png' alt='js' draggable='false' />
  },
  {
    name: 'Bootstrap5',
    logo: (
      <img
        src='src/assets/skillsIcons/bootstrap.png'
        alt='bootstrap'
        draggable='false'
      />
    )
  },
  {
    name: 'ReactJS',
    logo: (
      <img
        src='src/assets/skillsIcons/react.png'
        alt='reactjs'
        draggable='false'
      />
    )
  },
  {
    name: 'Tailwindcss',
    logo: (
      <img
        src='src/assets/skillsIcons/tailwind.png'
        alt='tailwindcss'
        draggable='false'
      />
    )
  },
  {
    name: 'Figma',
    logo: (
      <img
        src='src/assets/skillsIcons/figma.png'
        alt='figma'
        draggable='false'
      />
    )
  },
  {
    name: 'NodeJS',
    logo: (
      <img src='src/assets/skillsIcons/node.png' alt='node' draggable='false' />
    )
  },
  {
    name: 'MongoDB',
    logo: (
      <img
        src='src/assets/skillsIcons/mongodb.png'
        alt='mongodb'
        draggable='false'
      />
    )
  },
  {
    name: 'Git',
    logo: (
      <img src='src/assets/skillsIcons/git.png' alt='git' draggable='false' />
    )
  },
  {
    name: 'GitHub',
    logo: (
      <img
        src='src/assets/skillsIcons/github.png'
        alt='github'
        draggable='false'
      />
    )
  },
  {
    name: 'Aws',
    logo: (
      <img src='src/assets/skillsIcons/aws.png' alt='aws' draggable='false' />
    )
  },
  {
    name: 'Firebase',
    logo: (
      <img
        src='src/assets/skillsIcons/firebase.png'
        alt='firebase'
        draggable='false'
      />
    )
  },
  {
    name: 'WordPress',
    logo: (
      <img
        src='src/assets/skillsIcons/wordpress.png'
        alt='wordpress'
        draggable='false'
      />
    )
  },
  {
    name: 'Flutter',
    logo: (
      <img
        src='src/assets/skillsIcons/flutter.png'
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
    image: 'src/assets/hobby_images/artist.webp',
    name: 'Artist and Designer',
    rewards:
      'Passionate creator recognized for unique art and design throughout school and college; also enjoys crafting UI/UX in Figma for apps.'
  },
  {
    id: 2,
    image: 'src/assets/hobby_images/tabletennis.jpg',
    name: 'Table Tennis Champ',
    rewards:
      'Multi-tournament winner; led the CSE branch team as captain in 2023.'
  },
  {
    id: 3,
    image: 'src/assets/hobby_images/techy.jpg',
    name: 'Tech Enthusiast',
    rewards:
      'Driven by curiosity for tech trends, gadgets, and digital innovations.'
  },
  {
    id: 4,
    image: 'src/assets/hobby_images/music.jpg',
    name: 'Movie and Music Lover',
    rewards:
      'Loves diving into movies and music as a source of relaxation, inspiration, and fresh perspectives.'
  },
  {
    id: 5,
    image: 'src/assets/hobby_images/photography.jpg',
    name: 'Smartphone Photographer',
    rewards:
      'Captures life’s moments through the lens of a smartphone, earning compliments from friends and family.'
  }
]
