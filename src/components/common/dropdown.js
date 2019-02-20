import React from 'react';
import { Field } from 'redux-form';
import '../../css/common/dropdown.scss';

class DropDown extends React.Component {

    getDropDownOptions(option) {
        return (
            <option key={option} value={option}>{option}</option>
        );
    }

    renderDropDownField = ({
                               input,
                               className,
                               values,
                               meta: { touched, error, warning }
                           }) => (
        <div>
            <select {...input} className={className}>
                {values.map(this.getDropDownOptions)}
            </select>
        </div>
    );

    render() {

        let {sectionClasses, fieldClasses, name, values, validate} = this.props;

        sectionClasses = "dropdown-container " + sectionClasses;
        fieldClasses = "white-background " + fieldClasses;
        return (
            <div className={sectionClasses}>
                <div className="select">
                    <Field
                        className={fieldClasses}
                        component={this.renderDropDownField}
                        name={name}
                        id="search_categories"
                        values={values}
                        validate={validate}
                    />
                </div>
            </div>
        )
    }
}

export default DropDown;