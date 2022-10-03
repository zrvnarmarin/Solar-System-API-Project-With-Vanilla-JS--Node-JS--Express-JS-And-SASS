const planetCards = document.getElementById('planet-cards')

const getPlanetsInfo = () => {
    fetch('http://localhost:8000/')
    .then(response => {
        return response.json()
    })
    .then(planetsInfo => {
        console.log(planetsInfo)
        displayPlanetCard(planetsInfo)
    })
    .catch(error => {
        console.log(error)
    })
}

const displayPlanetCard = (planetsInfo) => {
    
    planetsInfo.map(planetInfo => {
        const { name, id, imgSrc, description, planetOrder, basicDetails } = planetInfo
        
        const planetInfoObject = {
            planetName: name,
            planetId: id,
            planetDescription: description,
            planetImageSource: imgSrc[0].img,
            planetOrder: planetOrder,
            planetMass: basicDetails[0].mass,
            planetVolume: basicDetails[0].volume
        }
        
        // Planet info separate elements
        const planetNameElement = document.createElement('h1')
        planetNameElement.textContent = planetInfoObject.planetName
        planetNameElement.classList.add('planet-name')
        
        const planetImageElement = document.createElement('img')
        planetImageElement.src = planetInfoObject.planetImageSource
        planetImageElement.classList.add('image')
        
        const planetMassElement = document.createElement('h3')
        planetMassElement.innerText = `Mass: ${planetInfoObject.planetMass}`
        
        const planetVolumeElement = document.createElement('h3')
        planetVolumeElement.innerText = `Volume: ${planetInfoObject.planetVolume}`
        
        const planetDescriptionElement = document.createElement('p')
        planetDescriptionElement.innerText = planetInfoObject.planetDescription
        
        const planetIdElement = document.createElement('span')
        planetIdElement.innerText = planetInfoObject.planetId
        
        // Planet info containers for separate elements
        const imageContainer = document.createElement('div')
        imageContainer.append(planetImageElement)
        imageContainer.classList.add('image-container')

        const details = document.createElement('div')
        details.append(planetMassElement)
        details.append(planetVolumeElement)

        const descriptionElement = document.createElement('div')
        descriptionElement.append(planetDescriptionElement)
        descriptionElement.append(planetIdElement)

        // Planet info card
        const planetCard = document.createElement('div')
        planetCard.classList.add('planet-card')
        planetCard.append(planetNameElement)
        planetCard.append(imageContainer)
        planetCard.append(details)
        planetCard.append(descriptionElement)
        
        // Append every planet info card to body
        planetCards.append(planetCard)
        document.body.append(planetCards)
    })
    
}

getPlanetsInfo()