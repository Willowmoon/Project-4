const Prompt = require('../models/PromptModel')
const promptData = require('./prompts.json')
const mongoose = require('./connection')

Prompt.deleteMany({}).then(() => {
    Prompt.collection.insertMany(promptData).then(users => {
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})