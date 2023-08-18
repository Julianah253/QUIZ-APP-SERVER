import { Router } from "express"
const router = Router();

/** importation of controllers */
import * as controller from '../controllers/controller.js'

/** Questions Routes API */
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult) /** GET request */
        .post(controller.storeResult) /** POST Request */
        .delete(controller.dropResult) /** DELETE Request */

export default router;