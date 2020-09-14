import { combineReducers } from 'redux';
import pageReducer from './page';
import subNavReducer from './subNav/subNav';
import headerReducer from './header';
import boardReducer from './board';
import posterReducer from './poster';
import scheduleDetailReducer from './scheduleDetail';
import OutingCardReducer from './OutingCard';

const rootReducer = combineReducers({
  page: pageReducer,
  subNav: subNavReducer,
  header: headerReducer,
  board: boardReducer,
  poster: posterReducer,
  scheduleDetail: scheduleDetailReducer,
  outingCard: OutingCardReducer,
});

export type stateType = ReturnType<typeof rootReducer>;
export default rootReducer;
