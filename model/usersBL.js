const users = require('./usersSchema')

const getUsers = async () => {
    let data = await users.find({});
    return data
}

const getuserById = async (id) => {
    let data = await users.findById(id)
    return data
}

const addUser = async (obj) => {
    let user = new users({
        Name: obj.Name,
        email: obj.email,
        street: obj.street,
        City: obj.City,
        Zipcode: obj.Zipcode,
        Tasks: [],
        Posts: []
    });
    await user.save()
}

const updateUser = async (id, obj) => {
    await users.findByIdAndUpdate(id, {
        Name: obj.Name,
        email: obj.email,
        street: obj.street,
        City: obj.City,
        Zipcode: obj.Zipcode,
        Tasks: obj.Tasks,
        Posts: obj.Posts
    });
}

const deleteUser = async (id) => {
    await users.findByIdAndDelete(id)
    return `user deleted successfully`
}


module.exports = { getUsers, getuserById, addUser, updateUser, deleteUser, }