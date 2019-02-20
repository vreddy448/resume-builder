import * as EducationActions from '../actions/education-actions';

export function educationReducer(state = {
    data:{},

}, action) {

    switch (action.type) {
        case EducationActions.SAVE_EDUCATION_DATA: {
            return {...state, data: action.payload.data};
        }
        default:
            return state
    }
}