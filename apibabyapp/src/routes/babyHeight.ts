import * as babyHeightController from '@controllers/babyHeight'
import { Router } from 'express'
import { validate } from '@middlewares/validate.middleware'
import { queryBabyHeightDto, InsertBabyHeighttDto, UpdateBabyHeightDto, DeleteBabyHeightDto } from '@dtos/babyHeight.dto'

const router = Router()

router.get('/', validate(queryBabyHeightDto), babyHeightController.seekAllBabyHeight)
router.post('/', validate(InsertBabyHeighttDto), babyHeightController.insertBabyHeight)
router.put('/:id', validate(UpdateBabyHeightDto), babyHeightController.editBabyHeight)
router.delete('/:id', validate(DeleteBabyHeightDto), babyHeightController.deleteBabyHeight)

export { router }
