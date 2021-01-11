import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        // console.log(json.Stringify(postMessages))

        res.status(201).json(postMessages)


    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const upadatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no user found')
    const updataPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
    res.json(updataPost)
}
export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no user found')
    await PostMessage.findByIdAndDelete(id)
    console.log('DELETE')

    res.json({ message: 'post deleted' })
}