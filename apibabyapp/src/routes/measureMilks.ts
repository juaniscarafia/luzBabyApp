import * as measureMilkController from '@controllers/measureMilks'
import { Router } from 'express'
import { validate } from '@middlewares/validate.middleware'
import { DeleteMeasureMilkDto, InsertMeasureMilkDto, UpdateMeasureMilkDto, queryMeasureMilkDto } from '@dtos/measureMilk.dto'

const router = Router()

router.get('/', validate(queryMeasureMilkDto), measureMilkController.seekAllMeasureMilks)
router.post('/', validate(InsertMeasureMilkDto), measureMilkController.insertMeasureMilks)
router.put('/:id', validate(UpdateMeasureMilkDto), measureMilkController.editMeasureMilks)
router.delete('/:id', validate(DeleteMeasureMilkDto), measureMilkController.deleteMeasureMilks)

export { router }
