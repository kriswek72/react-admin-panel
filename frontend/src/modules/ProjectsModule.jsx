import { useState } from 'react';

const defaultProjects = JSON.parse(localStorage.getItem('projects')) || [];

const ProjectsModule = () => {
  const [projects, setProjects] = useState(defaultProjects);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
    teamMembers: [],
  });

  const handleAddProject = () => {
    const projectWithId = { id: Date.now(), ...newProject };
    setProjects([...projects, projectWithId]);
    localStorage.setItem('projects', JSON.stringify([...projects, projectWithId]));
    setNewProject({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
      teamMembers: [],
    });
  };

  const handleEditProject = (projectId, updatedProject) => {
    setProjects(projects.map(project => (project.id === projectId ? updatedProject : project)));
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  return (
    <div>
      <h2>💼 Moduł Projektów</h2>
      <p>Witaj w module zarządzania projektami!</p>
      {/* Dodaj zawartość modułu projektów tutaj */}
      <div>
        <input
          type="text"
          placeholder="Nazwa projektu"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Opis"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data rozpoczęcia"
          value={newProject.startDate}
          onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
        />
        <input
          type="date"
          placeholder="Data zakończenia"
          value={newProject.endDate}
          onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        />
        <button onClick={handleAddProject}>➕ Dodaj projekt</button>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Data rozpoczęcia: {project.startDate}</p>
              <p>Data zakończenia: {project.endDate}</p>
              <p>Status: {project.status}</p>
              <button onClick={() => handleEditProject(project.id, { ...project, status: 'Zakończony' })}>✅ Zakończ projekt</button>
              <button onClick={() => handleDeleteProject(project.id)}>🗑️ Usuń projekt</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsModule;
// This module is a placeholder for project management features.
// It can be expanded with components for managing project tasks, timelines, and team collaboration.
// You can add more functionality as needed, such as project tracking, reporting, and team management.