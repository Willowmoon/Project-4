const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const promptSchema = new Schema ({
    prompt: String
});

const PromptModel = mongoose.model("Prompt", promptSchema);

module.exports = PromptModel;