import React from 'react';

const TextHook = () => {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle text</button>
            {show && <p>Text</p>}
        </div>
    );
};

export default TextHook;
