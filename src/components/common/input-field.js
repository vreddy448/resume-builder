import React from 'react';
import { Field } from 'redux-form';

export const InputField = props => {

    const {labelName, fieldName, inputType, placeholder, fieldClasses, labelClasses, sectionClasses, validate} = props;

    return (
        <div className={sectionClasses}>
            {labelName && <label htmlFor="firstName" className={labelClasses}>{labelName}</label>}
            <Field
                className={fieldClasses}
                component={renderField}
                name={fieldName}
                type={inputType}
                validate={validate}
                placeholder={placeholder}
            />
        </div>
    )
};

export const renderField = ({
                         input,
                         label,
                         type,
                         className,
                         placeholder,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <input {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);
