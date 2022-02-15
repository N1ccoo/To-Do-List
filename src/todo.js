const toDoMethods = (state) => ({
    setTitle: (value) => {
        return state.title = value
    },
    setDescription: (value) => {
        return state.description = value
    },
    setDueDate: (value) => {
        return state.dueDate = value
    },
    getTitle: () => {
        return state.title
    },
    getDescription: () => {
        return state.description
    },
    getDueDate: () => {
        return state.dueDate
    },
});

const projectMethods = (state) => ({
    setTitle: (value) => {
        return state.title = value
    },
    addTodo: (value) => {
       return state.todo.push(value)
    },
    getTitle: () => {
        return state.title
    },
    getTodo: () => {
        return state.todo
    }

});

const Project = (title) => {
    let state = {
        title,
        todo:[]
    };

    return Object.assign({},projectMethods(state))
};

const Todo = (title,description,dueDate,priority) => {
    let state = {
        title,
        description,
        dueDate,
        priority
    };

    return Object.assign({},toDoMethods(state))
};



export { Project, Todo };

