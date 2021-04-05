
import { HTTP_STATUS } from '../../../shared/constants/http_codes';
import { Request, Response } from 'express';
import { DeleteNew } from '../../../../boundedContext/dailyTrends/application/deleteNews';
import { DailyTrendsRepositoryOrm } from '../../../../boundedContext/dailyTrends/infrastructure/persistence/dailyTrendsRepositoryOrm';
import { FeedId } from '../../../../boundedContext/dailyTrends/domain/valueObjects/feedNumber';

export class DeleteNewController {

private dailyTrendsRepositoryImpl: DailyTrendsRepositoryOrm;
private deleteNew: DeleteNew;

constructor() {
  this.dailyTrendsRepositoryImpl = new DailyTrendsRepositoryOrm();
  this.deleteNew = new DeleteNew(this.dailyTrendsRepositoryImpl);
}

public async run(req: Request, res: Response):Promise<void> {
  await this.deleteNew.run(new FeedId(parseInt(req.params.id)));
  res.status(HTTP_STATUS.SUCCESS).send();
}

}
