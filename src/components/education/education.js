import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as EducationActions from '../../actions/education-actions';
import ButtonConatiner from "../button-container";
import { years, months } from "../../common/data";
import {CardHeader} from "../common/card-header";
import {InputField} from "../common/input-field";
import { required, length } from 'redux-form-validators';
import DropDown from "../common/dropdown";

class Education extends React.Component {

    constructor(props) {
        super(props);
        this.saveEducationDetails = this.saveEducationDetails.bind(this);
    }

    saveEducationDetails(values) {
        this.props.dispatch({
            type: EducationActions.SAVE_EDUCATION_DATA,
            payload: {data: values}
        });
        this.props.next();
    }

    monthRequired = value => (value !== "MONTH" ? undefined : 'is required');

    yearRequired = value => (value !== "YEAR" ? undefined : 'is required');

    render() {

        let {previous, handleSubmit} = this.props;

        return(
            <form  onSubmit={handleSubmit(this.saveEducationDetails)}>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Education" />
                    <div className="py-3">
                        <InputField
                            labelName="Degree"
                            fieldName="degree"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
                            validate={[required(), length({ min: 3 })]}
                        />
                        <InputField
                            labelName="Area of Study (optional)"
                            fieldName="areaOfStudy"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
                        />
                        <InputField
                            labelName="School / College"
                            fieldName="school"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
                            validate={[required(), length({ min: 3 })]}
                        />
                        <InputField
                            labelName="CGPA / Percentage"
                            fieldName="percentage"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
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
                    </div>
                </div>
                <ButtonConatiner displayPrevious={true} displayNext={true} previous={previous} />
            </form>
        )
    }
}

Education = reduxForm(
    {
        form: 'educationForm',
        destroyOnUnmount: false,
        keepDirtyOnReinitialize: true
    }
)(Education);

function mapStateToProps(state, ownProps) {
    const educationForm = state.form.educationForm;

    return {
        fields: educationForm && educationForm.fields,
        errors: educationForm && educationForm.syncErrors
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);