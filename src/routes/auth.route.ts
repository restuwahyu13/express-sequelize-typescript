import { Router } from 'express'
import { loginController, schemaLogin } from '../controllers/auth/login.controller'
import { registerController } from '../controllers/auth/register.controller'
import { upload } from '../helpers/upload.helper'
import { validator } from '../middlewares/validator.middleware'

const router = Router() as Router

/**
 * @method {POST}
 * @description login account
 */
router.route('/auth/login').post([...schemaLogin, validator], loginController)

/**
 * @method {POST}
 * @description register new account
 */
router.route('/auth/register').post([upload.fields([{ name: 'photo' }, { name: 'document' }])], registerController)

export default router
