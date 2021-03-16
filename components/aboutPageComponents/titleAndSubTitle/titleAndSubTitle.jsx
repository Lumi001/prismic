import styles from './titleAndSubTitle.module.css';



const TitleAndSubTitle = ({heading,subHeading}) => {
    return (
        <div className={styles.title_and_subtitle}>
            <h3>{heading}</h3>
            <h6><span><img src="/titleAndSubTitle/line.png" alt=""/></span>{subHeading}</h6>
        </div>        
    );
};

export default TitleAndSubTitle;