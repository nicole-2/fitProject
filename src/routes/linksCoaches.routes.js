const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderAddLinkCoach, addLinkCoach, renderLinksCoaches, deleteLinkCoach, editLinkCoach, renderEditLinkCoach } = require('../controllers/linksCoaches.controller')

// Authorization
router.use(isLoggedIn);

// Routes

router.get('/addCoach', renderAddLinkCoach);
router.post('/addCoach', addLinkCoach);
router.get('/', isLoggedIn, renderLinksCoaches);
router.get('/deleteCoach/:id', deleteLinkCoach);
router.get('/editCoach/:id', renderEditLinkCoach);
router.post('/editCoach/:id', editLinkCoach);

module.exports = router;