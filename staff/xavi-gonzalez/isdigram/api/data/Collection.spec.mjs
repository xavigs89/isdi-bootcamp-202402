import fs from "fs"

import Collection from "./Collection.mjs"

import { expect } from "chai"


describe("Collection", () => {
    describe("constructor", () => {
      it("creates a collection", () => {
        const cars = new Collection("cars");
//cambiar toBe por to.equal y toBeInstanceOf por to.be.instanceOf  
        expect(cars).to.be.instanceOf(Collection);
      });
    });
  
    describe("> helpers", () => {
      describe("_generateId", () => {
        it("generates a random id", () => {
          const cars = new Collection("cars");
  
          const id1 = cars._generateId();
  
          expect(typeof id1).to.equal("string");
  
          const id2 = cars._generateId();
  
          expect(typeof id2).to.equal("string");
  
          expect(id1 === id2).to.equal(false);
        });
      });
  
// si algo es asincrono, se pone done antes de la funcion flecha y done() al final. los sincronos, no se pone done      
      describe("_loadDocuments", () => {
        it("loads empty array on new collection", done => {
          fs.writeFile("./data/cars.json", "[]", error => {
            if (error) {
              done(error)

              return
            }

            const cars = new Collection("cars");

              cars._loadDocuments((error, documents) => {
                    if (error) {
                      done(error)

                      return
                    }

                    expect(error).to.be.null

                    expect(documents).to.be.instanceOf(Array);
                    expect(documents.length).to.equal(0);

                    done()
              })
          })

        })
        
        it("loads data on non-empty collection", done => {
          fs.writeFile("./data/cars.json", 
          '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {

            if(error) {
              done(error)

              return
            }

            const cars = new Collection("cars");

            cars._loadDocuments((error, documents) => {
              if (error) {
                done(error)

                return
              }

              expect(error).to.be.null

              expect(documents).to.be.instanceOf(Array);
              expect(documents.length).to.equal(2);
      
              let document = documents[0];
              expect(document).to.be.instanceOf(Object);
              expect(document.brand).to.equal("porsche");
              expect(document.model).to.equal("911");
      
              document = documents[1];
              expect(document.brand).to.equal("fiat");
              expect(document.model).to.equal("500");

              done()
            })
          })
        })
      })
  
        
  
      describe("_saveDocuments", () => {
        it("saves a collection", done => {
          fs.writeFile('./data/cars.json', '[]', error => {
            if (error) {
              done(error)

              return
            }

            const documents = [
            { brand: "porsche", model: "911" },
            { brand: "fiat", model: "500" },
          ];

            const cars = new Collection("cars");

            cars._saveDocuments(documents, error => {
                if (error) {
                  done(error)

                  return
                }
                
                expect(error).to.be.null
  
                fs.readFile("./data/cars.json", "utf8", (error, documentsJSON) => {
                  if (error) {
                    done(error)

                    return
                  }
                  expect(documentsJSON).to.equal(JSON.stringify(documents));

                  done()

                })
            });
        })
    })

        it("fails on non-array documents", () => {
          const documents = "hola documents";
  
          const cars = new Collection("cars");
  
          let errorThrown;
  
          try {
            cars._saveDocuments(documents, () => { }) 
          }catch (error) {
              errorThrown = error;
            }
          
  
          expect(errorThrown).to.be.instanceOf(TypeError);
          expect(errorThrown.message).to.equal("documents is not an array");
        });
  
        it("fails on array with non-object document in documents", () => {
          const documents = [
            { brand: "porsche", model: "911" },
            { brand: "fiat", model: "500" },
            "hola document",
          ];
  
          const cars = new Collection("cars");
  
          let errorThrown;
  
          try {
            cars._saveDocuments(documents, () => { });
          } catch (error) {
            errorThrown = error;
          }
  
          expect(errorThrown).to.be.instanceOf(TypeError);
          expect(errorThrown.message).to.equal(
            "a document in documents is not an object"
          );
        });
      });
  
    });
  
    describe("> CRUD", () => {
      describe("findOne", () => {
        it("finds an existing document", done => {
          fs.writeFile('./data/cars.json',
            '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
              if (error) {
                done(error)

                return
              }

              const cars = new Collection("cars")
  
          cars.findOne(car => car.brand === "fiat",(error, car) => {
            if(error) {
              done(error)

              return
            }
            
            expect(error).to.be.null

            expect(car).to.be.instanceOf(Object);
            expect(car.brand).to.equal("fiat");
            expect(car.model).to.equal("500");

            done()
        });
      })
    })

  
        it("fails on no callback", () => {
          const cars = new Collection("cars");
  
          let errorThrown;
  
          try {
            cars.findOne();
          } catch (error) {
            errorThrown = error;
          }
  
          expect(errorThrown).to.be.instanceOf(TypeError);
          expect(errorThrown.message).to.equal("condition callback is not a function");
        });
  
        it("fails on non-function callback", () => {
          const cars = new Collection("cars");
  
          let errorThrown;
  
          try {
            cars.findOne();
          } catch (error) {
            errorThrown = error;
          }
  
          expect(errorThrown).to.be.instanceOf(TypeError);
          expect(errorThrown.message).to.equal("condition callback is not a function");
        });

        it('fails on non-function callback', () => {
          const cars = new Collection('cars')

          let errorThrown

          try {
              cars.findOne(123)
          } catch (error) {
              errorThrown = error
          }

          expect(errorThrown).to.be.instanceOf(TypeError)
          expect(errorThrown.message).to.equal('condition callback is not a function')
      })
  })

//TODO test all methods

      describe("insertOne", () => {
        it("inserts a document", done => {

          fs.writeFile('./data/cars.json', '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]', error => {
            if (error) {
              done(error)

              return
            }

            const cars = new Collection("cars");

            const newCar = JSON.parse ('{ "brand": "seat", "model": "ibiza" }')

            cars.insertOne(newCar, (error) => {
              if(error) {
                done(error)

                return
              }

            cars._loadDocuments((error, documents) => {
                if(error) {
                  done(error)
    
                  return
              };

          
          expect (error).to.be.null
          
          expect(documents).to.be.instanceOf(Array);
          expect(documents.length).to.equal(3);
  
          let document = documents[0];
          expect(document).to.be.instanceOf(Object);
          expect(document.brand).to.equal("porsche");
          expect(document.model).to.equal("911");
  
          document = documents[1];
          expect(document.brand).to.equal("fiat");
          expect(document.model).to.equal("500");
  
          document = documents[2];
          expect(document.brand).to.equal("seat");
          expect(document.model).to.equal("ibiza");

          done()

          })
        });
      });


/*
      describe("updateOne", () => {
        it("should update a document", done => {
          fs.writeFile
            '[{"brand":"porsche","model":"911","id":"1"},{"brand":"fiat","model":"500","id":"2"}]';

          const cars = new Collection("cars");

          const newCar = { brand: "opel", model: "corsa", id: "2" }

          cars.updateOne(document, error => {
            if(error)
            done(error)

            return
          }

          const documents = cars._loadDocuments();

          expect(documents).toBeInstanceOf(Array);
          expect(documents.length).toBe(2);

          let document = documents[0];
          expect(document).toBeInstanceOf(Object);
          expect(document.brand).toBe("porsche");
          expect(document.model).toBe("911");

          document = documents[1];

          expect(document.brand).toBe("opel");
          expect(document.model).toBe("corsa");
        });
      });

      describe("deleteOne", () => {
        it("should delete a document", () => {
          localStorage.cars =
            '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]';

          const cars = new Collection("cars");

          const car = cars.deleteOne(function (car) {
            return car.brand === "fiat";
          });

          const documents = cars._loadDocuments();

          expect(documents).toBeInstanceOf(Array);
          expect(documents.length).toBe(1);

          const document = documents[0];
          expect(document.brand).toBe("porsche");
          expect(document.model).toBe("911");
        });



      });
      */
    })
    

  })
    
})
})

