const { Router } = require('express');
const router = Router();


router.get('', (req, res) => {
    res.json({"Servidor Detech":"Online Test"});
})

module.exports = router;