let users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jane', isActive: false },
    { id: 3, name: 'Bob', isActive: true },
    { id: 4, name: 'Alice', isActive: false }
]

let ids = []

function drawNotActives(){
    let s = ''
    users.forEach(user => {
        if (!user.isActive){
            s += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td> <input onchange="collectIds(${user.id})" ${user.isActive ? 'checked' : ''} type="checkbox"> </td>
                </tr>
            `
        }
    })
    document.getElementById('tbodyUsers').innerHTML = s
}

function drawActives(){
    let s = ''
    users.forEach(user => {
        if (user.isActive){
            s += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td> <input onchange="collectIds(${user.id})" ${user.isActive ? 'checked' : ''} type="checkbox"> </td>
                </tr>
            `
        }
    })
    document.getElementById('tbodyActives').innerHTML = s
}

function collectIds(id){
    ids.push(id)
}

function changeStatus(){
    users.forEach(user => {
        if (ids.includes(user.id)){
            user.isActive = !user.isActive
        }
    })
    ids = []
    drawNotActives()
    drawActives()
}

drawNotActives()
drawActives()