import React, { useEffect, useRef } from "react";
import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        if (!horizontal || sections.length === 0) {
            console.error("horizontal 요소나 sections가 초기화되지 않았습니다.");
            return;
        }

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    개강 수업 안내 <em>our class</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article
                            className={`port__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionsRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a
                                href={port.code}
                                target="_blank"
                                className="img"
                                rel="noreferrer noopenenr"
                            >
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a
                                href={port.view}
                                target="_blank"
                                className="site"
                                rel="noreferrer noopener"
                            >
                                사이트 보기
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;
