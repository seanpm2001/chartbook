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
$scope.data0 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1976, 'y': 30.0, 'series': 0},
 {'x': 1977, 'y': 28.6, 'series': 0},
 {'x': 1978, 'y': 29.1, 'series': 0},
 {'x': 1979, 'y': 28.6, 'series': 0},
 {'x': 1980, 'y': 28.6, 'series': 0},
 {'x': 1981, 'y': 28.5, 'series': 0},
 {'x': 1982, 'y': 28.8, 'series': 0},
 {'x': 1983, 'y': 29.6, 'series': 0},
 {'x': 1984, 'y': 29.3, 'series': 0},
 {'x': 1985, 'y': 29.0, 'series': 0},
 {'x': 1986, 'y': 29.0, 'series': 0},
 {'x': 1987, 'y': 28.7, 'series': 0},
 {'x': 1988, 'y': 28.2, 'series': 0},
 {'x': 1989, 'y': 28.1, 'series': 0},
 {'x': 1990, 'y': 28.6, 'series': 0},
 {'x': 1991, 'y': 29.2, 'series': 0},
 {'x': 1992, 'y': 29.1, 'series': 0},
 {'x': 1993, 'y': 28.9, 'series': 0},
 {'x': 1994, 'y': 29.0, 'series': 0},
 {'x': 1995, 'y': 29.3, 'series': 0},
 {'x': 1996, 'y': 30.1, 'series': 0},
 {'x': 1997, 'y': 30.4, 'series': 0},
 {'x': 1998, 'y': 31.1, 'series': 0},
 {'x': 1999, 'y': 31.0, 'series': 0},
 {'x': 2000, 'y': 31.7, 'series': 0},
 {'x': 2001, 'y': 31.8, 'series': 0},
 {'x': 2002, 'y': 31.8, 'series': 0},
 {'x': 2003, 'y': 31.6, 'series': 0},
 {'x': 2004, 'y': 32.2, 'series': 0},
 {'x': 2005, 'y': 31.7, 'series': 0},
 {'x': 2006, 'y': 31.6, 'series': 0},
 {'x': 2007, 'y': 31.6, 'series': 0},
 {'x': 2008, 'y': 31.4, 'series': 0},
 {'x': 2009, 'y': 31.5, 'series': 0},
 {'x': 2010, 'y': 31.5, 'series': 0},
 {'x': 2011, 'y': 31.1, 'series': 0},
 {'x': 2012, 'y': 31.6, 'series': 0},
 {'x': 2013, 'y': 31.8, 'series': 0},
 {'x': 2014, 'y': 31.1, 'series': 0},
 {'x': 2015, 'y': 31.4, 'series': 0},
 {'x': 2016, 'y': 30.6, 'series': 0},
 {'x': 2017, 'y': 31.0, 'series': 0},
 {'x': 2018, 'y': 30.3, 'series': 0},
 {'x': 2019, 'y': 29.9, 'series': 0},
 {'x': 2020, 'y': 28.1, 'series': 0}], yAxis: 1},
 {key: 'Statistics Canada - Equivalised after-tax household income', type: 'scatter', values: [
{'x': 1976, 'y': 30.0, 'series': 1},
 {'x': 1977, 'y': 28.6, 'series': 1},
 {'x': 1978, 'y': 29.1, 'series': 1},
 {'x': 1979, 'y': 28.6, 'series': 1},
 {'x': 1980, 'y': 28.6, 'series': 1},
 {'x': 1981, 'y': 28.5, 'series': 1},
 {'x': 1982, 'y': 28.8, 'series': 1},
 {'x': 1983, 'y': 29.6, 'series': 1},
 {'x': 1984, 'y': 29.3, 'series': 1},
 {'x': 1985, 'y': 29.0, 'series': 1},
 {'x': 1986, 'y': 29.0, 'series': 1},
 {'x': 1987, 'y': 28.7, 'series': 1},
 {'x': 1988, 'y': 28.2, 'series': 1},
 {'x': 1989, 'y': 28.1, 'series': 1},
 {'x': 1990, 'y': 28.6, 'series': 1},
 {'x': 1991, 'y': 29.2, 'series': 1},
 {'x': 1992, 'y': 29.1, 'series': 1},
 {'x': 1993, 'y': 28.9, 'series': 1},
 {'x': 1994, 'y': 29.0, 'series': 1},
 {'x': 1995, 'y': 29.3, 'series': 1},
 {'x': 1996, 'y': 30.1, 'series': 1},
 {'x': 1997, 'y': 30.4, 'series': 1},
 {'x': 1998, 'y': 31.1, 'series': 1},
 {'x': 1999, 'y': 31.0, 'series': 1},
 {'x': 2000, 'y': 31.7, 'series': 1},
 {'x': 2001, 'y': 31.8, 'series': 1},
 {'x': 2002, 'y': 31.8, 'series': 1},
 {'x': 2003, 'y': 31.6, 'series': 1},
 {'x': 2004, 'y': 32.2, 'series': 1},
 {'x': 2005, 'y': 31.7, 'series': 1},
 {'x': 2006, 'y': 31.6, 'series': 1},
 {'x': 2007, 'y': 31.6, 'series': 1},
 {'x': 2008, 'y': 31.4, 'series': 1},
 {'x': 2009, 'y': 31.5, 'series': 1},
 {'x': 2010, 'y': 31.5, 'series': 1},
 {'x': 2011, 'y': 31.1, 'series': 1},
 {'x': 2012, 'y': 31.6, 'series': 1},
 {'x': 2013, 'y': 31.8, 'series': 1},
 {'x': 2014, 'y': 31.1, 'series': 1},
 {'x': 2015, 'y': 31.4, 'series': 1},
 {'x': 2016, 'y': 30.6, 'series': 1},
 {'x': 2017, 'y': 31.0, 'series': 1},
 {'x': 2018, 'y': 30.3, 'series': 1},
 {'x': 2019, 'y': 29.9, 'series': 1},
 {'x': 2020, 'y': 28.1, 'series': 1}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1965, 'y': 37.1, 'series': 0},
 {'x': 1971, 'y': 39.9, 'series': 0},
 {'x': 1975, 'y': 37.1, 'series': 0},
 {'x': 1979, 'y': 36.6, 'series': 0},
 {'x': 1982, 'y': 36.6, 'series': 0},
 {'x': 1983, 'y': 37.3, 'series': 0}], yAxis: 1},
 {key: 'Wolfson (1986) - Equivalised gross family money income', type: 'scatter', values: [
{'x': 1965, 'y': 37.1, 'series': 1},
 {'x': 1971, 'y': 39.9, 'series': 1},
 {'x': 1975, 'y': 37.1, 'series': 1},
 {'x': 1979, 'y': 36.6, 'series': 1},
 {'x': 1982, 'y': 36.6, 'series': 1},
 {'x': 1983, 'y': 37.3, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1959, 'y': 37.1, 'series': 0},
 {'x': 1961, 'y': 36.8, 'series': 0},
 {'x': 1969, 'y': 38.0, 'series': 0},
 {'x': 1971, 'y': 39.8, 'series': 0}], yAxis: 1},
 {key: 'Love (1979) - Gross family income for non-farm families', type: 'scatter', values: [
{'x': 1959, 'y': 37.1, 'series': 1},
 {'x': 1961, 'y': 36.8, 'series': 1},
 {'x': 1969, 'y': 38.0, 'series': 1},
 {'x': 1971, 'y': 39.8, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1920, 'y': 13.0, 'series': 0},
 {'x': 1921, 'y': 16.0, 'series': 0},
 {'x': 1922, 'y': 13.6, 'series': 0},
 {'x': 1923, 'y': 12.8, 'series': 0},
 {'x': 1924, 'y': 13.0, 'series': 0},
 {'x': 1925, 'y': 11.7, 'series': 0},
 {'x': 1926, 'y': 12.5, 'series': 0},
 {'x': 1927, 'y': 13.1, 'series': 0},
 {'x': 1928, 'y': 13.7, 'series': 0},
 {'x': 1929, 'y': 14.0, 'series': 0},
 {'x': 1930, 'y': 14.4, 'series': 0},
 {'x': 1931, 'y': 14.9, 'series': 0},
 {'x': 1932, 'y': 16.0, 'series': 0},
 {'x': 1933, 'y': 16.4, 'series': 0},
 {'x': 1934, 'y': 15.9, 'series': 0},
 {'x': 1935, 'y': 15.3, 'series': 0},
 {'x': 1936, 'y': 15.8, 'series': 0},
 {'x': 1937, 'y': 14.6, 'series': 0},
 {'x': 1938, 'y': 16.7, 'series': 0},
 {'x': 1939, 'y': 15.2, 'series': 0},
 {'x': 1940, 'y': 13.2, 'series': 0},
 {'x': 1941, 'y': 11.8, 'series': 0},
 {'x': 1942, 'y': 10.0, 'series': 0},
 {'x': 1943, 'y': 9.4, 'series': 0},
 {'x': 1944, 'y': 8.8, 'series': 0},
 {'x': 1945, 'y': 8.9, 'series': 0},
 {'x': 1946, 'y': 9.4, 'series': 0},
 {'x': 1947, 'y': 9.7, 'series': 0},
 {'x': 1948, 'y': 9.1, 'series': 0},
 {'x': 1949, 'y': 9.4, 'series': 0},
 {'x': 1950, 'y': 9.5, 'series': 0},
 {'x': 1951, 'y': 8.8, 'series': 0},
 {'x': 1952, 'y': 8.6, 'series': 0},
 {'x': 1953, 'y': 8.6, 'series': 0},
 {'x': 1954, 'y': 9.1, 'series': 0},
 {'x': 1955, 'y': 8.9, 'series': 0},
 {'x': 1956, 'y': 8.4, 'series': 0},
 {'x': 1957, 'y': 8.4, 'series': 0},
 {'x': 1958, 'y': 8.7, 'series': 0},
 {'x': 1959, 'y': 8.5, 'series': 0},
 {'x': 1960, 'y': 8.6, 'series': 0},
 {'x': 1961, 'y': 8.7, 'series': 0},
 {'x': 1962, 'y': 8.2, 'series': 0},
 {'x': 1963, 'y': 8.0, 'series': 0},
 {'x': 1964, 'y': 8.2, 'series': 0},
 {'x': 1965, 'y': 8.0, 'series': 0},
 {'x': 1966, 'y': 7.8, 'series': 0},
 {'x': 1967, 'y': 7.9, 'series': 0},
 {'x': 1968, 'y': 7.9, 'series': 0},
 {'x': 1969, 'y': 7.9, 'series': 0},
 {'x': 1970, 'y': 7.8, 'series': 0},
 {'x': 1971, 'y': 7.7, 'series': 0},
 {'x': 1972, 'y': 7.8, 'series': 0},
 {'x': 1973, 'y': 8.1, 'series': 0},
 {'x': 1974, 'y': 8.0, 'series': 0},
 {'x': 1975, 'y': 8.8, 'series': 0},
 {'x': 1976, 'y': 8.1, 'series': 0},
 {'x': 1977, 'y': 7.7, 'series': 0},
 {'x': 1978, 'y': 7.9, 'series': 0},
 {'x': 1979, 'y': 8.6, 'series': 0},
 {'x': 1980, 'y': 9.2, 'series': 0},
 {'x': 1981, 'y': 8.5, 'series': 0},
 {'x': 1982, 'y': 8.4, 'series': 0},
 {'x': 1983, 'y': 8.9, 'series': 0},
 {'x': 1984, 'y': 9.1, 'series': 0},
 {'x': 1985, 'y': 9.2, 'series': 0},
 {'x': 1986, 'y': 9.1, 'series': 0},
 {'x': 1987, 'y': 10.0, 'series': 0},
 {'x': 1988, 'y': 10.7, 'series': 0},
 {'x': 1989, 'y': 11.6, 'series': 0},
 {'x': 1990, 'y': 9.5, 'series': 0},
 {'x': 1991, 'y': 9.2, 'series': 0},
 {'x': 1992, 'y': 9.4, 'series': 0},
 {'x': 1993, 'y': 10.4, 'series': 0},
 {'x': 1994, 'y': 10.9, 'series': 0},
 {'x': 1995, 'y': 10.5, 'series': 0},
 {'x': 1996, 'y': 11.2, 'series': 0},
 {'x': 1997, 'y': 12.2, 'series': 0},
 {'x': 1998, 'y': 12.5, 'series': 0},
 {'x': 1999, 'y': 13.1, 'series': 0},
 {'x': 2000, 'y': 14.8, 'series': 0},
 {'x': 2001, 'y': 13.9, 'series': 0},
 {'x': 2002, 'y': 13.5, 'series': 0},
 {'x': 2003, 'y': 13.5, 'series': 0},
 {'x': 2004, 'y': 14.4, 'series': 0},
 {'x': 2005, 'y': 15.4, 'series': 0},
 {'x': 2006, 'y': 16.1, 'series': 0},
 {'x': 2007, 'y': 16.3, 'series': 0},
 {'x': 2008, 'y': 15.1, 'series': 0},
 {'x': 2009, 'y': 13.3, 'series': 0},
 {'x': 2010, 'y': 14.0, 'series': 0},
 {'x': 2011, 'y': 14.1, 'series': 0},
 {'x': 2012, 'y': 13.5, 'series': 0},
 {'x': 2013, 'y': 14.6, 'series': 0},
 {'x': 2014, 'y': 15.1, 'series': 0},
 {'x': 2015, 'y': 15.8, 'series': 0},
 {'x': 2016, 'y': 13.3, 'series': 0},
 {'x': 2017, 'y': 15.0, 'series': 0},
 {'x': 2018, 'y': 14.9, 'series': 0},
 {'x': 2019, 'y': 14.8, 'series': 0},
 {'x': 2020, 'y': 14.8, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equals-split adults)', type: 'scatter', values: [
{'x': 1920, 'y': 13.0, 'series': 1},
 {'x': 1921, 'y': 16.0, 'series': 1},
 {'x': 1922, 'y': 13.6, 'series': 1},
 {'x': 1923, 'y': 12.8, 'series': 1},
 {'x': 1924, 'y': 13.0, 'series': 1},
 {'x': 1925, 'y': 11.7, 'series': 1},
 {'x': 1926, 'y': 12.5, 'series': 1},
 {'x': 1927, 'y': 13.1, 'series': 1},
 {'x': 1928, 'y': 13.7, 'series': 1},
 {'x': 1929, 'y': 14.0, 'series': 1},
 {'x': 1930, 'y': 14.4, 'series': 1},
 {'x': 1931, 'y': 14.9, 'series': 1},
 {'x': 1932, 'y': 16.0, 'series': 1},
 {'x': 1933, 'y': 16.4, 'series': 1},
 {'x': 1934, 'y': 15.9, 'series': 1},
 {'x': 1935, 'y': 15.3, 'series': 1},
 {'x': 1936, 'y': 15.8, 'series': 1},
 {'x': 1937, 'y': 14.6, 'series': 1},
 {'x': 1938, 'y': 16.7, 'series': 1},
 {'x': 1939, 'y': 15.2, 'series': 1},
 {'x': 1940, 'y': 13.2, 'series': 1},
 {'x': 1941, 'y': 11.8, 'series': 1},
 {'x': 1942, 'y': 10.0, 'series': 1},
 {'x': 1943, 'y': 9.4, 'series': 1},
 {'x': 1944, 'y': 8.8, 'series': 1},
 {'x': 1945, 'y': 8.9, 'series': 1},
 {'x': 1946, 'y': 9.4, 'series': 1},
 {'x': 1947, 'y': 9.7, 'series': 1},
 {'x': 1948, 'y': 9.1, 'series': 1},
 {'x': 1949, 'y': 9.4, 'series': 1},
 {'x': 1950, 'y': 9.5, 'series': 1},
 {'x': 1951, 'y': 8.8, 'series': 1},
 {'x': 1952, 'y': 8.6, 'series': 1},
 {'x': 1953, 'y': 8.6, 'series': 1},
 {'x': 1954, 'y': 9.1, 'series': 1},
 {'x': 1955, 'y': 8.9, 'series': 1},
 {'x': 1956, 'y': 8.4, 'series': 1},
 {'x': 1957, 'y': 8.4, 'series': 1},
 {'x': 1958, 'y': 8.7, 'series': 1},
 {'x': 1959, 'y': 8.5, 'series': 1},
 {'x': 1960, 'y': 8.6, 'series': 1},
 {'x': 1961, 'y': 8.7, 'series': 1},
 {'x': 1962, 'y': 8.2, 'series': 1},
 {'x': 1963, 'y': 8.0, 'series': 1},
 {'x': 1964, 'y': 8.2, 'series': 1},
 {'x': 1965, 'y': 8.0, 'series': 1},
 {'x': 1966, 'y': 7.8, 'series': 1},
 {'x': 1967, 'y': 7.9, 'series': 1},
 {'x': 1968, 'y': 7.9, 'series': 1},
 {'x': 1969, 'y': 7.9, 'series': 1},
 {'x': 1970, 'y': 7.8, 'series': 1},
 {'x': 1971, 'y': 7.7, 'series': 1},
 {'x': 1972, 'y': 7.8, 'series': 1},
 {'x': 1973, 'y': 8.1, 'series': 1},
 {'x': 1974, 'y': 8.0, 'series': 1},
 {'x': 1975, 'y': 8.8, 'series': 1},
 {'x': 1976, 'y': 8.1, 'series': 1},
 {'x': 1977, 'y': 7.7, 'series': 1},
 {'x': 1978, 'y': 7.9, 'series': 1},
 {'x': 1979, 'y': 8.6, 'series': 1},
 {'x': 1980, 'y': 9.2, 'series': 1},
 {'x': 1981, 'y': 8.5, 'series': 1},
 {'x': 1982, 'y': 8.4, 'series': 1},
 {'x': 1983, 'y': 8.9, 'series': 1},
 {'x': 1984, 'y': 9.1, 'series': 1},
 {'x': 1985, 'y': 9.2, 'series': 1},
 {'x': 1986, 'y': 9.1, 'series': 1},
 {'x': 1987, 'y': 10.0, 'series': 1},
 {'x': 1988, 'y': 10.7, 'series': 1},
 {'x': 1989, 'y': 11.6, 'series': 1},
 {'x': 1990, 'y': 9.5, 'series': 1},
 {'x': 1991, 'y': 9.2, 'series': 1},
 {'x': 1992, 'y': 9.4, 'series': 1},
 {'x': 1993, 'y': 10.4, 'series': 1},
 {'x': 1994, 'y': 10.9, 'series': 1},
 {'x': 1995, 'y': 10.5, 'series': 1},
 {'x': 1996, 'y': 11.2, 'series': 1},
 {'x': 1997, 'y': 12.2, 'series': 1},
 {'x': 1998, 'y': 12.5, 'series': 1},
 {'x': 1999, 'y': 13.1, 'series': 1},
 {'x': 2000, 'y': 14.8, 'series': 1},
 {'x': 2001, 'y': 13.9, 'series': 1},
 {'x': 2002, 'y': 13.5, 'series': 1},
 {'x': 2003, 'y': 13.5, 'series': 1},
 {'x': 2004, 'y': 14.4, 'series': 1},
 {'x': 2005, 'y': 15.4, 'series': 1},
 {'x': 2006, 'y': 16.1, 'series': 1},
 {'x': 2007, 'y': 16.3, 'series': 1},
 {'x': 2008, 'y': 15.1, 'series': 1},
 {'x': 2009, 'y': 13.3, 'series': 1},
 {'x': 2010, 'y': 14.0, 'series': 1},
 {'x': 2011, 'y': 14.1, 'series': 1},
 {'x': 2012, 'y': 13.5, 'series': 1},
 {'x': 2013, 'y': 14.6, 'series': 1},
 {'x': 2014, 'y': 15.1, 'series': 1},
 {'x': 2015, 'y': 15.8, 'series': 1},
 {'x': 2016, 'y': 13.3, 'series': 1},
 {'x': 2017, 'y': 15.0, 'series': 1},
 {'x': 2018, 'y': 14.9, 'series': 1},
 {'x': 2019, 'y': 14.8, 'series': 1},
 {'x': 2020, 'y': 14.8, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1920, 'y': 14.4, 'series': 0},
 {'x': 1921, 'y': 17.6, 'series': 0},
 {'x': 1922, 'y': 15.2, 'series': 0},
 {'x': 1923, 'y': 14.4, 'series': 0},
 {'x': 1924, 'y': 14.5, 'series': 0},
 {'x': 1925, 'y': 13.2, 'series': 0},
 {'x': 1926, 'y': 14.0, 'series': 0},
 {'x': 1927, 'y': 14.7, 'series': 0},
 {'x': 1928, 'y': 15.3, 'series': 0},
 {'x': 1929, 'y': 15.6, 'series': 0},
 {'x': 1930, 'y': 16.1, 'series': 0},
 {'x': 1931, 'y': 16.6, 'series': 0},
 {'x': 1932, 'y': 17.7, 'series': 0},
 {'x': 1933, 'y': 18.0, 'series': 0},
 {'x': 1934, 'y': 17.5, 'series': 0},
 {'x': 1935, 'y': 17.0, 'series': 0},
 {'x': 1936, 'y': 17.5, 'series': 0},
 {'x': 1937, 'y': 16.3, 'series': 0},
 {'x': 1938, 'y': 18.4, 'series': 0},
 {'x': 1939, 'y': 16.9, 'series': 0},
 {'x': 1940, 'y': 14.7, 'series': 0},
 {'x': 1941, 'y': 13.3, 'series': 0},
 {'x': 1942, 'y': 11.3, 'series': 0},
 {'x': 1943, 'y': 10.7, 'series': 0},
 {'x': 1944, 'y': 10.0, 'series': 0},
 {'x': 1945, 'y': 10.1, 'series': 0},
 {'x': 1946, 'y': 10.7, 'series': 0},
 {'x': 1947, 'y': 11.0, 'series': 0},
 {'x': 1948, 'y': 10.4, 'series': 0},
 {'x': 1949, 'y': 10.7, 'series': 0},
 {'x': 1950, 'y': 10.9, 'series': 0},
 {'x': 1951, 'y': 10.0, 'series': 0},
 {'x': 1952, 'y': 9.8, 'series': 0},
 {'x': 1953, 'y': 9.9, 'series': 0},
 {'x': 1954, 'y': 10.3, 'series': 0},
 {'x': 1955, 'y': 10.2, 'series': 0},
 {'x': 1956, 'y': 9.6, 'series': 0},
 {'x': 1957, 'y': 9.6, 'series': 0},
 {'x': 1958, 'y': 9.9, 'series': 0},
 {'x': 1959, 'y': 9.7, 'series': 0},
 {'x': 1960, 'y': 9.8, 'series': 0},
 {'x': 1961, 'y': 9.9, 'series': 0},
 {'x': 1962, 'y': 9.4, 'series': 0},
 {'x': 1963, 'y': 9.1, 'series': 0},
 {'x': 1964, 'y': 9.4, 'series': 0},
 {'x': 1965, 'y': 9.2, 'series': 0},
 {'x': 1966, 'y': 8.9, 'series': 0},
 {'x': 1967, 'y': 9.0, 'series': 0},
 {'x': 1968, 'y': 9.0, 'series': 0},
 {'x': 1969, 'y': 9.0, 'series': 0},
 {'x': 1970, 'y': 9.0, 'series': 0},
 {'x': 1971, 'y': 8.9, 'series': 0},
 {'x': 1972, 'y': 8.9, 'series': 0},
 {'x': 1973, 'y': 9.0, 'series': 0},
 {'x': 1974, 'y': 9.0, 'series': 0},
 {'x': 1975, 'y': 8.9, 'series': 0},
 {'x': 1976, 'y': 8.3, 'series': 0},
 {'x': 1977, 'y': 8.0, 'series': 0},
 {'x': 1978, 'y': 8.1, 'series': 0},
 {'x': 1979, 'y': 8.5, 'series': 0},
 {'x': 1980, 'y': 8.9, 'series': 0},
 {'x': 1981, 'y': 8.6, 'series': 0},
 {'x': 1982, 'y': 8.9, 'series': 0},
 {'x': 1983, 'y': 8.8, 'series': 0},
 {'x': 1984, 'y': 8.7, 'series': 0},
 {'x': 1985, 'y': 8.9, 'series': 0},
 {'x': 1986, 'y': 9.2, 'series': 0},
 {'x': 1987, 'y': 9.9, 'series': 0},
 {'x': 1988, 'y': 10.7, 'series': 0},
 {'x': 1989, 'y': 11.9, 'series': 0},
 {'x': 1990, 'y': 10.2, 'series': 0},
 {'x': 1991, 'y': 10.3, 'series': 0},
 {'x': 1992, 'y': 10.5, 'series': 0},
 {'x': 1993, 'y': 11.3, 'series': 0},
 {'x': 1994, 'y': 11.4, 'series': 0},
 {'x': 1995, 'y': 10.9, 'series': 0},
 {'x': 1996, 'y': 11.5, 'series': 0},
 {'x': 1997, 'y': 12.5, 'series': 0},
 {'x': 1998, 'y': 13.0, 'series': 0},
 {'x': 1999, 'y': 13.3, 'series': 0},
 {'x': 2000, 'y': 14.6, 'series': 0},
 {'x': 2001, 'y': 13.9, 'series': 0},
 {'x': 2002, 'y': 13.4, 'series': 0},
 {'x': 2003, 'y': 13.2, 'series': 0},
 {'x': 2004, 'y': 14.0, 'series': 0},
 {'x': 2005, 'y': 14.7, 'series': 0},
 {'x': 2006, 'y': 15.4, 'series': 0},
 {'x': 2007, 'y': 15.6, 'series': 0},
 {'x': 2008, 'y': 14.4, 'series': 0},
 {'x': 2009, 'y': 13.3, 'series': 0},
 {'x': 2010, 'y': 13.6, 'series': 0},
 {'x': 2011, 'y': 13.5, 'series': 0},
 {'x': 2012, 'y': 13.1, 'series': 0},
 {'x': 2013, 'y': 14.2, 'series': 0},
 {'x': 2014, 'y': 14.5, 'series': 0},
 {'x': 2015, 'y': 15.7, 'series': 0},
 {'x': 2016, 'y': 13.2, 'series': 0},
 {'x': 2017, 'y': 14.4, 'series': 0},
 {'x': 2018, 'y': 14.4, 'series': 0},
 {'x': 2019, 'y': 14.4, 'series': 0}], yAxis: 1},
 {key: 'WID - Post-tax national income (individuals)', type: 'scatter', values: [
{'x': 1920, 'y': 14.4, 'series': 1},
 {'x': 1921, 'y': 17.6, 'series': 1},
 {'x': 1922, 'y': 15.2, 'series': 1},
 {'x': 1923, 'y': 14.4, 'series': 1},
 {'x': 1924, 'y': 14.5, 'series': 1},
 {'x': 1925, 'y': 13.2, 'series': 1},
 {'x': 1926, 'y': 14.0, 'series': 1},
 {'x': 1927, 'y': 14.7, 'series': 1},
 {'x': 1928, 'y': 15.3, 'series': 1},
 {'x': 1929, 'y': 15.6, 'series': 1},
 {'x': 1930, 'y': 16.1, 'series': 1},
 {'x': 1931, 'y': 16.6, 'series': 1},
 {'x': 1932, 'y': 17.7, 'series': 1},
 {'x': 1933, 'y': 18.0, 'series': 1},
 {'x': 1934, 'y': 17.5, 'series': 1},
 {'x': 1935, 'y': 17.0, 'series': 1},
 {'x': 1936, 'y': 17.5, 'series': 1},
 {'x': 1937, 'y': 16.3, 'series': 1},
 {'x': 1938, 'y': 18.4, 'series': 1},
 {'x': 1939, 'y': 16.9, 'series': 1},
 {'x': 1940, 'y': 14.7, 'series': 1},
 {'x': 1941, 'y': 13.3, 'series': 1},
 {'x': 1942, 'y': 11.3, 'series': 1},
 {'x': 1943, 'y': 10.7, 'series': 1},
 {'x': 1944, 'y': 10.0, 'series': 1},
 {'x': 1945, 'y': 10.1, 'series': 1},
 {'x': 1946, 'y': 10.7, 'series': 1},
 {'x': 1947, 'y': 11.0, 'series': 1},
 {'x': 1948, 'y': 10.4, 'series': 1},
 {'x': 1949, 'y': 10.7, 'series': 1},
 {'x': 1950, 'y': 10.9, 'series': 1},
 {'x': 1951, 'y': 10.0, 'series': 1},
 {'x': 1952, 'y': 9.8, 'series': 1},
 {'x': 1953, 'y': 9.9, 'series': 1},
 {'x': 1954, 'y': 10.3, 'series': 1},
 {'x': 1955, 'y': 10.2, 'series': 1},
 {'x': 1956, 'y': 9.6, 'series': 1},
 {'x': 1957, 'y': 9.6, 'series': 1},
 {'x': 1958, 'y': 9.9, 'series': 1},
 {'x': 1959, 'y': 9.7, 'series': 1},
 {'x': 1960, 'y': 9.8, 'series': 1},
 {'x': 1961, 'y': 9.9, 'series': 1},
 {'x': 1962, 'y': 9.4, 'series': 1},
 {'x': 1963, 'y': 9.1, 'series': 1},
 {'x': 1964, 'y': 9.4, 'series': 1},
 {'x': 1965, 'y': 9.2, 'series': 1},
 {'x': 1966, 'y': 8.9, 'series': 1},
 {'x': 1967, 'y': 9.0, 'series': 1},
 {'x': 1968, 'y': 9.0, 'series': 1},
 {'x': 1969, 'y': 9.0, 'series': 1},
 {'x': 1970, 'y': 9.0, 'series': 1},
 {'x': 1971, 'y': 8.9, 'series': 1},
 {'x': 1972, 'y': 8.9, 'series': 1},
 {'x': 1973, 'y': 9.0, 'series': 1},
 {'x': 1974, 'y': 9.0, 'series': 1},
 {'x': 1975, 'y': 8.9, 'series': 1},
 {'x': 1976, 'y': 8.3, 'series': 1},
 {'x': 1977, 'y': 8.0, 'series': 1},
 {'x': 1978, 'y': 8.1, 'series': 1},
 {'x': 1979, 'y': 8.5, 'series': 1},
 {'x': 1980, 'y': 8.9, 'series': 1},
 {'x': 1981, 'y': 8.6, 'series': 1},
 {'x': 1982, 'y': 8.9, 'series': 1},
 {'x': 1983, 'y': 8.8, 'series': 1},
 {'x': 1984, 'y': 8.7, 'series': 1},
 {'x': 1985, 'y': 8.9, 'series': 1},
 {'x': 1986, 'y': 9.2, 'series': 1},
 {'x': 1987, 'y': 9.9, 'series': 1},
 {'x': 1988, 'y': 10.7, 'series': 1},
 {'x': 1989, 'y': 11.9, 'series': 1},
 {'x': 1990, 'y': 10.2, 'series': 1},
 {'x': 1991, 'y': 10.3, 'series': 1},
 {'x': 1992, 'y': 10.5, 'series': 1},
 {'x': 1993, 'y': 11.3, 'series': 1},
 {'x': 1994, 'y': 11.4, 'series': 1},
 {'x': 1995, 'y': 10.9, 'series': 1},
 {'x': 1996, 'y': 11.5, 'series': 1},
 {'x': 1997, 'y': 12.5, 'series': 1},
 {'x': 1998, 'y': 13.0, 'series': 1},
 {'x': 1999, 'y': 13.3, 'series': 1},
 {'x': 2000, 'y': 14.6, 'series': 1},
 {'x': 2001, 'y': 13.9, 'series': 1},
 {'x': 2002, 'y': 13.4, 'series': 1},
 {'x': 2003, 'y': 13.2, 'series': 1},
 {'x': 2004, 'y': 14.0, 'series': 1},
 {'x': 2005, 'y': 14.7, 'series': 1},
 {'x': 2006, 'y': 15.4, 'series': 1},
 {'x': 2007, 'y': 15.6, 'series': 1},
 {'x': 2008, 'y': 14.4, 'series': 1},
 {'x': 2009, 'y': 13.3, 'series': 1},
 {'x': 2010, 'y': 13.6, 'series': 1},
 {'x': 2011, 'y': 13.5, 'series': 1},
 {'x': 2012, 'y': 13.1, 'series': 1},
 {'x': 2013, 'y': 14.2, 'series': 1},
 {'x': 2014, 'y': 14.5, 'series': 1},
 {'x': 2015, 'y': 15.7, 'series': 1},
 {'x': 2016, 'y': 13.2, 'series': 1},
 {'x': 2017, 'y': 14.4, 'series': 1},
 {'x': 2018, 'y': 14.4, 'series': 1},
 {'x': 2019, 'y': 14.4, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1982, 'y': 6.9, 'series': 0},
 {'x': 1983, 'y': 6.5, 'series': 0},
 {'x': 1984, 'y': 6.6, 'series': 0},
 {'x': 1985, 'y': 7.2, 'series': 0},
 {'x': 1986, 'y': 7.2, 'series': 0},
 {'x': 1987, 'y': 8.1, 'series': 0},
 {'x': 1988, 'y': 8.6, 'series': 0},
 {'x': 1989, 'y': 9.7, 'series': 0},
 {'x': 1990, 'y': 7.8, 'series': 0},
 {'x': 1991, 'y': 7.7, 'series': 0},
 {'x': 1992, 'y': 7.7, 'series': 0},
 {'x': 1993, 'y': 8.5, 'series': 0},
 {'x': 1994, 'y': 9.2, 'series': 0},
 {'x': 1995, 'y': 7.7, 'series': 0},
 {'x': 1996, 'y': 8.1, 'series': 0},
 {'x': 1997, 'y': 8.8, 'series': 0},
 {'x': 1998, 'y': 9.3, 'series': 0},
 {'x': 1999, 'y': 9.6, 'series': 0},
 {'x': 2000, 'y': 10.9, 'series': 0},
 {'x': 2001, 'y': 10.3, 'series': 0},
 {'x': 2002, 'y': 9.9, 'series': 0},
 {'x': 2003, 'y': 9.8, 'series': 0},
 {'x': 2004, 'y': 10.6, 'series': 0},
 {'x': 2005, 'y': 11.2, 'series': 0},
 {'x': 2006, 'y': 11.8, 'series': 0},
 {'x': 2007, 'y': 12.1, 'series': 0},
 {'x': 2008, 'y': 10.9, 'series': 0},
 {'x': 2009, 'y': 9.9, 'series': 0},
 {'x': 2010, 'y': 10.2, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (individuals)', type: 'scatter', values: [
{'x': 1982, 'y': 6.9, 'series': 1},
 {'x': 1983, 'y': 6.5, 'series': 1},
 {'x': 1984, 'y': 6.6, 'series': 1},
 {'x': 1985, 'y': 7.2, 'series': 1},
 {'x': 1986, 'y': 7.2, 'series': 1},
 {'x': 1987, 'y': 8.1, 'series': 1},
 {'x': 1988, 'y': 8.6, 'series': 1},
 {'x': 1989, 'y': 9.7, 'series': 1},
 {'x': 1990, 'y': 7.8, 'series': 1},
 {'x': 1991, 'y': 7.7, 'series': 1},
 {'x': 1992, 'y': 7.7, 'series': 1},
 {'x': 1993, 'y': 8.5, 'series': 1},
 {'x': 1994, 'y': 9.2, 'series': 1},
 {'x': 1995, 'y': 7.7, 'series': 1},
 {'x': 1996, 'y': 8.1, 'series': 1},
 {'x': 1997, 'y': 8.8, 'series': 1},
 {'x': 1998, 'y': 9.3, 'series': 1},
 {'x': 1999, 'y': 9.6, 'series': 1},
 {'x': 2000, 'y': 10.9, 'series': 1},
 {'x': 2001, 'y': 10.3, 'series': 1},
 {'x': 2002, 'y': 9.9, 'series': 1},
 {'x': 2003, 'y': 9.8, 'series': 1},
 {'x': 2004, 'y': 10.6, 'series': 1},
 {'x': 2005, 'y': 11.2, 'series': 1},
 {'x': 2006, 'y': 11.8, 'series': 1},
 {'x': 2007, 'y': 12.1, 'series': 1},
 {'x': 2008, 'y': 10.9, 'series': 1},
 {'x': 2009, 'y': 9.9, 'series': 1},
 {'x': 2010, 'y': 10.2, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1976, 'y': 13.0, 'series': 0},
 {'x': 1977, 'y': 13.6, 'series': 0},
 {'x': 1978, 'y': 12.9, 'series': 0},
 {'x': 1979, 'y': 13.1, 'series': 0},
 {'x': 1980, 'y': 12.7, 'series': 0},
 {'x': 1981, 'y': 12.0, 'series': 0},
 {'x': 1982, 'y': 12.2, 'series': 0},
 {'x': 1983, 'y': 12.9, 'series': 0},
 {'x': 1984, 'y': 13.0, 'series': 0},
 {'x': 1985, 'y': 12.1, 'series': 0},
 {'x': 1986, 'y': 11.6, 'series': 0},
 {'x': 1987, 'y': 11.5, 'series': 0},
 {'x': 1988, 'y': 11.1, 'series': 0},
 {'x': 1989, 'y': 10.5, 'series': 0},
 {'x': 1990, 'y': 11.7, 'series': 0},
 {'x': 1991, 'y': 11.5, 'series': 0},
 {'x': 1992, 'y': 11.8, 'series': 0},
 {'x': 1993, 'y': 11.9, 'series': 0},
 {'x': 1994, 'y': 11.8, 'series': 0},
 {'x': 1995, 'y': 12.1, 'series': 0},
 {'x': 1996, 'y': 12.7, 'series': 0},
 {'x': 1997, 'y': 12.7, 'series': 0},
 {'x': 1998, 'y': 12.9, 'series': 0},
 {'x': 1999, 'y': 12.4, 'series': 0},
 {'x': 2000, 'y': 12.8, 'series': 0},
 {'x': 2001, 'y': 12.5, 'series': 0},
 {'x': 2002, 'y': 12.9, 'series': 0},
 {'x': 2003, 'y': 13.2, 'series': 0},
 {'x': 2004, 'y': 13.4, 'series': 0},
 {'x': 2005, 'y': 13.0, 'series': 0},
 {'x': 2006, 'y': 13.4, 'series': 0},
 {'x': 2007, 'y': 13.3, 'series': 0},
 {'x': 2008, 'y': 13.4, 'series': 0},
 {'x': 2009, 'y': 13.7, 'series': 0},
 {'x': 2010, 'y': 13.5, 'series': 0},
 {'x': 2011, 'y': 13.3, 'series': 0},
 {'x': 2012, 'y': 13.7, 'series': 0},
 {'x': 2013, 'y': 13.4, 'series': 0},
 {'x': 2014, 'y': 13.0, 'series': 0},
 {'x': 2015, 'y': 14.2, 'series': 0},
 {'x': 2016, 'y': 13.0, 'series': 0},
 {'x': 2017, 'y': 12.6, 'series': 0},
 {'x': 2018, 'y': 12.3, 'series': 0},
 {'x': 2019, 'y': 12.1, 'series': 0},
 {'x': 2020, 'y': 9.3, 'series': 0}], yAxis: 1},
 {key: 'Statistics Canada - Equivalised after-tax household income', type: 'scatter', values: [
{'x': 1976, 'y': 13.0, 'series': 1},
 {'x': 1977, 'y': 13.6, 'series': 1},
 {'x': 1978, 'y': 12.9, 'series': 1},
 {'x': 1979, 'y': 13.1, 'series': 1},
 {'x': 1980, 'y': 12.7, 'series': 1},
 {'x': 1981, 'y': 12.0, 'series': 1},
 {'x': 1982, 'y': 12.2, 'series': 1},
 {'x': 1983, 'y': 12.9, 'series': 1},
 {'x': 1984, 'y': 13.0, 'series': 1},
 {'x': 1985, 'y': 12.1, 'series': 1},
 {'x': 1986, 'y': 11.6, 'series': 1},
 {'x': 1987, 'y': 11.5, 'series': 1},
 {'x': 1988, 'y': 11.1, 'series': 1},
 {'x': 1989, 'y': 10.5, 'series': 1},
 {'x': 1990, 'y': 11.7, 'series': 1},
 {'x': 1991, 'y': 11.5, 'series': 1},
 {'x': 1992, 'y': 11.8, 'series': 1},
 {'x': 1993, 'y': 11.9, 'series': 1},
 {'x': 1994, 'y': 11.8, 'series': 1},
 {'x': 1995, 'y': 12.1, 'series': 1},
 {'x': 1996, 'y': 12.7, 'series': 1},
 {'x': 1997, 'y': 12.7, 'series': 1},
 {'x': 1998, 'y': 12.9, 'series': 1},
 {'x': 1999, 'y': 12.4, 'series': 1},
 {'x': 2000, 'y': 12.8, 'series': 1},
 {'x': 2001, 'y': 12.5, 'series': 1},
 {'x': 2002, 'y': 12.9, 'series': 1},
 {'x': 2003, 'y': 13.2, 'series': 1},
 {'x': 2004, 'y': 13.4, 'series': 1},
 {'x': 2005, 'y': 13.0, 'series': 1},
 {'x': 2006, 'y': 13.4, 'series': 1},
 {'x': 2007, 'y': 13.3, 'series': 1},
 {'x': 2008, 'y': 13.4, 'series': 1},
 {'x': 2009, 'y': 13.7, 'series': 1},
 {'x': 2010, 'y': 13.5, 'series': 1},
 {'x': 2011, 'y': 13.3, 'series': 1},
 {'x': 2012, 'y': 13.7, 'series': 1},
 {'x': 2013, 'y': 13.4, 'series': 1},
 {'x': 2014, 'y': 13.0, 'series': 1},
 {'x': 2015, 'y': 14.2, 'series': 1},
 {'x': 2016, 'y': 13.0, 'series': 1},
 {'x': 2017, 'y': 12.6, 'series': 1},
 {'x': 2018, 'y': 12.3, 'series': 1},
 {'x': 2019, 'y': 12.1, 'series': 1},
 {'x': 2020, 'y': 9.3, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1931, 'y': 234.9, 'series': 0},
 {'x': 1941, 'y': 219.3, 'series': 0},
 {'x': 1950, 'y': 167.9, 'series': 0},
 {'x': 1953, 'y': 165.4, 'series': 0},
 {'x': 1956, 'y': 172.6, 'series': 0},
 {'x': 1959, 'y': 173.6, 'series': 0},
 {'x': 1964, 'y': 180.4, 'series': 0},
 {'x': 1967, 'y': 177.9, 'series': 0},
 {'x': 1973, 'y': 178.6, 'series': 0},
 {'x': 1981, 'y': 179.3, 'series': 0},
 {'x': 1986, 'y': 182.9, 'series': 0},
 {'x': 1988, 'y': 186.3, 'series': 0},
 {'x': 1990, 'y': 184.7, 'series': 0},
 {'x': 1991, 'y': 188.1, 'series': 0},
 {'x': 1992, 'y': 182.0, 'series': 0},
 {'x': 1993, 'y': 182.2, 'series': 0},
 {'x': 1994, 'y': 183.5, 'series': 0},
 {'x': 1997, 'y': 176.3, 'series': 0},
 {'x': 1998, 'y': 179.5, 'series': 0},
 {'x': 1999, 'y': 181.2, 'series': 0},
 {'x': 2000, 'y': 180.3, 'series': 0},
 {'x': 2001, 'y': 181.5, 'series': 0},
 {'x': 2002, 'y': 183.0, 'series': 0},
 {'x': 2003, 'y': 183.8, 'series': 0},
 {'x': 2004, 'y': 184.3, 'series': 0},
 {'x': 2005, 'y': 186.9, 'series': 0},
 {'x': 2006, 'y': 187.3, 'series': 0},
 {'x': 2007, 'y': 188.7, 'series': 0},
 {'x': 2008, 'y': 188.4, 'series': 0},
 {'x': 2009, 'y': 190.4, 'series': 0},
 {'x': 2010, 'y': 188.5, 'series': 0},
 {'x': 2011, 'y': 190.9, 'series': 0},
 {'x': 2012, 'y': 189.8, 'series': 0},
 {'x': 2013, 'y': 194.4, 'series': 0},
 {'x': 2014, 'y': 190.4, 'series': 0},
 {'x': 2015, 'y': 190.7, 'series': 0},
 {'x': 2016, 'y': 188.3, 'series': 0},
 {'x': 2017, 'y': 190.8, 'series': 0},
 {'x': 2018, 'y': 188.8, 'series': 0},
 {'x': 2019, 'y': 189.7, 'series': 0},
 {'x': 2020, 'y': 183.3, 'series': 0}], yAxis: 1},
 {key: "Atkinson (2008) 'Census' - Gross individual earnings", type: 'scatter', values: [
{'x': 1931, 'y': 243.2, 'series': 1},
 {'x': 1941, 'y': 227.1, 'series': 1},
 {'x': 1951, 'y': 173.8, 'series': 1},
 {'x': 1961, 'y': 187.7, 'series': 1},
 {'x': 1971, 'y': 203.7, 'series': 1},
 {'x': 2020, 'y': null, 'series': 1}], yAxis: 1},
 {key: "Atkinson (2008) 'Manf' - Gross weekly individual earnings", type: 'scatter', values: [
{'x': 1931, 'y': null, 'series': 2},
 {'x': 1950, 'y': 153.9, 'series': 2},
 {'x': 1953, 'y': 151.7, 'series': 2},
 {'x': 1956, 'y': 158.2, 'series': 2},
 {'x': 1959, 'y': 159.1, 'series': 2},
 {'x': 1964, 'y': 165.4, 'series': 2},
 {'x': 1967, 'y': 163.1, 'series': 2},
 {'x': 2020, 'y': null, 'series': 2}], yAxis: 1},
 {key: "Atkinson (2008) 'OECD LMS' - Gross individual earnings", type: 'scatter', values: [
{'x': 1931, 'y': null, 'series': 3},
 {'x': 1967, 'y': 177.9, 'series': 3},
 {'x': 1973, 'y': 178.6, 'series': 3},
 {'x': 1981, 'y': 179.3, 'series': 3},
 {'x': 1986, 'y': 182.9, 'series': 3},
 {'x': 1988, 'y': 186.3, 'series': 3},
 {'x': 1990, 'y': 184.7, 'series': 3},
 {'x': 1991, 'y': 188.1, 'series': 3},
 {'x': 1992, 'y': 182.0, 'series': 3},
 {'x': 1993, 'y': 182.2, 'series': 3},
 {'x': 1994, 'y': 183.5, 'series': 3},
 {'x': 2020, 'y': null, 'series': 3}], yAxis: 1},
 {key: 'OECD - Gross individual earnings', type: 'scatter', values: [
{'x': 1931, 'y': null, 'series': 4},
 {'x': 1997, 'y': 176.3, 'series': 4},
 {'x': 1998, 'y': 179.5, 'series': 4},
 {'x': 1999, 'y': 181.2, 'series': 4},
 {'x': 2000, 'y': 180.3, 'series': 4},
 {'x': 2001, 'y': 181.5, 'series': 4},
 {'x': 2002, 'y': 183.0, 'series': 4},
 {'x': 2003, 'y': 183.8, 'series': 4},
 {'x': 2004, 'y': 184.3, 'series': 4},
 {'x': 2005, 'y': 186.9, 'series': 4},
 {'x': 2006, 'y': 187.3, 'series': 4},
 {'x': 2007, 'y': 188.7, 'series': 4},
 {'x': 2008, 'y': 188.4, 'series': 4},
 {'x': 2009, 'y': 190.4, 'series': 4},
 {'x': 2010, 'y': 188.5, 'series': 4},
 {'x': 2011, 'y': 190.9, 'series': 4},
 {'x': 2012, 'y': 189.8, 'series': 4},
 {'x': 2013, 'y': 194.4, 'series': 4},
 {'x': 2014, 'y': 190.4, 'series': 4},
 {'x': 2015, 'y': 190.7, 'series': 4},
 {'x': 2016, 'y': 188.3, 'series': 4},
 {'x': 2017, 'y': 190.8, 'series': 4},
 {'x': 2018, 'y': 188.8, 'series': 4},
 {'x': 2019, 'y': 189.7, 'series': 4},
 {'x': 2020, 'y': 183.3, 'series': 4}], yAxis: 1}]; 
