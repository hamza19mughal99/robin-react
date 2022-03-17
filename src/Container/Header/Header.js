import React, {useState} from 'react';
import Logo from "../../images/Vector.png";
import FormModal from "../Home/FormModal/FormModal";
import img from "../../images/men_bg.png";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={'header'}>
            { show ?
                <FormModal show={show} handleClose={() => setShow(!show)} />
                : null}
            <div className={'logo'}>
                <img src={Logo} alt={'logo'} />
            </div>
            <div className={'header_text'}>
                <p>Ready to drop your own royalty.NFTs?</p>
                <span style={{cursor: 'pointer'}} onClick={() => setShow(!show)}>Get in touch</span>
            </div>
        </div>
    );
};
export default Header;