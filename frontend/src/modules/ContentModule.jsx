// src/modules/ContentModule.jsx
import { useState } from 'react';

const defaultContentModule = () => {
  return {
    title: 'Default Content',
    body: 'This is the default content for the module.',
  };
};

const ContentModule = () => {
  const [content, setContent] = useState(defaultContentModule());
    const [newContent, setNewContent] = useState({
        title: '',
        body: '',
    });
    const handleAddContent = () => {
        setContent(newContent);
        setNewContent({
            title: '',
            body: '',
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContent((prevContent) => ({
            ...prevContent,
            [name]: value,
        }));
    };
    const handleResetContent = () => {
        setContent(defaultContentModule());
    };
    const handleDeleteContent = () => {
        setContent(defaultContentModule());
    };
    const handleEditContent = () => {
        setContent(newContent);
    };
    const handleUpdateContent = () => {
        setContent((prevContent) => ({
            ...prevContent,
            ...newContent,
        }));
        setNewContent({
            title: '',
            body: '',
        });
    };
    const handleClearContent = () => {
        setContent(defaultContentModule());
        setNewContent({
            title: '',
            body: '',
        });
    };
    const handleSaveContent = () => {
        localStorage.setItem('content', JSON.stringify(content));
    };
    const handleLoadContent = () => {
        const savedContent = localStorage.getItem('content');
        if (savedContent) {
            setContent(JSON.parse(savedContent));
        } else {
            setContent(defaultContentModule());
        }
    };
    

  return (
    <div>
      <h2>📄 Zarządzanie treścią</h2>
      <h3>{content.title}</h3>
      <p>{content.body}</p>
        <div>
            <input
                type="text"
                name="title"
                value={newContent.title}
                onChange={handleChange}
                placeholder="Nowy tytuł"
            />
            <textarea
                name="body"
                value={newContent.body}
                onChange={handleChange}
                placeholder="Nowa treść"
            />
            <input
                type="text"
                name="author"
                value={newContent.author}
                onChange={handleChange}
                placeholder="Autor"
            />
            <input
                type="text"
                name="category"
                value={newContent.category}
                onChange={handleChange}
                placeholder="Kategoria"
            />
            <input
                type="text"
                name="image"
                value={newContent.image}
                onChange={handleChange}
                placeholder="Link do obrazka"
            />
            <input
                type="text"
                name="tags"
                value={newContent.tags}
                onChange={handleChange}
                placeholder="Tagi (oddzielone przecinkami)"
            />            
        </div>
        <button onClick={handleAddContent}>Dodaj Treść</button>
        <button onClick={handleChange}>Zmień Treść</button>
        <button onClick={handleResetContent}>Resetuj Treść</button> 
        <button onClick={handleDeleteContent}>Usuń Treść</button>
        <button onClick={handleEditContent}>Edytuj Treść</button>
        <button onClick={handleUpdateContent}>Aktualizuj Treść</button>
        <button onClick={handleClearContent}>Wyczyść Treść</button>
        <button onClick={handleSaveContent}>Zapisz Treść</button>
        <button onClick={handleLoadContent}>Wczytaj Treść</button>        
    </div>  
  );
};


export default ContentModule;
// This module is a placeholder for content management features.
// It can be expanded with components for creating, editing, and deleting content.