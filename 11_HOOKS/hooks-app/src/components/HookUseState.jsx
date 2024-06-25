import React, { useReducer, useState } from 'react'

const HookUseState = () => {

    const initialTask = [
        { id: 1, text: "Fazer alguma coisa " },
        { id: 2, text: "Fazer outra coisa " }
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };
                setTaskText("");
                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({ type: "ADD" });
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id: id })
    }
    return (
        <div>
            <h3>Tasks</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTaskText(e.target.value)}
                    value={taskText} />
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)} >{task.text}</li>
            ))}
        </div>
    )
}

export default HookUseState