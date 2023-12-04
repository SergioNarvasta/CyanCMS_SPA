import type { TABS_THEMES } from './TabTheme';

export interface TabDetails {
    tabTitle: string;
    tabContent: React.ReactNode;
    tabEventKey: number;
    isDisabled?: boolean;
    show?: boolean;
}

export interface ITabManager {
    tabs: TabDetails[];
    tabComponentStyle?: React.CSSProperties;
    setMetricsTabKey?: React.Dispatch<React.SetStateAction<string>>;
    activeKey?: string;
    theme?: keyof typeof TABS_THEMES;
}
