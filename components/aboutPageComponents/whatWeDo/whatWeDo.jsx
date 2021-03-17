import TeamCard from '../meetTheTeam/teamCard/teamCard';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './whatWeDo.module.css';



const WhatWeDo = ({ heading, subHeading, items }) => {
    return (
        <div className={styles.container}>
            <div className={styles.what_we_do}>
                <TitleAndSubTitle heading={heading} subHeading={subHeading} />
                <section className={styles.card_list_container}>
                    <section className={styles.card_list}>
                        {items.map(item => {
                            return (
                                <TeamCard key={Math.random()} image={item.image} content={item.content} title={item.title} />
                            )
                        })}
                    </section>
                </section>
            </div>
        </div>
    );
};

export default WhatWeDo;