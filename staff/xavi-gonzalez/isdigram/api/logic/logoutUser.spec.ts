import { MongoClient, ObjectId } from 'mongodb'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

const { SystemError, CredentialsError, NotFoundError } = errors

describe("logoutUser", () => {
  let client, users

  before(done => {
    client = new MongoClient('mongodb://localhost:27017')

    client.connect()
      .then(connection => {
        const db = connection.db('test')

        users = db.collection('users')

        logic.users = users

        done()
      })
      .catch(done)
  })

  it("succeeds on logout in existing user", (done) => {
    users.deleteMany()
      .then(() => {
        users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' })
          .then(() => {
            logic.loginUser("peperoni", "123qwe123", (error, userId) => {
              if (error) {
                done(error);

                return;
              }
              // users.findOne({ username: "pakito" })
              //   .then(user => {
              //     const userId = user._id.toString()
              console.log("User ID:", userId)
              logic.logoutUser(userId, (error, userId) => {
                if (error) {
                  done(error);

                  return;
                }
                users.findOne({ _id: new ObjectId(userId) })
                  .then(user => {
                    try {
                      expect(user.status).to.equal("offline");
                      expect(userId).to.equal(user._id.toString());

                      done();
                    } catch (error) {
                      done(error)
                    }
                  })
                  .catch(done);
              });
              // })
              // .catch(done)
            })
          })
          .catch(done)
      })
      .catch(done)
  })


  // TODO test all methods

  after((done) => {
    client.close()
      .then(() => done())
      .catch(done);

  })
});





// describe("logout", () => {
//   it("does logout properly", (done) => {
//      users.deleteAll((error) => {
//       if (error) {
//          done(error);

//         return;
//       }

//     users.insertOne(
//       {
//         name: "Paquito El Chocolatero",
//         birthdate: "2000-01-01",
//         email: "pakito@gmail.com",
//         username: "pakito",
//         password: "123qwe123",
//         status: "offline",
//       },
//       (error, insertedUserId) => {
//         if (error) {
//           done(error);

//           return;
//         }

//         logic.logoutUser(insertedUserId, (error, user) => {
//           if (error) {
//             done(error);
//             return;
//           }

//           expect(user.id).to.equal(insertedUserId);
//           expect(user.status).to.equal("offline");

//           done();
//         });
//       }
//     );
//   });
// });
// })