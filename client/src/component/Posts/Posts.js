import React from 'react'
import { Grid } from '@material-ui/core';

import { useSelector } from 'react-redux'
import Post from './Post/Post.js'
import useStyles from './style'


const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => { return state.posts })
  console.log('this is post', posts)
  const classes = useStyles()  
  return (
    <>
      
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
      
    </>
  )
}

export default Posts
