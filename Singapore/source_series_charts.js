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
{'x': 1966, 'y': 50.0, 'series': 0},
 {'x': 1973, 'y': 46.0, 'series': 0},
 {'x': 1974, 'y': 45.0, 'series': 0},
 {'x': 1975, 'y': 45.0, 'series': 0},
 {'x': 1976, 'y': 44.0, 'series': 0},
 {'x': 1977, 'y': 46.0, 'series': 0},
 {'x': 1978, 'y': 42.0, 'series': 0},
 {'x': 1979, 'y': 42.0, 'series': 0},
 {'x': 1980, 'y': 41.0, 'series': 0},
 {'x': 1981, 'y': 44.0, 'series': 0},
 {'x': 1982, 'y': 46.0, 'series': 0},
 {'x': 1983, 'y': 48.0, 'series': 0},
 {'x': 1984, 'y': 47.0, 'series': 0},
 {'x': 1985, 'y': 46.0, 'series': 0},
 {'x': 1986, 'y': 46.0, 'series': 0},
 {'x': 1987, 'y': 47.0, 'series': 0},
 {'x': 1988, 'y': 48.0, 'series': 0},
 {'x': 1989, 'y': 49.0, 'series': 0}], yAxis: 1},
 {key: 'Krongkaew & Ragayah (2006) - Individual income (employed population) (Rao figures)', type: 'scatter', values: [
{'x': 1966, 'y': 49.8, 'series': 1},
 {'x': 1975, 'y': 44.8, 'series': 1},
 {'x': 1979, 'y': 42.4, 'series': 1},
 {'x': 1981, 'y': 44.3, 'series': 1},
 {'x': 1982, 'y': 46.5, 'series': 1},
 {'x': 1984, 'y': 47.4, 'series': 1},
 {'x': 1989, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'Krongkaew & Ragayah (2006) - Individual income (employed population) ', type: 'scatter', values: [
{'x': 1966, 'y': null, 'series': 2},
 {'x': 1973, 'y': 46.0, 'series': 2},
 {'x': 1974, 'y': 45.0, 'series': 2},
 {'x': 1975, 'y': 45.0, 'series': 2},
 {'x': 1976, 'y': 44.0, 'series': 2},
 {'x': 1977, 'y': 46.0, 'series': 2},
 {'x': 1978, 'y': 42.0, 'series': 2},
 {'x': 1979, 'y': 42.0, 'series': 2},
 {'x': 1980, 'y': 41.0, 'series': 2},
 {'x': 1981, 'y': 44.0, 'series': 2},
 {'x': 1982, 'y': 46.0, 'series': 2},
 {'x': 1983, 'y': 48.0, 'series': 2},
 {'x': 1984, 'y': 47.0, 'series': 2},
 {'x': 1985, 'y': 46.0, 'series': 2},
 {'x': 1986, 'y': 46.0, 'series': 2},
 {'x': 1987, 'y': 47.0, 'series': 2},
 {'x': 1988, 'y': 48.0, 'series': 2},
 {'x': 1989, 'y': 49.0, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1990, 'y': 43.6, 'series': 0},
 {'x': 1995, 'y': 44.3, 'series': 0},
 {'x': 1997, 'y': 44.4, 'series': 0},
 {'x': 1998, 'y': 44.6, 'series': 0},
 {'x': 1999, 'y': 46.7, 'series': 0},
 {'x': 2000, 'y': 49.0, 'series': 0},
 {'x': 2001, 'y': 49.3, 'series': 0},
 {'x': 2002, 'y': 50.5, 'series': 0},
 {'x': 2003, 'y': 51.2, 'series': 0},
 {'x': 2004, 'y': 51.7, 'series': 0},
 {'x': 2005, 'y': 52.2, 'series': 0}], yAxis: 1},
 {key: 'Krongkaew & Ragayah (2006) - Household per capita monthly earnings (Rao figures)', type: 'scatter', values: [
{'x': 1990, 'y': 43.6, 'series': 1},
 {'x': 1995, 'y': 44.3, 'series': 1},
 {'x': 1997, 'y': 44.4, 'series': 1},
 {'x': 1998, 'y': 44.6, 'series': 1},
 {'x': 1999, 'y': 46.7, 'series': 1},
 {'x': 2000, 'y': 49.0, 'series': 1},
 {'x': 2001, 'y': 49.3, 'series': 1},
 {'x': 2002, 'y': 50.5, 'series': 1},
 {'x': 2003, 'y': 51.2, 'series': 1},
 {'x': 2004, 'y': 51.7, 'series': 1},
 {'x': 2005, 'y': 52.2, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2000, 'y': 41.4, 'series': 0},
 {'x': 2001, 'y': 41.9, 'series': 0},
 {'x': 2002, 'y': 41.4, 'series': 0},
 {'x': 2003, 'y': 42.2, 'series': 0},
 {'x': 2004, 'y': 41.9, 'series': 0},
 {'x': 2005, 'y': 42.2, 'series': 0},
 {'x': 2006, 'y': 41.8, 'series': 0},
 {'x': 2007, 'y': 43.9, 'series': 0},
 {'x': 2008, 'y': 42.4, 'series': 0},
 {'x': 2009, 'y': 42.2, 'series': 0},
 {'x': 2010, 'y': 42.5, 'series': 0},
 {'x': 2011, 'y': 42.3, 'series': 0},
 {'x': 2012, 'y': 43.2, 'series': 0},
 {'x': 2013, 'y': 40.9, 'series': 0},
 {'x': 2014, 'y': 41.1, 'series': 0},
 {'x': 2015, 'y': 40.9, 'series': 0},
 {'x': 2016, 'y': 40.1, 'series': 0},
 {'x': 2017, 'y': 40.2, 'series': 0},
 {'x': 2018, 'y': 40.3, 'series': 0},
 {'x': 2019, 'y': 39.8, 'series': 0},
 {'x': 2020, 'y': 37.5, 'series': 0}], yAxis: 1},
 {key: 'SingStat - Household per capita disposable earnings (employed population)', type: 'scatter', values: [
{'x': 2000, 'y': 41.4, 'series': 1},
 {'x': 2001, 'y': 41.9, 'series': 1},
 {'x': 2002, 'y': 41.4, 'series': 1},
 {'x': 2003, 'y': 42.2, 'series': 1},
 {'x': 2004, 'y': 41.9, 'series': 1},
 {'x': 2005, 'y': 42.2, 'series': 1},
 {'x': 2006, 'y': 41.8, 'series': 1},
 {'x': 2007, 'y': 43.9, 'series': 1},
 {'x': 2008, 'y': 42.4, 'series': 1},
 {'x': 2009, 'y': 42.2, 'series': 1},
 {'x': 2010, 'y': 42.5, 'series': 1},
 {'x': 2011, 'y': 42.3, 'series': 1},
 {'x': 2012, 'y': 43.2, 'series': 1},
 {'x': 2013, 'y': 40.9, 'series': 1},
 {'x': 2014, 'y': 41.1, 'series': 1},
 {'x': 2015, 'y': 40.9, 'series': 1},
 {'x': 2016, 'y': 40.1, 'series': 1},
 {'x': 2017, 'y': 40.2, 'series': 1},
 {'x': 2018, 'y': 40.3, 'series': 1},
 {'x': 2019, 'y': 39.8, 'series': 1},
 {'x': 2020, 'y': 37.5, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1947, 'y': 10.8, 'series': 0},
 {'x': 1948, 'y': 10.8, 'series': 0},
 {'x': 1949, 'y': 10.3, 'series': 0},
 {'x': 1950, 'y': 12.6, 'series': 0},
 {'x': 1951, 'y': 14.6, 'series': 0},
 {'x': 1952, 'y': 13.7, 'series': 0},
 {'x': 1953, 'y': 12.4, 'series': 0},
 {'x': 1954, 'y': 12.3, 'series': 0},
 {'x': 1956, 'y': 12.3, 'series': 0},
 {'x': 1957, 'y': 12.2, 'series': 0},
 {'x': 1958, 'y': 11.6, 'series': 0},
 {'x': 1959, 'y': 12.9, 'series': 0},
 {'x': 1960, 'y': 10.9, 'series': 0},
 {'x': 1961, 'y': 11.1, 'series': 0},
 {'x': 1962, 'y': 11.0, 'series': 0},
 {'x': 1963, 'y': 10.8, 'series': 0},
 {'x': 1964, 'y': 12.5, 'series': 0},
 {'x': 1965, 'y': 10.8, 'series': 0},
 {'x': 1966, 'y': 10.3, 'series': 0},
 {'x': 1967, 'y': 10.1, 'series': 0},
 {'x': 1968, 'y': 10.5, 'series': 0},
 {'x': 1969, 'y': 10.4, 'series': 0},
 {'x': 1970, 'y': 11.0, 'series': 0},
 {'x': 1971, 'y': 10.8, 'series': 0},
 {'x': 1972, 'y': 11.0, 'series': 0},
 {'x': 1973, 'y': 11.4, 'series': 0},
 {'x': 1974, 'y': 10.7, 'series': 0},
 {'x': 1975, 'y': 10.8, 'series': 0},
 {'x': 1976, 'y': 10.6, 'series': 0},
 {'x': 1977, 'y': 10.2, 'series': 0},
 {'x': 1978, 'y': 10.5, 'series': 0},
 {'x': 1979, 'y': 11.3, 'series': 0},
 {'x': 1980, 'y': 10.8, 'series': 0},
 {'x': 1981, 'y': 10.8, 'series': 0},
 {'x': 1982, 'y': 11.0, 'series': 0},
 {'x': 1983, 'y': 10.7, 'series': 0},
 {'x': 1984, 'y': 10.4, 'series': 0},
 {'x': 1985, 'y': 10.9, 'series': 0},
 {'x': 1986, 'y': 10.5, 'series': 0},
 {'x': 1987, 'y': 11.6, 'series': 0},
 {'x': 1988, 'y': 10.9, 'series': 0},
 {'x': 1989, 'y': 11.5, 'series': 0},
 {'x': 1990, 'y': 11.4, 'series': 0},
 {'x': 1991, 'y': 10.6, 'series': 0},
 {'x': 1992, 'y': 10.7, 'series': 0},
 {'x': 1993, 'y': 10.7, 'series': 0},
 {'x': 1994, 'y': 10.2, 'series': 0},
 {'x': 1995, 'y': 10.0, 'series': 0},
 {'x': 1996, 'y': 10.2, 'series': 0},
 {'x': 1997, 'y': 10.5, 'series': 0},
 {'x': 1998, 'y': 11.3, 'series': 0},
 {'x': 1999, 'y': 13.0, 'series': 0},
 {'x': 2000, 'y': 13.4, 'series': 0},
 {'x': 2001, 'y': 15.3, 'series': 0},
 {'x': 2002, 'y': 15.3, 'series': 0},
 {'x': 2003, 'y': 14.4, 'series': 0},
 {'x': 2004, 'y': 13.8, 'series': 0},
 {'x': 2005, 'y': 13.8, 'series': 0},
 {'x': 2006, 'y': 14.5, 'series': 0},
 {'x': 2007, 'y': 14.3, 'series': 0},
 {'x': 2008, 'y': 15.4, 'series': 0},
 {'x': 2009, 'y': 13.9, 'series': 0},
 {'x': 2010, 'y': 13.6, 'series': 0},
 {'x': 2011, 'y': 14.0, 'series': 0},
 {'x': 2012, 'y': 13.8, 'series': 0},
 {'x': 2013, 'y': 13.8, 'series': 0},
 {'x': 2014, 'y': 14.2, 'series': 0},
 {'x': 2015, 'y': 14.2, 'series': 0},
 {'x': 2016, 'y': 14.2, 'series': 0},
 {'x': 2017, 'y': 14.2, 'series': 0},
 {'x': 2018, 'y': 14.2, 'series': 0},
 {'x': 2019, 'y': 14.2, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1947, 'y': 10.8, 'series': 1},
 {'x': 1948, 'y': 10.8, 'series': 1},
 {'x': 1949, 'y': 10.3, 'series': 1},
 {'x': 1950, 'y': 12.6, 'series': 1},
 {'x': 1951, 'y': 14.6, 'series': 1},
 {'x': 1952, 'y': 13.7, 'series': 1},
 {'x': 1953, 'y': 12.4, 'series': 1},
 {'x': 1954, 'y': 12.3, 'series': 1},
 {'x': 1956, 'y': 12.3, 'series': 1},
 {'x': 1957, 'y': 12.2, 'series': 1},
 {'x': 1958, 'y': 11.6, 'series': 1},
 {'x': 1959, 'y': 12.9, 'series': 1},
 {'x': 1960, 'y': 10.9, 'series': 1},
 {'x': 1961, 'y': 11.1, 'series': 1},
 {'x': 1962, 'y': 11.0, 'series': 1},
 {'x': 1963, 'y': 10.8, 'series': 1},
 {'x': 1964, 'y': 12.5, 'series': 1},
 {'x': 1965, 'y': 10.8, 'series': 1},
 {'x': 1966, 'y': 10.3, 'series': 1},
 {'x': 1967, 'y': 10.1, 'series': 1},
 {'x': 1968, 'y': 10.5, 'series': 1},
 {'x': 1969, 'y': 10.4, 'series': 1},
 {'x': 1970, 'y': 11.0, 'series': 1},
 {'x': 1971, 'y': 10.8, 'series': 1},
 {'x': 1972, 'y': 11.0, 'series': 1},
 {'x': 1973, 'y': 11.4, 'series': 1},
 {'x': 1974, 'y': 10.7, 'series': 1},
 {'x': 1975, 'y': 10.8, 'series': 1},
 {'x': 1976, 'y': 10.6, 'series': 1},
 {'x': 1977, 'y': 10.2, 'series': 1},
 {'x': 1978, 'y': 10.5, 'series': 1},
 {'x': 1979, 'y': 11.3, 'series': 1},
 {'x': 1980, 'y': 10.8, 'series': 1},
 {'x': 1981, 'y': 10.8, 'series': 1},
 {'x': 1982, 'y': 11.0, 'series': 1},
 {'x': 1983, 'y': 10.7, 'series': 1},
 {'x': 1984, 'y': 10.4, 'series': 1},
 {'x': 1985, 'y': 10.9, 'series': 1},
 {'x': 1986, 'y': 10.5, 'series': 1},
 {'x': 1987, 'y': 11.6, 'series': 1},
 {'x': 1988, 'y': 10.9, 'series': 1},
 {'x': 1989, 'y': 11.5, 'series': 1},
 {'x': 1990, 'y': 11.4, 'series': 1},
 {'x': 1991, 'y': 10.6, 'series': 1},
 {'x': 1992, 'y': 10.7, 'series': 1},
 {'x': 1993, 'y': 10.7, 'series': 1},
 {'x': 1994, 'y': 10.2, 'series': 1},
 {'x': 1995, 'y': 10.0, 'series': 1},
 {'x': 1996, 'y': 10.2, 'series': 1},
 {'x': 1997, 'y': 10.5, 'series': 1},
 {'x': 1998, 'y': 11.3, 'series': 1},
 {'x': 1999, 'y': 13.0, 'series': 1},
 {'x': 2000, 'y': 13.4, 'series': 1},
 {'x': 2001, 'y': 15.3, 'series': 1},
 {'x': 2002, 'y': 15.3, 'series': 1},
 {'x': 2003, 'y': 14.4, 'series': 1},
 {'x': 2004, 'y': 13.8, 'series': 1},
 {'x': 2005, 'y': 13.8, 'series': 1},
 {'x': 2006, 'y': 14.5, 'series': 1},
 {'x': 2007, 'y': 14.3, 'series': 1},
 {'x': 2008, 'y': 15.4, 'series': 1},
 {'x': 2009, 'y': 13.9, 'series': 1},
 {'x': 2010, 'y': 13.6, 'series': 1},
 {'x': 2011, 'y': 14.0, 'series': 1},
 {'x': 2012, 'y': 13.8, 'series': 1},
 {'x': 2013, 'y': 13.8, 'series': 1},
 {'x': 2014, 'y': 14.2, 'series': 1},
 {'x': 2015, 'y': 14.2, 'series': 1},
 {'x': 2016, 'y': 14.2, 'series': 1},
 {'x': 2017, 'y': 14.2, 'series': 1},
 {'x': 2018, 'y': 14.2, 'series': 1},
 {'x': 2019, 'y': 14.2, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1947, 'y': 10.9, 'series': 0},
 {'x': 1948, 'y': 10.9, 'series': 0},
 {'x': 1949, 'y': 10.4, 'series': 0},
 {'x': 1950, 'y': 12.7, 'series': 0},
 {'x': 1951, 'y': 14.8, 'series': 0},
 {'x': 1952, 'y': 13.8, 'series': 0},
 {'x': 1953, 'y': 12.5, 'series': 0},
 {'x': 1954, 'y': 12.4, 'series': 0},
 {'x': 1956, 'y': 12.4, 'series': 0},
 {'x': 1957, 'y': 12.3, 'series': 0},
 {'x': 1958, 'y': 11.7, 'series': 0},
 {'x': 1959, 'y': 13.1, 'series': 0},
 {'x': 1960, 'y': 11.0, 'series': 0},
 {'x': 1961, 'y': 11.2, 'series': 0},
 {'x': 1962, 'y': 11.1, 'series': 0},
 {'x': 1963, 'y': 10.9, 'series': 0},
 {'x': 1964, 'y': 12.6, 'series': 0},
 {'x': 1965, 'y': 10.9, 'series': 0},
 {'x': 1966, 'y': 10.4, 'series': 0},
 {'x': 1967, 'y': 10.2, 'series': 0},
 {'x': 1968, 'y': 10.6, 'series': 0},
 {'x': 1969, 'y': 10.2, 'series': 0},
 {'x': 1970, 'y': 10.8, 'series': 0},
 {'x': 1971, 'y': 10.6, 'series': 0},
 {'x': 1972, 'y': 10.8, 'series': 0},
 {'x': 1973, 'y': 11.2, 'series': 0},
 {'x': 1974, 'y': 10.5, 'series': 0},
 {'x': 1975, 'y': 10.6, 'series': 0},
 {'x': 1976, 'y': 10.4, 'series': 0},
 {'x': 1977, 'y': 10.0, 'series': 0},
 {'x': 1978, 'y': 10.3, 'series': 0},
 {'x': 1979, 'y': 11.2, 'series': 0},
 {'x': 1980, 'y': 10.6, 'series': 0},
 {'x': 1981, 'y': 10.6, 'series': 0},
 {'x': 1982, 'y': 10.8, 'series': 0},
 {'x': 1983, 'y': 10.5, 'series': 0},
 {'x': 1984, 'y': 10.2, 'series': 0},
 {'x': 1985, 'y': 10.7, 'series': 0},
 {'x': 1986, 'y': 10.3, 'series': 0},
 {'x': 1987, 'y': 11.4, 'series': 0},
 {'x': 1988, 'y': 10.7, 'series': 0},
 {'x': 1989, 'y': 11.3, 'series': 0},
 {'x': 1990, 'y': 11.2, 'series': 0},
 {'x': 1991, 'y': 10.4, 'series': 0},
 {'x': 1993, 'y': 10.5, 'series': 0},
 {'x': 1994, 'y': 10.0, 'series': 0},
 {'x': 1995, 'y': 9.8, 'series': 0},
 {'x': 1996, 'y': 10.0, 'series': 0},
 {'x': 1997, 'y': 10.3, 'series': 0},
 {'x': 1998, 'y': 11.1, 'series': 0},
 {'x': 1999, 'y': 12.8, 'series': 0},
 {'x': 2000, 'y': 13.3, 'series': 0},
 {'x': 2001, 'y': 15.1, 'series': 0},
 {'x': 2002, 'y': 15.1, 'series': 0},
 {'x': 2003, 'y': 14.2, 'series': 0},
 {'x': 2004, 'y': 13.6, 'series': 0},
 {'x': 2005, 'y': 13.6, 'series': 0},
 {'x': 2006, 'y': 14.2, 'series': 0},
 {'x': 2007, 'y': 14.1, 'series': 0},
 {'x': 2008, 'y': 15.2, 'series': 0},
 {'x': 2009, 'y': 13.7, 'series': 0},
 {'x': 2010, 'y': 13.4, 'series': 0},
 {'x': 2011, 'y': 13.9, 'series': 0},
 {'x': 2012, 'y': 13.6, 'series': 0},
 {'x': 2013, 'y': 13.6, 'series': 0},
 {'x': 2014, 'y': 14.0, 'series': 0}], yAxis: 1},
 {key: 'WID  - Pre-tax fiscal income (individuals) (excluding capital gains)', type: 'scatter', values: [
{'x': 1947, 'y': 10.9, 'series': 1},
 {'x': 1948, 'y': 10.9, 'series': 1},
 {'x': 1949, 'y': 10.4, 'series': 1},
 {'x': 1950, 'y': 12.7, 'series': 1},
 {'x': 1951, 'y': 14.8, 'series': 1},
 {'x': 1952, 'y': 13.8, 'series': 1},
 {'x': 1953, 'y': 12.5, 'series': 1},
 {'x': 1954, 'y': 12.4, 'series': 1},
 {'x': 1956, 'y': 12.4, 'series': 1},
 {'x': 1957, 'y': 12.3, 'series': 1},
 {'x': 1958, 'y': 11.7, 'series': 1},
 {'x': 1959, 'y': 13.1, 'series': 1},
 {'x': 1960, 'y': 11.0, 'series': 1},
 {'x': 1961, 'y': 11.2, 'series': 1},
 {'x': 1962, 'y': 11.1, 'series': 1},
 {'x': 1963, 'y': 10.9, 'series': 1},
 {'x': 1964, 'y': 12.6, 'series': 1},
 {'x': 1965, 'y': 10.9, 'series': 1},
 {'x': 1966, 'y': 10.4, 'series': 1},
 {'x': 1967, 'y': 10.2, 'series': 1},
 {'x': 1968, 'y': 10.6, 'series': 1},
 {'x': 1969, 'y': 10.2, 'series': 1},
 {'x': 1970, 'y': 10.8, 'series': 1},
 {'x': 1971, 'y': 10.6, 'series': 1},
 {'x': 1972, 'y': 10.8, 'series': 1},
 {'x': 1973, 'y': 11.2, 'series': 1},
 {'x': 1974, 'y': 10.5, 'series': 1},
 {'x': 1975, 'y': 10.6, 'series': 1},
 {'x': 1976, 'y': 10.4, 'series': 1},
 {'x': 1977, 'y': 10.0, 'series': 1},
 {'x': 1978, 'y': 10.3, 'series': 1},
 {'x': 1979, 'y': 11.2, 'series': 1},
 {'x': 1980, 'y': 10.6, 'series': 1},
 {'x': 1981, 'y': 10.6, 'series': 1},
 {'x': 1982, 'y': 10.8, 'series': 1},
 {'x': 1983, 'y': 10.5, 'series': 1},
 {'x': 1984, 'y': 10.2, 'series': 1},
 {'x': 1985, 'y': 10.7, 'series': 1},
 {'x': 1986, 'y': 10.3, 'series': 1},
 {'x': 1987, 'y': 11.4, 'series': 1},
 {'x': 1988, 'y': 10.7, 'series': 1},
 {'x': 1989, 'y': 11.3, 'series': 1},
 {'x': 1990, 'y': 11.2, 'series': 1},
 {'x': 1991, 'y': 10.4, 'series': 1},
 {'x': 1993, 'y': 10.5, 'series': 1},
 {'x': 1994, 'y': 10.0, 'series': 1},
 {'x': 1995, 'y': 9.8, 'series': 1},
 {'x': 1996, 'y': 10.0, 'series': 1},
 {'x': 1997, 'y': 10.3, 'series': 1},
 {'x': 1998, 'y': 11.1, 'series': 1},
 {'x': 1999, 'y': 12.8, 'series': 1},
 {'x': 2000, 'y': 13.3, 'series': 1},
 {'x': 2001, 'y': 15.1, 'series': 1},
 {'x': 2002, 'y': 15.1, 'series': 1},
 {'x': 2003, 'y': 14.2, 'series': 1},
 {'x': 2004, 'y': 13.6, 'series': 1},
 {'x': 2005, 'y': 13.6, 'series': 1},
 {'x': 2006, 'y': 14.2, 'series': 1},
 {'x': 2007, 'y': 14.1, 'series': 1},
 {'x': 2008, 'y': 15.2, 'series': 1},
 {'x': 2009, 'y': 13.7, 'series': 1},
 {'x': 2010, 'y': 13.4, 'series': 1},
 {'x': 2011, 'y': 13.9, 'series': 1},
 {'x': 2012, 'y': 13.6, 'series': 1},
 {'x': 2013, 'y': 13.6, 'series': 1},
 {'x': 2014, 'y': 14.0, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1965, 'y': 155.7, 'series': 0},
 {'x': 1966, 'y': 157.0, 'series': 0},
 {'x': 1967, 'y': 156.4, 'series': 0},
 {'x': 1968, 'y': 157.6, 'series': 0},
 {'x': 1970, 'y': 162.4, 'series': 0},
 {'x': 1971, 'y': 162.4, 'series': 0},
 {'x': 1972, 'y': 170.8, 'series': 0},
 {'x': 1973, 'y': 164.2, 'series': 0},
 {'x': 1974, 'y': 169.4, 'series': 0},
 {'x': 1975, 'y': 171.1, 'series': 0},
 {'x': 1976, 'y': 168.3, 'series': 0},
 {'x': 1977, 'y': 167.1, 'series': 0},
 {'x': 1978, 'y': 169.5, 'series': 0},
 {'x': 1979, 'y': 169.9, 'series': 0},
 {'x': 1980, 'y': 165.7, 'series': 0},
 {'x': 1981, 'y': 168.1, 'series': 0},
 {'x': 1982, 'y': 169.4, 'series': 0},
 {'x': 1983, 'y': 166.5, 'series': 0},
 {'x': 1984, 'y': 165.8, 'series': 0},
 {'x': 1985, 'y': 166.8, 'series': 0},
 {'x': 1986, 'y': 167.2, 'series': 0},
 {'x': 1987, 'y': 170.6, 'series': 0},
 {'x': 1988, 'y': 162.9, 'series': 0},
 {'x': 1989, 'y': 164.6, 'series': 0},
 {'x': 1990, 'y': 162.1, 'series': 0},
 {'x': 1991, 'y': 157.4, 'series': 0},
 {'x': 1992, 'y': 154.4, 'series': 0},
 {'x': 1993, 'y': 156.2, 'series': 0},
 {'x': 1994, 'y': 156.1, 'series': 0},
 {'x': 1995, 'y': 153.1, 'series': 0},
 {'x': 1996, 'y': 155.3, 'series': 0},
 {'x': 1997, 'y': 156.1, 'series': 0},
 {'x': 1998, 'y': 156.1, 'series': 0},
 {'x': 1999, 'y': 156.6, 'series': 0},
 {'x': 2000, 'y': 158.2, 'series': 0},
 {'x': 2001, 'y': 158.0, 'series': 0},
 {'x': 2002, 'y': 158.3, 'series': 0},
 {'x': 2003, 'y': 158.6, 'series': 0},
 {'x': 2004, 'y': 159.5, 'series': 0},
 {'x': 2005, 'y': 160.4, 'series': 0},
 {'x': 2006, 'y': 161.4, 'series': 0},
 {'x': 2007, 'y': 168.0, 'series': 0},
 {'x': 2008, 'y': 168.2, 'series': 0},
 {'x': 2009, 'y': 167.5, 'series': 0},
 {'x': 2010, 'y': 168.9, 'series': 0}], yAxis: 1},
 {key: 'SingStat - Gross monthly earnings (employed population)', type: 'scatter', values: [
{'x': 1965, 'y': 155.7, 'series': 1},
 {'x': 1966, 'y': 157.0, 'series': 1},
 {'x': 1967, 'y': 156.4, 'series': 1},
 {'x': 1968, 'y': 157.6, 'series': 1},
 {'x': 1970, 'y': 162.4, 'series': 1},
 {'x': 1971, 'y': 162.4, 'series': 1},
 {'x': 1972, 'y': 170.8, 'series': 1},
 {'x': 1973, 'y': 164.2, 'series': 1},
 {'x': 1974, 'y': 169.4, 'series': 1},
 {'x': 1975, 'y': 171.1, 'series': 1},
 {'x': 1976, 'y': 168.3, 'series': 1},
 {'x': 1977, 'y': 167.1, 'series': 1},
 {'x': 1978, 'y': 169.5, 'series': 1},
 {'x': 1979, 'y': 169.9, 'series': 1},
 {'x': 1980, 'y': 165.7, 'series': 1},
 {'x': 1981, 'y': 168.1, 'series': 1},
 {'x': 1982, 'y': 169.4, 'series': 1},
 {'x': 1983, 'y': 166.5, 'series': 1},
 {'x': 1984, 'y': 165.8, 'series': 1},
 {'x': 1985, 'y': 166.8, 'series': 1},
 {'x': 1986, 'y': 167.2, 'series': 1},
 {'x': 1987, 'y': 170.6, 'series': 1},
 {'x': 1988, 'y': 162.9, 'series': 1},
 {'x': 1989, 'y': 164.6, 'series': 1},
 {'x': 1990, 'y': 162.1, 'series': 1},
 {'x': 1991, 'y': 157.4, 'series': 1},
 {'x': 1992, 'y': 154.4, 'series': 1},
 {'x': 1993, 'y': 156.2, 'series': 1},
 {'x': 1994, 'y': 156.1, 'series': 1},
 {'x': 1995, 'y': 153.1, 'series': 1},
 {'x': 1996, 'y': 155.3, 'series': 1},
 {'x': 1997, 'y': 156.1, 'series': 1},
 {'x': 1998, 'y': 156.1, 'series': 1},
 {'x': 1999, 'y': 156.6, 'series': 1},
 {'x': 2000, 'y': 158.2, 'series': 1},
 {'x': 2001, 'y': 158.0, 'series': 1},
 {'x': 2002, 'y': 158.3, 'series': 1},
 {'x': 2003, 'y': 158.6, 'series': 1},
 {'x': 2004, 'y': 159.5, 'series': 1},
 {'x': 2005, 'y': 160.4, 'series': 1},
 {'x': 2006, 'y': 161.4, 'series': 1},
 {'x': 2007, 'y': 168.0, 'series': 1},
 {'x': 2008, 'y': 168.2, 'series': 1},
 {'x': 2009, 'y': 167.5, 'series': 1},
 {'x': 2010, 'y': 168.9, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 2000, 'y': 354.0, 'series': 0},
 {'x': 2001, 'y': 373.2, 'series': 0},
 {'x': 2002, 'y': 371.8, 'series': 0},
 {'x': 2003, 'y': 369.8, 'series': 0},
 {'x': 2004, 'y': 376.4, 'series': 0},
 {'x': 2005, 'y': 372.0, 'series': 0},
 {'x': 2006, 'y': 384.2, 'series': 0},
 {'x': 2007, 'y': 394.7, 'series': 0},
 {'x': 2008, 'y': 395.8, 'series': 0},
 {'x': 2009, 'y': 383.1, 'series': 0},
 {'x': 2010, 'y': 370.2, 'series': 0},
 {'x': 2011, 'y': 396.3, 'series': 0},
 {'x': 2012, 'y': 399.3, 'series': 0},
 {'x': 2013, 'y': 358.9, 'series': 0},
 {'x': 2014, 'y': 375.1, 'series': 0},
 {'x': 2015, 'y': 359.5, 'series': 0},
 {'x': 2016, 'y': 340.0, 'series': 0},
 {'x': 2017, 'y': 340.9, 'series': 0},
 {'x': 2018, 'y': 325.9, 'series': 0},
 {'x': 2019, 'y': 318.3, 'series': 0},
 {'x': 2020, 'y': 317.9, 'series': 0}], yAxis: 1},
 {key: 'SingStat - Household per capita earnings', type: 'scatter', values: [
{'x': 2000, 'y': 354.0, 'series': 1},
 {'x': 2001, 'y': 373.2, 'series': 1},
 {'x': 2002, 'y': 371.8, 'series': 1},
 {'x': 2003, 'y': 369.8, 'series': 1},
 {'x': 2004, 'y': 376.4, 'series': 1},
 {'x': 2005, 'y': 372.0, 'series': 1},
 {'x': 2006, 'y': 384.2, 'series': 1},
 {'x': 2007, 'y': 394.7, 'series': 1},
 {'x': 2008, 'y': 395.8, 'series': 1},
 {'x': 2009, 'y': 383.1, 'series': 1},
 {'x': 2010, 'y': 370.2, 'series': 1},
 {'x': 2011, 'y': 396.3, 'series': 1},
 {'x': 2012, 'y': 399.3, 'series': 1},
 {'x': 2013, 'y': 358.9, 'series': 1},
 {'x': 2014, 'y': 375.1, 'series': 1},
 {'x': 2015, 'y': 359.5, 'series': 1},
 {'x': 2016, 'y': 340.0, 'series': 1},
 {'x': 2017, 'y': 340.9, 'series': 1},
 {'x': 2018, 'y': 325.9, 'series': 1},
 {'x': 2019, 'y': 318.3, 'series': 1},
 {'x': 2020, 'y': 317.9, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1996, 'y': 58.5, 'series': 0},
 {'x': 1997, 'y': 57.7, 'series': 0},
 {'x': 1998, 'y': 58.0, 'series': 0},
 {'x': 1999, 'y': 58.8, 'series': 0},
 {'x': 2001, 'y': 57.9, 'series': 0},
 {'x': 2002, 'y': 56.6, 'series': 0},
 {'x': 2003, 'y': 55.4, 'series': 0},
 {'x': 2004, 'y': 56.1, 'series': 0},
 {'x': 2006, 'y': 52.5, 'series': 0},
 {'x': 2007, 'y': 53.3, 'series': 0},
 {'x': 2008, 'y': 51.4, 'series': 0},
 {'x': 2009, 'y': 51.2, 'series': 0},
 {'x': 2010, 'y': 53.3, 'series': 0},
 {'x': 2011, 'y': 53.3, 'series': 0},
 {'x': 2012, 'y': 50.0, 'series': 0},
 {'x': 2013, 'y': 50.9, 'series': 0},
 {'x': 2014, 'y': 52.3, 'series': 0},
 {'x': 2015, 'y': 50.9, 'series': 0},
 {'x': 2016, 'y': 51.9, 'series': 0},
 {'x': 2017, 'y': 52.0, 'series': 0},
 {'x': 2018, 'y': 52.7, 'series': 0},
 {'x': 2019, 'y': 53.8, 'series': 0},
 {'x': 2020, 'y': 51.6, 'series': 0}], yAxis: 1},
 {key: 'SingStat - Gross monthly individual earnings (employed population)', type: 'scatter', values: [
{'x': 1996, 'y': 58.5, 'series': 1},
 {'x': 1997, 'y': 57.7, 'series': 1},
 {'x': 1998, 'y': 58.0, 'series': 1},
 {'x': 1999, 'y': 58.8, 'series': 1},
 {'x': 2001, 'y': 57.9, 'series': 1},
 {'x': 2002, 'y': 56.6, 'series': 1},
 {'x': 2003, 'y': 55.4, 'series': 1},
 {'x': 2004, 'y': 56.1, 'series': 1},
 {'x': 2006, 'y': 52.5, 'series': 1},
 {'x': 2007, 'y': 53.3, 'series': 1},
 {'x': 2008, 'y': 51.4, 'series': 1},
 {'x': 2009, 'y': 51.2, 'series': 1},
 {'x': 2010, 'y': 53.3, 'series': 1},
 {'x': 2011, 'y': 53.3, 'series': 1},
 {'x': 2012, 'y': 50.0, 'series': 1},
 {'x': 2013, 'y': 50.9, 'series': 1},
 {'x': 2014, 'y': 52.3, 'series': 1},
 {'x': 2015, 'y': 50.9, 'series': 1},
 {'x': 2016, 'y': 51.9, 'series': 1},
 {'x': 2017, 'y': 52.0, 'series': 1},
 {'x': 2018, 'y': 52.7, 'series': 1},
 {'x': 2019, 'y': 53.8, 'series': 1},
 {'x': 2020, 'y': 51.6, 'series': 1}], yAxis: 1}]
});