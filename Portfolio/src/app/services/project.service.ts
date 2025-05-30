import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedProject: any = {};

  devProjects: any[] = [
    {
      logo: '/assets/images/KeyHolder/KeyHolderLogo.png',
      title: 'KeyHolder',
      description: 'A secure password management app for private use, designed to securely store and manage users credentials, also allowing them to generate passwords, export and import credentials into their account.',
      descriptionShort: 'The app ensures cross-platform compatibility focusing on user security and convenience.',
      technologies: [
        { icon: '/assets/images/icons/ionic.png', name: 'Ionic' },
        { icon: '/assets/images/icons/angular.png', name: 'Angular' },
        { icon: '/assets/images/icons/firebase.png', name: 'Firebase' }
      ],
      isDesign: false,
      isPhone: true,
      github: 'This github repository is private.',
      githubUrl: '',
      date: 2024,
      collaborators: ['Mateus Oliveira'],
      website: { text: 'unavailable', url: '' },
      thumbnail: '/assets/images/KeyHolder/deviceframesKeyholder.png',
      showcase: [
        { src: '/assets/images/KeyHolder/signUpPrev.png', text: 'Start securing your world. Be Safe online.' },
        { src: '/assets/images/KeyHolder/signInPrev.png', text: 'Welcome back. Your digital vault awaits.' },
        { src: '/assets/images/KeyHolder/vaultPrev.png', text: 'All your passwords. One secure place.' },
        { src: '/assets/images/KeyHolder/newAccPrev.png', text: 'Another account. Safely locked away.' },
        { src: '/assets/images/KeyHolder/accPrev.png', text: 'Access made simple. Security made strong.' },
        { src: '/assets/images/KeyHolder/favPrev.png', text: 'Your go-tos. Just one tap away.' },
        { src: '/assets/images/KeyHolder/generatorPrev.png', text: 'Strong. Unique. Instantly yours.' },
        { src: '/assets/images/KeyHolder/settingsPrev.png', text: 'Tune your app, Your way.' },
        { src: '/assets/images/KeyHolder/securityPrev.png', text: 'Maximum protection, fully in your control.' },
        { src: '/assets/images/KeyHolder/profilePrev.png', text: 'Your identity. Safe and sound.' },
      ],
      color: 'purple-gradient'
    },
  ]

  designProjects: any[] = [
    {
      logo: '/assets/images/Cultured/culturedLogo.png',
      title: 'Cultured',
      description: 'A manga and manhwa tracking website designed to help users monitor their reading progress. The platform allows users to easily track chapters, update reading statuses, and manage their library of ongoing series.',
      descriptionShort: 'With a user-friendly interface and customizable lists, the website ensures an intuitive experience.',
      technologies: [
        { icon: '/assets/images/icons/figma.png', name: 'Figma' },
      ],
      isDesign: true,
      isPhone: false,
      github: '',
      githubUrl: '',
      date: 2022,
      collaborators: ['Mateus Oliveira'],
      website: { text: 'Open In Figma', url: 'https://www.figma.com/design/l2K2NmdPsmyDwJR0qGgWJ9/cultured?node-id=0-1&t=ZW0YNo6Nz1y7vx0K-1' },
      thumbnail: '/assets/images/Cultured/deviceframesCultured.png',
      showcase: [
        { src: '/assets/images/Cultured/libraryPrev.png', text: 'Your stories. Your journey. All in one place.' },
        { src: '/assets/images/Cultured/mangaPrev.png', text: 'Dive in. Track every chapter as you go.' },
        { src: '/assets/images/Cultured/notificationsPrev.png', text: 'Never miss a new chapter again.' },
        { src: '/assets/images/Cultured/searchPrev.png', text: 'Find your next obsession in seconds.' },
        { src: '/assets/images/Cultured/settingsPrev.png', text: 'Make the site yours. Customize your experience.' },
      ],
      color: 'red-gradient'
    },
    {
      logo: '/assets/images/PocketList/Logo.png',
      title: 'PocketList',
      description: 'An intuitive app for users to create and manage shopping or wish lists alone or with others. It suggests recipes based on ingredients users already have, helping with meal planning, shared shopping, and reducing food waste for a more practical daily routine.',
      descriptionShort: 'Designed for Portuguese users by a Portuguese, this app is an everyday solution for daily tasks.',
      technologies: [
        { icon: '/assets/images/icons/figma.png', name: 'Figma' },
      ],
      isDesign: true,
      isPhone: true,
      github: '',
      githubUrl: '',
      date: 2025,
      collaborators: ['Mateus Oliveira'],
      website: { text: 'Open In Figma', url: 'https://www.figma.com/proto/fymKhbbqdOoJux5jbS489b/Market-list-app?page-id=1%3A2&node-id=73-671&p=f&viewport=31%2C57%2C0.48&t=JnLXxkJzYdKAsnpk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=73%3A671' },
      thumbnail: '/assets/images/PocketList/showcase.png',
      showcase: [
        { src: '/assets/images/PocketList/Login.png', text: 'Organize your day. One list at a time.' },
        { src: '/assets/images/PocketList/CreateLists.png', text: 'Start fresh. Get what you want, your way.' },
        { src: '/assets/images/PocketList/listpage.png', text: 'Everything you need, shared and sorted.' },
        { src: '/assets/images/PocketList/cooking.png', text: 'Smart meals with what you already have.' },
      ],
      color: 'blue-gradient'
    },
    {
      logo: '/assets/images/Pride/logo.png',
      title: 'Pride',
      description: 'A bold landing page for Pride, a fictional ad-free music streaming platform for young adults who love parties and nightlife. With millions of Dance, Hip-Hop, Rock, and R&B tracks available on the web and early mobile access, the homepage focuses on converting visitors into premium users.',
      descriptionShort: 'Designed for music lovers by music lovers, Pride is your everyday soundtrack—ad-free and built for the party scene.',
      technologies: [
        { icon: '/assets/images/icons/figma.png', name: 'Figma' },
      ],
      isDesign: true,
      isPhone: false,
      github: '',
      githubUrl: '',
      date: 2025,
      collaborators: ['Mateus Oliveira'],
      website: { text: 'Open In Figma', url: 'https://www.figma.com/proto/1wFvf8N7R0NV6MsiPDXl87/Pride---UIUX-design?page-id=0%3A1&node-id=106-126&p=f&viewport=779%2C260%2C0.06&t=0YA2q1VbRPlHu2Kw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=106%3A126' },
      thumbnail: '/assets/images/Pride/showcase.png',
      showcase: [
        { src: '/assets/images/Pride/yourmusic.png', text: 'Nonstop music without limits' },
        { src: '/assets/images/Pride/weekTrends.png', text: 'Ready for heat? See this week tracks.' },
        { src: '/assets/images/Pride/explore playlists.png', text: 'Explore endless music. Find your obsession.' },
        { src: '/assets/images/Pride/trending artists.png', text: 'Discover new artists. See what’s trending.' },
        { src: '/assets/images/Pride/exclusive.png', text: 'Love exclusive artists. Only on Pride.' },
      ],
      color: 'pink-gradient'
    },
  ]

  constructor() { }
}
