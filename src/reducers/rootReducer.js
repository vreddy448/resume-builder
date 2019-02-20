import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {experienceReducer} from './experience-reducer';
import {skillsReducer} from './skills-reducer';
import {certificationsReducer} from './certifications-reducer';
import {educationReducer} from "./education-reducer";

const rootReducer = combineReducers({
    form: formReducer,
    educationDetails: educationReducer,
    experienceDetails: experienceReducer,
    skills: skillsReducer,
    certifications: certificationsReducer
});

export default rootReducer;