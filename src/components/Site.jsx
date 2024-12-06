import React from "react";
import { siteText } from "../constants";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site Report<em>four keyword</em>
                </h2>
                <div className="site__wrap">
                    {siteText.length > 0 ? (
                        siteText.map((site, key) => (
                            <article className={`site__item s${key + 1}`} key={key}>
                                <span className="num">{key + 1}.</span>
                                <div className="text">
                                    {site.text.map((textItem, index) => (
                                        <div key={index}>{textItem || "데이터 없음"}</div>
                                    ))}
                                </div>
                                <h3 className="title">
                                    {site.title || "제목 없음"}
                                </h3>
                                <div className="btn">
                                    <a href={site.code}>site</a>
                                    <a href={site.view}>view</a>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p>데이터가 없습니다.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Site;
