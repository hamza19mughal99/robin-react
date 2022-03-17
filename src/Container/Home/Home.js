import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import line from "../../images/line.png"
// import img from "../../images/img.png"
import './Home.css';

const Home = () => {
    const emailSubmitHandler = () => {

    }

    return (
        <div className={'main_background'}>
            <Header />
            <div className={'main_text'}>
                <h1>The bridge into the web3 music future.</h1>
                <div className={'line'}>
                    <img style={{maxWidth: '100%'}} src={line} alt={'line'}/>
                </div>
                <p className={'text_para_web'}>Empower your favorite artists & join their team by co-owning music royalties.</p>
                <p className={'text_para_mob'}>Empower your favorite artists & join their team <br /> by co-owning music royalties.</p>

                <form onSubmit={emailSubmitHandler}>
                    <div className={'email_section'}>
                        <input placeholder={'Email address'} type="email"/>
                        <button className={'web'}>Join the movement</button>
                        <button className={'mob'}>Join</button>
                    </div>
                </form>
                {/*<img className={'bt_img'} style={{*/}
                {/*    position: "absolute",*/}
                {/*    right: "0px",*/}
                {/*    bottom: "0px",*/}
                {/*}} alt={"SRR"} src={img}/>*/}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
