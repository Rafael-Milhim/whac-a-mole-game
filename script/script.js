const numberOfHoles = 15

const createDivs = function (numberDivs) {
    const mainDiv = document.getElementById('main')

    for (let i = 0; i < numberDivs; i++) {
        const createElementDiv = document.createElement('div')
        
        createElementDiv.className = 'holes'
        createElementDiv.innerHTML = '<img class="hole-img" src="img/hole.svg" alt=""></img>'
        mainDiv.appendChild(createElementDiv)

    }
}

createDivs(numberOfHoles)