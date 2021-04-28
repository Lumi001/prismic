import { connect } from 'react-redux';
import { modalStatusAction } from '../../../redux/app/app.actions';
import Button from '../button/button';
import styles from './subscribe.module.css';

const Subscribe = ({ setModalContent }) => {
    // onClick={() => setModalContent({ modalIsActive: false })}
    return (
        // style={{ display: "block" }}
        <div className={styles.subscribe_container}>
            {/* // image */}
            <button className={styles.exit} onClick={() => setModalContent({ modalIsActive: false })}>x</button>
            <img src="/subscribe/paper_plane.png" alt="" />
            {/* // title */}
            <h3>Subscribe to our newsletters</h3>
            {/* // checkboxes */}
            <section className={styles.checkboxes}>
                <div>
                    <input type="checkbox" name="all" id="all" value="all" />
                    <label htmlFor="all">All</label>
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

            <section className={styles.text}>
                <input className="input" type="text" name="email" id="" placeholder="Enter email address" />
                <Button text="SUBSCRIBE" />
            </section>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    setModalContent: modal => dispatch(modalStatusAction(modal))
})
// modal
export default connect(null, mapDispatchToProps)(Subscribe);