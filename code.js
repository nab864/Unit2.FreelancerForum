

const names = ['Dude', 'Lindsey', 'Jack', 'Chloe', 'Jill']
const occupations = ['Race Car Driver', 'Boxer', 'Pirate', 'Analyst', 'Water Fetcher']

const freelancers = [{name: 'Dude', occupation: 'Race Car Driver', price: 100}]

let averagePrice = 100




const interval = setInterval(addFreelancer, 1000)
render()

function render() {
  const nameElement = document.querySelector('.name>ul')
  const liElement = freelancers.map(item => {
    let element = document.createElement('li')
    element.append(item.name)
    return element
  })
  nameElement.replaceChildren(...liElement)

  const occupElement = document.querySelector('.occupation>ul')
  const liElement2 = freelancers.map(item => {
    let element = document.createElement('li')
    element.append(item.occupation)
    return element
  })
  occupElement.replaceChildren(...liElement2)

  const pricElement = document.querySelector('.price>ul')
  const liElement3 = freelancers.map(item => {
    let element = document.createElement('li')
    element.append(item.price)
    return element
  })
  pricElement.replaceChildren(...liElement3)

  averagePrice = getAveragePrice()
  document.getElementById('p1').innerHTML = `The average starting price is ${averagePrice}`

}




function addFreelancer() {
  const tempName = names[Math.floor(Math.random() * names.length)]
  const tempOccupation = occupations[Math.floor(Math.random() * occupations.length)]
  const tempprice = Math.floor(Math.random() * 100)
  const tempObject = {name: tempName, occupation: tempOccupation, price: tempprice}

  freelancers.push(tempObject)

  render()
  if (freelancers.length >= 10) {
    clearInterval(interval)
  }
}

function getAveragePrice() {
  let arraySum = 0
  for (let i = 0; i < freelancers.length; i++) {
    arraySum += freelancers[i].price
  }
  return arraySum / freelancers.length
}