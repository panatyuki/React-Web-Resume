// Icons.
import htmlIcon from "../assets/icons/html-icon.png"
import cssIcon from "../assets/icons/css-icon.png"
import javascriptIcon from "../assets/icons/javascript-icon.png"
import typescriptIcon from "../assets/icons/typescript-icon.png"
import reactIcon from "../assets/icons/react-icon.png"
import nextjsIcon from "../assets/icons/nextjs-icon.png"
import tailwindcssIcon from "../assets/icons/tailwindcss-icon.png"
import nodejsIcon from "../assets/icons/nodejs-icon.png"
import expressIcon from "../assets/icons/express-icon.png"
import mongodbIcon from "../assets/icons/mongodb-icon.png"
import postgresqlIcon from "../assets/icons/postgresql-icon.png"
import figmaIcon from "../assets/icons/figma-icon.png"

interface Skill {
    id: number,
    title: string,
    image: string,
    description: string,
};

export const skills: Skill[] = [
    {
        id: 1,
        title: "HTML",
        image: htmlIcon,
        description: "Web content",
    },
    {
        id: 2,
        title: "CSS",
        image: cssIcon,
        description: "User interface",
    },
    {
        id: 3,
        title: "JavaScript",
        image: javascriptIcon,
        description: "Interaction",
    },
    {
        id: 4,
        title: "TypeScript",
        image: typescriptIcon,
        description: "Interaction",
    },
    {
        id: 5,
        title: "React",
        image: reactIcon,
        description: "JavaScript library",
    },
    {
        id: 6,
        title: "NEXT.js",
        image: nextjsIcon,
        description: "React framework",
    },
    {
        id: 7,
        title: "Tailwind CSS",
        image: tailwindcssIcon,
        description: "User interface",
    },
    {
        id: 8,
        title: "Node.js",
        image: nodejsIcon,
        description: "Web server",
    },
    {
        id: 9,
        title: "ExpressJS",
        image: expressIcon,
        description: "Node framework",
    },
    {
        id: 10,
        title: "MongoDB",
        image: mongodbIcon,
        description: "No SQL database",
    },
    {
        id: 11,
        title: "PostgreSQL",
        image: postgresqlIcon,
        description: "SQL database",
    },
    {
        id: 12,
        title: "Figma",
        image: figmaIcon,
        description: "Design tool",
    },
];