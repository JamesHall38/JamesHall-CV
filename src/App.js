import "./App.css"
import User from "./components/User"
import Profil from "./components/Profil"
import DarkMode from "./components/DarkMode"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import { Preview, print } from 'react-html2pdf'


function App() {
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
              <button onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
              </button>
            </div>
            <User />
          </div>
          <div className="main">
            <Profil />
          </div>
        </div>
      </div>
    </Preview>
  )
}

export default App