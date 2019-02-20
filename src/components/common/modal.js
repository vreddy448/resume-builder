import React from 'react';
import '../../css/common/modal.scss';

export const Modal = props => {

    const {close, header, modalBody} = props;

    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{header}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {modalBody}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={close}>Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
