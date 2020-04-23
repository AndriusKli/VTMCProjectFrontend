///////////// PROJECTS ACTIONS

// This action only takes an array. If no parameters are given, an empty array is used.
export const addProjects = (projects = []) => ({
    "type": "ADD_PROJECTS",
    projects
});

// Specify the Id of the projects you want to remove.
export const removeProjectById = (id) => ({
    "type": "REMOVE_PROJECT_BY_ID",
    id
});

//