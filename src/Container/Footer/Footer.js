import React from 'react';
import Instagram from "../../images/insta.png";
import Twitter from "../../images/twitter.png";
import Discord from "../../images/discord.png";
import "./Footer.css";
import {NavLink} from "react-bootstrap";

const Footer = () => {
    return (
        <div className={'main_footer'}>
            <div className={'footer_links'}>
                <p>Connect with us</p>
                <div className={'d-flex'}>
                    <NavLink> <img src={Instagram} alt={'insta'} /> </NavLink>
                    <NavLink> <img src={Twitter} alt={'twit'} /> </NavLink>
                    <NavLink> <img src={Discord} alt={'disco'} /> </NavLink>
                </div>
            </div>
            <div className={'imprint'}>
                <p>Imprint</p>
            </div>
        </div>
    );
};

export default Footer;
