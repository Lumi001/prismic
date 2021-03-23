import styles from './scrollCard.module.css';
import Image from 'next/image';
import { connect } from 'react-redux';
// import Modal from '../../extraPageComponents/modal/modal';
import { useState } from 'react';
import {modalStatusAction} from '../../../../redux/app/app.actions';

const ScrollCard = ({ date, title, type, link,setModalContent }) => {
    return (
        <div className={styles.card} onClick={() => setModalContent({modalIsActive: true, content: link, type:type})}>
            <h3>{date}</h3>
            <section className={styles.bottom}>
                <p>{title}</p>
                <img src={type === "video" ? "/scrollCard/video.png" : "/scrollCard/article.png"} alt="" />
            </section>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    setModalContent: modal=>dispatch(modalStatusAction(modal))
})
// modal
export default connect(null, mapDispatchToProps)(ScrollCard);