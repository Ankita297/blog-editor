import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "./Editor.css";

const Editor = (props) => {
  const {
    editorContent,
    handleEditorChange,
    handleCloseEditor,
    selectedTone,
  } = props;

  return (
    <div className="write-modal">
      <div className="write-modal-content">
        <h2>Write an article</h2>

        <div className="editor-container">
          <ReactQuill
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"],
              ],
              clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
              },
            }}
            value={editorContent}
            onChange={handleEditorChange}
            placeholder="Write something..."
          />
        </div>
        <br />
        <div className="button-container">
          <button
            className={`${
              selectedTone == ""
                ? "generate-button disabled"
                : "generate-button"
            }`}
            onClick={() => {
              handleEditorChange(editorContent);
              handleCloseEditor();
            }}
            style={{
              cursor: editorContent.length <= 0 ? "not-allowed" : "default",
            }}
            disabled={editorContent.length <= 0 ? true : false}
          >
            Generate
          </button>

          <button className="cancel-button" onClick={handleCloseEditor}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
