import React from "react"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"


function Formations(props) {
    const datas = props.datas

    return (
        <div className="cursus mb3">
            <h2>Formations</h2>
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

function Experiences(props) {
    const datas = props.datas

    return (
        <div className="cursus">
            <h2>Expériences professionelles</h2>
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

function Profil() {
    return (
        <>
            <div className="profil mb5">
                <h2>Profil</h2>
                <p>
                    Je suis un développeur front-end junior,
                    passionné par l'informatique et aimant apprendre
                    de nouvelles technologies. Je recherche,
                    expérimente et améliore constamment mes
                    compétences pour offrir la meilleure expérience
                    possible aux utilisateurs.
                </p>
            </div>
            <Formations datas={DataFormations} />
            <Experiences datas={DataExperiences} />
        </>
    )
}

export default Profil