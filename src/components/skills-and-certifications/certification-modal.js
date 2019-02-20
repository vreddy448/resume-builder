import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as SkillsAndCertificationsActions from '../../actions/skills-and-certifications-actions';
import {Modal} from "../common/modal";
import {InputField} from "../common/input-field";
import { required, length } from 'redux-form-validators';

class CertificationModal extends React.Component {

    constructor(props) {
        super(props);
        this.saveCertificationModalInformation = this.saveCertificationModalInformation.bind(this);
        this.deleteCurrentItem = this.deleteCurrentItem.bind(this);
    }

    saveCertificationModalInformation(values) {
        if (this.props.update) {
            this.props.dispatch({
                type: SkillsAndCertificationsActions.UPDATE_CERTIFICATION_DATA,
                payload: {data: values, index: this.props.index}
            });
        } else {
            this.props.dispatch({
                type: SkillsAndCertificationsActions.ADD_CERTIFICATION_DATA,
                payload: values
            });
        }
        this.props.reset();
        this.props.toggle();
    }

    deleteCurrentItem() {
        this.props.dispatch({
            type: SkillsAndCertificationsActions.DELETE_CURRENT_CERTIFICATION_DATA,
        });
        this.props.reset();
        this.props.toggle();
    }


    getCertificationsContent = () => {
        return (
            <div>
                <InputField
                    labelName="Certification Title"
                    fieldName="certificationTitle"
                    fieldClasses="form-control"
                    inputType="text"
                    sectionClasses="form-group col-sm"
                    validate={[required(), length({ min: 2 })]}
                />
                <InputField
                    labelName="Issued By"
                    fieldName="issuedBy"
                    fieldClasses="form-control"
                    inputType="text"
                    sectionClasses="form-group col-sm"
                    validate={[required(), length({ min: 2 })]}
                />
            </div>
        )
    };

    render() {

        let {handleSubmit, modalActive} = this.props;

        return (
            modalActive &&
            <form onSubmit={handleSubmit(this.saveCertificationModalInformation)}>
                <Modal
                    close={this.deleteCurrentItem}
                    header="Add Certification"
                    modalBody={this.getCertificationsContent()}
                    modalButtonTitle="Save"
                />
            </form>
        )
    }
}

CertificationModal = reduxForm(
    {
        form: 'addCertificationForm',
        enableReinitialize: true
    }
)(CertificationModal);

function mapStateToProps(state, ownProps) {
    const initialValues = state.certifications.currentItem.data;
    const index = state.certifications.currentItem.index;
    const update = state.certifications.currentItem.update;
    return {
        initialValues,
        index,
        update
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationModal);