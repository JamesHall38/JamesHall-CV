import "./App.css"
import { useState } from 'react'
import User from "./components/User"
import Profil from "./components/Profil"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import { Preview, print } from 'react-html2pdf'


function App() {
  const [languageIsFrench, setLanguageIsFrench] = useState(false)

  const handleGenerateCv = () => {
    const cvTemplate = document.getElementById("cv-print")
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    print("James Hall - CV", "cv-print")
    cvTemplate.classList.remove("cv-print")
  }
  return (
    <Preview id={"cv-print"} >
      <div>
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <DarkMode />
              <div className="buttons">
                <button onClick={() => setLanguageIsFrench(!languageIsFrench)}>
                  {languageIsFrench ? 'FR' : 'EN'}
                </button>
                <button onClick={handleGenerateCv}>
                  <PictureAsPdfIcon />
                </button>
              </div>
            </div>
            <User languageIsFrench={languageIsFrench} />
          </div>
          <div className="main">
            <Profil languageIsFrench={languageIsFrench} />
          </div>
        </div>
      </div>
    </Preview >
  )
}

export default App