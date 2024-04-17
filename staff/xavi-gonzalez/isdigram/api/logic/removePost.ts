import { validate, errors } from 'com'

import { ObjectId } from 'mongodb'

const { SystemError, NotFoundError } = errors

function removePost(postId) {
//     validate.text(postId, "postId", true);
  
//     this.posts.findOne({author: new ObjectId (postId)})
//     .then(post =>{
//       if (!post) 
//         throw new NotFoundError("post not found")

//       if (post.author !== sessionStorage.userId) 
//         throw new Error("post does not belong to user")

//       this.posts.deleteOne({ author: postId })
//       .then(() => {(null)
//       })
//       .catch(error => throw new SystemError(error.message))
//     })
//     .catch(error => throw new SystemError(error.message))
  
  
}

export default removePost



//   import { Schema } from 'mongoose'

// const { Types: {ObjectId } } = Schema

// import { UserType, User  } from '../data/index.ts'

// import { validate, errors } from 'com'

// const { NotFoundError, SystemError } = errors

// function retrieveUser(userId: string, targetUserId: string): Promise<{ name: string, username: string }> {
//     validate.text(userId, "userId", true);
//     validate.text(targetUserId, 'targetUserId', true)
  
//     return User.findById(userId)
//       .catch(error => { throw new SystemError(error.message) })
//       .then(user => {
//           if (!user) throw new NotFoundError("user not found")
            
//           return User.findById(targetUserId).select('-_id name username').lean()
//       })
//       .then(user => {
//           if (!user) throw new NotFoundError('target user not found')
  
//           return { name: user.name, username: user.username }
//       })
// }

// export default removePost
  