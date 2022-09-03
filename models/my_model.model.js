const mongo=require('mongoose')



url="mongodb://localhost:27017/blog5"


var userModel = mongo.Schema({
    nom: String,
    prenom: String,
    CIN: Number,
    Montant: Number ,
})

var users = mongo.model('user',userModel)


exports.findUserData=(id)=>{
    return new Promise((resolve,reject)=>{
        mongo.connect(url).then(()=>{
          return users.find({CIN:id}).then((user)=>{
            if(user){
                mongo.disconnect()
                resolve(user)
            } else {
                mongo.disconnect()
                reject("User Not Found")
            }
          }
         )      
        }
      ).catch(err=>{
          reject(err)
      })
    }
  )
}