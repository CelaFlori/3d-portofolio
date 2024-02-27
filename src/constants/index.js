import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    granitLogo,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    TeslaCloneSC,
    RestaurantSC, WhatsAppCloneSC,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "GranIt",
        icon: granitLogo,
        iconBg: "#383E56",
        date: "September 2023 - February 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Tesla Clone",
        description:
            "Web application that clones Tesla's site. It shows the types of cars that Tesla has, the costs and benefits that Tesla has. This site is very easy to use even for those who do not know how to use technology well.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: TeslaCloneSC,
        source_code_link: "https://github.com/FloriCela111",
    },
    {
        name: "Restaurant Website",
        description:
            "This website can help restaurants a lot in online customer management. The online restaurant contains the menu and the way to contact the restaurant service. It makes managing customers easier.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: RestaurantSC,
        source_code_link: "https://github.com/FloriCela111",
    },
    {
        name: "WhatsApp Clone",
        description:
            "Web application that clones the WhatsApp page.In this application you can message to everyone, you can share to them videos,photos, voice message as well.Simple to WhatsApp and is really easy as well. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "BrowserRouter",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: WhatsAppCloneSC,
        source_code_link: "https://github.com/FloriCela111",
    },
];

export { services, technologies, experiences, testimonials, projects };
