import * as babyWeightController from '@controllers/babyWeight'
import { Router } from 'express'
import { validate } from '@middlewares/validate.middleware'
import { queryBabyWeightDto, InsertBabyWeightDto, UpdateBabyWeightDto, DeleteBabyWeightDto } from '@dtos/babyWeight.dto'

const router = Router()

router.get('/', validate(queryBabyWeightDto), babyWeightController.seekAllBabyWeight)
router.post('/', validate(InsertBabyWeightDto), babyWeightController.insertBabyWeight)
router.put('/:id', validate(UpdateBabyWeightDto), babyWeightController.editBabyWeight)
router.delete('/:id', validate(DeleteBabyWeightDto), babyWeightController.deleteBabyWeight)

export { router }
