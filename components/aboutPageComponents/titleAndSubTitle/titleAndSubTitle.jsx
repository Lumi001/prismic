import styles from './titleAndSubTitle.module.css';



const TitleAndSubTitle = ({heading,subHeading,align}) => {
    return (
        <div className={styles.title_and_subtitle} style={align?{textAlign:align}:null}>
            <h2>{heading}</h2>
            <h6><span><img src="/titleAndSubTitleAbout/line.png" alt=""/></span>{subHeading}</h6>
        </div>        
    );
};

export default TitleAndSubTitle;