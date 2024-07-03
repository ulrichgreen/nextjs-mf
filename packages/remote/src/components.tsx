import React from 'react';

type ButtonProps = {
    label: string;
};

export const Button = ({ label }: ButtonProps) => {
    return (
        <button>{label}</button>
    );
};

type ToggleButtonProps = {
    label: string;
    content: string;
};

export const ToggleButton = ({ label, content }: ToggleButtonProps) => {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>{label}</button>
            {show && <p>{content}</p>}
        </div>
    );
};
