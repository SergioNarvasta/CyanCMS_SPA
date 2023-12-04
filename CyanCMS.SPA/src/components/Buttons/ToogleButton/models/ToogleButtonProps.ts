export interface ToggleButtonProps {
    label: string;
    value: string;
    isChecked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
