import React from 'react';

var language = window.navigator.userLanguage || window.navigator.language;

const Lang = () => {
    return (
        <>
            <div>{language}</div>
        </>
    );
};

export default Lang;