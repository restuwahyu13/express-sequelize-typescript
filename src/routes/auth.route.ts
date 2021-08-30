import { Router } from 'express'
import { loginController } from '../controllers/login.controller'
import { registerController } from '../controllers/register.controller'
import { upload } from '../helpers/upload.helper'
import { validator } from '../middlewares/validator.middleware'

const router = Router() as Router

router.route('/auth/login').post(validator, loginController)
router.route('/auth/register').post([validator, upload.fields([{ name: 'photo' }, { name: 'document' }])], registerController)

export default router
