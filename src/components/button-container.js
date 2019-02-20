import React from 'react';
import '../css/button-container.scss';

export default class ButtonConatiner extends React.Component {

    render() {

        let {displayPrevious, displayNext, previous, next} = this.props;
        let nextClasses, previousClasses, buttonContainerClasses;

        nextClasses = displayPrevious  ? "btn btn-primary pl-3 float-right" : "btn btn-primary pl-3";
        previousClasses = "btn btn-secondary pr-3";
        buttonContainerClasses = (displayPrevious && displayNext) ? "button-container" : "button-container center";

        return (
            <div className={buttonContainerClasses}>
                {
                    displayPrevious &&
                        <button className={previousClasses} onClick={previous}>
                            <span className="material-icons align-middle">keyboard_arrow_left</span>
                            <span>Previous</span>
                        </button>
                }
                {
                    displayNext &&
                        <button className={nextClasses} onClick={next} type="submit">
                            <span>Next</span>
                            <i className="material-icons align-middle">keyboard_arrow_right</i>
                        </button>
                }
            </div>
        )
    }
}