export interface SwitchStatusProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
    style?: React.CSSProperties;
}
