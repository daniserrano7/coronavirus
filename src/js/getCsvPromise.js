const getCsvPromise = () => {
    const urls = ['Confirmed', 'Recovered', 'Deaths'];
    const csvPromise = Promise.all(urls.map(url =>
        fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${url}.csv`)
            .then(response => Promise.resolve(response))
            .then(fetchData => fetchData.text())
    ));

    return csvPromise
};

module.exports = getCsvPromise;