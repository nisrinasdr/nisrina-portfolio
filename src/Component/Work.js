import React from "react"

import "../Styles/Style.css"
import NavBar from "./NavBar"

const Work = () => {
    const work = [
        {
            id: '3',
            title: 'Movies and Games Web App',
            description: 'This web app list movies and games submited by user (login required). User can add new data and edit an existing data.',
            keyword: ['HTML/CSS', 'JavaScript', 'ReactJS', 'API (GET, PUSH, PUT, DELETE)', 'Axios', 'MaterialUI'],
            img: 'https://buatannisrina.files.wordpress.com/2021/05/moviegame.png',
            demo: 'https://movieandgame.netlify.app/',
            code: 'https://github.com/nisrinasdr/thefinalproject'
        },
        {
            id: '2',
            title: 'IScream',
            description: 'An ice cream order app for cashier. This is a project for Dicoding\'s class: Belajar Dasar Pemrograman Web.',
            keyword: ['HTML/CSS', 'JavaScript', 'LocalStorage'],
            img: 'https://buatannisrina.files.wordpress.com/2021/05/screenshot-268.png',
            demo: 'https://iscream.netlify.app/',
            code: 'https://github.com/nisrinasdr/IScream'
        },
        {
            id: '1',
            title: 'Online Wedding Invitation',
            description: 'Online wedding invitation with counting feature, send message, and carousel picture.',
            keyword: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
            img: 'https://buatannisrina.files.wordpress.com/2021/05/wedding.png',
            demo: 'https://minimalistic-green.netlify.app/',
            code: 'https://github.com/nisrinasdr/minimalistic-green'
        }
    ]

    return(
        <>
        <NavBar />
        <div className="work-container">
        { work !== null && (
            <>
            { work.map(val => {
                return(
                    <div className="work-card">
                        <div className="container">
                            <img className="preview" src={val.img} alt="preview"/>
                            <div style={{backgroundColor:"white"}}>
                            <div className="button-container" style={{marginTop: "0.8em"}}>
                                <a href={val.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{marginRight: "1em"}}>Demo</a>
                                <a href={val.code} target="_blank" rel="noreferrer" className="btn-primary">Source Code</a>
                            </div>
                            </div>
                        </div>
                        <h3 style={{margin: "0.8em 0"}}>{val.title}</h3>
                        <div>{val.description}</div>
                        <div style={{marginTop: "0.8em", fontSize: "0.8em"}}>Keyword {val.keyword.map(value => <p className="tag">{value}</p>)}</div>
                    </div>
                )}
            )}
            </>
        )}
        </div>
        </>
    )
}

export default Work