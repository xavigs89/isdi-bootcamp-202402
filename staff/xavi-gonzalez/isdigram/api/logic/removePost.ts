import { validate, errors } from 'com'

import { ObjectId } from 'mongodb'

const { SystemError, NotFoundError } = errors

function removePost(postId, callback) {
    validate.text(postId, "postId", true);
    validate.callback(callback)
  
    this.posts.findOne({author: new ObjectId (postId)})
    .then(post =>{
      if (!post) {
        callback(new NotFoundError("post not found"));

        return
      }

      if (post.author !== sessionStorage.userId) {
        callback(new Error("post does not belong to user"))

        return
      }

      this.posts.deleteOne({ author: postId })
      .then(() => { callback(null)
      })
      .catch(error => callback(new SystemError(error.message)))
    })
    .catch(error => callback(new SystemError(error.message)))
  
  
}

  export default removePost