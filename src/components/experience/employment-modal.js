import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { years, months } from "../../common/data";
import DropDown from "../common/dropdown";
import * as ExperienceActions from '../../actions/experience-actions';
import {Modal} from "../common/modal";
import {InputField, renderField} from "../common/input-field";
import { required, length } from 'redux-form-validators';

class EmploymentModal extends React.Component {

    constructor(props) {
        super(props);
        this.saveExperienceModalInformation = this.saveExperienceModalInformation.bind(this);
        this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
    }

    saveExperienceModalInformation(values) {
        if (this.props.update) {
            this.props.dispatch({
                type: ExperienceActions.UPDATE_EXPERIENCE_DATA,
                payload: {data: values, index: this.props.index}
            });
        } else {
            this.props.dispatch({
                type: ExperienceActions.ADD_EXPERIENCE_DATA,
                payload: values
            });
        }
        this.props.reset();
        this.props.toggle();
    }

    deleteCurrentItem() {
        this.props.dispatch({
            type: ExperienceActions.DELETE_CURRENT_EXPERIENCE_DATA,
        });
        this.props.reset();
        this.props.toggle();
    }

    monthRequired = value => (value !== "MONTH" ? undefined : 'is required');

    yearRequired = value => (value !== "YEAR" ? undefined : 'is required');

    getEmploymentModalContent = () => {
        return (
            <div>
                <InputField
                    labelName="Company"
                    fieldName="company"
                    fieldClasses="form-control"
                    inputType="text"
                    sectionClasses="form-group col-sm"
                    validate={[required(), length({ min: 2 })]}
                />
                <InputField
                    labelName="Role"
                    fieldName="role"
                    fieldClasses="form-control"
                    inputType="text"
                    sectionClasses="form-group col-sm-6"
                    validate={[required(), length({ min: 2 })]}
                />
                <div className="form-row px-3">
                    <div className="form-group col-md-2">
                        <label htmlFor="startMonth">Start Date</label>
                        <DropDown
                            name="startMonth"
                            values={months}
                            validate={[required(), this.monthRequired]}
                        />
                        {
                            this.props.fields && this.props.fields.startMonth && this.props.fields.startMonth.touched
                                && ((this.props.errors && this.props.errors.startMonth
                                    && <span className="error">{this.props.errors.startMonth }</span>))
                        }
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="startYear" className="sm-hide">&nbsp;</label>
                        <DropDown
                            name="startYear"
                            values={years()}
                            validate={[required(), this.yearRequired]}
                        />
                        {
                            this.props.fields && this.props.fields.startYear && this.props.fields.startYear.touched
                                && ((this.props.errors && this.props.errors.startYear
                                    && <span className="error">{this.props.errors.startYear }</span>))
                        }
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="endMonth">End Date</label>
                        <DropDown
                            name="endMonth"
                            values={months}
                            validate={[required(), this.monthRequired]}
                        />
                        {
                            this.props.fields && this.props.fields.endMonth && this.props.fields.endMonth.touched
                                && ((this.props.errors && this.props.errors.endMonth
                                    && <span className="error">{this.props.errors.endMonth }</span>))
                        }
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="endYear" className="sm-hide">&nbsp;</label>
                        <DropDown
                            name="endYear"
                            values={years()}
                            validate={[required(), this.yearRequired]}
                        />
                        {
                            this.props.fields && this.props.fields.endYear && this.props.fields.endYear.touched
                            && ((this.props.errors && this.props.errors.endYear
                                && <span className="error">{this.props.errors.endYear }</span>))
                        }
                    </div>
                </div>
                <FieldArray name="resList" component={this.responsibilities} />
            </div>
        )
    };

    responsibilities = ({ fields }) => (
        <div className="form-group px-3">
            <label>Responsibilities</label>
            <div className="py-3 border rounded">
                {
                    fields.map((code, index) => (
                            <div key={index + 1} className="d-flex py-2">
                                <div className="px-2 pt-2">{index + 1}</div>
                                <div className="flex-grow-1">
                                    <Field
                                        className="form-control"
                                        component={renderField}
                                        name={code}
                                        type="text"
                                        validate={[required()]}
                                    />
                                </div>
                                <div id={code} className="btn material-icons px-2 pt-2 align-middle" onClick={() => fields.remove(index)}>
                                    delete
                                </div>
                            </div>
                        )
                    )
                }
                <button type="button" className="btn btn-primary transparent-bgr ml-4" onClick={() => {fields.push()}}><span>+ </span>Add</button>
            </div>
        </div>
    );

    render() {

        let {handleSubmit, modalActive} = this.props;

        return (
            modalActive &&
            <form onSubmit={handleSubmit(this.saveExperienceModalInformation)}>
                <Modal
                    close={this.deleteCurrentItem}
                    header="Add Employment"
                    modalBody={this.getEmploymentModalContent()}
                    modalButtonTitle="Save"
                />
            </form>
        )
    }
}

EmploymentModal = reduxForm(
    {
        form: 'addEmploymentForm',
        enableReinitialize: true
    }
)(EmploymentModal);

function mapStateToProps(state, ownProps) {
    let initialValues = state.experienceDetails.currentItem.data;
    const index = state.experienceDetails.currentItem.index;
    const update = state.experienceDetails.currentItem.update;
    const employmentForm = state.form.addEmploymentForm;

    if (initialValues && !initialValues.resList) {
        initialValues.resList = [""];
    }

    return {
        initialValues,
        index,
        update,
        fields: employmentForm && employmentForm.fields,
        errors: employmentForm && employmentForm.syncErrors
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentModal);