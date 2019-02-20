import * as ExperienceActions from '../actions/experience-actions';

export function experienceReducer(state = {
        data:[],
        currentItem: {
            data: {},
            index: 0,
            update: false
        }
    }, action) {

    switch (action.type) {
        case ExperienceActions.ADD_EXPERIENCE_DATA: {
            return {...state, data: [...(state.data), action.payload], currentItem: {data: {}, index: 0, update: false}};
        }
        case ExperienceActions.UPDATE_CURRENT_EXPERIENCE_DATA: {
            return {...state, currentItem: {data: action.payload.data, index: action.payload.index, update: true}}
        }
        case ExperienceActions.UPDATE_EXPERIENCE_DATA: {
            state.data[action.payload.index] = action.payload.data;
            return {...state, currentItem: {data: {}, index: 0, update: false}}
        }
        case ExperienceActions.DELETE_EXPERIENCE_DATA: {
            return {...state, data: state.data.filter((_, i) => i !== action.payload), currentItem: {data: {}, index: 0, update: false}}
        }
        case ExperienceActions.DELETE_CURRENT_EXPERIENCE_DATA: {
            return {...state, currentItem: {data: {}, index: 0, update: false}}
        }
        default:
            return state
    }
}