import * as SkillsAndCertificationsActions from "../actions/skills-and-certifications-actions";

export function skillsReducer(state = {
        data:[],
        currentItem: {
            data: {},
            index: 0,
            update: false
        }
    }, action) {

    switch (action.type) {
        case SkillsAndCertificationsActions.ADD_SKILL_DATA: {
            return {...state, data: [...(state.data), action.payload], currentItem: {data: {}, index: 0, update: false}};
        }
        case SkillsAndCertificationsActions.UPDATE_SKILL_DATA: {
            state.data[action.payload.index] = action.payload.data;
            return {...state, currentItem: {data: {}, index: 0, update: false}};
        }
        case SkillsAndCertificationsActions.DELETE_SKILL_DATA: {
            return {...state, data: state.data.filter((_, i) => i !== action.payload), currentItem: {data: {}, index: 0, update: false}};
        }
        case SkillsAndCertificationsActions.UPDATE_CURRENT_SKILL_DATA: {
            return {...state, currentItem: {data: action.payload.data, index: action.payload.index, update: true}};
        }
        case SkillsAndCertificationsActions.DELETE_CURRENT_SKILL_DATA: {
            return {...state, currentItem: {data: {}, index: 0, update: false}}
        }
        default:
            return state
    }
}