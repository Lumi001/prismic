import { useState } from 'react';
import { connect } from 'react-redux';
import { modalStatusAction } from '../../../redux/app/app.actions';
import Button from '../button/button';
import styles from './subscribe.module.css';
import Cookies from 'universal-cookie';


const Subscribe = ({ setModalContent }) => {
    // onClick={() => setModalContent({ modalIsActive: false })}
    const [name, setName] = useState("");
    const [nameValidity, setNameValidity] = useState(true);
    const [email, setEmail] = useState("");
    const [emailValidity, setEmailValidity] = useState(true);
    let categories = [];
    const cookies = new Cookies();


    const handleClick = (e, all, type) => {
        if (all) {
            if (e.target.checked === true) {
                categories = ["publications", "caseStudies", "news"]
                const checks = document.getElementsByClassName("checkbox");
                for (let i = 0; i < checks.length; i++) {
                    checks[i].checked = true
                }
                // console.log(categories)
            }
            else {
                categories = []
                const checks = document.getElementsByClassName("checkbox");
                for (let i = 0; i < checks.length; i++) {
                    checks[i].checked = false
                }
                // console.log(categories)
            }
        } else {
            // e.target.checked === true ? 
            if (e.target.checked === true) {
                if (!categories.includes(type)) {
                    categories.push(type)
                }
                const checks = document.getElementsByClassName("checkbox");
                for (let i = 0; i < checks.length; i++) {
                    if (checks[i].name !== "all" && categories.length > 2) {
                        checks[0].checked = true
                    }
                    // { console.log(checks[i]) }
                }
            }
            else {
                categories = categories.filter((value, index, arr) => value !== type)
                const checks = document.getElementsByClassName("checkbox");
                for (let i = 0; i < checks.length; i++) {
                    if (checks[i].name === "all") {
                        checks[i].checked = false
                    }
                    // { console.log(checks[i]) }
                }
                // console.log(categories)
            }
            // console.log(categories)
        }
    }

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
        // console.log(name, email)
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
        if (categories.length === 0) {
            // categories=[]
            categories = ["publications", "caseStudies", "news"]
        }
        // console.log(categories)
        fetch("http://13.66.197.57:5000/subscribe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, category: categories })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.status === true) {
                    var now = Date.now();
                    setModalContent({ modalIsActive: false })
                    cookies.set('hasSubscribed', now, { maxAge: 10 * 365 * 24 * 60 * 60 });
                }else if (data.message.includes("already")){
                    var now = Date.now();
                    setModalContent({ modalIsActive: false })
                    cookies.set('hasSubscribed', now, { maxAge: 10 * 365 * 24 * 60 * 60 });
                }
                // setModalContent({ subscribed: true })
            }
            )
    }
    return (
        // style={{ display: "block" }}
        <div className={styles.subscribe_container}>
            {/* // image */}
            <button className={styles.exit} onClick={() => setModalContent({ modalIsActive: false })}><img src="/subscribe/x.png" alt="close" /></button>
            {/* <img src="/subscribe/paper_plane.png" alt="" /> */}
            {/* // title */}
            <h3>Subscribe to our newsletters</h3>
            {/* // checkboxes */}
            <section className={styles.text}>
                <input className={nameValidity ? styles.valid : styles.invalid} type="text" name="name" id="" placeholder={`Name ${!nameValidity ? "(Please enter a valid name)" : ""}`} onChange={
                    (e) => {
                        if (!nameValidity && e.target.value.length > 0) {
                            setNameValidity(true)
                        }
                        setName(e.target.value)
                    }
                } required />
                <input className={emailValidity ? styles.valid : styles.invalid} type="text" name="email" id="" placeholder={`Email Address ${!emailValidity ? "(Please enter a valid email)" : ""}`} onChange={
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
                    <input type="checkbox" className={"checkbox"} onClick={e => handleClick(e, true, "all")} name="all" id="all" value="all" />
                    <label htmlFor="all">All{ }</label>
                </div>

                <div>
                    <input type="checkbox" name="publications" className={"checkbox"} onClick={e => handleClick(e, false, "publications")} id="publications" value="publications" />
                    <label htmlFor="publications">Publications</label>
                </div>

                <div>
                    <input type="checkbox" name="case studies" id="caseStudies" className={"checkbox"} onClick={e => handleClick(e, false, "caseStudies")} value="caseStudies" />
                    <label htmlFor="caseStudies">Case Studies</label>
                </div>

                <div>
                    <input type="checkbox" name="news" id="news" value="news" className={"checkbox"} onClick={e => handleClick(e, false, "news")} />
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