import React from "react"

import LinkedIn from "../img/linkedin.png"
import Github from "../img/github.png"
import NavBar from "./NavBar"

const About = () => {
    return(
        <>
        <NavBar />
        <div className="about-me">
            <div className="about-item brief-info the-table">
                <h1 className="highlight-100">Nisrina Alya Sudrajat</h1>
                <table>
                    <tr>
                        <td style={{width: "100px"}}><strong>DoB</strong></td>
                        <td>1999, 14th January</td>
                    </tr>
                    <tr>
                        <td style={{width: "100px"}}><strong>Education</strong></td>
                        <td>
                            <strong>Institut Pertanian Bogor (IPB)</strong><br />
                            Bachelor of Computer Science
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "100px"}}><strong>E-mail</strong></td>
                        <td>sudrajat.nisrina@gmail.com</td>
                    </tr>
                </table>
            </div>
            <div className="about-item skill">
                <h1 className="highlight-100">Skill</h1>
                <ul>
                    <li>HTML/CSS/JavaScript</li><br />
                    <li>ReactJS</li><br />
                    <li>Git</li> <br />
                    <li>Basic UI/UX design</li> <br />
                    <li>Photoshop, Illustrator, InDesign</li>
                </ul>
            </div>
            <div className="about-item certificate">
                <h1 className="highlight-100">Certificate</h1>
                <ul>
                    <li>
                        <strong>Dicoding</strong><br />
                        <small>Valid until May 27, 2024</small> <br />
                        <a href="https://www.dicoding.com/certificates/53XEE7VEKXRN" 
                           alt="certificate link"
                           target="__blank"
                           className="certificate-link">
                        Belajar Membuat Front-End Web untuk Pemula
                        </a>
                    </li>
                    <li>
                        <strong style={{paddingLeft:"0px !important"}} >Dicoding</strong><br />
                        <small>Valid until May 24, 2024</small> <br />
                        <a href="https://www.dicoding.com/certificates/0LZ0D0M5NX65" 
                           alt="certificate link"
                           target="__blank"
                           className="certificate-link">
                        Belajar Dasar Pemrograman Web
                        </a> 
                    </li>
                    <li>
                        <strong>Sanbercode</strong><br />
                        <small>February 15th - March 12th, 2021</small> <br />
                        <a href="https://drive.google.com/file/d/1dc3MIjjck_HBMJfPmE1nSD6DxVFG_4yE/view" 
                           alt="certificate link"
                           target="__blank"
                           className="certificate-link">
                        ReactJS Web Frontend Development
                        </a>
                    </li>
                </ul>
            </div>
            <div className="about-item experience">
                <h1 className="highlight-100">Experience</h1>
                <ul>
                    <li>
                        <strong>PT WebGis Indonesia</strong> <br />
                        <em>IT Staff (August - December 2020)</em> <br />
                        Using ESRI ArcGIS Online feature application to make a geographic information system
                    </li>
                </ul>
            </div>
            <div className="about-item-2 social-media">
                <a href="https://github.com/nisrinasdr" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/nisrinasdr" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="linkedin" />
                </a>
            </div>
            <div className="about-item credit">
                <p>Resources credit: Icons are from <a href="https://icons8.com/icons/wired" target="_blank" rel="noreferrer">Icons8</a></p>
            </div>
        </div>
        </>
    )
}

export default About