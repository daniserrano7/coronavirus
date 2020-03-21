import React from 'react';
//import '../css/MarkerPopup.css';

const MarkerPopup = ({data}) => {
    //console.log(data);
    return (
        <div className="marker-popup">
            <table>
                <thead>
                    <tr>
                        <td colSpan="2" style={{textAlign: 'center'}}>{data.country}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td>{data.confirmed}</td>
                    </tr>
                    <tr>
                        <td>Recuperados</td>
                        <td>{data.recovered}</td>
                    </tr>
                    <tr>
                        <td>Fallecidos</td>
                        <td>{data.deaths}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MarkerPopup;