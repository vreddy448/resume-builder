import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import ButtonConatiner from "../button-container";
import {CardHeader} from "../common/card-header";
import {renderField} from "../common/input-field";

class Additional extends React.Component {

    achievements = ({ fields, inp }) => (
        <div className="form-group px-3">
            {
                fields.map((code, index) => (
                        <div key={index + 1} className="d-flex py-2">
                            <div className="px-2 pt-2">{index + 1}</div>
                            {
                                <div className="flex-grow-1">
                                    <Field
                                        className="form-control"
                                        component={renderField}
                                        name={`${code}.left`}
                                        type="text"
                                    />
                                </div>
                            }
                            {
                                <div className="flex-grow-1">
                                    <Field
                                        className="form-control"
                                        component={renderField}
                                        name={`${code}.right`}
                                        type="text"
                                    />
                                </div>
                            }
                            <div id={code} className="btn material-icons px-2 pt-2 align-middle" onClick={() => fields.remove(index)}>
                                delete
                            </div>
                        </div>
                    )
                )
            }
            <button type="button" className="btn btn-primary transparent-bgr ml-4" onClick={() => {fields.push()}}><span>+ </span>Add</button>
        </div>
    );


    render() {

        let {previous, handleSubmit} = this.props;

        return(
            <form className="form-group" onSubmit={handleSubmit(this.props.next)}>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Achievements" buttonRequired={false} />
                    <FieldArray name="achievementsList" component={this.achievements} inp="achievements"/>
                </div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Personal Details" buttonRequired={false} />
                    <FieldArray name="personalDetails" component={this.achievements} inp="personalDetails"/>
                </div>
                <ButtonConatiner displayPrevious={true} displayNext={true} previous={previous} />
            </form>
        )
    }
}

export default reduxForm(
    {
        form: 'additionalDetails',
        destroyOnUnmount: false,
        keepDirtyOnReinitialize: true
    }
)(Additional);