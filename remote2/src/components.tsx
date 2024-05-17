import { Button, ToggleButton } from 'remote/components';

type ButtonFederatedProps = {
    label: string;
};

export const ButtonFederated = ({ label }: ButtonFederatedProps) => {
    return (
        <Button label={label} />
    );
};

type ToggleButtonFederatedProps = {
    label: string;
    content: string;
};

export const ToggleButtonFederated = ({ label, content }: ToggleButtonFederatedProps) => {
    return (
        <ToggleButton label={label} content={content} />
    );
};
