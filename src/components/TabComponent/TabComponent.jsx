import { useAppContext } from "../../context/AppContext";
import Categories from "../../components/Categories/Categories";
import Topic from "../../components/Topic/Topic";
import Modal from "../../components/Modal/Modal";
import Editor from "../../components/Editor/Editor";
import classes from "./style.module.css";
import { useEffect } from "react";

const TabComponent = () => {
  const {
    activeCategory,
    topics,
    isModalOpen,
    openModal,
    closeModal,
    newTopic,
    setNewTopic,
    selectedTopic,
    handleCategoryClick,
    handleTopicDelete,
    handleTopicSave,
    handleTopicClick,
    editorContent,
    handleEditorChange,
    handleGenerateText,
    handleCloseEditor,
    tagColors,
    categories,
    selectedTone,
    handleToneChange,
  } = useAppContext();

  const filteredTopics =
    activeCategory === "All"
      ? topics
      : topics.filter((topic) => topic.category === activeCategory);

  return (
    <div className={classes.headingWrapper}>
      <header className={classes.header}>
        <h1>Categories</h1>
        <button className={classes.addBtn} onClick={openModal}>
          Add Topic
        </button>
      </header>
      <Categories
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />
      <Topic
        filteredTopics={filteredTopics}
        tagColors={tagColors}
        handleTopicDelete={handleTopicDelete}
        handleTopicClick={handleTopicClick}
      />

      {isModalOpen && (
        <Modal
          setNewTopic={setNewTopic}
          handleTopicSave={handleTopicSave}
          closeModal={closeModal}
          newTopic={newTopic}
        />
      )}
      {selectedTopic && (
        <Editor
          editorContent={editorContent}
          handleEditorChange={handleEditorChange}
          handleGenerateText={handleGenerateText}
          handleCloseEditor={handleCloseEditor}
          selectedTone={selectedTone}
          handleToneChange={handleToneChange}
          selectedTopic={selectedTopic}
        />
      )}
    </div>
  );
};

export default TabComponent;
