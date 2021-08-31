import { Router } from 'express'
import { createController } from '../controllers/users/create.controller'
import { deleteController, schemaDelete } from '../controllers/users/delete.controller'
import { resultController, schemaResult } from '../controllers/users/result.controller'
import { resultsController } from '../controllers/users/results.controller'
import { upload } from '../helpers/upload.helper'
import { grantAuth } from '../middlewares/grant.middleware'
import { tokenAuth } from '../middlewares/token.middleware'
import { validator } from '../middlewares/validator.middleware'

const router = Router() as Router

router.route('/user/create').post(upload.array('photo'), createController)

router.route('/user/results').get([tokenAuth(), grantAuth('admin', 'staff')], resultsController)

router.route('/user/result/:id').get([tokenAuth(), grantAuth('admin', 'staff'), ...schemaResult, validator], resultController)

router.route('/user/result/:id').delete([tokenAuth(), grantAuth('admin', 'staff'), ...schemaDelete, validator], deleteController)

export default router
