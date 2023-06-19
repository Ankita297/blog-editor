import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import classes from "./style.module.css";
const Topic = (props) => {
  const { filteredTopics, tagColors, handleTopicDelete, handleTopicClick } =
    props;
  return (
    <div className={classes.content}>
      {filteredTopics.length <= 0 && <h2>Nothing is here yet !</h2>}
      {filteredTopics.map((topic) => (
        <div key={topic._id} className={classes.topic}>
          <div className={classes.headerWrapper}>
            <h3 className={classes.title}>{topic.title}</h3>
            <div className={classes.flex_1}></div>
            <div className={classes.btns}>
              <span
                className={classes.deleteBtn}
                onClick={() => handleTopicDelete(topic._id)}
              >
                <AiOutlineDelete />
              </span>
              <button
                className={classes.writeBtn}
                onClick={() => handleTopicClick(topic)}
              >
                Write
              </button>
            </div>
          </div>
          <div className={classes.tags}>
            {topic.keywords.map((keyword) => (
              <div
                key={keyword}
                className={classes.tag}
                style={{
                  borderColor: tagColors[keyword],
                  backgroundColor: `${tagColors[keyword]}1A`,
                  color: tagColors[keyword],
                }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topic;
