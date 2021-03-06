import HttpMethod from '@constants/HttpMethod';
import * as ApiURL from '@constants/ApiURL';
import GetDefinitionsParam from '@models/requestParam/GetDefinitionsParam';
import GetDefinitionIdsParam from '@models/requestParam/GetDefinitionIdsParam';
import { requireNonNull, optional } from '@src/utils/objectUtils';

export default {
  [ApiURL.DEFINITIONS]: {
    [HttpMethod.POST]: (req) => {
      return new GetDefinitionsParam({
        defIds: optional(req.body['defIds']).orElse([]),
      });
    }
  },
  [ApiURL.DEFINITIONS_NEW]: {
    [HttpMethod.POST]: (req) => {
      return null;
    },
  },
  [ApiURL.DEFINITIONS_IDS]: {
    [HttpMethod.GET]: (req) => {
      return new GetDefinitionIdsParam({
        defIds: optional(req.query['defIds']).orElse([]),
        offset: optional(req.query['offset']).orElse(null),
      });
    }
  }
};
