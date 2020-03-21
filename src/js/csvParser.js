const parse = require('csv-parse/lib/sync');

const csvParser = (csv) => {
    const rows = parse(csv, {
        columns: false,
        skip_empty_lines: true,
        from_line: 1
    });

    const firstRow = rows[0]
    const columnsLength = firstRow.length;
    const csvData = {
        total: 0,
        byProvince: [],
        byCountry: [],
        byTime: {}
    };

    // Setup time series
    for (let i=4; i < columnsLength; i++) {
        csvData.byTime[firstRow[i]] = 0;
    }

    for (let i=1; i < rows.length; i++) {
        let row = rows[i];

        // Parse provinces
        let province = row[0];
        let country = row[1];
        let long = parseFloat(row[3]);
        let lat = parseFloat(row[2]);
        let number = parseFloat(row[columnsLength - 1]);

        let provinceRow = {
            province,
            country,
            lat,
            long,
            number,
        };

        csvData.total += number;
        csvData.byProvince.push(provinceRow);

        // Parse countries
        let countryIndex = csvData.byCountry.findIndex(element => element.country === country)
        if (countryIndex === -1) {
            csvData.byCountry.push({
                country,
                number,
                long,
                lat,
            });
        } else {
            csvData.byCountry[countryIndex].number += number
        }

        // Parse time series
        for (let j=4; j < columnsLength; j++) {
            csvData.byTime[firstRow[j]] += parseInt(row[j]);
            
        }
    }

    return csvData;
}

module.exports = csvParser;