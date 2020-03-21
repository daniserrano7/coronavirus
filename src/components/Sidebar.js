import React from 'react';
import '../css/Sidebar.css';
import SidebarIndicator from './SidebarIndicator';

const Sidebar = ({data}) => {
    const indicators = ['confirmed', 'recovered', 'deaths'];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                {indicators.map(indicator => {
                    return <SidebarIndicator 
                        key={indicator} 
                        indicator={indicator}
                        number={data[indicator].total}    
                    />
                })}
            </div>
            <div className="sidebar-list">
                <div className="chart-container"></div>
            </div>
        </div>
    )
}

export default Sidebar;