import React from 'react';
import { connect } from 'react-redux';
import * as SkillsAndCertificationsActions from '../../actions/skills-and-certifications-actions';
import '../../css/skills-and-certifications.scss';
import ButtonConatiner from "../button-container";
import CertificationModal from "./certification-modal";
import {CardHeader} from "../common/card-header";
import SkillModal from './skill-modal';

class SkillsAndCertifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skillsModalActive: false,
            certificationModalActive: false,
            skillsError: "",
            certificationsError: ""
        };
        this.toggleSkillsModal = this.toggleSkillsModal.bind(this);
        this.toggleCertificationModal = this.toggleCertificationModal.bind(this);
    }

    toggleSkillsModal() {
        this.setState({skillsModalActive: !this.state.skillsModalActive});
    }

    toggleCertificationModal() {
        this.setState({certificationModalActive: !this.state.certificationModalActive});
    }

    validateContent = () => {
        if(this.props.skills && this.props.skills.length > 0) {
            this.props.next();
        } else {
            this.setState({skillsError: "Add atleast one skill details"})
        }
    };

    render() {

        let {previous, skills, certifications} = this.props;

        return(
            <div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader
                        headerTitle="Technical Skills"
                        buttonRequired={true}
                        onClickAction={this.toggleSkillsModal}
                    />
                    <SkillModal toggle={this.toggleSkillsModal} modalActive={this.state.skillsModalActive} />
                    <div className="p-3">
                        {
                            this.state.skillsError && (skills && skills.length === 0)
                            && <div className="error mb-2">{this.state.skillsError}</div>
                        }
                        {
                            skills && skills.length > 0
                            && skills.map((skill, index) => {
                                return (
                                    <div className="card mb-3" key={index}>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <div className="d-inline">{skill.skillGroup ===  'Other' ? skill.otherSkillGroup : skill.skillGroup}</div>
                                                <div className="float-right d-inline">
                                                    <div className="material-icons m-1 icon"
                                                         onClick={() => {
                                                             this.props.editSkill(skill, index);
                                                             this.setState({skillsModalActive: true})
                                                         }}
                                                    >
                                                        edit
                                                    </div>
                                                    <div className="material-icons m-1 mr-3 icon"
                                                         onClick={() => {
                                                             this.props.deleteSkill(index)
                                                         }}
                                                    >
                                                        delete
                                                    </div>
                                                </div>
                                            </h4>
                                            <h6>{skill.skills}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            (!skills || (skills && skills.length  === 0)) &&
                            <div className="card mb-3 dashed-border opacity-50">
                                <div className="card-body">
                                    <h4 className="card-title">Front End</h4>
                                    <h6>React, Vue, Html5, CSS3</h6>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader
                        headerTitle="Certifications"
                        buttonRequired={true}
                        onClickAction={this.toggleCertificationModal}
                    />
                    <CertificationModal toggle={this.toggleCertificationModal} modalActive={this.state.certificationModalActive}/>
                    <div className="p-3">
                        {
                            this.state.certificationsError && (certifications && certifications.length === 0)
                            && <div className="error mb-2">{this.state.certificationsError}</div>
                        }
                        {
                            certifications && certifications.length > 0
                            && certifications.map((cert, index) => {
                                return (
                                    <div className="card mb-3" key={index}>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <div className="d-inline">{cert.certificationTitle}</div>
                                                <div className="float-right m-1 d-inline">
                                                    <div className="material-icons m-1 icon"
                                                         onClick={() => {
                                                             this.props.editCertification(cert, index);
                                                             this.setState({certificationModalActive: true})
                                                         }}
                                                    >
                                                        edit
                                                    </div>
                                                    <div className="material-icons m-1 mr-3 icon"
                                                         onClick={() => {
                                                             this.props.deleteCertification(index)
                                                         }}
                                                    >
                                                        delete
                                                    </div>
                                                </div>
                                            </h4>
                                            <h6><span>Issued by : </span>{cert.issuedBy}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            (!certifications || (certifications && certifications.length  === 0)) &&
                            <div className="card mb-3 dashed-border opacity-50">
                                <div className="card-body">
                                    <h4 className="card-title">Certified System Architect</h4>
                                    <h6><span>Issued by : </span> Pegasystems</h6>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <ButtonConatiner displayPrevious={true} displayNext={true} previous={previous}  next={this.validateContent}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        skills: state.skills.data,
        certifications: state.certifications.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editSkill: (skill, index) => {
            dispatch({
                type: SkillsAndCertificationsActions.UPDATE_CURRENT_SKILL_DATA,
                payload: {data: skill, index}
            })
        },
        deleteSkill: (index) => {
            dispatch({
                type: SkillsAndCertificationsActions.DELETE_SKILL_DATA,
                payload: index
            })
        },
        editCertification: (cert, index) => {
            dispatch({
                type: SkillsAndCertificationsActions.UPDATE_CURRENT_CERTIFICATION_DATA,
                payload: {data: cert, index}
            })
        },
        deleteCertification: (index) => {
            dispatch({
                type: SkillsAndCertificationsActions.DELETE_CERTIFICATION_DATA,
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsAndCertifications);