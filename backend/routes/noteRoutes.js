
import express from 'express'
const router = express.Router()

import * as noteControllers from '../controllers/noteController.js';

router.route('/').post(noteControllers.createNote).get(noteControllers.getNotes)
router.route('/:id')
  .get(noteControllers.getNoteById)
  .delete(noteControllers.deleteUser)
  .put(noteControllers.updateNote)

export default router