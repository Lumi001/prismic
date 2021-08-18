import TeamCard from './teamCard/teamCard';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './whatWeDo.module.css';



const WhatWeDo = ({ heading, subHeading, items }) => {
    return (
        <div className={styles.container}>
            <div className={styles.what_we_do}>
                <TitleAndSubTitle heading={heading ? heading : ""} subHeading={subHeading ? subHeading : ""} />
                <section className={styles.card_list_container}>
                    <section className={styles.card_list}>
                        {items.map((item, id) => {
                            return id < 6 && (
                                <TeamCard
                                    services
                                    key={Math.random()}
                                    image={item.service_image ? item.service_image.url : ""}
                                    content={item.service_description && item.service_description[0] ? item.service_description[0].text : ""}
                                    title={item.service_title && item.service_title[0] ? item.service_title[0].text : ""}
                                />
                            )
                        })}
                    </section>
                </section>
            </div>
        </div>
    );
};

export default WhatWeDo;