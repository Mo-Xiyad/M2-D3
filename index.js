// let namesArray = []
// let namesNode = document.querySelector('#name')

const addPeople = function () {
    let namesNode = document.querySelector('#name')
    let printName = document.createElement('div')
    printName.innerHTML = namesNode.value
    printName.classList.add("member-name ")
    document.getElementsByTagName('body')[0].appendChild(printName)
}


//add teams
const addTeamlist = function () {
    let groupNode = document.querySelector('#group')
    let allNames = document.querySelectorAll('.member-name ')

    for (let i = 0; i < groupNode.value; i++) {
        let teams = document.createElement('ul')
        teams.classList.add('list-group')
        document.getElementsByTagName('body')[0].appendChild(teams)
        console.log(teams)
    }
}



//devide teams
const randomMembers = function () {

    for (let i = 0; i < participantsNode.length; i++) {
        let participant = Math.floor(Math.random() * participantsNode.length)

    }
}

//sort participans in teams

