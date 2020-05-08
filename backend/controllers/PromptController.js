const Prompt = require('../models/PromptModel')
const data = require('../db/prompts.json')

const getAll = (req, res) => {
    Prompt.find({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const createPrompt = (req, res) => {
    Prompt.create(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const updatePrompt = (req, res) => {
    Prompt.updateOne({ _id: req.params.id }, req.body).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
const deletePrompt = (req, res) => {
    Prompt.remove({ _id: req.params.id }).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
}
module.exports = {
    getAll,
    createPrompt,
    updatePrompt,
    deletePrompt
}