interface Passion {
    id: number,
    position: string,
    descriptions: string,
    image: string,
};

export const passionsData: Passion[] = [
    {
        id: 1,
        position: "Front-End-Developer",
        descriptions: "(NEXT.js, React, Tailwind CSS)",
        image: "https://plus.unsplash.com/premium_photo-1661414423895-5854eb6b573a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        position: "Full-Stack-Developer",
        descriptions: "(React, Express, Node.js)",
        image: "https://plus.unsplash.com/premium_photo-1661746632807-00d21bac5826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        position: "UX-UI Designer",
        descriptions: "(Figma, Adobe Photoshop)",
        image: "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];