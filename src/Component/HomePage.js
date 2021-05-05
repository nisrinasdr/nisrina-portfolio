import React from "react"
import { useHistory } from "react-router-dom"


import "../Styles/Style.css"
import About from "../img/about.png"
import Work from "../img/work.png"
import Message from "../img/message.png"
import LinkedIn from "../img/linkedin.png"
import Github from "../img/github.png"

const HomePage = () => {
    let history = useHistory();

    const goToAbout = () => {
        history.push("/about")
    }

    const goToMessage = () => {
        history.push("/message")
    }

    const goToWork = () => {
        history.push("/work")
    }

    return(
        <div className="homepage">
            <div className="homepage-item greeting">
                <p>Hello, my name is</p>
                <h2 className="highlight">Nisrina Alya Sudrajat</h2>
                <p>I am a computer science freshgradute from IPB University.
                    I love to design and implement it through code!
                </p>
            </div>

            <div className="homepage-item about" onClick={goToAbout}>
                <img src={About} alt="" />
                <h1>About</h1>
                <p>My basic info, background, and skills.</p>
            </div>

            <div className="homepage-item work" onClick={goToWork}>
                <img src={Work} alt="" />
                <h1>Work</h1>
                <p>Project I've been working on.</p>
            </div>

            <div className="homepage-item message" onClick={goToMessage}>
                <img src={Message} alt="" />
                <h1>Message</h1>
                <p>Send me a message!</p>
            </div>

            <div className="homepage-item github">
                <a href="https://github.com/nisrinasdr" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" />
                </a>
                <h3>Github</h3>
            </div>

            <div className="homepage-item linkedin">
                <a href="https://www.linkedin.com/in/nisrinasdr" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="linkedin" />
                </a>
                <h3>LinkedIn</h3>
            </div>
            
        </div>
    )
}

export default HomePage