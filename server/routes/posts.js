import express from 'express'
import { getPosts,createPost,upadatePost,deletePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/',getPosts)
router.post('/',createPost)
router.patch('/:id',upadatePost)
router.delete('/:id',deletePost)
export default router;