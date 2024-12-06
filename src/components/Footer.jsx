import React from "react";
import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>에스코딩</span>
                    <span>© webs</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>About us</p>
                    </div>
                    <div className="right">
                        <h2>선생님 소개</h2>
                        <ul>
                            {footerText.map((footer, key) => (
                              <li key={key}> 
                                <a href={footer.link}>{footer.title}</a>
                                <em>{footer.desc}</em>
                          </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    © 2024 에스코딩<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;