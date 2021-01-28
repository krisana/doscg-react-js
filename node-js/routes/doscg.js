import express from 'express'
import DOSCG from '../src/controllers/DOSCG.controller'
const router = express.Router()

router.get('/findXYZ', DOSCG.findXYZ);
router.get('/findBC', DOSCG.findBC);
router.get('/findDirection', DOSCG.findDirection);
// router.get('/:id', DOSCG.getDOSCG);
// router.patch('/:id', DOSCG.updateDOSCG);
// router.delete('/:id', DOSCG.removeDOSCG);

module.exports = router;