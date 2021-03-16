import styles from './BeenUpTo.module.css';



const BeenUpTo = ({heading, subHeading, items1,items2}) => {
    return (
        <div className={styles.container}>
            <div>
                <TitleAndSubTitle heading={heading} subHeading={subHeading} />
                <section>
                    <section>
                        {items1.map(item => {
                            return (
                                <img src={item.image} alt=""/>
                            )
                        })}
                    </section>
                    <section>
                        {items2.map(item => {
                            return (
                                <img src={item.image} alt=""/>
                            )
                        })}
                    </section>
                </section>
            </div>
        </div>
    );
};

export default BeenUpTo;