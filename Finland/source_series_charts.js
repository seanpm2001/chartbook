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
{'x': 1966, 'y': 31.1, 'series': 0},
 {'x': 1971, 'y': 27.0, 'series': 0},
 {'x': 1976, 'y': 21.5, 'series': 0},
 {'x': 1981, 'y': 20.9, 'series': 0},
 {'x': 1986, 'y': 20.4, 'series': 0},
 {'x': 1987, 'y': 20.2, 'series': 0},
 {'x': 1988, 'y': 20.7, 'series': 0},
 {'x': 1989, 'y': 21.0, 'series': 0},
 {'x': 1990, 'y': 20.8, 'series': 0},
 {'x': 1991, 'y': 20.7, 'series': 0},
 {'x': 1992, 'y': 20.5, 'series': 0},
 {'x': 1993, 'y': 20.9, 'series': 0},
 {'x': 1994, 'y': 20.8, 'series': 0},
 {'x': 1995, 'y': 21.4, 'series': 0},
 {'x': 1996, 'y': 21.9, 'series': 0},
 {'x': 1997, 'y': 23.0, 'series': 0},
 {'x': 1998, 'y': 23.8, 'series': 0},
 {'x': 1999, 'y': 24.5, 'series': 0},
 {'x': 2000, 'y': 24.9, 'series': 0},
 {'x': 2001, 'y': 25.7, 'series': 0},
 {'x': 2002, 'y': 25.2, 'series': 0},
 {'x': 2003, 'y': 25.6, 'series': 0},
 {'x': 2004, 'y': 26.1, 'series': 0},
 {'x': 2005, 'y': 25.9, 'series': 0},
 {'x': 2006, 'y': 26.2, 'series': 0},
 {'x': 2007, 'y': 26.4, 'series': 0},
 {'x': 2008, 'y': 26.0, 'series': 0},
 {'x': 2009, 'y': 25.5, 'series': 0},
 {'x': 2010, 'y': 25.9, 'series': 0},
 {'x': 2011, 'y': 25.9, 'series': 0},
 {'x': 2012, 'y': 25.5, 'series': 0},
 {'x': 2013, 'y': 25.6, 'series': 0},
 {'x': 2014, 'y': 25.2, 'series': 0},
 {'x': 2015, 'y': 25.5, 'series': 0},
 {'x': 2016, 'y': 25.4, 'series': 0},
 {'x': 2017, 'y': 26.0, 'series': 0},
 {'x': 2018, 'y': 26.3, 'series': 0},
 {'x': 2019, 'y': 26.6, 'series': 0},
 {'x': 2020, 'y': 25.8, 'series': 0}], yAxis: 1},
 {key: 'StatFin - Equivalised disposable household cash income', type: 'scatter', values: [
{'x': 1966, 'y': 31.1, 'series': 1},
 {'x': 1971, 'y': 27.0, 'series': 1},
 {'x': 1976, 'y': 21.5, 'series': 1},
 {'x': 1981, 'y': 20.9, 'series': 1},
 {'x': 1986, 'y': 20.4, 'series': 1},
 {'x': 1987, 'y': 20.2, 'series': 1},
 {'x': 1988, 'y': 20.7, 'series': 1},
 {'x': 1989, 'y': 21.0, 'series': 1},
 {'x': 1990, 'y': 20.8, 'series': 1},
 {'x': 1991, 'y': 20.7, 'series': 1},
 {'x': 1992, 'y': 20.5, 'series': 1},
 {'x': 1993, 'y': 20.9, 'series': 1},
 {'x': 1994, 'y': 20.8, 'series': 1},
 {'x': 1995, 'y': 21.4, 'series': 1},
 {'x': 1996, 'y': 21.9, 'series': 1},
 {'x': 1997, 'y': 23.0, 'series': 1},
 {'x': 1998, 'y': 23.8, 'series': 1},
 {'x': 1999, 'y': 24.5, 'series': 1},
 {'x': 2000, 'y': 24.9, 'series': 1},
 {'x': 2001, 'y': 25.7, 'series': 1},
 {'x': 2002, 'y': 25.2, 'series': 1},
 {'x': 2003, 'y': 25.6, 'series': 1},
 {'x': 2004, 'y': 26.1, 'series': 1},
 {'x': 2005, 'y': 25.9, 'series': 1},
 {'x': 2006, 'y': 26.2, 'series': 1},
 {'x': 2007, 'y': 26.4, 'series': 1},
 {'x': 2008, 'y': 26.0, 'series': 1},
 {'x': 2009, 'y': 25.5, 'series': 1},
 {'x': 2010, 'y': 25.9, 'series': 1},
 {'x': 2011, 'y': 25.9, 'series': 1},
 {'x': 2012, 'y': 25.5, 'series': 1},
 {'x': 2013, 'y': 25.6, 'series': 1},
 {'x': 2014, 'y': 25.2, 'series': 1},
 {'x': 2015, 'y': 25.5, 'series': 1},
 {'x': 2016, 'y': 25.4, 'series': 1},
 {'x': 2017, 'y': 26.0, 'series': 1},
 {'x': 2018, 'y': 26.3, 'series': 1},
 {'x': 2019, 'y': 26.6, 'series': 1},
 {'x': 2020, 'y': 25.8, 'series': 1}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1920, 'y': 59.8, 'series': 0},
 {'x': 1921, 'y': 59.6, 'series': 0},
 {'x': 1922, 'y': 59.5, 'series': 0},
 {'x': 1923, 'y': 54.5, 'series': 0},
 {'x': 1924, 'y': 49.5, 'series': 0},
 {'x': 1925, 'y': 50.0, 'series': 0},
 {'x': 1926, 'y': 50.5, 'series': 0},
 {'x': 1927, 'y': 51.0, 'series': 0},
 {'x': 1928, 'y': 51.5, 'series': 0},
 {'x': 1929, 'y': 51.9, 'series': 0},
 {'x': 1930, 'y': 51.4, 'series': 0},
 {'x': 1931, 'y': 50.9, 'series': 0},
 {'x': 1932, 'y': 50.9, 'series': 0},
 {'x': 1933, 'y': 51.0, 'series': 0},
 {'x': 1934, 'y': 51.0, 'series': 0},
 {'x': 1935, 'y': 41.5, 'series': 0},
 {'x': 1936, 'y': 43.2, 'series': 0},
 {'x': 1937, 'y': 44.8, 'series': 0},
 {'x': 1938, 'y': 45.9, 'series': 0},
 {'x': 1939, 'y': 44.1, 'series': 0},
 {'x': 1940, 'y': 42.4, 'series': 0},
 {'x': 1941, 'y': 40.6, 'series': 0},
 {'x': 1942, 'y': 38.8, 'series': 0},
 {'x': 1943, 'y': 37.1, 'series': 0},
 {'x': 1944, 'y': 35.3, 'series': 0},
 {'x': 1945, 'y': 33.6, 'series': 0},
 {'x': 1946, 'y': 31.8, 'series': 0},
 {'x': 1947, 'y': 30.0, 'series': 0},
 {'x': 1948, 'y': 39.3, 'series': 0},
 {'x': 1949, 'y': 49.0, 'series': 0},
 {'x': 1950, 'y': 48.7, 'series': 0},
 {'x': 1951, 'y': 49.9, 'series': 0},
 {'x': 1952, 'y': 51.4, 'series': 0},
 {'x': 1953, 'y': 51.0, 'series': 0},
 {'x': 1954, 'y': 51.7, 'series': 0},
 {'x': 1955, 'y': 51.7, 'series': 0},
 {'x': 1956, 'y': 52.2, 'series': 0},
 {'x': 1957, 'y': 52.5, 'series': 0},
 {'x': 1958, 'y': 52.6, 'series': 0},
 {'x': 1959, 'y': 53.1, 'series': 0},
 {'x': 1960, 'y': 52.9, 'series': 0},
 {'x': 1961, 'y': 54.2, 'series': 0},
 {'x': 1962, 'y': 50.6, 'series': 0},
 {'x': 1963, 'y': 51.8, 'series': 0},
 {'x': 1964, 'y': 51.7, 'series': 0},
 {'x': 1965, 'y': 51.7, 'series': 0},
 {'x': 1966, 'y': 47.9, 'series': 0},
 {'x': 1967, 'y': 48.5, 'series': 0},
 {'x': 1968, 'y': 49.0, 'series': 0},
 {'x': 1969, 'y': 49.8, 'series': 0},
 {'x': 1970, 'y': 48.9, 'series': 0},
 {'x': 1971, 'y': 48.3, 'series': 0},
 {'x': 1972, 'y': 48.3, 'series': 0},
 {'x': 1973, 'y': 47.1, 'series': 0},
 {'x': 1974, 'y': 47.6, 'series': 0},
 {'x': 1975, 'y': 46.0, 'series': 0},
 {'x': 1976, 'y': 45.5, 'series': 0},
 {'x': 1977, 'y': 45.4, 'series': 0},
 {'x': 1978, 'y': 45.5, 'series': 0},
 {'x': 1979, 'y': 45.1, 'series': 0},
 {'x': 1980, 'y': 44.8, 'series': 0},
 {'x': 1981, 'y': 44.7, 'series': 0},
 {'x': 1982, 'y': 44.3, 'series': 0},
 {'x': 1983, 'y': 42.0, 'series': 0},
 {'x': 1984, 'y': 41.4, 'series': 0},
 {'x': 1985, 'y': 40.7, 'series': 0},
 {'x': 1986, 'y': 40.5, 'series': 0},
 {'x': 1987, 'y': 40.6, 'series': 0},
 {'x': 1988, 'y': 41.0, 'series': 0},
 {'x': 1989, 'y': 40.7, 'series': 0},
 {'x': 1990, 'y': 40.7, 'series': 0},
 {'x': 1991, 'y': 40.1, 'series': 0},
 {'x': 1992, 'y': 39.2, 'series': 0},
 {'x': 1993, 'y': 39.5, 'series': 0},
 {'x': 1994, 'y': 40.7, 'series': 0},
 {'x': 1995, 'y': 41.1, 'series': 0},
 {'x': 1996, 'y': 41.3, 'series': 0},
 {'x': 1997, 'y': 41.9, 'series': 0},
 {'x': 1998, 'y': 42.6, 'series': 0},
 {'x': 1999, 'y': 44.2, 'series': 0},
 {'x': 2000, 'y': 45.2, 'series': 0},
 {'x': 2001, 'y': 43.7, 'series': 0},
 {'x': 2002, 'y': 43.5, 'series': 0},
 {'x': 2003, 'y': 43.6, 'series': 0}], yAxis: 1},
 {key: 'Jäntti (2010) - Taxable income among tax units', type: 'scatter', values: [
{'x': 1920, 'y': 59.8, 'series': 1},
 {'x': 1921, 'y': 59.6, 'series': 1},
 {'x': 1922, 'y': 59.5, 'series': 1},
 {'x': 1923, 'y': 54.5, 'series': 1},
 {'x': 1924, 'y': 49.5, 'series': 1},
 {'x': 1925, 'y': 50.0, 'series': 1},
 {'x': 1926, 'y': 50.5, 'series': 1},
 {'x': 1927, 'y': 51.0, 'series': 1},
 {'x': 1928, 'y': 51.5, 'series': 1},
 {'x': 1929, 'y': 51.9, 'series': 1},
 {'x': 1930, 'y': 51.4, 'series': 1},
 {'x': 1931, 'y': 50.9, 'series': 1},
 {'x': 1932, 'y': 50.9, 'series': 1},
 {'x': 1933, 'y': 51.0, 'series': 1},
 {'x': 1934, 'y': 51.0, 'series': 1},
 {'x': 1935, 'y': 41.5, 'series': 1},
 {'x': 1936, 'y': 43.2, 'series': 1},
 {'x': 1937, 'y': 44.8, 'series': 1},
 {'x': 1938, 'y': 45.9, 'series': 1},
 {'x': 1939, 'y': 44.1, 'series': 1},
 {'x': 1940, 'y': 42.4, 'series': 1},
 {'x': 1941, 'y': 40.6, 'series': 1},
 {'x': 1942, 'y': 38.8, 'series': 1},
 {'x': 1943, 'y': 37.1, 'series': 1},
 {'x': 1944, 'y': 35.3, 'series': 1},
 {'x': 1945, 'y': 33.6, 'series': 1},
 {'x': 1946, 'y': 31.8, 'series': 1},
 {'x': 1947, 'y': 30.0, 'series': 1},
 {'x': 1948, 'y': 39.3, 'series': 1},
 {'x': 1949, 'y': 49.0, 'series': 1},
 {'x': 1950, 'y': 48.7, 'series': 1},
 {'x': 1951, 'y': 49.9, 'series': 1},
 {'x': 1952, 'y': 51.4, 'series': 1},
 {'x': 1953, 'y': 51.0, 'series': 1},
 {'x': 1954, 'y': 51.7, 'series': 1},
 {'x': 1955, 'y': 51.7, 'series': 1},
 {'x': 1956, 'y': 52.2, 'series': 1},
 {'x': 1957, 'y': 52.5, 'series': 1},
 {'x': 1958, 'y': 52.6, 'series': 1},
 {'x': 1959, 'y': 53.1, 'series': 1},
 {'x': 1960, 'y': 52.9, 'series': 1},
 {'x': 1961, 'y': 54.2, 'series': 1},
 {'x': 1962, 'y': 50.6, 'series': 1},
 {'x': 1963, 'y': 51.8, 'series': 1},
 {'x': 1964, 'y': 51.7, 'series': 1},
 {'x': 1965, 'y': 51.7, 'series': 1},
 {'x': 1966, 'y': 47.9, 'series': 1},
 {'x': 1967, 'y': 48.5, 'series': 1},
 {'x': 1968, 'y': 49.0, 'series': 1},
 {'x': 1969, 'y': 49.8, 'series': 1},
 {'x': 1970, 'y': 48.9, 'series': 1},
 {'x': 1971, 'y': 48.3, 'series': 1},
 {'x': 1972, 'y': 48.3, 'series': 1},
 {'x': 1973, 'y': 47.1, 'series': 1},
 {'x': 1974, 'y': 47.6, 'series': 1},
 {'x': 1975, 'y': 46.0, 'series': 1},
 {'x': 1976, 'y': 45.5, 'series': 1},
 {'x': 1977, 'y': 45.4, 'series': 1},
 {'x': 1978, 'y': 45.5, 'series': 1},
 {'x': 1979, 'y': 45.1, 'series': 1},
 {'x': 1980, 'y': 44.8, 'series': 1},
 {'x': 1981, 'y': 44.7, 'series': 1},
 {'x': 1982, 'y': 44.3, 'series': 1},
 {'x': 1983, 'y': 42.0, 'series': 1},
 {'x': 1984, 'y': 41.4, 'series': 1},
 {'x': 1985, 'y': 40.7, 'series': 1},
 {'x': 1986, 'y': 40.5, 'series': 1},
 {'x': 1987, 'y': 40.6, 'series': 1},
 {'x': 1988, 'y': 41.0, 'series': 1},
 {'x': 1989, 'y': 40.7, 'series': 1},
 {'x': 1990, 'y': 40.7, 'series': 1},
 {'x': 1991, 'y': 40.1, 'series': 1},
 {'x': 1992, 'y': 39.2, 'series': 1},
 {'x': 1993, 'y': 39.5, 'series': 1},
 {'x': 1994, 'y': 40.7, 'series': 1},
 {'x': 1995, 'y': 41.1, 'series': 1},
 {'x': 1996, 'y': 41.3, 'series': 1},
 {'x': 1997, 'y': 41.9, 'series': 1},
 {'x': 1998, 'y': 42.6, 'series': 1},
 {'x': 1999, 'y': 44.2, 'series': 1},
 {'x': 2000, 'y': 45.2, 'series': 1},
 {'x': 2001, 'y': 43.7, 'series': 1},
 {'x': 2002, 'y': 43.5, 'series': 1},
 {'x': 2003, 'y': 43.6, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1920, 'y': 27.8, 'series': 0},
 {'x': 1921, 'y': 27.7, 'series': 0},
 {'x': 1922, 'y': 27.1, 'series': 0},
 {'x': 1923, 'y': 24.5, 'series': 0},
 {'x': 1924, 'y': 22.0, 'series': 0},
 {'x': 1925, 'y': 23.0, 'series': 0},
 {'x': 1926, 'y': 24.1, 'series': 0},
 {'x': 1927, 'y': 24.3, 'series': 0},
 {'x': 1928, 'y': 24.5, 'series': 0},
 {'x': 1929, 'y': 24.7, 'series': 0},
 {'x': 1930, 'y': 24.6, 'series': 0},
 {'x': 1931, 'y': 24.5, 'series': 0},
 {'x': 1932, 'y': 24.4, 'series': 0},
 {'x': 1933, 'y': 24.4, 'series': 0},
 {'x': 1934, 'y': 24.4, 'series': 0},
 {'x': 1935, 'y': 21.4, 'series': 0},
 {'x': 1936, 'y': 22.6, 'series': 0},
 {'x': 1937, 'y': 23.7, 'series': 0},
 {'x': 1938, 'y': 23.7, 'series': 0},
 {'x': 1939, 'y': 22.3, 'series': 0},
 {'x': 1940, 'y': 20.9, 'series': 0},
 {'x': 1941, 'y': 19.5, 'series': 0},
 {'x': 1942, 'y': 18.1, 'series': 0},
 {'x': 1943, 'y': 16.6, 'series': 0},
 {'x': 1944, 'y': 15.2, 'series': 0},
 {'x': 1945, 'y': 13.8, 'series': 0},
 {'x': 1946, 'y': 12.4, 'series': 0},
 {'x': 1947, 'y': 10.9, 'series': 0},
 {'x': 1948, 'y': 11.4, 'series': 0},
 {'x': 1949, 'y': 14.0, 'series': 0},
 {'x': 1950, 'y': 14.1, 'series': 0},
 {'x': 1951, 'y': 14.6, 'series': 0},
 {'x': 1952, 'y': 15.5, 'series': 0},
 {'x': 1953, 'y': 15.5, 'series': 0},
 {'x': 1954, 'y': 16.2, 'series': 0},
 {'x': 1955, 'y': 16.3, 'series': 0},
 {'x': 1956, 'y': 16.8, 'series': 0},
 {'x': 1957, 'y': 16.7, 'series': 0},
 {'x': 1958, 'y': 18.1, 'series': 0},
 {'x': 1959, 'y': 18.2, 'series': 0},
 {'x': 1960, 'y': 17.3, 'series': 0},
 {'x': 1961, 'y': 18.5, 'series': 0},
 {'x': 1962, 'y': 18.2, 'series': 0},
 {'x': 1963, 'y': 18.5, 'series': 0},
 {'x': 1964, 'y': 17.2, 'series': 0},
 {'x': 1965, 'y': 17.2, 'series': 0},
 {'x': 1966, 'y': 17.2, 'series': 0},
 {'x': 1967, 'y': 17.4, 'series': 0},
 {'x': 1968, 'y': 17.0, 'series': 0},
 {'x': 1969, 'y': 14.3, 'series': 0},
 {'x': 1970, 'y': 14.3, 'series': 0},
 {'x': 1971, 'y': 13.4, 'series': 0},
 {'x': 1972, 'y': 12.6, 'series': 0},
 {'x': 1973, 'y': 11.7, 'series': 0},
 {'x': 1974, 'y': 10.8, 'series': 0},
 {'x': 1975, 'y': 8.6, 'series': 0},
 {'x': 1976, 'y': 8.2, 'series': 0},
 {'x': 1977, 'y': 8.0, 'series': 0},
 {'x': 1978, 'y': 7.5, 'series': 0},
 {'x': 1979, 'y': 7.0, 'series': 0},
 {'x': 1980, 'y': 6.4, 'series': 0},
 {'x': 1981, 'y': 5.5, 'series': 0},
 {'x': 1982, 'y': 5.2, 'series': 0},
 {'x': 1983, 'y': 5.3, 'series': 0},
 {'x': 1984, 'y': 6.0, 'series': 0},
 {'x': 1985, 'y': 5.6, 'series': 0},
 {'x': 1986, 'y': 5.3, 'series': 0},
 {'x': 1987, 'y': 6.5, 'series': 0},
 {'x': 1988, 'y': 6.7, 'series': 0},
 {'x': 1989, 'y': 5.7, 'series': 0},
 {'x': 1990, 'y': 4.5, 'series': 0},
 {'x': 1991, 'y': 3.9, 'series': 0},
 {'x': 1992, 'y': 3.7, 'series': 0},
 {'x': 1993, 'y': 4.8, 'series': 0},
 {'x': 1994, 'y': 7.1, 'series': 0},
 {'x': 1995, 'y': 8.9, 'series': 0},
 {'x': 1996, 'y': 9.1, 'series': 0},
 {'x': 1997, 'y': 10.6, 'series': 0},
 {'x': 1998, 'y': 11.6, 'series': 0},
 {'x': 1999, 'y': 12.5, 'series': 0},
 {'x': 2000, 'y': 13.5, 'series': 0},
 {'x': 2001, 'y': 12.9, 'series': 0},
 {'x': 2002, 'y': 12.5, 'series': 0},
 {'x': 2003, 'y': 11.8, 'series': 0},
 {'x': 2004, 'y': 13.0, 'series': 0},
 {'x': 2005, 'y': 11.0, 'series': 0},
 {'x': 2006, 'y': 11.8, 'series': 0},
 {'x': 2007, 'y': 11.6, 'series': 0},
 {'x': 2008, 'y': 11.3, 'series': 0},
 {'x': 2009, 'y': 9.0, 'series': 0},
 {'x': 2010, 'y': 9.6, 'series': 0},
 {'x': 2011, 'y': 9.2, 'series': 0},
 {'x': 2012, 'y': 8.8, 'series': 0},
 {'x': 2013, 'y': 8.6, 'series': 0},
 {'x': 2014, 'y': 9.0, 'series': 0},
 {'x': 2015, 'y': 9.6, 'series': 0},
 {'x': 2016, 'y': 9.7, 'series': 0},
 {'x': 2017, 'y': 10.6, 'series': 0},
 {'x': 2018, 'y': 10.5, 'series': 0},
 {'x': 2019, 'y': 10.3, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1920, 'y': 27.8, 'series': 1},
 {'x': 1921, 'y': 27.7, 'series': 1},
 {'x': 1922, 'y': 27.1, 'series': 1},
 {'x': 1923, 'y': 24.5, 'series': 1},
 {'x': 1924, 'y': 22.0, 'series': 1},
 {'x': 1925, 'y': 23.0, 'series': 1},
 {'x': 1926, 'y': 24.1, 'series': 1},
 {'x': 1927, 'y': 24.3, 'series': 1},
 {'x': 1928, 'y': 24.5, 'series': 1},
 {'x': 1929, 'y': 24.7, 'series': 1},
 {'x': 1930, 'y': 24.6, 'series': 1},
 {'x': 1931, 'y': 24.5, 'series': 1},
 {'x': 1932, 'y': 24.4, 'series': 1},
 {'x': 1933, 'y': 24.4, 'series': 1},
 {'x': 1934, 'y': 24.4, 'series': 1},
 {'x': 1935, 'y': 21.4, 'series': 1},
 {'x': 1936, 'y': 22.6, 'series': 1},
 {'x': 1937, 'y': 23.7, 'series': 1},
 {'x': 1938, 'y': 23.7, 'series': 1},
 {'x': 1939, 'y': 22.3, 'series': 1},
 {'x': 1940, 'y': 20.9, 'series': 1},
 {'x': 1941, 'y': 19.5, 'series': 1},
 {'x': 1942, 'y': 18.1, 'series': 1},
 {'x': 1943, 'y': 16.6, 'series': 1},
 {'x': 1944, 'y': 15.2, 'series': 1},
 {'x': 1945, 'y': 13.8, 'series': 1},
 {'x': 1946, 'y': 12.4, 'series': 1},
 {'x': 1947, 'y': 10.9, 'series': 1},
 {'x': 1948, 'y': 11.4, 'series': 1},
 {'x': 1949, 'y': 14.0, 'series': 1},
 {'x': 1950, 'y': 14.1, 'series': 1},
 {'x': 1951, 'y': 14.6, 'series': 1},
 {'x': 1952, 'y': 15.5, 'series': 1},
 {'x': 1953, 'y': 15.5, 'series': 1},
 {'x': 1954, 'y': 16.2, 'series': 1},
 {'x': 1955, 'y': 16.3, 'series': 1},
 {'x': 1956, 'y': 16.8, 'series': 1},
 {'x': 1957, 'y': 16.7, 'series': 1},
 {'x': 1958, 'y': 18.1, 'series': 1},
 {'x': 1959, 'y': 18.2, 'series': 1},
 {'x': 1960, 'y': 17.3, 'series': 1},
 {'x': 1961, 'y': 18.5, 'series': 1},
 {'x': 1962, 'y': 18.2, 'series': 1},
 {'x': 1963, 'y': 18.5, 'series': 1},
 {'x': 1964, 'y': 17.2, 'series': 1},
 {'x': 1965, 'y': 17.2, 'series': 1},
 {'x': 1966, 'y': 17.2, 'series': 1},
 {'x': 1967, 'y': 17.4, 'series': 1},
 {'x': 1968, 'y': 17.0, 'series': 1},
 {'x': 1969, 'y': 14.3, 'series': 1},
 {'x': 1970, 'y': 14.3, 'series': 1},
 {'x': 1971, 'y': 13.4, 'series': 1},
 {'x': 1972, 'y': 12.6, 'series': 1},
 {'x': 1973, 'y': 11.7, 'series': 1},
 {'x': 1974, 'y': 10.8, 'series': 1},
 {'x': 1975, 'y': 8.6, 'series': 1},
 {'x': 1976, 'y': 8.2, 'series': 1},
 {'x': 1977, 'y': 8.0, 'series': 1},
 {'x': 1978, 'y': 7.5, 'series': 1},
 {'x': 1979, 'y': 7.0, 'series': 1},
 {'x': 1980, 'y': 6.4, 'series': 1},
 {'x': 1981, 'y': 5.5, 'series': 1},
 {'x': 1982, 'y': 5.2, 'series': 1},
 {'x': 1983, 'y': 5.3, 'series': 1},
 {'x': 1984, 'y': 6.0, 'series': 1},
 {'x': 1985, 'y': 5.6, 'series': 1},
 {'x': 1986, 'y': 5.3, 'series': 1},
 {'x': 1987, 'y': 6.5, 'series': 1},
 {'x': 1988, 'y': 6.7, 'series': 1},
 {'x': 1989, 'y': 5.7, 'series': 1},
 {'x': 1990, 'y': 4.5, 'series': 1},
 {'x': 1991, 'y': 3.9, 'series': 1},
 {'x': 1992, 'y': 3.7, 'series': 1},
 {'x': 1993, 'y': 4.8, 'series': 1},
 {'x': 1994, 'y': 7.1, 'series': 1},
 {'x': 1995, 'y': 8.9, 'series': 1},
 {'x': 1996, 'y': 9.1, 'series': 1},
 {'x': 1997, 'y': 10.6, 'series': 1},
 {'x': 1998, 'y': 11.6, 'series': 1},
 {'x': 1999, 'y': 12.5, 'series': 1},
 {'x': 2000, 'y': 13.5, 'series': 1},
 {'x': 2001, 'y': 12.9, 'series': 1},
 {'x': 2002, 'y': 12.5, 'series': 1},
 {'x': 2003, 'y': 11.8, 'series': 1},
 {'x': 2004, 'y': 13.0, 'series': 1},
 {'x': 2005, 'y': 11.0, 'series': 1},
 {'x': 2006, 'y': 11.8, 'series': 1},
 {'x': 2007, 'y': 11.6, 'series': 1},
 {'x': 2008, 'y': 11.3, 'series': 1},
 {'x': 2009, 'y': 9.0, 'series': 1},
 {'x': 2010, 'y': 9.6, 'series': 1},
 {'x': 2011, 'y': 9.2, 'series': 1},
 {'x': 2012, 'y': 8.8, 'series': 1},
 {'x': 2013, 'y': 8.6, 'series': 1},
 {'x': 2014, 'y': 9.0, 'series': 1},
 {'x': 2015, 'y': 9.6, 'series': 1},
 {'x': 2016, 'y': 9.7, 'series': 1},
 {'x': 2017, 'y': 10.6, 'series': 1},
 {'x': 2018, 'y': 10.5, 'series': 1},
 {'x': 2019, 'y': 10.3, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1980, 'y': 5.4, 'series': 0},
 {'x': 1981, 'y': 4.4, 'series': 0},
 {'x': 1982, 'y': 4.1, 'series': 0},
 {'x': 1983, 'y': 4.0, 'series': 0},
 {'x': 1984, 'y': 4.6, 'series': 0},
 {'x': 1985, 'y': 4.5, 'series': 0},
 {'x': 1986, 'y': 3.9, 'series': 0},
 {'x': 1987, 'y': 5.4, 'series': 0},
 {'x': 1988, 'y': 5.7, 'series': 0},
 {'x': 1989, 'y': 4.2, 'series': 0},
 {'x': 1990, 'y': 3.1, 'series': 0},
 {'x': 1991, 'y': 3.0, 'series': 0},
 {'x': 1992, 'y': 3.1, 'series': 0},
 {'x': 1993, 'y': 3.8, 'series': 0},
 {'x': 1994, 'y': 5.9, 'series': 0},
 {'x': 1995, 'y': 6.7, 'series': 0},
 {'x': 1996, 'y': 6.8, 'series': 0},
 {'x': 1997, 'y': 7.9, 'series': 0},
 {'x': 1998, 'y': 8.4, 'series': 0},
 {'x': 1999, 'y': 9.5, 'series': 0},
 {'x': 2000, 'y': 9.4, 'series': 0},
 {'x': 2001, 'y': 10.2, 'series': 0},
 {'x': 2002, 'y': 9.3, 'series': 0},
 {'x': 2003, 'y': 8.5, 'series': 0},
 {'x': 2004, 'y': 9.4, 'series': 0},
 {'x': 2005, 'y': 8.4, 'series': 0},
 {'x': 2006, 'y': 8.9, 'series': 0},
 {'x': 2007, 'y': 9.1, 'series': 0},
 {'x': 2008, 'y': 8.6, 'series': 0},
 {'x': 2009, 'y': 7.1, 'series': 0},
 {'x': 2010, 'y': 7.5, 'series': 0},
 {'x': 2011, 'y': 7.0, 'series': 0},
 {'x': 2012, 'y': 6.7, 'series': 0},
 {'x': 2013, 'y': 6.5, 'series': 0},
 {'x': 2014, 'y': 7.0, 'series': 0},
 {'x': 2015, 'y': 7.4, 'series': 0},
 {'x': 2016, 'y': 7.4, 'series': 0},
 {'x': 2017, 'y': 8.1, 'series': 0},
 {'x': 2018, 'y': 8.1, 'series': 0},
 {'x': 2019, 'y': 7.9, 'series': 0}], yAxis: 1},
 {key: 'WID - Post-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1980, 'y': 5.4, 'series': 1},
 {'x': 1981, 'y': 4.4, 'series': 1},
 {'x': 1982, 'y': 4.1, 'series': 1},
 {'x': 1983, 'y': 4.0, 'series': 1},
 {'x': 1984, 'y': 4.6, 'series': 1},
 {'x': 1985, 'y': 4.5, 'series': 1},
 {'x': 1986, 'y': 3.9, 'series': 1},
 {'x': 1987, 'y': 5.4, 'series': 1},
 {'x': 1988, 'y': 5.7, 'series': 1},
 {'x': 1989, 'y': 4.2, 'series': 1},
 {'x': 1990, 'y': 3.1, 'series': 1},
 {'x': 1991, 'y': 3.0, 'series': 1},
 {'x': 1992, 'y': 3.1, 'series': 1},
 {'x': 1993, 'y': 3.8, 'series': 1},
 {'x': 1994, 'y': 5.9, 'series': 1},
 {'x': 1995, 'y': 6.7, 'series': 1},
 {'x': 1996, 'y': 6.8, 'series': 1},
 {'x': 1997, 'y': 7.9, 'series': 1},
 {'x': 1998, 'y': 8.4, 'series': 1},
 {'x': 1999, 'y': 9.5, 'series': 1},
 {'x': 2000, 'y': 9.4, 'series': 1},
 {'x': 2001, 'y': 10.2, 'series': 1},
 {'x': 2002, 'y': 9.3, 'series': 1},
 {'x': 2003, 'y': 8.5, 'series': 1},
 {'x': 2004, 'y': 9.4, 'series': 1},
 {'x': 2005, 'y': 8.4, 'series': 1},
 {'x': 2006, 'y': 8.9, 'series': 1},
 {'x': 2007, 'y': 9.1, 'series': 1},
 {'x': 2008, 'y': 8.6, 'series': 1},
 {'x': 2009, 'y': 7.1, 'series': 1},
 {'x': 2010, 'y': 7.5, 'series': 1},
 {'x': 2011, 'y': 7.0, 'series': 1},
 {'x': 2012, 'y': 6.7, 'series': 1},
 {'x': 2013, 'y': 6.5, 'series': 1},
 {'x': 2014, 'y': 7.0, 'series': 1},
 {'x': 2015, 'y': 7.4, 'series': 1},
 {'x': 2016, 'y': 7.4, 'series': 1},
 {'x': 2017, 'y': 8.1, 'series': 1},
 {'x': 2018, 'y': 8.1, 'series': 1},
 {'x': 2019, 'y': 7.9, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1970, 'y': 9.9, 'series': 0},
 {'x': 1971, 'y': 9.3, 'series': 0},
 {'x': 1972, 'y': 8.7, 'series': 0},
 {'x': 1973, 'y': 8.1, 'series': 0},
 {'x': 1974, 'y': 7.5, 'series': 0},
 {'x': 1975, 'y': 5.9, 'series': 0},
 {'x': 1976, 'y': 5.7, 'series': 0},
 {'x': 1977, 'y': 5.5, 'series': 0},
 {'x': 1978, 'y': 5.2, 'series': 0},
 {'x': 1979, 'y': 4.9, 'series': 0},
 {'x': 1980, 'y': 4.3, 'series': 0},
 {'x': 1981, 'y': 4.0, 'series': 0},
 {'x': 1982, 'y': 3.6, 'series': 0},
 {'x': 1983, 'y': 3.5, 'series': 0},
 {'x': 1984, 'y': 4.1, 'series': 0},
 {'x': 1985, 'y': 4.0, 'series': 0},
 {'x': 1986, 'y': 3.9, 'series': 0},
 {'x': 1987, 'y': 5.0, 'series': 0},
 {'x': 1988, 'y': 5.0, 'series': 0},
 {'x': 1989, 'y': 4.7, 'series': 0},
 {'x': 1993, 'y': 5.7, 'series': 0},
 {'x': 1994, 'y': 5.7, 'series': 0},
 {'x': 1995, 'y': 6.1, 'series': 0},
 {'x': 1996, 'y': 5.9, 'series': 0},
 {'x': 1997, 'y': 6.8, 'series': 0},
 {'x': 1998, 'y': 7.6, 'series': 0},
 {'x': 1999, 'y': 9.5, 'series': 0},
 {'x': 2000, 'y': 10.0, 'series': 0},
 {'x': 2001, 'y': 8.9, 'series': 0},
 {'x': 2002, 'y': 8.7, 'series': 0},
 {'x': 2003, 'y': 8.8, 'series': 0},
 {'x': 2004, 'y': 9.7, 'series': 0},
 {'x': 2005, 'y': 7.6, 'series': 0},
 {'x': 2006, 'y': 8.4, 'series': 0},
 {'x': 2007, 'y': 8.3, 'series': 0},
 {'x': 2008, 'y': 8.5, 'series': 0},
 {'x': 2009, 'y': 7.5, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (tax units, individuals)', type: 'scatter', values: [
{'x': 1970, 'y': 9.9, 'series': 1},
 {'x': 1971, 'y': 9.3, 'series': 1},
 {'x': 1972, 'y': 8.7, 'series': 1},
 {'x': 1973, 'y': 8.1, 'series': 1},
 {'x': 1974, 'y': 7.5, 'series': 1},
 {'x': 1975, 'y': 5.9, 'series': 1},
 {'x': 1976, 'y': 5.7, 'series': 1},
 {'x': 1977, 'y': 5.5, 'series': 1},
 {'x': 1978, 'y': 5.2, 'series': 1},
 {'x': 1979, 'y': 4.9, 'series': 1},
 {'x': 1980, 'y': 4.3, 'series': 1},
 {'x': 1981, 'y': 4.0, 'series': 1},
 {'x': 1982, 'y': 3.6, 'series': 1},
 {'x': 1983, 'y': 3.5, 'series': 1},
 {'x': 1984, 'y': 4.1, 'series': 1},
 {'x': 1985, 'y': 4.0, 'series': 1},
 {'x': 1986, 'y': 3.9, 'series': 1},
 {'x': 1987, 'y': 5.0, 'series': 1},
 {'x': 1988, 'y': 5.0, 'series': 1},
 {'x': 1989, 'y': 4.7, 'series': 1},
 {'x': 1993, 'y': 5.7, 'series': 1},
 {'x': 1994, 'y': 5.7, 'series': 1},
 {'x': 1995, 'y': 6.1, 'series': 1},
 {'x': 1996, 'y': 5.9, 'series': 1},
 {'x': 1997, 'y': 6.8, 'series': 1},
 {'x': 1998, 'y': 7.6, 'series': 1},
 {'x': 1999, 'y': 9.5, 'series': 1},
 {'x': 2000, 'y': 10.0, 'series': 1},
 {'x': 2001, 'y': 8.9, 'series': 1},
 {'x': 2002, 'y': 8.7, 'series': 1},
 {'x': 2003, 'y': 8.8, 'series': 1},
 {'x': 2004, 'y': 9.7, 'series': 1},
 {'x': 2005, 'y': 7.6, 'series': 1},
 {'x': 2006, 'y': 8.4, 'series': 1},
 {'x': 2007, 'y': 8.3, 'series': 1},
 {'x': 2008, 'y': 8.5, 'series': 1},
 {'x': 2009, 'y': 7.5, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1966, 'y': 18.6, 'series': 0},
 {'x': 1971, 'y': 15.2, 'series': 0},
 {'x': 1976, 'y': 11.5, 'series': 0},
 {'x': 1981, 'y': 12.1, 'series': 0},
 {'x': 1986, 'y': 9.2, 'series': 0},
 {'x': 1987, 'y': 9.6, 'series': 0},
 {'x': 1988, 'y': 10.0, 'series': 0},
 {'x': 1989, 'y': 10.9, 'series': 0},
 {'x': 1990, 'y': 10.5, 'series': 0},
 {'x': 1991, 'y': 9.8, 'series': 0},
 {'x': 1992, 'y': 8.8, 'series': 0},
 {'x': 1993, 'y': 7.2, 'series': 0},
 {'x': 1994, 'y': 7.4, 'series': 0},
 {'x': 1995, 'y': 7.6, 'series': 0},
 {'x': 1996, 'y': 8.5, 'series': 0},
 {'x': 1997, 'y': 8.5, 'series': 0},
 {'x': 1998, 'y': 9.6, 'series': 0},
 {'x': 1999, 'y': 9.5, 'series': 0},
 {'x': 2000, 'y': 10.5, 'series': 0},
 {'x': 2001, 'y': 11.6, 'series': 0},
 {'x': 2002, 'y': 11.3, 'series': 0},
 {'x': 2003, 'y': 11.1, 'series': 0},
 {'x': 2004, 'y': 11.9, 'series': 0},
 {'x': 2005, 'y': 12.7, 'series': 0},
 {'x': 2006, 'y': 13.1, 'series': 0},
 {'x': 2007, 'y': 13.8, 'series': 0},
 {'x': 2008, 'y': 13.9, 'series': 0},
 {'x': 2009, 'y': 13.2, 'series': 0},
 {'x': 2010, 'y': 13.7, 'series': 0},
 {'x': 2011, 'y': 13.2, 'series': 0},
 {'x': 2012, 'y': 11.9, 'series': 0},
 {'x': 2013, 'y': 12.8, 'series': 0},
 {'x': 2014, 'y': 12.5, 'series': 0},
 {'x': 2015, 'y': 11.7, 'series': 0},
 {'x': 2016, 'y': 11.5, 'series': 0},
 {'x': 2017, 'y': 12.1, 'series': 0},
 {'x': 2018, 'y': 11.8, 'series': 0},
 {'x': 2019, 'y': 12.3, 'series': 0},
 {'x': 2020, 'y': 10.9, 'series': 0}], yAxis: 1},
 {key: 'StatFin - Equivalised disposable household cash income', type: 'scatter', values: [
{'x': 1966, 'y': 18.6, 'series': 1},
 {'x': 1971, 'y': 15.2, 'series': 1},
 {'x': 1976, 'y': 11.5, 'series': 1},
 {'x': 1981, 'y': 12.1, 'series': 1},
 {'x': 1986, 'y': 9.2, 'series': 1},
 {'x': 1987, 'y': 9.6, 'series': 1},
 {'x': 1988, 'y': 10.0, 'series': 1},
 {'x': 1989, 'y': 10.9, 'series': 1},
 {'x': 1990, 'y': 10.5, 'series': 1},
 {'x': 1991, 'y': 9.8, 'series': 1},
 {'x': 1992, 'y': 8.8, 'series': 1},
 {'x': 1993, 'y': 7.2, 'series': 1},
 {'x': 1994, 'y': 7.4, 'series': 1},
 {'x': 1995, 'y': 7.6, 'series': 1},
 {'x': 1996, 'y': 8.5, 'series': 1},
 {'x': 1997, 'y': 8.5, 'series': 1},
 {'x': 1998, 'y': 9.6, 'series': 1},
 {'x': 1999, 'y': 9.5, 'series': 1},
 {'x': 2000, 'y': 10.5, 'series': 1},
 {'x': 2001, 'y': 11.6, 'series': 1},
 {'x': 2002, 'y': 11.3, 'series': 1},
 {'x': 2003, 'y': 11.1, 'series': 1},
 {'x': 2004, 'y': 11.9, 'series': 1},
 {'x': 2005, 'y': 12.7, 'series': 1},
 {'x': 2006, 'y': 13.1, 'series': 1},
 {'x': 2007, 'y': 13.8, 'series': 1},
 {'x': 2008, 'y': 13.9, 'series': 1},
 {'x': 2009, 'y': 13.2, 'series': 1},
 {'x': 2010, 'y': 13.7, 'series': 1},
 {'x': 2011, 'y': 13.2, 'series': 1},
 {'x': 2012, 'y': 11.9, 'series': 1},
 {'x': 2013, 'y': 12.8, 'series': 1},
 {'x': 2014, 'y': 12.5, 'series': 1},
 {'x': 2015, 'y': 11.7, 'series': 1},
 {'x': 2016, 'y': 11.5, 'series': 1},
 {'x': 2017, 'y': 12.1, 'series': 1},
 {'x': 2018, 'y': 11.8, 'series': 1},
 {'x': 2019, 'y': 12.3, 'series': 1},
 {'x': 2020, 'y': 10.9, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1971, 'y': 195.9, 'series': 0},
 {'x': 1975, 'y': 176.9, 'series': 0},
 {'x': 1977, 'y': 168.4, 'series': 0},
 {'x': 1980, 'y': 165.5, 'series': 0},
 {'x': 1983, 'y': 169.4, 'series': 0},
 {'x': 1986, 'y': 169.5, 'series': 0},
 {'x': 1987, 'y': 169.8, 'series': 0},
 {'x': 1988, 'y': 168.4, 'series': 0},
 {'x': 1989, 'y': 171.4, 'series': 0},
 {'x': 1990, 'y': 170.0, 'series': 0},
 {'x': 1991, 'y': 168.3, 'series': 0},
 {'x': 1992, 'y': 165.8, 'series': 0},
 {'x': 1993, 'y': 164.8, 'series': 0},
 {'x': 1994, 'y': 168.2, 'series': 0},
 {'x': 1995, 'y': 165.7, 'series': 0},
 {'x': 1996, 'y': 164.0, 'series': 0},
 {'x': 1997, 'y': 169.0, 'series': 0},
 {'x': 1998, 'y': 172.9, 'series': 0},
 {'x': 1999, 'y': 169.1, 'series': 0},
 {'x': 2000, 'y': 171.5, 'series': 0},
 {'x': 2001, 'y': 173.0, 'series': 0},
 {'x': 2002, 'y': 170.6, 'series': 0},
 {'x': 2003, 'y': 172.4, 'series': 0},
 {'x': 2004, 'y': 169.2, 'series': 0},
 {'x': 2005, 'y': 175.1, 'series': 0},
 {'x': 2006, 'y': 172.5, 'series': 0},
 {'x': 2007, 'y': 176.3, 'series': 0},
 {'x': 2008, 'y': 175.8, 'series': 0},
 {'x': 2009, 'y': 175.9, 'series': 0},
 {'x': 2010, 'y': 173.7, 'series': 0},
 {'x': 2011, 'y': 174.6, 'series': 0},
 {'x': 2012, 'y': 173.0, 'series': 0},
 {'x': 2013, 'y': 172.9, 'series': 0},
 {'x': 2014, 'y': 175.6, 'series': 0},
 {'x': 2015, 'y': 177.4, 'series': 0},
 {'x': 2016, 'y': 174.7, 'series': 0},
 {'x': 2017, 'y': 178.6, 'series': 0},
 {'x': 2018, 'y': 176.4, 'series': 0},
 {'x': 2019, 'y': 174.7, 'series': 0}], yAxis: 1},
 {key: "Atkinson (2008) 'Census' - Gross individual earnings", type: 'scatter', values: [
{'x': 1971, 'y': 194.3, 'series': 1},
 {'x': 1975, 'y': 175.4, 'series': 1},
 {'x': 1980, 'y': 164.0, 'series': 1},
 {'x': 1985, 'y': 165.0, 'series': 1},
 {'x': 1990, 'y': 169.7, 'series': 1},
 {'x': 2019, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'OECD - Gross individual earnings', type: 'scatter', values: [
{'x': 1971, 'y': null, 'series': 2},
 {'x': 1977, 'y': 168.4, 'series': 2},
 {'x': 1980, 'y': 165.5, 'series': 2},
 {'x': 1983, 'y': 169.4, 'series': 2},
 {'x': 1986, 'y': 169.5, 'series': 2},
 {'x': 1987, 'y': 169.8, 'series': 2},
 {'x': 1988, 'y': 168.4, 'series': 2},
 {'x': 1989, 'y': 171.4, 'series': 2},
 {'x': 1990, 'y': 170.0, 'series': 2},
 {'x': 1991, 'y': 168.3, 'series': 2},
 {'x': 1992, 'y': 165.8, 'series': 2},
 {'x': 1993, 'y': 164.8, 'series': 2},
 {'x': 1994, 'y': 168.2, 'series': 2},
 {'x': 1995, 'y': 165.7, 'series': 2},
 {'x': 1996, 'y': 164.0, 'series': 2},
 {'x': 1997, 'y': 169.0, 'series': 2},
 {'x': 1998, 'y': 172.9, 'series': 2},
 {'x': 1999, 'y': 169.1, 'series': 2},
 {'x': 2000, 'y': 171.5, 'series': 2},
 {'x': 2001, 'y': 173.0, 'series': 2},
 {'x': 2002, 'y': 170.6, 'series': 2},
 {'x': 2003, 'y': 172.4, 'series': 2},
 {'x': 2004, 'y': 169.2, 'series': 2},
 {'x': 2005, 'y': 175.1, 'series': 2},
 {'x': 2006, 'y': 172.5, 'series': 2},
 {'x': 2007, 'y': 176.3, 'series': 2},
 {'x': 2008, 'y': 175.8, 'series': 2},
 {'x': 2009, 'y': 175.9, 'series': 2},
 {'x': 2010, 'y': 173.7, 'series': 2},
 {'x': 2011, 'y': 174.6, 'series': 2},
 {'x': 2012, 'y': 173.0, 'series': 2},
 {'x': 2013, 'y': 172.9, 'series': 2},
 {'x': 2014, 'y': 175.6, 'series': 2},
 {'x': 2015, 'y': 177.4, 'series': 2},
 {'x': 2016, 'y': 174.7, 'series': 2},
 {'x': 2017, 'y': 178.6, 'series': 2},
 {'x': 2018, 'y': 176.4, 'series': 2},
 {'x': 2019, 'y': 174.7, 'series': 2}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1909, 'y': 37.4, 'series': 0},
 {'x': 1915, 'y': 35.9, 'series': 0},
 {'x': 1922, 'y': 25.4, 'series': 0},
 {'x': 1926, 'y': 29.7, 'series': 0},
 {'x': 1967, 'y': 19.4, 'series': 0},
 {'x': 1987, 'y': 16.1, 'series': 0},
 {'x': 1989, 'y': 15.8, 'series': 0},
 {'x': 1990, 'y': 15.3, 'series': 0},
 {'x': 1991, 'y': 15.2, 'series': 0},
 {'x': 1992, 'y': 15.3, 'series': 0},
 {'x': 1993, 'y': 13.7, 'series': 0},
 {'x': 1994, 'y': 13.9, 'series': 0},
 {'x': 1995, 'y': 13.9, 'series': 0},
 {'x': 1996, 'y': 15.1, 'series': 0},
 {'x': 1997, 'y': 16.2, 'series': 0},
 {'x': 1998, 'y': 17.3, 'series': 0},
 {'x': 1999, 'y': 21.2, 'series': 0},
 {'x': 2000, 'y': 21.2, 'series': 0},
 {'x': 2001, 'y': 20.6, 'series': 0},
 {'x': 2002, 'y': 19.6, 'series': 0},
 {'x': 2003, 'y': 20.4, 'series': 0},
 {'x': 2004, 'y': 20.7, 'series': 0},
 {'x': 2005, 'y': 21.6, 'series': 0},
 {'x': 2009, 'y': 22.7, 'series': 0}], yAxis: 1},
 {key: 'Roine & Waldenström (2015) - Individual net wealth', type: 'scatter', values: [
{'x': 1909, 'y': 37.4, 'series': 1},
 {'x': 1915, 'y': 35.9, 'series': 1},
 {'x': 1922, 'y': 25.4, 'series': 1},
 {'x': 1926, 'y': 29.7, 'series': 1},
 {'x': 1967, 'y': 19.4, 'series': 1},
 {'x': 1987, 'y': 16.1, 'series': 1},
 {'x': 1989, 'y': 15.8, 'series': 1},
 {'x': 1990, 'y': 15.3, 'series': 1},
 {'x': 1991, 'y': 15.2, 'series': 1},
 {'x': 1992, 'y': 15.3, 'series': 1},
 {'x': 1993, 'y': 13.7, 'series': 1},
 {'x': 1994, 'y': 13.9, 'series': 1},
 {'x': 1995, 'y': 13.9, 'series': 1},
 {'x': 1996, 'y': 15.1, 'series': 1},
 {'x': 1997, 'y': 16.2, 'series': 1},
 {'x': 1998, 'y': 17.3, 'series': 1},
 {'x': 1999, 'y': 21.2, 'series': 1},
 {'x': 2000, 'y': 21.2, 'series': 1},
 {'x': 2001, 'y': 20.6, 'series': 1},
 {'x': 2002, 'y': 19.6, 'series': 1},
 {'x': 2003, 'y': 20.4, 'series': 1},
 {'x': 2004, 'y': 20.7, 'series': 1},
 {'x': 2005, 'y': 21.6, 'series': 1},
 {'x': 2009, 'y': 22.7, 'series': 1}], yAxis: 1}]
});