import React from "react"
import HomeIcon from "@mui/icons-material/Home"
import MailIcon from "@mui/icons-material/Mail"
import EventIcon from "@mui/icons-material/Event"
import LocationOnIcon from "@mui/icons-material/LocationOn"


function Skill({ title, rating }) {
    return (
        <div className="skill">
            <p className="skill__label">{title}</p>
            <div className="skill__rating">
                <div className={`circle ${rating > 0 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 1 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 2 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 3 && "circle--plain"}`}></div>
                <div className={`circle ${rating > 4 && "circle--plain"}`}></div>
            </div>
        </div>
    )
}

function Skills({ languageIsFrench }) {
    return (
        <>
            <div className="skills">
                {languageIsFrench ? <h2 className="h2">Compétences</h2>
                    : <h2 className="h2">Skills</h2>}
                <Skill title="HTML/CSS" rating="5" />
                <Skill title="JAVASCRIPT" rating="5" />
                <Skill title="REACT" rating="5" />
                <Skill title="PYTHON" rating="4" />
                <Skill title="C++" rating="3" />
            </div>
            <div className="skills">
                {languageIsFrench
                    ?
                    <>
                        <h2 className="h2">Langues</h2>
                        <Skill title="Français" rating="5" />
                        <Skill title="Anglais" rating="4" />
                        <Skill title="Espagnol" rating="1" />
                    </>
                    :
                    <>
                        <h2 className="h2">Languages</h2>
                        <Skill title="French" rating="5" />
                        <Skill title="English" rating="4" />
                        <Skill title="Spanish" rating="1" />
                    </>
                }
            </div>
            <Interests languageIsFrench={languageIsFrench} />
        </>
    )
}

function Interests({ languageIsFrench }) {
    const inter =
        languageIsFrench ?
            (
                <div className="skills" >
                    <h2 className="h2">Centres d'intérêt</h2>
                    <ul>
                        <li>Informatique</li>
                        <li>Cinéma</li>
                        <li>Jeux-Vidéo</li>
                    </ul>
                </div>
            )
            :
            (
                <div className="skills">
                    <h2 className="h2">Hobbies</h2>
                    <ul>
                        <li>Computer Science</li>
                        <li>Cinema</li>
                        <li>Video games</li>
                    </ul>
                </div>
            )

    return inter
}

function User({ languageIsFrench }) {
    return (
        <>
            <div className="user">
                <img src="./avatar.jpg" className="user__avatar" alt="James Hall" />
                <h1 className="user__name">James Hall</h1>
                {languageIsFrench
                    ? <p className="user__profession">Développeur front-end</p>
                    : <p className="user__profession">Front-end Developer</p>}
                <div className="user__infos">
                    <p className="user__info">
                        {languageIsFrench ? <>
                            <HomeIcon /> Grenoble
                        </>
                            :
                            <>
                                <HomeIcon /> Grenoble, France
                            </>}
                    </p>
                    <p className="user__info">
                        <MailIcon /> <a href="mailto:jameshall.pro38@gmail.com">jameshall.pro38@gmail.com</a>
                    </p>
                    <p className="user__info">
                        {languageIsFrench ?
                            <>
                                <EventIcon /> Date de naissance: 22 Août 2000
                            </>
                            : <>
                                <EventIcon /> Date of birth: 22 August 2000
                            </>}
                    </p>
                    <p className="user__info">
                        {languageIsFrench ?
                            <>
                                <LocationOnIcon /> Lieu de naissance: Montélimar
                            </>
                            : <>
                                <LocationOnIcon /> Place of birth: Montélimar, France
                            </>}
                    </p>
                </div>
            </div>
            <Skills languageIsFrench={languageIsFrench} />
        </>

    )
}

export default User