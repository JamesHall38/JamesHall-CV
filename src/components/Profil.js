import React from "react"
import frenchDataFormations from "../datas/FrenchFormations"
import frenchDataExperiences from "../datas/FrenchExperiences"
import englishDataFormations from "../datas/EnglishFormations"
import englishDataExperiences from "../datas/EnglishExperiences"


function Formations({ languageIsFrench }) {
    const datas = languageIsFrench ? frenchDataFormations : englishDataFormations
    return (
        <div className="cursus mb3">
            {languageIsFrench
                ? <h2>Formations</h2>
                : <h2>Education</h2>}
            {datas.map(item => (
                <div className="grid__row" key={item.id}>
                    <div className="grid__item">
                        <p className="grid__date">{item.date}</p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__title">{item.title}</h3>
                        <p className="grid__location">{item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Experiences({ languageIsFrench }) {
    const datas = languageIsFrench ? frenchDataExperiences : englishDataExperiences
    return (
        <div className="cursus">
            {languageIsFrench
                ? <h2>Expériences professionnelles</h2>
                : <h2>Work experience</h2>}
            {datas.map(item => (
                <div className="grid__row" key={item.id}>
                    <div className="grid__item">
                        <p className="grid__date">{item.equipe}</p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__title">{item.title}</h3>
                        <p className="grid__location">{item.location}</p>
                        <p className="grid__text">{item.text}</p>
                        <ul className="grid__missions">
                            {item.missions.map(mission => (
                                <li className="grid__mission" key={mission.id}>
                                    {mission.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

function Profil({ languageIsFrench }) {
    console.log(languageIsFrench)
    return (
        <>
            <div className="profil mb5">
                {languageIsFrench
                    ? <h2>Profil</h2>
                    : <h2>Objective</h2>}
                <p>
                    {languageIsFrench
                        ? ` Je suis un développeur front-end junior,
                    passionné par l'informatique et aimant apprendre
                    de nouvelles technologies. Je recherche,
                    expérimente et améliore constamment mes
                    compétences pour offrir la meilleure expérience
                    possible aux utilisateurs. `
                        : `I am a french junior front-end developer,
                    passionate about computer science and loving to learn new technologies.
                    I constantly research, experiment and improve my skills
                    to provide the best possible user experience.`}

                </p>
            </div>
            <Formations languageIsFrench={languageIsFrench} />
            <Experiences languageIsFrench={languageIsFrench} />
        </>
    )
}

export default Profil