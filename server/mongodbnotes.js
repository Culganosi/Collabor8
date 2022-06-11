    ////Just notes
    const user1 = await User.findById("___")
    const user2 = await User.find({userhandle: "dariakiseleva"}) //returns array
    const user3 = await User.findOne({userhandle: "dariakiseleva"}) //returns object
    const user4 = await User.exists({userhandle: "dariakiseleva"}) //boolean
    const del = User.deleteOne({userhandle: "dariakiseleva"}) //deletes, returns {deletedOne: 1}
    User.deleteMany({userhandle: "dariakiseleva"}) //deletes?

    const user5 = await User.where("name").equals("kyle").where("age").gt("12").limit(2).select("age").populate("bestFriend")
    user5.sayHi;

    const staticFind = await User.findByName("Kyle")
    
    //mongoose syntax of the same things
    //populate is like join


    user1.bestFriend="___the id___"
    await user1.save()


///----After schema

//Note: can not use arrow functions here
userSchema.methods.sayHi = function () {
    console.log(`Hi, my name is ${this.name}`)
}

userSchema.statics.findByName = function(name) {
    return this.find({name: new RegExp(name, 'i')})
}


//For chaining into queries
userSchema.query.byName = function (name) {
    return this.where({name: new RegExp(name, 'i')})
}
//--> User.find().byName("Kyle"), or where() instead of find
//Can't call byName directly as it's not a function


userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})
//A property that is on an individual user - it's not actually in the database, it duplicated data
//user1.namedEmail can be accessed after finding the user


//Middleware
userSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
})

userSchema.post('save', function(doc, next){
    doc.sayHi()
    next()
})