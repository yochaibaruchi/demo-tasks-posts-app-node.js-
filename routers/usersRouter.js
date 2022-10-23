const express = require('express');
const userBL = require('../model/usersBL');
const router = express.Router();


router.get('/', async function (req, resp) {
    let users = await userBL.getUsers();
    return resp.json(users);
})

router.get('/:id', async function (req, resp) {
    let id = req.params.id
    let user = await userBL.getuserById(id)
    return resp.json(user)
})

router.post('/', async function (req, resp) {
    let obj = req.body
    await userBL.addUser(obj);
    return resp.json("user created")
})

router.put('/:id', async function (req, resp) {
    let obj = req.body
    let id = req.params.id
    await userBL.updateUser(id, obj)
    return resp.json('updated!')
})

router.delete('/:id', async function (req, resp) {
    let id = req.params.id
    await userBL.deleteUser(id);
    return resp.json('deleted')
})



module.exports = router;