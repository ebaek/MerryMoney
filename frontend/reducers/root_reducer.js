import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import usersReducer from './users_reducer';
import newsReducer from './news_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    news: newsReducer,
    errors: errorsReducer,
    ui: usersReducer,
})

export default rootReducer;
