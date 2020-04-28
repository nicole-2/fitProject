const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderAddLinkInventory, addLinkInventory, renderLinksInventory, deleteLinkInventory, editLinkInventory, renderEditLinkInventory } = require('../controllers/linksInventory.controller')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/addInventory', renderAddLinkInventory);
router.post('/addInventory', addLinkInventory);
router.get('/', isLoggedIn, renderLinksInventory);
router.get('/deleteInventory/:id', deleteLinkInventory);
router.get('/editInventory/:id', renderEditLinkInventory);
router.post('/editInventory/:id', editLinkInventory);


module.exports = router;