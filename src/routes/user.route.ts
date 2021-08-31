import { Router } from 'express'
import { loginController, schemaLogin } from '../controllers/login.controller'
import { registerController } from '../controllers/register.controller'
import { upload } from '../helpers/upload.helper'
import { validator } from '../middlewares/validator.middleware'

const router = Router() as Router

router.route('/auth/login').post([...schemaLogin, validator], loginController)
router.route('/auth/register').post([upload.fields([{ name: 'photo' }, { name: 'document' }])], registerController)

export default router
