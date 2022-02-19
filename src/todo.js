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
    setColor: (value) => {
        return state.color = value
    },
    getTitle: () => {
        return state.title
    },
    getTodo: () => {
        return state.todo
    },
    getColor: () => {
        return state.color
    }
});

const Project = (title,color) => {
    if (color === undefined) {
        color = 'black';
    }

    let state = {
        title,
        color,
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

