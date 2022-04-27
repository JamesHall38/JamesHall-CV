export const dataExperiences = [
    {
        id: 1,
        title: "Projets à l'université",
        equipe: "En équipe",
        location: "IUT Grenooble",
        text: `Différents projets réalisés à l'IUT Grenoble qui m'ont permi de me familiariser avec la programmation bas niveau.`,
        missions: [
            {
                id: 1,
                title: "Réalisation d’un robot contrôlé par WiFi mêlant électronique et programmation (C++, Arduino)",
            },
            {
                id: 2,
                title: "Création d'un jeu en Python qui utilise le scraping pour récupérer des images",
            }
        ],
    },
    {
        id: 2,
        title: "Projets personnels",
        equipe: "Seul",
        location: "Grenoble",
        text: `Sites adaptés à tout les écrans qui m'ont permi de me familiariser avec React , et travailler avec des API externes`,
        missions: [
            {
                id: 1,
                title: "Mon portfolio : Un site qui utilise des modèles 3D pour présenter mes différents projets et les technologies que j'utilise",
            },
            {
                id: 2,
                title: "Sushi-Shop : Un site de e-commerce qui fonctionne sans back-end grâce à des API",
            },
            {
                id: 3,
                title: "Maze  Solver : Un générateur de labyrinthe qui utilise l'algorithme A* pour trouver le chemin le plus court",
            },
        ],
    }
]
export default dataExperiences