import { useState } from 'react';
import { connect } from 'react-redux';
import { modalStatusAction } from '../../../redux/app/app.actions';
import Button from '../button/button';
import styles from './subscribe.module.css';

const Subscribe = ({ setModalContent }) => {
    // onClick={() => setModalContent({ modalIsActive: false })}
    const [name, setName] = useState("");
    const [nameValidity, setNameValidity] = useState(true);
    const [email, setEmail] = useState("");
    const [emailValidity, setEmailValidity] = useState(true);

    // const onChangeInput = (type, value) => {
    //     if (type === "email") {
    //         setEmail(value)
    //     }
    //     else {
    //         setName(value)
    //     }
    // }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const submitDetails = (name, email) => {
        console.log(name, email)
        if (name.length < 1 && !re.test(String(email).toLowerCase())) {
            setNameValidity(false);
            return setEmailValidity(false);
        }
        else if (name.length > 0 && !re.test(String(email).toLowerCase())) {
            return setEmailValidity(false);
        }
        else if (!name.length > 0 && re.test(String(email).toLowerCase())) {
            return setNameValidity(false);
        }
        fetch("http://13.66.197.57:5000/subscribe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }
    return (
        // style={{ display: "block" }}
        <div className={styles.subscribe_container}>
            {/* // image */}
            <button className={styles.exit} onClick={() => setModalContent({ modalIsActive: false })}>x</button>
            <img src="/subscribe/paper_plane.png" alt="" />
            {/* // title */}
            <h3>Subscribe to our newsletters</h3>
            {/* // checkboxes */}
            <section className={styles.text}>
                <input className={nameValidity ? styles.valid : styles.invalid} type="text" name="name" id="" placeholder="Name" onChange={
                    (e) => {
                        if (!nameValidity && name.length > 0) {
                            setNameValidity(true)
                        }
                        setName(e.target.value)
                    }
                } required />
                <input className={emailValidity ? styles.valid : styles.invalid} type="text" name="email" id="" placeholder="Email Address" onChange={
                    (e) => {
                        if (!emailValidity && re.test(String(email).toLowerCase())) {
                            setEmailValidity(true)
                        }
                        setEmail(e.target.value)
                    }
                } required />
            </section>
            <section className={styles.checkboxes}>
                <div>
                <label htmlFor="">I'm interested in:</label>
                </div>
                <div>
                    <input type="checkbox" name="all" id="all" value="all" />
                    <label htmlFor="all">All{ }</label>
                </div>

                <div>
                    <input type="checkbox" name="publications" id="publications" value="publications" />
                    <label htmlFor="publications">Publications</label>
                </div>

                <div>
                    <input type="checkbox" name="case studies" id="caseStudies" value="caseStudies" />
                    <label htmlFor="caseStudies">Case Studies</label>
                </div>

                <div>
                    <input type="checkbox" name="news" id="news" value="news" />
                    <label htmlFor="news">News</label>
                </div>

            </section>
            <section>
            <Button text="SUBSCRIBE" icon="/white-arrow-right.svg" onClick={() => submitDetails(name, email)} />
            <p>You can unsubscribe anytime</p>
            </section>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    setModalContent: modal => dispatch(modalStatusAction(modal))
})
// modal
export default connect(null, mapDispatchToProps)(Subscribe);