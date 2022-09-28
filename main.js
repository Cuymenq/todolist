fetch('./todo.json')
    .then((res) => res.json())
    .then((data) => {
        displayTodo(data.Todo)
    })

let tasksEl = document.getElementById('tasks')

function displayTodo(data) {
    let tasksHTML = ''

    displayFeaturedTask(data[1])

        for (let task of data) {
            tasksHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${task.title}</h2>
                    <p class="card-text">${task.description}</p>
                </div>
            </div>
            `
        }

        tasksEl.innerHTML = tasksHTML

        let tasksEls = document.querySelectorAll('#tasks .card')

        for (let i = 0; i < tasksEls.length; i++) {
            tasksEls[i].addEventListener('click', (event) => {
                let taskInfo = data[i]
                displayFeaturedTask(taskInfo)
            })
        }
}

function displayFeaturedTask(task) {
    let featuredTaskEl = document.getElementById('featured-task')

    let choresHTML = ''

    for (let chore in task.chores) {
        choresHTML += `
        <li>${chore}: ${task.chores[chore]}</li>
        `
    }

    let choreHTML = `
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <h4>Tasks:</h4>
    <ul>
        ${choresHTML}
    <ul>
    `
    featuredTaskEl.innerHTML = choreHTML
}
