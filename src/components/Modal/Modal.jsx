import React from "react";
import classes from "./style.module.css";

const Modal = (props) => {
  const { setNewTopic, handleTopicSave, closeModal, newTopic } = props;

  return (
    
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <h2>Add Topic</h2>
        <div className={classes.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            required
            value={newTopic?.title}
            onChange={(e) =>
              setNewTopic({ ...newTopic, title: e.target.value })
            }
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="keywords">
            Keywords:{" "}
            <span style={{ color: "#5b5b5b" }}>(comma separated)</span>
          </label>
          <input
            type="text"
            id="keywords"
            required
            value={newTopic?.keywords}
            onChange={(e) =>
              setNewTopic({
                ...newTopic,
                keywords: e.target.value,
              })
            }
          />
        </div>
        <div className={classes.btnWrapper}>
          <button
            className={classes.addBtn}
            disabled={
              newTopic.title.length <= 0 || newTopic.keywords.length <= 0
                ? true
                : false
            }
            onClick={handleTopicSave}
            style={{cursor:(newTopic.title.length <= 0 || newTopic.keywords.length <= 0)?"not-allowed":"default"}}
          >
            Add
          </button>
          <button className={classes.cancelBtn} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
