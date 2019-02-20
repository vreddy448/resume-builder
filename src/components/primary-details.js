import React from 'react';
import { reduxForm } from 'redux-form';
import ButtonConatiner from "./button-container";
import {CardHeader} from "./common/card-header";
import {InputField} from "./common/input-field";
import { required, format, email, numericality, length } from 'redux-form-validators';

class PrimaryDetails extends React.Component {

    render() {

        let {handleSubmit} = this.props;

        return(
            <form className="form-group" onSubmit={handleSubmit(this.props.next)}>
                <div className="shadow p-3 mb-3 bg-white rounded">
                    <div className="padding-2 row">
                        <InputField
                            labelName="First Name"
                            fieldName="firstName"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
                            validate={[required(), format({ with: /^[a-zA-Z ]*$/i, message: "only allows letters" })]}
                        />
                        <InputField
                            labelName="Last Name"
                            fieldName="lastName"
                            fieldClasses="form-control"
                            inputType="text"
                            sectionClasses="form-group col-sm"
                            validate={[required(), format({ with: /^[a-zA-Z ]*$/i, message: "only allows letters" })]}
                        />
                    </div>
                </div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Contact Details" buttonRequired={false} />
                    <div className="row p-3">
                        <InputField
                            labelName="Email Id"
                            fieldName="emailId"
                            fieldClasses="form-control"
                            inputType="email"
                            sectionClasses="form-group col-sm"
                            validate={[required(), email()]}
                        />
                        <InputField
                            labelName="Phone Number"
                            fieldName="phone"
                            fieldClasses="form-control"
                            inputType="number"
                            sectionClasses="form-group col-sm"
                            validate={[required(), numericality({ int: true, '>': 0 }), length({ min: 10, max: 10 })]}
                        />
                    </div>
                </div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Address Details" buttonRequired={false} />
                    <div className="p-3">
                        <div className="row">
                            <InputField
                                labelName="Address Line 1"
                                fieldName="addressLine1"
                                fieldClasses="form-control"
                                inputType="text"
                                sectionClasses="form-group col-sm"
                                validate={[required(), length({min: 5})]}
                            />
                            <InputField
                                labelName="Address Line 2"
                                fieldName="addressLine2"
                                fieldClasses="form-control"
                                inputType="text"
                                sectionClasses="form-group col-sm"
                            />
                        </div>
                        <div className="form-row">
                            <InputField
                                labelName="City"
                                fieldName="city"
                                fieldClasses="form-control"
                                inputType="text"
                                sectionClasses="form-group col-sm"
                                validate={[required(), format({ with: /^[a-zA-Z ]*$/i, message: "only allows letters" })]}
                            />
                            <InputField
                                labelName="State"
                                fieldName="state"
                                fieldClasses="form-control"
                                inputType="text"
                                sectionClasses="form-group col-sm"
                                validate={[required(), format({ with: /^[a-zA-Z ]*$/i, message: "only allows letters" })]}
                            />
                            <InputField
                                labelName="Zip"
                                fieldName="zipCode"
                                fieldClasses="form-control"
                                inputType="number"
                                sectionClasses="form-group col-sm"
                                validate={[required(), numericality({ int: true, '>': 0 }), length({ min: 5, max: 6 })]}
                            />
                        </div>
                    </div>
                </div>
                <ButtonConatiner displayNext={true} />
            </form>
        )
    }
}

export default reduxForm(
    {
        form: 'primaryDetails',
        destroyOnUnmount: false,
        keepDirtyOnReinitialize: true
    }
)(PrimaryDetails);