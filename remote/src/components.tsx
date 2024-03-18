import React from 'react';

// This works with SSR
export const Text = 'Hello from the remote!';

// This works with SSR
export const TextJsx = () => {
    return (
        <div>
            <button>Toggle text</button>
            <p>Text</p>
        </div>
    );
};

// This does NOT work with SSR
// Causes "Cannot read properties of null (reading 'useState')" in host app.
export const TextHook = () => {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle text</button>
            {show && <p>Text</p>}
        </div>
    );
};

export default TextJsx;
