import React from 'react';
import '../css/footer.scss';

export default class Footer extends React.Component {

    render() {
        return(
            <div className="footer-container">
                <div className="footer">
                    © 2018 - 2019 LearningHeap.com.

                    Terms of Service
                    Privacy Policy
                </div>
            </div>
        )
    }
}