import React from 'react';
import '../css/SidebarIndicator.css';

const SidebarIndicator = ({indicator, number}) => {
    const indicators = {
        confirmed: {
            title: 'Confirmados',
            color: 'red'
        },
        recovered: {
            title: 'Recuperados',
            color: 'green'
        },
        deaths: {
            title: 'Fallecidos',
            color: 'orange'
        }
    }

    const style = {
        backgroundColor: indicators[indicator]['color']
    }

    const title = indicators[indicator]['title'];

    const formatNumber = (number) => {
        console.log('NUMBER:', number)
        const separator = ',';
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }

    return (
        <div className="sidebar-indicator" style={style}>
            <div className="indicator-left">
                <span className="indicator-icon">O</span>
                <span className="indicator-title">{title}</span>
            </div>
            <div className="indicator-right">
                <span className="indicator-number">{formatNumber(number)}</span>
            </div>
        </div>
    )
}

export default SidebarIndicator;