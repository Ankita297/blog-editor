import React, { useState, useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

import "react-quill/dist/quill.snow.css";

const AppContext = React.createContext();

const categories = ["All", "Custom", "ICP", "Mission", "Product"];

const initialTopics = [
  {
    _id: "1",
    category: "Mission",
    keywords: [
      "online presence",
      "small businesses",
      "digital marketing",
      "branding",
    ],
    description: "",
    title:
      "The importance of Establishing a Strong Online Presence for Small Businesses",
  },
  {
    _id: "2",
    category: "Mission",
    keywords: ["fast turnaround", "logo design", "website design", "branding"],
    description: "",

    title:
      "How fast turnaround in logo and website design benefit your business",
  },
  {
    _id: "3",
    category: "Product",
    keywords: [
      "apple vision pro",
      "artificial intelligence",
      "virtual reality",
      "hardware",
    ],
    description: "",

    title: "My First Immersion in Apple Vision Pro: Heavy, Man!",
  },
  {
    _id: "4",
    category: "Product",
    keywords: [
      "product management",
      "data model",
      "system architecture",
      "marketing",
    ],
    description: "",

    title: "MVPM: Minimum Viable Product Manager",
  },
  {
    _id: "5",
    category: "Mission",
    keywords: [
      "affordable branding",
      "startups",
      "entrepreneurs",
      "social media management",
    ],
    description: "",

    title: "Affordable branding solutions for startups and entrepreneurs.",
  },
  {
    _id: "6",
    category: "ICP",
    keywords: ["startups", "entrepreneurs", "social media management"],
    description: "",
    title:
      "Expert tips for choosing the right digital marketing agency for your business",
  },
];

const AppProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [topics, setTopics] = useState(initialTopics);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: "",
    keywords: "",
  });

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [tagColors, setTagColors] = useState({});
  const [selectedTone, setSelectedTone] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewTopic({ title: "", keywords: "" });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedTopic(null);
  };

  const handleTopicDelete = (topicId) => {
    setTopics((prevTopics) =>
      prevTopics.filter((topic) => topic._id !== topicId)
    );
  };

  const handleTopicSave = () => {
    const { title, keywords } = newTopic;
    const topic = {
      _id: uuid(),
      category: "Custom",
      title,
      description: "",
      keywords: keywords.split(",").map((keyword) => keyword.trim()),
    };

    const colors = {};
    topic.keywords.forEach((keyword) => {
      colors[keyword] = generateRandomColor();
    });

    setTopics((prevTopics) => [...prevTopics, topic]);
    setTagColors((prevColors) => ({ ...prevColors, ...colors }));

    closeModal();
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleCloseEditor = () => {
    setSelectedTopic(null);
    setSelectedTone("");
    setEditorContent("");
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };


  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const colors = {};
    topics.forEach((topic) => {
      topic.keywords.forEach((keyword) => {
        if (!tagColors[keyword]) {
          colors[keyword] = generateRandomColor();
        }
      });
    });

    setTagColors((prevColors) => ({ ...prevColors, ...colors }));
  }, [topics]);

  const handleToneChange = (tone) => {
    setSelectedTone(tone);
  };
  return (
    <AppContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        topics,
        setTopics,
        isModalOpen,
        openModal,
        closeModal,
        newTopic,
        setNewTopic,
        selectedTopic,
        setSelectedTopic,
        editorContent,
        handleCategoryClick,
        handleTopicDelete,
        handleTopicSave,
        handleTopicClick,
        handleEditorChange,
        handleCloseEditor,
        tagColors,
        categories,
        selectedTone,
        handleToneChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
