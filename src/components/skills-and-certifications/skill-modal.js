import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { skillGroups } from "../../common/data";
import DropDown from "../common/dropdown";
import * as SkillsAndCertificationsActions from '../../actions/skills-and-certifications-actions';
import {Modal} from "../common/modal";
import { required, length } from 'redux-form-validators';
import {InputField} from "../common/input-field";

class SkillModal extends React.Component {

    constructor(props) {
        super(props);
        this.saveSkillsModalInformation = this.saveSkillsModalInformation.bind(this);
        this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
    }

    saveSkillsModalInformation(values) {
        if (this.props.update) {
            this.props.dispatch({
                type: SkillsAndCertificationsActions.UPDATE_SKILL_DATA,
                payload: {data: values, index: this.props.index}
            });
        } else {
            this.props.dispatch({
                type: SkillsAndCertificationsActions.ADD_SKILL_DATA,
                payload: values
            });
        }
        this.props.reset();
        this.props.toggle();
    }

    deleteCurrentItem() {
        this.props.dispatch({
            type: SkillsAndCertificationsActions.DELETE_CURRENT_SKILL_DATA,
        });
        this.props.reset();
        this.props.toggle();
    }

    skillGroupRequired = value => (value !== "Skill Group" ? undefined : 'is required');

    getSkillsContent = () => {
        return (
            <div className="form-row p-3">
                <div className="col-md-3 mb-3">
                    <DropDown
                        sectionClasses="skill-dd-padding form-control"
                        name="skillGroup"
                        values={skillGroups}
                        validate={[required(), this.skillGroupRequired]}
                    />
                    {
                        this.props.fields && this.props.fields.skillGroup && this.props.fields.skillGroup.touched
                        && ((this.props.errors && this.props.errors.skillGroup
                            && <span className="error">{this.props.errors.skillGroup}</span>))
                    }
                </div>
                {
                    (this.props.skillGroupValue === 'Other' ) &&
                        <InputField
                            fieldName="otherSkillGroup"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="col-md-3 mb-3"
                            placeholder="Skill Group Name"
                            validate={[required(), length({ min: 2 })]}
                        />
                }
                <InputField
                    fieldName="skills"
                    fieldClasses="form-control"
                    inputType="text"
                    sectionClasses="col-md-9"
                    placeholder="e.g. React, Vue, Angular etc.."
                    validate={[required(), length({ min: 2 })]}
                />
            </div>
        )
    };

    render() {

        let {handleSubmit, modalActive} = this.props;
        return (
            modalActive &&
            <form onSubmit={handleSubmit(this.saveSkillsModalInformation)}>
                <Modal
                    close={this.deleteCurrentItem}
                    header="Add Skills"
                    modalBody={this.getSkillsContent()}
                    modalButtonTitle="Save"
                />
            </form>
        )
    }
}

SkillModal = reduxForm(
    {
        form: 'addSkillForm',
        enableReinitialize: true
    }
)(SkillModal);

const skillFormSelector = formValueSelector('addSkillForm');


function mapStateToProps(state, ownProps) {
    const skillGroupValue = skillFormSelector(state, 'skillGroup');
    const initialValues = state.skills.currentItem.data;
    const index = state.skills.currentItem.index;
    const update = state.skills.currentItem.update;
    const addSkillForm = state.form.addSkillForm;

    return {
        skillGroupValue,
        initialValues,
        index,
        update,
        fields: addSkillForm && addSkillForm.fields,
        errors: addSkillForm && addSkillForm.syncErrors
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillModal);