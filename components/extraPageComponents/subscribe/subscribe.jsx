import Button from '../button/button';
import styles from './subscribe.module.css';

const Subscribe = () => {
    return (
        // style={{ display: "block" }}
        <div className={styles.subscribe_container}>
            {/* // image */}
            <img src="/subscribe/paper_plane.png" alt="" />
            {/* // title */}
            <h3>Subscribe to our newsletters</h3>
            {/* // checkboxes */}
            <section className={styles.checkboxes}>
                <div>
                <input type="checkbox" name="all" id="all" value="all"/>
                <label htmlFor="all">All</label>
                </div>
                
                <div>
                <input type="checkbox" name="publications" id="publications" value="publications"/>
                <label htmlFor="publications">Publications</label>
                </div>
                
                <div>
                <input type="checkbox" name="case studies" id="caseStudies" value="caseStudies"/>
                <label htmlFor="caseStudies">Case Studies</label>
                </div>
                
                <div>
                <input type="checkbox" name="news" id="news" value="news"/>
                <label htmlFor="news">News</label>
                </div>
                
            </section>

            <section className={styles.text}>
                <input type="text" name="email" id=""/>
                <Button text="SUBSCRIBE"/>
            </section>
        </div>
    );
};

export default Subscribe;