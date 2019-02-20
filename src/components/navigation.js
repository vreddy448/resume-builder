import React from 'react';
import '../css/navigation.scss';
import PrimaryDetails from "./primary-details";
import Education from "./education/education";
import Experience from "./experience/experience";
import SkillsAndCertifications from "./skills-and-certifications/skills-and-certifications";
import StandardTemplate from './templates/standard-template';
import Additional from './additional/additional';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
        this.getSection = this.getSection.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    getSection() {
        let section;
        switch(this.state.step) {
            case 0:
                section = <PrimaryDetails next={this.nextStep} previous={this.previousStep}/>;
                break;
            case 1:
                section = <Education next={this.nextStep} previous={this.previousStep}/>;
                break;
            case 2:
                section = <Experience next={this.nextStep} previous={this.previousStep}/>;
                break;
            case 3:
                section = <SkillsAndCertifications next={this.nextStep} previous={this.previousStep}/>;
                break;
            case 4:
                section = <Additional next={this.nextStep} previous={this.previousStep}/>;
                break;
            case 5:
                section = <StandardTemplate next={this.nextStep} previous={this.previousStep}/>;
                break;
            default:
                section = <PrimaryDetails next={this.nextStep} previous={this.previousStep}/>
        }
        return section;
    }

    nextStep() {
        this.setState({step: this.state.step + 1})
    }

    previousStep() {
        if (this.state.step >= 1) {
            this.setState({step: this.state.step - 1})
        }
    }

    render() {
        return(
            <div className="navigation">
                {this.getSection()}
            </div>
        )
    }
}