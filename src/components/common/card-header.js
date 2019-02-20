import React from 'react';

export const CardHeader = props => {

    const {headerTitle, buttonRequired, onClickAction} = props;
    let headerClasses;

    headerClasses = buttonRequired ? "section-title d-inline w-80" : "section-title";

    return (
        <div className="section-header p-3 w-100">
            <div className={headerClasses}>{headerTitle}</div>
            {
                buttonRequired &&
                <div className="d-inline icon-middle w-10">
                    <div className="fas fa-plus icon bg-white float-right p-2" onClick={onClickAction}/>
                </div>
            }
        </div>
    )
};