import { Tab, Tabs } from 'react-bootstrap';
import { TABS_THEMES, type ITabManager } from './models';

import './TabManager.scss';

export const TabManager = ({
    setMetricsTabKey,
    tabs,
    tabComponentStyle,
    activeKey,
    theme = 'default',
}: ITabManager) => {
    const onChangeKey = (key: string) => {
        setMetricsTabKey?.(key);
    };
    return (
        <div className={TABS_THEMES[theme]}>
            <Tabs
                activeKey={activeKey}
                defaultActiveKey={1}
                style={tabComponentStyle}
                onSelect={(key: any) => onChangeKey(key)}
            >
                {tabs
                    .filter((tab) => (tab.show === undefined ? true : tab.show))
                    .map((tab) => (
                        <Tab
                            eventKey={tab.tabEventKey}
                            title={tab.tabTitle}
                            key={tab.tabEventKey}
                            className="p-3"
                            mountOnEnter={true}
                            disabled={Boolean(tab.isDisabled)}
                        >
                            <div className="metrics-content-container">
                                {tab.tabContent}
                            </div>
                        </Tab>
                    ))}
            </Tabs>
        </div>
    );
};
