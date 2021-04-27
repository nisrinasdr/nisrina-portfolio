import React from "react"

import "../Styles/Style.css"
import profileImage from "../img/nisrina.png"

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="brief-profile">
                <div className="profile-image">
                    <img src={profileImage} alt="nisrina"/>
                </div>
                <div className="profile-text">
                    <p>Hello, my name is</p>
                    <h2>Nisrina Alya Sudrajat</h2>
                    <p>I am a computer science freshgradute from IPB University.
                        I love to learn new things!
                    </p>
                    <div className="cta">
                        <button className="button-primary">My works</button>
                        <button className="button-primary">Full profile</button>
                    </div>
                </div>
            </div>

            <div className="my-work">
                <h2>My Work</h2>
                <img src={profileImage} alt="" />
                <h3>Title</h3>
                <p>In this will be desc</p>
                <p>Tags: HTML/CSS</p>
                <button>Live Demo</button>
                <button>Source Code</button>
            </div>
        </div>
    )
}

export default HomePage