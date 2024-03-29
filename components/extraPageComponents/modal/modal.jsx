import { connect } from "react-redux";
import { modalStatusAction } from "../../../redux/app/app.actions";
import Subscribe from "../subscribe/subscribe";
import styles from "./modal.module.css";

const Modal = ({ isActive, content, setModalContent, children }) => {
  return (
    // style={{ display: "block" }}
    <div className={styles.modal_container}>
      <section
        onClick={() => setModalContent({ modalIsActive: false })}
        className={styles.clickable}
      ></section>
      <section className={styles.modal_section}>
        {content ? (
          content.type === "image" ? (
            <img className={styles.modal} src={content.link} alt="" />
          ) : (
            <video className={styles.modal} src={content.link}></video>
          )
        ) : (
          <div className={styles.modal}>
            {children ? children : <Subscribe />}
          </div>
        )}
      </section>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setModalContent: (modal) => dispatch(modalStatusAction(modal)),
});
// modal
export default connect(null, mapDispatchToProps)(Modal);
