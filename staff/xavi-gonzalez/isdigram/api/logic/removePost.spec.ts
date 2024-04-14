import { MongoClient, ObjectId } from 'mongodb'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

const { CredentialsError, NotFoundError } = errors

describe("removePost", () => {
    let client, users, posts, postId
  
    before(done => {
      client = new MongoClient("mongodb://localhost:27017");
  
      client.connect()
        .then((connection) => {
          const db = connection.db("test");
  
          users = db.collection("users");
          posts = db.collection("posts");
  
          logic.users = users;
          logic.posts = posts
  
          done();
        })
        .catch(done);
    })
    it('removes post from existing user', done => {
        users.deleteMany()
            .then(() => {
                posts.deleteMany()
                .then(() => {
                    users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123', status:'online' })
        
                    .then(result => {
                        logic.createPost (result.insertedId.toString(), 'http://images.com/whatever', 'hello post', error => {
                            if (error) {
                              done(error)
  
                              return
                            }
                        logic.removePost (postId, error => {
                            if (error) {
                                done(error)
    
                                
                                posts.findOne({ author: new ObjectId (postId)})
                                    .then(deletedPost => {
                                        expect(deletedPost).to.be.null;

                                        // Verificamos que el post ya no esté asociado al usuario
                                        users.findOne({ })
                                            .then(userWithPost => {
                                                expect(userWithPost.posts).to.not.include(postId);
                                                done();
                                            })
                                            .catch(done);
                                    })
                                    .catch(done);return
                                }
                            });
                        });
                })
                .catch(done);
        });


   //TODO all methods

   after(done => {
    client.close()
        .then(() => done())
        .catch(done)
    })
})

})
})