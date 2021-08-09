
import asyncHandler from 'express-async-handler';
import Note from '../models/noteModel.js'

/**
 * @desc Create Note
 * @route POST /note/create
 * @access Public
 */

export const createNote = asyncHandler(async (req, res) => {
  const {
    title, 
    description
  } = req.body;

  const note = new Note({
    title,
    description
  })


  const createdNote = await note.save();

  res.status(201).json(createdNote)
})

/** 
 * @desc    Get Note by ID
 * @route   GET /note/:id
 * @access  Public
*/ 
export const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  if(note){
    res.status(200).json(note)
  } else {
    res.status(404)
    throw new Error("Note not found!")
  } 
})

/**
 * @desc Get all note
 * @route GET /note
 * @access Public
 */

export const getNotes = asyncHandler(async (req, res) => {
  const note = await Note.find({})
  res.json(note)
})

/**
 * @desc Update a note
 * @route PUT /note/:id
 * @access Public
 */

export const updateNote = asyncHandler(async (req, res) => {
  const {
    title,
    description
  } = req.body

  const note = await Note.findById(req.params.id)

  if(note) {
    note.title = title || note.title
    note.description = description || note.description

    const noteUpdated = await note.save();

    res.json(noteUpdated) 
  } else {
    res.status(404)
    throw new Error("Note not found!")
  }
})

/**
 * @desc Delete note
 * @route DELETE /note/:id
 * @access Public
 */

export const deleteUser = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  if(note) {
    await note.remove()
    res.json({ message: "Note removed!" })
  } else {
    res.status(404)
    throw new Error("Note not found!")
  } 
})

