import React from 'react';
import Style from './Portfolio.module.scss';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import App from './games/memorie/src/App';
import {info, colors} from '../Info/Info';


export default function Portfolio() {
    let portfolioInfo = info.portfolio;

    let mocks = [mock1, mock2];

    function createGrid() {
        let results = [];
        let j = 0;
        for(let i = 0; i < portfolioInfo.length; i++) {
                results.push(
                    <div className={Style.block}>
                        <a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].liveLink}><img className={Style.image} alt='Ich Selber' src={mocks[j++]}/></a>
                        <h1>{info.portfolio[i].title}</h1>
                        <a target="_blank" rel="noopener noreferrer" href={info.portfolio[i].sourceLink} style={{backgroundColor: colors[1]}} className={Style.source}>Klick mich</a>
                    </div>
                )
        }
        return results;
    }

    return (
       <main>
           <div className={Style.projectsGrid}>
               {createGrid()}
           <App classNamw={Style.app}/>
           </div>
          
       </main>
       
    );
};