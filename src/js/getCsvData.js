import csvParser from './csvParser';

const getCsvData = (values) => {
    const urls = ['Confirmed', 'Recovered', 'Deaths'];
    const data = {};

    urls.forEach((url, i) => data[url.toLowerCase()] = csvParser(values[i]));

    const dates = Object.keys(data.confirmed.byTime)
    data.lastUpdate = dates[dates.length - 1];
    
    return data;
}

export default getCsvData