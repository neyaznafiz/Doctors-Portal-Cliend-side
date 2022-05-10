import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;