import React from 'react';
import Style from './About.module.scss';
import classNames from 'classnames';
import {info, colors} from '../Info/Info';


export default function About() {
    const iconClass = "fa fa-circle";

    let hobbies = info.hobbies;

    function createList() {
        let results = [];
        for(let i = 0; i < hobbies.length; i ++) {
            let value = hobbies[i];
            results.push(
                <li><span aria-label="emoji" role="img" className={Style.emoji}>{value[0]}</span> {value[1]}</li>
            )
        }
        return results;
    }
    return (
        <div className={Style.about}>
            <div className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> about{info.firstName.toLowerCase()} </p>
                    <p><span style={{color: colors[1]}}>about{info.firstName.toLowerCase()} <span className={Style.green}></span> $ </span>
                        {info.bio}
                    </p>
                </div>
            </div>

            <div id="bot" className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cd hobbies/interests</p>
                    <p><span style={{color: colors[1]}}>hobbies/interests <span className={Style.green}></span> $</span> ls</p>
                    <ul>

                        
                        {createList()}
                    </ul>
                </div>
            </div>
            <div id="skill" className={classNames(Style.terminal, Style.shadowed)}>
                <div className={Style.topRow}>
                    <i className={classNames(iconClass, Style.red)}/>
                    <i className={classNames(iconClass, Style.amber)}/>
                    <i className={classNames(iconClass, Style.green)}/>
                </div>
                <div className={Style.window}>
                    <p><span style={{color: colors[1]}}>{info.firstName.toLowerCase()}{info.lastName.toLowerCase()} $</span> cd Skills</p>
                    <p><span style={{color: colors[1]}}>skills <span className={Style.green}></span> $</span> ls</p>
                    <ul>
        <li>Javascript</li>
        <li>CSS/Html</li>
        <li>React</li>
        <li>PHP</li>
        <li>typescript</li>
        <li>Many More</li>               
                    </ul>
                </div>
            </div>
        </div>
    )
}