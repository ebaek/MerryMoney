import * as APIUtil from '../util/news_api_util';

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = (news) => {
    return({
        type: RECEIVE_NEWS,
        news,
    })
}

export const fetchNews = (company) => (dispatch) => {
    return APIUtil.fetchCompanyNews(company).then( (news) => dispatch(receiveNews(news)));
}