$scope.data8 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1902, 'y': 36.4, 'series': 0},
 {'x': 1945, 'y': 25.6, 'series': 0},
 {'x': 1946, 'y': 27.4, 'series': 0},
 {'x': 1947, 'y': 28.4, 'series': 0},
 {'x': 1948, 'y': 32.0, 'series': 0},
 {'x': 1949, 'y': 30.9, 'series': 0},
 {'x': 1950, 'y': 30.2, 'series': 0},
 {'x': 1951, 'y': 27.9, 'series': 0},
 {'x': 1952, 'y': 29.0, 'series': 0},
 {'x': 1953, 'y': 27.4, 'series': 0},
 {'x': 1961, 'y': 25.6, 'series': 0},
 {'x': 1962, 'y': 23.8, 'series': 0},
 {'x': 1963, 'y': 25.4, 'series': 0},
 {'x': 1964, 'y': 24.2, 'series': 0},
 {'x': 1965, 'y': 22.2, 'series': 0},
 {'x': 1966, 'y': 24.9, 'series': 0},
 {'x': 1967, 'y': 21.3, 'series': 0},
 {'x': 1968, 'y': 22.1, 'series': 0},
 {'x': 1970, 'y': 22.9, 'series': 0},
 {'x': 1984, 'y': 23.5, 'series': 0},
 {'x': 1999, 'y': 26.6, 'series': 0},
 {'x': 2012, 'y': 28.7, 'series': 0},
 {'x': 2016, 'y': 28.7, 'series': 0}], yAxis: 1},
 {key: 'Di Matteo & Davies (2021) - Estate Multiplier Estimates (Ontario, families)', type: 'scatter', values: [
{'x': 1902, 'y': 36.4, 'series': 1},
 {'x': 2016, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'Di Matteo & Davies (2021) - Estate Multiplier Estimates (Canada, adults)', type: 'scatter', values: [
{'x': 1902, 'y': null, 'series': 2},
 {'x': 1945, 'y': 25.6, 'series': 2},
 {'x': 1946, 'y': 27.4, 'series': 2},
 {'x': 1947, 'y': 28.4, 'series': 2},
 {'x': 1948, 'y': 32.0, 'series': 2},
 {'x': 1949, 'y': 30.9, 'series': 2},
 {'x': 1950, 'y': 30.2, 'series': 2},
 {'x': 1951, 'y': 27.9, 'series': 2},
 {'x': 1952, 'y': 29.0, 'series': 2},
 {'x': 1953, 'y': 27.4, 'series': 2},
 {'x': 1961, 'y': 25.6, 'series': 2},
 {'x': 1962, 'y': 23.8, 'series': 2},
 {'x': 1963, 'y': 25.4, 'series': 2},
 {'x': 1964, 'y': 24.2, 'series': 2},
 {'x': 1965, 'y': 22.2, 'series': 2},
 {'x': 1966, 'y': 24.9, 'series': 2},
 {'x': 1967, 'y': 21.3, 'series': 2},
 {'x': 1968, 'y': 22.1, 'series': 2},
 {'x': 2016, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'Di Matteo & Davies (2021) - Statistics Canada Survey Estimates (Canada, families)', type: 'scatter', values: [
{'x': 1902, 'y': null, 'series': 3},
 {'x': 1970, 'y': 22.9, 'series': 3},
 {'x': 1984, 'y': 23.5, 'series': 3},
 {'x': 1999, 'y': 26.6, 'series': 3},
 {'x': 2012, 'y': 28.7, 'series': 3},
 {'x': 2016, 'y': 28.7, 'series': 3}], yAxis: 1}]
});