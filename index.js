class Farm {
    constructor(name) {
      this.name = name
      this.crops = []
      this.animals = []
    }
  
    addCrop(crop) {
      this.crops.push(crop)
    }

    addAnimal(animal) {
      this.animals.push(animal)
    }

    cropIncome() {
      return this.crops
                .map(crop => crop.getYieldInEuros())
                .reduce((a, b) => a + b, 0)
    }

    animalIncome() {
      return this.animals
                .map(animal => animal.getValueInEuros())
                .reduce((a, b) => a + b, 0)
    }

    calculateIncome() {
      return this.cropIncome() + this.animalIncome()
    }
    cropsInfo() {
      let resCrop = []
      if (this.crops.length > 0) {
        resCrop = this.crops.map(el => {
          const name = el.__proto__.constructor.name
          el = `There is a crop with ${name},
          area of ${name}: ${el.acres} acres
          price for 1kg of ${name}: ${el.price} €
          costs per acre per year: ${el.costs} €
          total yield in kg: ${el.getYieldInKg().toFixed(2)}
          total income from ${name}: ${el.getYieldInEuros().toFixed(2)} €
          total costs per year: ${el.getCosts().toFixed(2)} €`
          return el
        })
      }
      return resCrop.join('\n      ')
    }

    isVegan() {
      if (this.animals.length === 0) {
        return '(This farm is Vegan!!!)'
      }
      return ''
    }

    profitableCrop() {
      const res = this.crops.map(el => el.getYieldInEuros().toFixed(2)).map((val) => parseFloat(val))
      const max = Math.max(...res)
      const index = res.indexOf(max)
      return this.crops[index].__proto__.constructor.name
    }

    printInfo() {
      console.log(`
      --------------------------------------
      - Farm: ${this.name} ${this.isVegan()}
      - No. of crops: ${this.crops.length}
      ${this.cropsInfo()}
      - Crop that is giving the most income: ${this.profitableCrop()}
      - No. of animals: ${this.animals.length} 
      - Income from crops: ${this.cropIncome().toFixed(2)} €
      - Income from animals: ${this.animalIncome().toFixed(2)} € 
      - Total income: ${this.calculateIncome().toFixed(2)} € 
      ---------------------------------------
      `)
    }
}

module.exports.Farm = Farm