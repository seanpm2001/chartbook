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
$scope.data0 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1951.0, 'y': 36.27809524, 'series': 0}, {'x': 1952.0, 'y': 36.07428571, 'series': 0}, {'x': 1953.0, 'y': 35.46285714, 'series': 0}, {'x': 1954.0, 'y': 37.7047619, 'series': 0}, {'x': 1955.0, 'y': 35.66666667, 'series': 0}, {'x': 1956.0, 'y': 34.85142857, 'series': 0}, {'x': 1957.0, 'y': 36.07428571, 'series': 0}, {'x': 1958.0, 'y': 35.15714286, 'series': 0}, {'x': 1959.0, 'y': 35.25904762, 'series': 0}, {'x': 1960.0, 'y': 33.22095238, 'series': 0}, {'x': 1961.0, 'y': 33.73047619, 'series': 0}, {'x': 1962.0, 'y': 33.22095238, 'series': 0}, {'x': 1963.0, 'y': 31.2847619, 'series': 0}, {'x': 1964.0, 'y': 31.59047619, 'series': 0}, {'x': 1965.0, 'y': 31.69238095, 'series': 0}, {'x': 1966.0, 'y': 31.69238095, 'series': 0}, {'x': 1967.0, 'y': 31.08095238, 'series': 0}, {'x': 1968.0, 'y': 32.50761905, 'series': 0}, {'x': 1969.0, 'y': 32.1, 'series': 0}, {'x': 1970.0, 'y': 30.97904762, 'series': 0}, {'x': 1973.0, 'y': 32.50761905, 'series': 0}, {'x': 1974.0, 'y': 29.75619048, 'series': 0}, {'x': 1977.0, 'y': 32.71142857, 'series': 0}, {'x': 1983.0, 'y': 32.1, 'series': 0}, {'x': 1987.0, 'y': 32.6, 'series': 0}, {'x': 1993.0, 'y': 32.7, 'series': 0}, {'x': 2004.0, 'y': 36.8, 'series': 0}, {'x': 2009.0, 'y': 37.5, 'series': 0}, {'x': 2011.0, 'y': 37.8, 'series': 0}], yAxis: 1}, {key: 'WIID (2021) - Per capita household consumption', type: 'scatter', values: [{'x': 1951.0, 'y': 35.6, 'series': 1}, {'x': 1952.0, 'y': 35.4, 'series': 1}, {'x': 1953.0, 'y': 34.8, 'series': 1}, {'x': 1954.0, 'y': 37.0, 'series': 1}, {'x': 1955.0, 'y': 35.0, 'series': 1}, {'x': 1956.0, 'y': 34.2, 'series': 1}, {'x': 1957.0, 'y': 35.4, 'series': 1}, {'x': 1958.0, 'y': 34.5, 'series': 1}, {'x': 1959.0, 'y': 34.6, 'series': 1}, {'x': 1960.0, 'y': 32.6, 'series': 1}, {'x': 1961.0, 'y': 33.1, 'series': 1}, {'x': 1962.0, 'y': 32.6, 'series': 1}, {'x': 1963.0, 'y': 30.7, 'series': 1}, {'x': 1964.0, 'y': 31.0, 'series': 1}, {'x': 1965.0, 'y': 31.1, 'series': 1}, {'x': 1966.0, 'y': 31.1, 'series': 1}, {'x': 1967.0, 'y': 30.5, 'series': 1}, {'x': 1968.0, 'y': 31.9, 'series': 1}, {'x': 1969.0, 'y': 31.5, 'series': 1}, {'x': 1970.0, 'y': 30.4, 'series': 1}, {'x': 1973.0, 'y': 31.9, 'series': 1}, {'x': 1974.0, 'y': 29.2, 'series': 1}, {'x': 1977.0, 'y': 32.1, 'series': 1}, {'x': 1983.0, 'y': 31.5, 'series': 1}, {'x': 1986.0, 'y': 32.2, 'series': 1}, {'x': 1987.0, 'y': 31.8, 'series': 1}, {'x': 1988.0, 'y': 31.1, 'series': 1}, {'x': 1989.0, 'y': 30.5, 'series': 1}, {'x': 1990.0, 'y': 29.7, 'series': 1}, {'x': 1991.0, 'y': 32.5, 'series': 1}, {'x': 1992.0, 'y': 32.0, 'series': 1}, {'x': 2011.0, 'y': null, 'series': 0}], yAxis: 1}, {key: 'World Bank-PovCal - Per capita household consumption', type: 'scatter', values: [{'x': 1951.0, 'y': null, 'series': 0}, {'x': 1983.0, 'y': 32.1, 'series': 2}, {'x': 1987.0, 'y': 32.6, 'series': 2}, {'x': 1993.0, 'y': 32.7, 'series': 2}, {'x': 2004.0, 'y': 36.8, 'series': 2}, {'x': 2009.0, 'y': 37.5, 'series': 2}, {'x': 2011.0, 'y': 37.8, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [{key: 'Chartbook series', type: 'line', values: [{'x': 2004.0, 'y': 49.0, 'series': 0}, {'x': 2011.0, 'y': 50.1, 'series': 0}], yAxis: 1}, {key: 'LIS - Equivalised disposable household income', type: 'scatter', values: [{'x': 2004.0, 'y': 49.0, 'series': 1}, {'x': 2011.0, 'y': 50.1, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1922.0, 'y': 13.09, 'series': 0}, {'x': 1923.0, 'y': 13.15, 'series': 0}, {'x': 1924.0, 'y': 14.12, 'series': 0}, {'x': 1925.0, 'y': 12.64, 'series': 0}, {'x': 1926.0, 'y': 13.04, 'series': 0}, {'x': 1927.0, 'y': 13.39, 'series': 0}, {'x': 1928.0, 'y': 13.67, 'series': 0}, {'x': 1929.0, 'y': 13.26, 'series': 0}, {'x': 1930.0, 'y': 13.65, 'series': 0}, {'x': 1931.0, 'y': 13.34, 'series': 0}, {'x': 1932.0, 'y': 16.28, 'series': 0}, {'x': 1933.0, 'y': 16.79, 'series': 0}, {'x': 1934.0, 'y': 18.32, 'series': 0}, {'x': 1935.0, 'y': 20.2, 'series': 0}, {'x': 1936.0, 'y': 19.76, 'series': 0}, {'x': 1937.0, 'y': 19.11, 'series': 0}, {'x': 1938.0, 'y': 19.62, 'series': 0}, {'x': 1939.0, 'y': 20.71, 'series': 0}, {'x': 1940.0, 'y': 19.49, 'series': 0}, {'x': 1941.0, 'y': 18.87, 'series': 0}, {'x': 1943.0, 'y': 13.77, 'series': 0}, {'x': 1944.0, 'y': 10.41, 'series': 0}, {'x': 1945.0, 'y': 10.61, 'series': 0}, {'x': 1947.0, 'y': 13.02, 'series': 0}, {'x': 1948.0, 'y': 11.53, 'series': 0}, {'x': 1949.0, 'y': 10.31, 'series': 0}, {'x': 1950.0, 'y': 11.72, 'series': 0}, {'x': 1951.0, 'y': 11.77, 'series': 0}, {'x': 1952.0, 'y': 12.08, 'series': 0}, {'x': 1953.0, 'y': 11.37, 'series': 0}, {'x': 1954.0, 'y': 12.85, 'series': 0}, {'x': 1955.0, 'y': 13.94, 'series': 0}, {'x': 1956.0, 'y': 14.08, 'series': 0}, {'x': 1957.0, 'y': 14.44, 'series': 0}, {'x': 1958.0, 'y': 13.94, 'series': 0}, {'x': 1959.0, 'y': 13.28, 'series': 0}, {'x': 1960.0, 'y': 13.54, 'series': 0}, {'x': 1961.0, 'y': 13.03, 'series': 0}, {'x': 1962.0, 'y': 12.91, 'series': 0}, {'x': 1963.0, 'y': 12.56, 'series': 0}, {'x': 1964.0, 'y': 12.33, 'series': 0}, {'x': 1965.0, 'y': 12.99, 'series': 0}, {'x': 1966.0, 'y': 13.26, 'series': 0}, {'x': 1967.0, 'y': 12.94, 'series': 0}, {'x': 1968.0, 'y': 12.46, 'series': 0}, {'x': 1969.0, 'y': 13.28, 'series': 0}, {'x': 1970.0, 'y': 13.31, 'series': 0}, {'x': 1971.0, 'y': 11.71, 'series': 0}, {'x': 1972.0, 'y': 11.29, 'series': 0}, {'x': 1973.0, 'y': 10.54, 'series': 0}, {'x': 1974.0, 'y': 10.42, 'series': 0}, {'x': 1975.0, 'y': 10.7, 'series': 0}, {'x': 1976.0, 'y': 10.56, 'series': 0}, {'x': 1977.0, 'y': 10.01, 'series': 0}, {'x': 1978.0, 'y': 9.52, 'series': 0}, {'x': 1979.0, 'y': 8.24, 'series': 0}, {'x': 1980.0, 'y': 7.54, 'series': 0}, {'x': 1981.0, 'y': 6.88, 'series': 0}, {'x': 1982.0, 'y': 6.28, 'series': 0}, {'x': 1983.0, 'y': 10.57, 'series': 0}, {'x': 1984.0, 'y': 9.12, 'series': 0}, {'x': 1985.0, 'y': 10.72, 'series': 0}, {'x': 1986.0, 'y': 11.09, 'series': 0}, {'x': 1987.0, 'y': 10.59, 'series': 0}, {'x': 1988.0, 'y': 11.4, 'series': 0}, {'x': 1989.0, 'y': 11.31, 'series': 0}, {'x': 1990.0, 'y': 10.74, 'series': 0}, {'x': 1991.0, 'y': 10.44, 'series': 0}, {'x': 1992.0, 'y': 10.27, 'series': 0}, {'x': 1993.0, 'y': 12.79, 'series': 0}, {'x': 1994.0, 'y': 12.67, 'series': 0}, {'x': 1995.0, 'y': 13.35, 'series': 0}, {'x': 1996.0, 'y': 13.56, 'series': 0}, {'x': 1997.0, 'y': 14.19, 'series': 0}, {'x': 1998.0, 'y': 14.73, 'series': 0}, {'x': 1999.0, 'y': 15.08, 'series': 0}, {'x': 2000.0, 'y': 15.51, 'series': 0}, {'x': 2001.0, 'y': 16.29, 'series': 0}, {'x': 2002.0, 'y': 17.1, 'series': 0}, {'x': 2003.0, 'y': 17.94, 'series': 0}, {'x': 2004.0, 'y': 18.81, 'series': 0}, {'x': 2005.0, 'y': 19.71, 'series': 0}, {'x': 2006.0, 'y': 20.1, 'series': 0}, {'x': 2007.0, 'y': 20.5, 'series': 0}, {'x': 2008.0, 'y': 20.88, 'series': 0}, {'x': 2009.0, 'y': 21.27, 'series': 0}, {'x': 2010.0, 'y': 21.64, 'series': 0}, {'x': 2011.0, 'y': 21.54, 'series': 0}, {'x': 2012.0, 'y': 21.7, 'series': 0}, {'x': 2013.0, 'y': 22.0, 'series': 0}, {'x': 2014.0, 'y': 21.73, 'series': 0}, {'x': 2015.0, 'y': 21.73, 'series': 0}, {'x': 2016.0, 'y': 21.73, 'series': 0}, {'x': 2017.0, 'y': 21.73, 'series': 0}, {'x': 2018.0, 'y': 21.73, 'series': 0}, {'x': 2019.0, 'y': 21.73, 'series': 0}], yAxis: 1}, {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{'x': 1922.0, 'y': 13.09, 'series': 1}, {'x': 1923.0, 'y': 13.15, 'series': 1}, {'x': 1924.0, 'y': 14.12, 'series': 1}, {'x': 1925.0, 'y': 12.64, 'series': 1}, {'x': 1926.0, 'y': 13.04, 'series': 1}, {'x': 1927.0, 'y': 13.39, 'series': 1}, {'x': 1928.0, 'y': 13.67, 'series': 1}, {'x': 1929.0, 'y': 13.26, 'series': 1}, {'x': 1930.0, 'y': 13.65, 'series': 1}, {'x': 1931.0, 'y': 13.34, 'series': 1}, {'x': 1932.0, 'y': 16.28, 'series': 1}, {'x': 1933.0, 'y': 16.79, 'series': 1}, {'x': 1934.0, 'y': 18.32, 'series': 1}, {'x': 1935.0, 'y': 20.2, 'series': 1}, {'x': 1936.0, 'y': 19.76, 'series': 1}, {'x': 1937.0, 'y': 19.11, 'series': 1}, {'x': 1938.0, 'y': 19.62, 'series': 1}, {'x': 1939.0, 'y': 20.71, 'series': 1}, {'x': 1940.0, 'y': 19.49, 'series': 1}, {'x': 1941.0, 'y': 18.87, 'series': 1}, {'x': 1943.0, 'y': 13.77, 'series': 1}, {'x': 1944.0, 'y': 10.41, 'series': 1}, {'x': 1945.0, 'y': 10.61, 'series': 1}, {'x': 1947.0, 'y': 13.02, 'series': 1}, {'x': 1948.0, 'y': 11.53, 'series': 1}, {'x': 1949.0, 'y': 10.31, 'series': 1}, {'x': 1950.0, 'y': 11.72, 'series': 1}, {'x': 1951.0, 'y': 11.77, 'series': 1}, {'x': 1952.0, 'y': 12.08, 'series': 1}, {'x': 1953.0, 'y': 11.37, 'series': 1}, {'x': 1954.0, 'y': 12.85, 'series': 1}, {'x': 1955.0, 'y': 13.94, 'series': 1}, {'x': 1956.0, 'y': 14.08, 'series': 1}, {'x': 1957.0, 'y': 14.44, 'series': 1}, {'x': 1958.0, 'y': 13.94, 'series': 1}, {'x': 1959.0, 'y': 13.28, 'series': 1}, {'x': 1960.0, 'y': 13.54, 'series': 1}, {'x': 1961.0, 'y': 13.03, 'series': 1}, {'x': 1962.0, 'y': 12.91, 'series': 1}, {'x': 1963.0, 'y': 12.56, 'series': 1}, {'x': 1964.0, 'y': 12.33, 'series': 1}, {'x': 1965.0, 'y': 12.99, 'series': 1}, {'x': 1966.0, 'y': 13.26, 'series': 1}, {'x': 1967.0, 'y': 12.94, 'series': 1}, {'x': 1968.0, 'y': 12.46, 'series': 1}, {'x': 1969.0, 'y': 13.28, 'series': 1}, {'x': 1970.0, 'y': 13.31, 'series': 1}, {'x': 1971.0, 'y': 11.71, 'series': 1}, {'x': 1972.0, 'y': 11.29, 'series': 1}, {'x': 1973.0, 'y': 10.54, 'series': 1}, {'x': 1974.0, 'y': 10.42, 'series': 1}, {'x': 1975.0, 'y': 10.7, 'series': 1}, {'x': 1976.0, 'y': 10.56, 'series': 1}, {'x': 1977.0, 'y': 10.01, 'series': 1}, {'x': 1978.0, 'y': 9.52, 'series': 1}, {'x': 1979.0, 'y': 8.24, 'series': 1}, {'x': 1980.0, 'y': 7.54, 'series': 1}, {'x': 1981.0, 'y': 6.88, 'series': 1}, {'x': 1982.0, 'y': 6.28, 'series': 1}, {'x': 1983.0, 'y': 10.57, 'series': 1}, {'x': 1984.0, 'y': 9.12, 'series': 1}, {'x': 1985.0, 'y': 10.72, 'series': 1}, {'x': 1986.0, 'y': 11.09, 'series': 1}, {'x': 1987.0, 'y': 10.59, 'series': 1}, {'x': 1988.0, 'y': 11.4, 'series': 1}, {'x': 1989.0, 'y': 11.31, 'series': 1}, {'x': 1990.0, 'y': 10.74, 'series': 1}, {'x': 1991.0, 'y': 10.44, 'series': 1}, {'x': 1992.0, 'y': 10.27, 'series': 1}, {'x': 1993.0, 'y': 12.79, 'series': 1}, {'x': 1994.0, 'y': 12.67, 'series': 1}, {'x': 1995.0, 'y': 13.35, 'series': 1}, {'x': 1996.0, 'y': 13.56, 'series': 1}, {'x': 1997.0, 'y': 14.19, 'series': 1}, {'x': 1998.0, 'y': 14.73, 'series': 1}, {'x': 1999.0, 'y': 15.08, 'series': 1}, {'x': 2000.0, 'y': 15.51, 'series': 1}, {'x': 2001.0, 'y': 16.29, 'series': 1}, {'x': 2002.0, 'y': 17.1, 'series': 1}, {'x': 2003.0, 'y': 17.94, 'series': 1}, {'x': 2004.0, 'y': 18.81, 'series': 1}, {'x': 2005.0, 'y': 19.71, 'series': 1}, {'x': 2006.0, 'y': 20.1, 'series': 1}, {'x': 2007.0, 'y': 20.5, 'series': 1}, {'x': 2008.0, 'y': 20.88, 'series': 1}, {'x': 2009.0, 'y': 21.27, 'series': 1}, {'x': 2010.0, 'y': 21.64, 'series': 1}, {'x': 2011.0, 'y': 21.54, 'series': 1}, {'x': 2012.0, 'y': 21.7, 'series': 1}, {'x': 2013.0, 'y': 22.0, 'series': 1}, {'x': 2014.0, 'y': 21.73, 'series': 1}, {'x': 2015.0, 'y': 21.73, 'series': 1}, {'x': 2016.0, 'y': 21.73, 'series': 1}, {'x': 2017.0, 'y': 21.73, 'series': 1}, {'x': 2018.0, 'y': 21.73, 'series': 1}, {'x': 2019.0, 'y': 21.73, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1973.0, 'y': 54.9, 'series': 0}, {'x': 1977.0, 'y': 51.3, 'series': 0}, {'x': 1983.0, 'y': 44.5, 'series': 0}, {'x': 1987.0, 'y': 38.9, 'series': 0}, {'x': 1993.0, 'y': 36.0, 'series': 0}, {'x': 2004.0, 'y': 27.5, 'series': 0}], yAxis: 1}, {key: 'Rangarajan (2014) - Private household consumer expenditure', type: 'scatter', values: [{'x': 1973.0, 'y': 54.9, 'series': 1}, {'x': 1977.0, 'y': 51.3, 'series': 1}, {'x': 1983.0, 'y': 44.5, 'series': 1}, {'x': 1987.0, 'y': 38.9, 'series': 1}, {'x': 1993.0, 'y': 36.0, 'series': 1}, {'x': 2004.0, 'y': 27.5, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1993.0, 'y': 45.3, 'series': 0}, {'x': 2004.0, 'y': 37.2, 'series': 0}, {'x': 2009.0, 'y': 29.8, 'series': 0}, {'x': 2011.0, 'y': 21.9, 'series': 0}], yAxis: 1}, {key: 'Rangarajan (2014) - Private household consumer expenditure', type: 'scatter', values: [{'x': 1993.0, 'y': 45.3, 'series': 1}, {'x': 2004.0, 'y': 37.2, 'series': 1}, {'x': 2009.0, 'y': 29.8, 'series': 1}, {'x': 2011.0, 'y': 21.9, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [{key: 'Chartbook series', type: 'line', values: [{'x': 2009.0, 'y': 38.2, 'series': 0}, {'x': 2011.0, 'y': 29.5, 'series': 0}], yAxis: 1}, {key: 'Rangarajan (2014) - Private household consumer expenditure', type: 'scatter', values: [{'x': 2009.0, 'y': 38.2, 'series': 1}, {'x': 2011.0, 'y': 29.5, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1983.0, 'y': 41.9, 'series': 0}, {'x': 1993.0, 'y': 40.0, 'series': 0}, {'x': 2004.0, 'y': 48.4, 'series': 0}], yAxis: 1}, {key: 'Majumdar (2010) - Individual earnings of regular workers', type: 'scatter', values: [{'x': 1983.0, 'y': 41.9, 'series': 1}, {'x': 1993.0, 'y': 40.0, 'series': 1}, {'x': 2004.0, 'y': 48.4, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [{key: 'Chartbook series', type: 'line', values: [{'x': 1961.0, 'y': 11.87, 'series': 0}, {'x': 1971.0, 'y': 11.23, 'series': 0}, {'x': 1981.0, 'y': 12.5, 'series': 0}, {'x': 1991.0, 'y': 16.11, 'series': 0}, {'x': 2002.0, 'y': 24.37, 'series': 0}, {'x': 2012.0, 'y': 30.69, 'series': 0}], yAxis: 1}, {key: 'WID - Individual net wealth', type: 'scatter', values: [{'x': 1961.0, 'y': 11.87, 'series': 1}, {'x': 1971.0, 'y': 11.23, 'series': 1}, {'x': 1981.0, 'y': 12.5, 'series': 1}, {'x': 1991.0, 'y': 16.11, 'series': 1}, {'x': 2002.0, 'y': 24.37, 'series': 1}, {'x': 2012.0, 'y': 30.69, 'series': 1}], yAxis: 1}]
});