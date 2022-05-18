var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            duration: 500,
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
        }
    };

    //insert data
    $scope.data0 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1901.0, 'y': 48.5, 'series': 0 }, { 'x': 1911.0, 'y': 46.0, 'series': 0 }, { 'x': 1921.0, 'y': 45.1, 'series': 0 }, { 'x': 1931.0, 'y': 44.9, 'series': 0 }, { 'x': 1948.0, 'y': 41.6, 'series': 0 }, { 'x': 1967.0, 'y': 39.1, 'series': 0 }, { 'x': 1968.0, 'y': 40.8, 'series': 0 }, { 'x': 1969.0, 'y': 39.7, 'series': 0 }, { 'x': 1970.0, 'y': 38.3, 'series': 0 }, { 'x': 1971.0, 'y': 39.7, 'series': 0 }, { 'x': 1972.0, 'y': 38.5, 'series': 0 }, { 'x': 1973.0, 'y': 40.0, 'series': 0 }, { 'x': 1974.0, 'y': 39.1, 'series': 0 }, { 'x': 1975.0, 'y': 35.2, 'series': 0 }, { 'x': 1977.0, 'y': 34.9, 'series': 0 }, { 'x': 1978.0, 'y': 33.3, 'series': 0 }, { 'x': 1979.0, 'y': 34.6, 'series': 0 }, { 'x': 1980.0, 'y': 32.5, 'series': 0 }, { 'x': 1981.0, 'y': 31.9, 'series': 0 }, { 'x': 1982.0, 'y': 29.5, 'series': 0 }, { 'x': 1983.0, 'y': 30.1, 'series': 0 }, { 'x': 1984.0, 'y': 31.9, 'series': 0 }, { 'x': 1986.0, 'y': 31.0, 'series': 0 }, { 'x': 1987.0, 'y': 32.2, 'series': 0 }, { 'x': 1989.0, 'y': 29.6, 'series': 0 }, { 'x': 1991.0, 'y': 29.3, 'series': 0 }, { 'x': 1993.0, 'y': 32.7, 'series': 0 }, { 'x': 1995.0, 'y': 33.2, 'series': 0 }, { 'x': 1998.0, 'y': 33.6, 'series': 0 }, { 'x': 2000.0, 'y': 33.3, 'series': 0 }, { 'x': 2002.0, 'y': 33.3, 'series': 0 }, { 'x': 2004.0, 'y': 34.9, 'series': 0 }, { 'x': 2006.0, 'y': 33.8, 'series': 0 }, { 'x': 2008.0, 'y': 33.3, 'series': 0 }, { 'x': 2010.0, 'y': 34.7, 'series': 0 }, { 'x': 2012.0, 'y': 35.0, 'series': 0 }], yAxis: 1 }, { key: 'Vecchi (forthcoming) - Income per capita', type: 'scatter', values: [{ 'x': 1901.0, 'y': 48.5, 'series': 1 }, { 'x': 1911.0, 'y': 46.0, 'series': 1 }, { 'x': 1921.0, 'y': 45.1, 'series': 1 }, { 'x': 1931.0, 'y': 44.9, 'series': 1 }, { 'x': 1948.0, 'y': 41.6, 'series': 1 }, { 'x': 1967.0, 'y': 39.1, 'series': 1 }, { 'x': 1968.0, 'y': 40.8, 'series': 1 }, { 'x': 1969.0, 'y': 39.7, 'series': 1 }, { 'x': 1970.0, 'y': 38.3, 'series': 1 }, { 'x': 1971.0, 'y': 39.7, 'series': 1 }, { 'x': 1972.0, 'y': 38.5, 'series': 1 }, { 'x': 1973.0, 'y': 40.0, 'series': 1 }, { 'x': 1974.0, 'y': 39.1, 'series': 1 }, { 'x': 1975.0, 'y': 35.2, 'series': 1 }, { 'x': 1977.0, 'y': 34.9, 'series': 1 }, { 'x': 1978.0, 'y': 33.3, 'series': 1 }, { 'x': 1979.0, 'y': 34.6, 'series': 1 }, { 'x': 1980.0, 'y': 32.5, 'series': 1 }, { 'x': 1981.0, 'y': 31.9, 'series': 1 }, { 'x': 1982.0, 'y': 29.5, 'series': 1 }, { 'x': 1983.0, 'y': 30.1, 'series': 1 }, { 'x': 1984.0, 'y': 31.9, 'series': 1 }, { 'x': 1986.0, 'y': 31.0, 'series': 1 }, { 'x': 1987.0, 'y': 32.2, 'series': 1 }, { 'x': 1989.0, 'y': 29.6, 'series': 1 }, { 'x': 1991.0, 'y': 29.3, 'series': 1 }, { 'x': 1993.0, 'y': 32.7, 'series': 1 }, { 'x': 1995.0, 'y': 33.2, 'series': 1 }, { 'x': 1998.0, 'y': 33.6, 'series': 1 }, { 'x': 2000.0, 'y': 33.3, 'series': 1 }, { 'x': 2002.0, 'y': 33.3, 'series': 1 }, { 'x': 2004.0, 'y': 34.9, 'series': 1 }, { 'x': 2006.0, 'y': 33.8, 'series': 1 }, { 'x': 2008.0, 'y': 33.3, 'series': 1 }, { 'x': 2010.0, 'y': 34.7, 'series': 1 }, { 'x': 2012.0, 'y': 35.0, 'series': 1 }], yAxis: 1 }];
    $scope.data1 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1974.0, 'y': 5.49, 'series': 0 }, { 'x': 1975.0, 'y': 5.33, 'series': 0 }, { 'x': 1976.0, 'y': 5.22, 'series': 0 }, { 'x': 1977.0, 'y': 5.0, 'series': 0 }, { 'x': 1978.0, 'y': 4.94, 'series': 0 }, { 'x': 1979.0, 'y': 5.02, 'series': 0 }, { 'x': 1980.0, 'y': 5.15, 'series': 0 }, { 'x': 1981.0, 'y': 4.69, 'series': 0 }, { 'x': 1982.0, 'y': 4.56, 'series': 0 }, { 'x': 1983.0, 'y': 4.52, 'series': 0 }, { 'x': 1984.0, 'y': 4.76, 'series': 0 }, { 'x': 1985.0, 'y': 5.06, 'series': 0 }, { 'x': 1986.0, 'y': 5.76, 'series': 0 }, { 'x': 1987.0, 'y': 5.88, 'series': 0 }, { 'x': 1988.0, 'y': 6.17, 'series': 0 }, { 'x': 1989.0, 'y': 6.3, 'series': 0 }, { 'x': 1990.0, 'y': 6.24, 'series': 0 }, { 'x': 1991.0, 'y': 6.29, 'series': 0 }, { 'x': 1992.0, 'y': 6.33, 'series': 0 }, { 'x': 1993.0, 'y': 6.58, 'series': 0 }, { 'x': 1994.0, 'y': 6.77, 'series': 0 }, { 'x': 1995.0, 'y': 7.29, 'series': 0 }, { 'x': 1996.0, 'y': 7.47, 'series': 0 }, { 'x': 1997.0, 'y': 7.59, 'series': 0 }, { 'x': 1998.0, 'y': 7.91, 'series': 0 }, { 'x': 1999.0, 'y': 7.74, 'series': 0 }, { 'x': 2000.0, 'y': 8.2, 'series': 0 }, { 'x': 2001.0, 'y': 8.69, 'series': 0 }, { 'x': 2002.0, 'y': 8.33, 'series': 0 }, { 'x': 2003.0, 'y': 8.32, 'series': 0 }, { 'x': 2004.0, 'y': 8.19, 'series': 0 }, { 'x': 2005.0, 'y': 8.15, 'series': 0 }, { 'x': 2006.0, 'y': 8.27, 'series': 0 }, { 'x': 2007.0, 'y': 8.23, 'series': 0 }, { 'x': 2008.0, 'y': 7.88, 'series': 0 }, { 'x': 2009.0, 'y': 7.6, 'series': 0 }, { 'x': 2010.0, 'y': 8.03, 'series': 0 }, { 'x': 2011.0, 'y': 8.21, 'series': 0 }, { 'x': 2012.0, 'y': 8.09, 'series': 0 }, { 'x': 2013.0, 'y': 7.91, 'series': 0 }, { 'x': 2014.0, 'y': 7.99, 'series': 0 }, { 'x': 2015.0, 'y': 7.8, 'series': 0 }, { 'x': 2016.0, 'y': 8.88, 'series': 0 }, { 'x': 2017.0, 'y': 9.21, 'series': 0 }, { 'x': 2018.0, 'y': 9.13, 'series': 0 }, { 'x': 2019.0, 'y': 8.91, 'series': 0 }], yAxis: 1 }, { key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{ 'x': 1974.0, 'y': 5.49, 'series': 1 }, { 'x': 1975.0, 'y': 5.33, 'series': 1 }, { 'x': 1976.0, 'y': 5.22, 'series': 1 }, { 'x': 1977.0, 'y': 5.0, 'series': 1 }, { 'x': 1978.0, 'y': 4.94, 'series': 1 }, { 'x': 1979.0, 'y': 5.02, 'series': 1 }, { 'x': 1980.0, 'y': 5.15, 'series': 1 }, { 'x': 1981.0, 'y': 4.69, 'series': 1 }, { 'x': 1982.0, 'y': 4.56, 'series': 1 }, { 'x': 1983.0, 'y': 4.52, 'series': 1 }, { 'x': 1984.0, 'y': 4.76, 'series': 1 }, { 'x': 1985.0, 'y': 5.06, 'series': 1 }, { 'x': 1986.0, 'y': 5.76, 'series': 1 }, { 'x': 1987.0, 'y': 5.88, 'series': 1 }, { 'x': 1988.0, 'y': 6.17, 'series': 1 }, { 'x': 1989.0, 'y': 6.3, 'series': 1 }, { 'x': 1990.0, 'y': 6.24, 'series': 1 }, { 'x': 1991.0, 'y': 6.29, 'series': 1 }, { 'x': 1992.0, 'y': 6.33, 'series': 1 }, { 'x': 1993.0, 'y': 6.58, 'series': 1 }, { 'x': 1994.0, 'y': 6.77, 'series': 1 }, { 'x': 1995.0, 'y': 7.29, 'series': 1 }, { 'x': 1996.0, 'y': 7.47, 'series': 1 }, { 'x': 1997.0, 'y': 7.59, 'series': 1 }, { 'x': 1998.0, 'y': 7.91, 'series': 1 }, { 'x': 1999.0, 'y': 7.74, 'series': 1 }, { 'x': 2000.0, 'y': 8.2, 'series': 1 }, { 'x': 2001.0, 'y': 8.69, 'series': 1 }, { 'x': 2002.0, 'y': 8.33, 'series': 1 }, { 'x': 2003.0, 'y': 8.32, 'series': 1 }, { 'x': 2004.0, 'y': 8.19, 'series': 1 }, { 'x': 2005.0, 'y': 8.15, 'series': 1 }, { 'x': 2006.0, 'y': 8.27, 'series': 1 }, { 'x': 2007.0, 'y': 8.23, 'series': 1 }, { 'x': 2008.0, 'y': 7.88, 'series': 1 }, { 'x': 2009.0, 'y': 7.6, 'series': 1 }, { 'x': 2010.0, 'y': 8.03, 'series': 1 }, { 'x': 2011.0, 'y': 8.21, 'series': 1 }, { 'x': 2012.0, 'y': 8.09, 'series': 1 }, { 'x': 2013.0, 'y': 7.91, 'series': 1 }, { 'x': 2014.0, 'y': 7.99, 'series': 1 }, { 'x': 2015.0, 'y': 7.8, 'series': 1 }, { 'x': 2016.0, 'y': 8.88, 'series': 1 }, { 'x': 2017.0, 'y': 9.21, 'series': 1 }, { 'x': 2018.0, 'y': 9.13, 'series': 1 }, { 'x': 2019.0, 'y': 8.91, 'series': 1 }], yAxis: 1 }];
    $scope.data2 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1977.0, 'y': 17.3, 'series': 0 }, { 'x': 1978.0, 'y': 17.7, 'series': 0 }, { 'x': 1979.0, 'y': 18.0, 'series': 0 }, { 'x': 1980.0, 'y': 16.4, 'series': 0 }, { 'x': 1981.0, 'y': 15.4, 'series': 0 }, { 'x': 1982.0, 'y': 14.7, 'series': 0 }, { 'x': 1983.0, 'y': 15.7, 'series': 0 }, { 'x': 1984.0, 'y': 15.9, 'series': 0 }, { 'x': 1986.0, 'y': 16.5, 'series': 0 }, { 'x': 1987.0, 'y': 18.5, 'series': 0 }, { 'x': 1989.0, 'y': 15.2, 'series': 0 }, { 'x': 1991.0, 'y': 16.4, 'series': 0 }, { 'x': 1993.0, 'y': 20.1, 'series': 0 }, { 'x': 1995.0, 'y': 20.4, 'series': 0 }, { 'x': 1998.0, 'y': 20.5, 'series': 0 }, { 'x': 2000.0, 'y': 19.6, 'series': 0 }, { 'x': 2002.0, 'y': 19.7, 'series': 0 }, { 'x': 2004.0, 'y': 20.5, 'series': 0 }, { 'x': 2006.0, 'y': 19.6, 'series': 0 }, { 'x': 2008.0, 'y': 20.7, 'series': 0 }, { 'x': 2010.0, 'y': 21.5, 'series': 0 }, { 'x': 2012.0, 'y': 20.7, 'series': 0 }, { 'x': 2014.0, 'y': 22.2, 'series': 0 }, { 'x': 2016.0, 'y': 22.8, 'series': 0 }], yAxis: 1 }, { key: 'Bank of Italy - Equivalised disposable household income', type: 'scatter', values: [{ 'x': 1977.0, 'y': 17.3, 'series': 1 }, { 'x': 1978.0, 'y': 17.7, 'series': 1 }, { 'x': 1979.0, 'y': 18.0, 'series': 1 }, { 'x': 1980.0, 'y': 16.4, 'series': 1 }, { 'x': 1981.0, 'y': 15.4, 'series': 1 }, { 'x': 1982.0, 'y': 14.7, 'series': 1 }, { 'x': 1983.0, 'y': 15.7, 'series': 1 }, { 'x': 1984.0, 'y': 15.9, 'series': 1 }, { 'x': 1986.0, 'y': 16.5, 'series': 1 }, { 'x': 1987.0, 'y': 18.5, 'series': 1 }, { 'x': 1989.0, 'y': 15.2, 'series': 1 }, { 'x': 1991.0, 'y': 16.4, 'series': 1 }, { 'x': 1993.0, 'y': 20.1, 'series': 1 }, { 'x': 1995.0, 'y': 20.4, 'series': 1 }, { 'x': 1998.0, 'y': 20.5, 'series': 1 }, { 'x': 2000.0, 'y': 19.6, 'series': 1 }, { 'x': 2002.0, 'y': 19.7, 'series': 1 }, { 'x': 2004.0, 'y': 20.5, 'series': 1 }, { 'x': 2006.0, 'y': 19.6, 'series': 1 }, { 'x': 2008.0, 'y': 20.7, 'series': 1 }, { 'x': 2010.0, 'y': 21.5, 'series': 1 }, { 'x': 2012.0, 'y': 20.7, 'series': 1 }, { 'x': 2014.0, 'y': 22.2, 'series': 1 }, { 'x': 2016.0, 'y': 22.8, 'series': 1 }], yAxis: 1 }];
    $scope.data3 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1973.0, 'y': 176.5, 'series': 0 }, { 'x': 1975.0, 'y': 168.0, 'series': 0 }, { 'x': 1977.0, 'y': 153.8, 'series': 0 }, { 'x': 1978.0, 'y': 155.6, 'series': 0 }, { 'x': 1979.0, 'y': 150.0, 'series': 0 }, { 'x': 1980.0, 'y': 146.2, 'series': 0 }, { 'x': 1981.0, 'y': 142.5, 'series': 0 }, { 'x': 1982.0, 'y': 154.4, 'series': 0 }, { 'x': 1983.0, 'y': 149.3, 'series': 0 }, { 'x': 1984.0, 'y': 150.0, 'series': 0 }, { 'x': 1986.0, 'y': 142.9, 'series': 0 }, { 'x': 1987.0, 'y': 156.0, 'series': 0 }, { 'x': 1989.0, 'y': 144.4, 'series': 0 }, { 'x': 1991.0, 'y': 152.6, 'series': 0 }, { 'x': 1993.0, 'y': 157.1, 'series': 0 }, { 'x': 1995.0, 'y': 163.6, 'series': 0 }, { 'x': 1998.0, 'y': 154.2, 'series': 0 }, { 'x': 2000.0, 'y': 160.0, 'series': 0 }, { 'x': 2002.0, 'y': 164.2, 'series': 0 }, { 'x': 2004.0, 'y': 165.5, 'series': 0 }, { 'x': 2006.0, 'y': 166.7, 'series': 0 }, { 'x': 2008.0, 'y': 159.2, 'series': 0 }, { 'x': 2010.0, 'y': 155.1, 'series': 0 }, { 'x': 2012.0, 'y': 159.0, 'series': 0 }], yAxis: 1 }, { key: "Atkinson (2008) 'Bank of Italy' - Gross individual earnings", type: 'scatter', values: [{ 'x': 1973.0, 'y': 176.5, 'series': 1 }, { 'x': 1975.0, 'y': 168.0, 'series': 1 }, { 'x': 1977.0, 'y': 153.8, 'series': 1 }, { 'x': 1978.0, 'y': 155.6, 'series': 1 }, { 'x': 1979.0, 'y': 150.0, 'series': 1 }, { 'x': 1980.0, 'y': 146.2, 'series': 1 }, { 'x': 1981.0, 'y': 142.5, 'series': 1 }, { 'x': 1982.0, 'y': 154.4, 'series': 1 }, { 'x': 1983.0, 'y': 149.3, 'series': 1 }, { 'x': 1984.0, 'y': 150.0, 'series': 1 }, { 'x': 1986.0, 'y': 142.9, 'series': 1 }, { 'x': 1987.0, 'y': 156.0, 'series': 1 }, { 'x': 1989.0, 'y': 144.4, 'series': 1 }, { 'x': 1991.0, 'y': 152.6, 'series': 1 }, { 'x': 1993.0, 'y': 157.1, 'series': 1 }, { 'x': 1995.0, 'y': 163.6, 'series': 1 }, { 'x': 1998.0, 'y': 154.2, 'series': 1 }, { 'x': 2000.0, 'y': 160.0, 'series': 1 }, { 'x': 2002.0, 'y': 164.2, 'series': 1 }, { 'x': 2004.0, 'y': 165.5, 'series': 1 }, { 'x': 2006.0, 'y': 166.7, 'series': 1 }, { 'x': 2008.0, 'y': 159.2, 'series': 1 }, { 'x': 2010.0, 'y': 155.1, 'series': 1 }, { 'x': 2012.0, 'y': 159.0, 'series': 1 }], yAxis: 1 }];
    $scope.data4 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1989.0, 'y': 10.98, 'series': 0 }, { 'x': 1991.0, 'y': 9.66, 'series': 0 }, { 'x': 1993.0, 'y': 12.57, 'series': 0 }, { 'x': 1995.0, 'y': 10.98, 'series': 0 }, { 'x': 1998.0, 'y': 14.6, 'series': 0 }, { 'x': 2000.0, 'y': 14.48, 'series': 0 }, { 'x': 2002.0, 'y': 12.62, 'series': 0 }, { 'x': 2004.0, 'y': 12.19, 'series': 0 }, { 'x': 2006.0, 'y': 15.23, 'series': 0 }, { 'x': 2008.0, 'y': 12.89, 'series': 0 }, { 'x': 2010.0, 'y': 14.42, 'series': 0 }, { 'x': 2012.0, 'y': 15.68, 'series': 0 }], yAxis: 1 }, { key: 'Brandolini et al (2004) - Equivalised net wealth', type: 'scatter', values: [{ 'x': 1989.0, 'y': 10.98, 'series': 1 }, { 'x': 1991.0, 'y': 9.66, 'series': 1 }, { 'x': 1993.0, 'y': 12.57, 'series': 1 }, { 'x': 1995.0, 'y': 10.98, 'series': 1 }, { 'x': 1998.0, 'y': 14.6, 'series': 1 }, { 'x': 2000.0, 'y': 14.48, 'series': 1 }, { 'x': 2002.0, 'y': 12.62, 'series': 1 }, { 'x': 2004.0, 'y': 12.19, 'series': 1 }, { 'x': 2006.0, 'y': 15.23, 'series': 1 }, { 'x': 2008.0, 'y': 12.89, 'series': 1 }, { 'x': 2010.0, 'y': 14.42, 'series': 1 }, { 'x': 2012.0, 'y': 15.68, 'series': 1 }], yAxis: 1 }]
});