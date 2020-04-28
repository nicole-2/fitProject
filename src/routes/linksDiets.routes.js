/* const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderAddLinkDiet, addLinkDiet, renderLinksDiets, deleteLinkDiet, editLinkDiet, renderEditLinkDiet } = require('../controllers/linksDiets.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/addDiet', renderAddLinkDiet);
router.post('/addDiet', addLinkDiet);
router.get('/', isLoggedIn, renderLinksDiets);
router.get('/deleteDiet/:id', deleteLinkDiet);
router.get('/editDiet/:id', renderEditLinkDiet);
router.post('/editDiet/:id', editLinkDiet);


module.exports = router; */