document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#delete-btn')
  button.addEventListener('click', handleDeleteClick)
})

const handleFormSubmit = function(event){
  event.preventDefault()
  const listElement = document.createElement('li')

  const animal = document.createElement('p')
  animal.textContent = this.animal.value
  listElement.appendChild(animal)

  const species = document.createElement('p')
  species.textContent = this.species.value
  listElement.appendChild(species)

  const continent = document.createElement('p')
  continent.textContent = this.continent.value
  listElement.appendChild(continent)

  const contactMe = document.createElement('p')
  contactMe.textContent = this.contactMe.value
  listElement.appendChild(contactMe)

  const animalsList = document.querySelector('#animals')
  animalsList.appendChild(listElement)

  this.reset
}

const handleDeleteClick = function(){
  const animalsList = document.querySelector('#animals')
  animalsList.innerHTML = ''
}
