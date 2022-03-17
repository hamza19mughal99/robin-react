import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import "./FormModal.css";
import Select from 'react-select';
import { yellow, grey } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Modal, Spinner } from "react-bootstrap";
import {RiCheckboxBlankFill} from "react-icons/ri"
import {FaCheckSquare} from "react-icons/fa";
import emailjs from "emailjs-com";


const FormModal = ({ show, handleClose }) => {
    const [loader, setLoader] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const options = [
        { value: 'Agency', label: 'Agency' },
        { value: 'Artist', label: 'Artist' },
        { value: 'Distribution', label: 'Distribution' },
        { value: 'Label', label: 'Label' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Publisher', label: 'Publisher' },
        { value: 'Producer', label: 'Producer' },
    ]
    const [toggle, setToggle] = useState(false);

    const form = useRef();

    const [errorInput, setErrorInput] = useState({
        email: {
            class: "",
            text: "Email Address"
        },
        name: {
            class: "",
            text: "Name"
        },
        msg: {
            class: "",
            text: "Message"
        },
    })
    const [formInput, setFormInput] = useState({
        email: '',
        name: '',
        msg: ''
    })

    const [classDiv, setClassDiv] = useState({
        email: '',
        name: '',
        msg: ''
    })
    const [proSelected, setProSelected] = useState([])

    const handleProfessionInputChange = (value) => {
        console.log(value)
        setProSelected(value)
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                if (!formInput.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    setErrorInput({
                        ...errorInput,
                        email: {
                            class2: 'border_label',
                            class: "error_label",
                            text: "This is not a valid email address"
                        }
                    })
                } else {
                    setErrorInput({
                        ...errorInput,
                        email: {
                            class2: "",
                            class: "",
                            text: "Email Address"
                        }
                    })
                }
                break;

            case 'name':
                if (value.length === 0) {
                    console.log('hello')
                    setErrorInput({
                        ...errorInput,
                        name: {
                            class2: 'border_label',
                            class: "error_label",
                            text: "Cannot be empty"
                        }
                    })
                } else {
                    setErrorInput({
                        ...errorInput,
                        name: {
                            class2: "",
                            class: "",
                            text: "Name"
                        }
                    })
                }
                break;

            case 'msg':
                if (value.length === 0) {
                    setErrorInput({
                        ...errorInput,
                        msg: {
                            class2: 'border_label',
                            class: "error_label",
                            text: "Cannot be empty"
                        }
                    })
                } else {
                    setErrorInput({
                        ...errorInput,
                        msg: {
                            class2: "",
                            class: "",
                            text: "Message"
                        }
                    })
                }
                break;
        }
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    useEffect(() => {
        if (formInput.name.length > 0) {
            setClassDiv({
                ...classDiv,
                name: "abc"
            })
        }
        else {
            setClassDiv({
                ...classDiv,
                name: ""
            })
        }

    }, [formInput.name])

    useEffect(() => {
        if (formInput.email.length > 0 && !formInput.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrorInput({
                ...errorInput,
                email: {
                    class2: 'border_label',
                    class: "error_label",
                    text: "This is not a valid email address"
                }
            })
        } else {
            setErrorInput({
                ...errorInput,
                email: {
                    class2: "",
                    class: "",
                    text: "Email address"
                }
            })
        }
        if (formInput.email.length > 0) {
            setClassDiv({
                ...classDiv,
                email: "abc"
            })
        }
        else {
            setClassDiv({
                ...classDiv,
                email: ""
            })
        }

    }, [formInput.email])

    useEffect(() => {
        if (formInput.msg.length > 0) {
            setClassDiv({
                ...classDiv,
                msg: "abc"
            })
        }
        else {
            setClassDiv({
                ...classDiv,
                msg: ""
            })
        }

    }, [formInput.msg])
    const formSubmitted = (e) => {
        e.preventDefault()
        setLoader(true)
        emailjs.send("service_j176tzm", "template_nh0ocmf", {
            name: formInput.name,
            email: formInput.email,
            occupation: proSelected.value,
            msg: formInput.msg,
        }, "-ZbhmSl5RrZXHN4qg").then((res) => {
            console.log("EMAIL SENT")
            setLoader(false)
            setIsSubmit(true)
        })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Modal size={"lg"} centered={true} show={show}>
            <Modal.Body>
                <div className={'d-flex justify-content-end'}>
                    <AiOutlineClose style={{ cursor: 'pointer', fontSize: '25px', marginRight: '14px' }} onClick={handleClose} />
                </div>
                {
                    isSubmit ?
                        (
                            <div className={'form_submitted'}>
                                <h1>Thank you!</h1>
                                <p>Your message was sent.</p>
                                <p>We’ll get back to you soon.</p>

                                <button onClick={() => {
                                    handleClose()
                                    setIsSubmit(false)

                                }}>Close</button>
                            </div>
                        ) : (
                            <div className={'formNotSubmitted'}>
                                <div className={'text-center'}>
                                    <h1 className={'web_text'}>Headline lorem ipsum dolorsit amin</h1>
                                    <h1 className={'mob_text'}>Headline lorem <br /> ipsum  <br /> dolorsit amin</h1>
                                    <p className={'artist'}>We enable artist to build </p>
                                </div>
                                <div className={'container-fluid'}>
                                    <form ref={form} onSubmit={formSubmitted} className={'form'}>
                                        <div className={'row'}>
                                            <div className={'col-md-6'}>
                                                <div className="input-field">
                                                    <input className={`site_input ${errorInput.email.class2}`} required value={formInput.email} onChange={onChangeHandler} name={'email'} type="text" id="name" />
                                                    <label className={`site_label ${errorInput.email.class} ${classDiv.email}`} htmlFor="name">{errorInput.email.text}</label>
                                                </div>
                                            </div>
                                            <div className={'col-md-6 '}>
                                                <div className="input-field name_input">
                                                    <input className={`site_input ${errorInput.name.class2}`} required value={formInput.name} onChange={onChangeHandler} name={'name'} type="text" id="name" />
                                                    <label className={`site_label ${errorInput.name.class} ${classDiv.name}`} htmlFor="email">{errorInput.name.text}</label>
                                                </div>
                                            </div>
                                            <div style={{ margin: '10px 0 20px 0' }} className={'col-md-12'}>
                                                <Select options={options} value={proSelected} labelledBy="Profession" label={'Profession'} onChange={handleProfessionInputChange} />
                                            </div>
                                            <div className={'col-md-12'}>
                                                <div className="input-field">
                                                    <textarea value={formInput.msg} onChange={onChangeHandler} className={`site_input ${errorInput.msg.class2}`} name={'msg'} id="name" required />
                                                    <label className={`site_label ${errorInput.msg.class} ${classDiv.msg}`} htmlFor="msg">{errorInput.msg.text}</label>
                                                </div>
                                            </div>
                                            <div style={{ margin: '30px 0 30px 0' }} className={'col-md-12 d-flex justify-content-center'}>
                                                {
                                                    toggle ? <FaCheckSquare  onClick={() => setToggle(false)} className={'checked'}/> :  <RiCheckboxBlankFill onClick={() => setToggle(true)}  className={'unChecked '} />
                                                }
                                                <p>Join mailing list</p>
                                                {/*<FormControlLabel style={{ fontSize: '14px' }} control={<Checkbox sx={{*/}
                                                {/*    color: grey[800],*/}
                                                {/*    backgroundColor: grey[800],*/}
                                                {/*    '&.Mui-checked': {*/}
                                                {/*        color: yellow[600],*/}
                                                {/*    },*/}
                                                {/*}} />} label="Join mailing list" />*/}
                                            </div>
                                            {
                                                !loader ?
                                                    (
                                                        <div style={{ marginBottom: '30px' }} className={'col-md-12 form_btn d-flex justify-content-center'}>
                                                            <button type={'submit'}>Submit</button>
                                                        </div>
                                                    )
                                                    : (
                                                        <div className={'text-center'}>
                                                            <Spinner animation={"border"} />
                                                        </div>
                                                    )
                                            }

                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                }

            </Modal.Body>
        </Modal>
    );
};
export default FormModal;



