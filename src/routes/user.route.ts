import { Router } from 'express'
import { createController } from '../controllers/users/create.controller'
import { deleteController, schemaDelete } from '../controllers/users/delete.controller'
import { resultController, schemaResult } from '../controllers/users/result.controller'
import { resultsController } from '../controllers/users/results.controller'
import { schemaUpdate, updateController } from '../controllers/users/update.controller'
import { upload } from '../helpers/upload.helper'
import { grandAuth } from '../middlewares/grand.middleware'
import { tokenAuth } from '../middlewares/token.middleware'
import { validator } from '../middlewares/validator.middleware'

const router = Router() as Router

/**
 * @method {POST}
 * @description create new user data
 */
router.route('/user/create').post(upload.array('photo'), createController)

/**
 * @method {GET}
 * @description results all user data
 */
router.route('/user/results').get([tokenAuth(), grandAuth('admin', 'staff')], resultsController)

/**
 * @method {GET}
 * @params {id}
 * @description result user data by id
 */
router.route('/user/result/:id').get([tokenAuth(), grandAuth('admin', 'staff'), ...schemaResult, validator], resultController)

/**
 * @method {DELETE}
 * @params {id}
 * @description delete user data by id
 */
router.route('/user/delete/:id').delete([tokenAuth(), grandAuth('admin', 'staff'), ...schemaDelete, validator], deleteController)

/**
 * @method {PUT}
 * @params {id}
 * @description update user data by id
 */
router
	.route('/user/update/:id')
	.put([tokenAuth(), grandAuth('admin', 'staff'), ...schemaUpdate, validator, upload.array('photo')], updateController)

export default router
