const express = require('express')
const router = express.Router()
const PromptController = require('../controllers/PromptController');

router.get('/', PromptController.getAll)
router.post('/create', PromptController.createPrompt)
router.put('/:id', PromptController.updatePrompt)
router.delete('/delete/:id', PromptController.deletePrompt)
module.exports = router