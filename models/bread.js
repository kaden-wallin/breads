// require mongoose 
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

const bakerSchema = new Schema({
  name: { type: String, required: true, enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'] },
  startDate: { type: Date, required: true },
  bio: String
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}


breadSchema.static.getBakedBreads = function(baker) {
  return this.find({baker: baker})
  .then(foundBreads => {
      
  })
}

const Bread = mongoose.model('Bread', breadSchema)
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Bread
module.exports = Baker