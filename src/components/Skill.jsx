import React from "react";
import { skillText } from "../constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                   디지털 리터러시 능력
                    <em>코딩으로 배우기</em>
                </h2>

                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key} className="skill__item">
                            <span className="skill__num">{key + 1}.</span>
                            <h3 className="skill__subtitle">{skill.title}</h3>
                            <p className="skill__text">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
