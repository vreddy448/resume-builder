import React from 'react';
import { connect } from 'react-redux';
import * as ExperienceActions from '../../actions/experience-actions';
import ButtonConatiner from "../button-container";
import {CardHeader} from "../common/card-header";
import EmploymentModal from './employment-modal';

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experienceModalActive: false,
            error: ""
        };
        this.toggleExperienceModal = this.toggleExperienceModal.bind(this);
    }

    toggleExperienceModal() {
        this.setState({experienceModalActive: !this.state.experienceModalActive});
    }

    validateExperienceContent = () => {
        if(this.props.experienceDetails && this.props.experienceDetails.length > 0) {
            this.props.next();
        } else {
            this.setState({error: "Add atleast one employment details"})
        }
    };

    render() {

        let {previous, experienceDetails} = this.props;

        return (
            <div>
                <div className="shadow mb-3 bg-white rounded">
                    <CardHeader headerTitle="Experience" buttonRequired={true} onClickAction={this.toggleExperienceModal} />
                    <EmploymentModal toggle={this.toggleExperienceModal} modalActive={this.state.experienceModalActive} />
                    <div className="p-3">
                        {
                           this.state.error && (experienceDetails && experienceDetails.length === 0)
                                && <div className="error mb-2">{this.state.error}</div>
                        }
                        {
                            experienceDetails && experienceDetails.length > 0
                            && experienceDetails.map((exp, index) => {
                                return (
                                    <div className="card mb-3" key={index}>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <div className="d-inline">{exp.company}</div>
                                                <div className="float-right d-inline">
                                                    <div className="material-icons m-1 icon"
                                                         onClick={() => {
                                                             this.props.editExperience(exp, index);
                                                             this.setState({experienceModalActive: true})
                                                         }}
                                                    >
                                                        edit
                                                    </div>
                                                    <div className="material-icons m-1 mr-3 icon"
                                                         onClick={() => {
                                                             this.props.deleteExperience(index)
                                                         }}
                                                    >
                                                        delete
                                                    </div>
                                                </div>
                                            </h5>
                                            <div className="mb-2">
                                                <p className="d-inline mr-2">{exp.role}</p>
                                                <p className="d-inline">
                                                    ({exp.startMonth}, {exp.startYear} - {exp.endMonth}, {exp.endYear})
                                                </p>
                                            </div>
                                            <div className="company-responsibilities">
                                                {
                                                    exp && exp.resList && exp.resList.map((res, index) => {
                                                        return (
                                                            <li className="company-responsibility" key={index}>{res}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            (!experienceDetails || (experienceDetails && experienceDetails.length  === 0)) &&
                            <div className="card mb-3 dashed-border opacity-50">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Company Title
                                    </h5>
                                    <div className="mb-2">
                                        <p className="d-inline mr-2">Role</p>
                                        <p className="d-inline">
                                            (month, year - month, year)
                                        </p>
                                    </div>
                                    <div>
                                        <li>
                                            Responsibilities
                                        </li>
                                        <li>
                                            Responsibilities
                                        </li>
                                        <li>
                                            Responsibilities
                                        </li>
                                        <li>
                                            Responsibilities
                                        </li>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <ButtonConatiner displayPrevious={true} displayNext={true} previous={previous}  next={this.validateExperienceContent}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    return {
        experienceDetails: state.experienceDetails.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editExperience: (exp, index) => {
            dispatch({
                type: ExperienceActions.UPDATE_CURRENT_EXPERIENCE_DATA,
                payload: {data: exp, index}
            })
        },
        deleteExperience: (index) => {
            dispatch({
                type: ExperienceActions.DELETE_EXPERIENCE_DATA,
                payload: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);