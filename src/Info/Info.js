import React from 'react';
import self from '../img/self.png';

export let colors = ["rgb(185, 80, 211)", "rgb(247, 110, 7)"];

export const info = {
    firstName: " Patrick ",
    lastName: " Seidel ",
    initials: "PS", 
    position: "Developer",
    selfPortrait: self, 
    gradient: `linear-gradient(135deg, ${colors})`, 
    miniBio: [ 
        ["๐ค", "Motiviert"], 
        ["๐ฉ๐ช", "Komme aus Hamburg"],
        ["๐ผ", "In der Ausbildung"],
        ["โ๏ธ", "P.seidel.1987@gmail.com"],
    ],
    socials: [
        ["https://facebook.com/", facebookIcon()], 
     
    ],
    bio: "Hallo! Ich heiรe Patrick. Ich bin 35 Jahre alt. 2006 Habe ich angefangen meine Ersten Homepagen umzubauen, 2007 Habe ich dann meine Erste igene Homepage gebaut. 2009 kam dann PHP dazu. 2010 Im Informatik Studium wurde mein skillset durch Java erweitert. Seit 2021 Lehrene ich jetzt Javascript, React, Framesworks und andere Komponente der WEB Landschaft. ",
    hobbies: [
        ["๐", "Lesen"], 
        ["๐ฎ", "Spielen"], 
        ["๐ฅ", "Filme"],
        ["โ๏ธ", "Kaffee"]
    ],
    portfolio: [ 
        {
            title: "Github",
            liveLink: "",
            sourceLink: "#portfolio",
        },
        {
            title: "linked",
            liveLink: "",
            sourceLink: "#portfolio",
        },
     
    ]
}



function facebookIcon() {
    return <i className="fa fa-facebook" aria-hidden="true"/>
};


