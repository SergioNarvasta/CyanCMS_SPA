export interface DropdownToggleProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    rotateIcon: boolean;
    setRotateIcon: React.Dispatch<React.SetStateAction<boolean>>;
    isDark?: boolean;
}
