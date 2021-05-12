import styles from './titleAndSubTitle.module.css';



const TitleAndSubTitle = ({heading,subHeading,align}) => {
    return (
        <div className={styles.title_and_subtitle}>
            <h2 className={align?styles.left:null}>{heading}</h2>
            <h6 className={align?styles.left:null}><span><img src="/titleAndSubTitleAbout/line.png" alt=""/></span>{subHeading}</h6>
        </div>        
    );
};

export default TitleAndSubTitle;