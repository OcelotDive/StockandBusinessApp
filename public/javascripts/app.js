'use strict';

(function () {

    var app = angular.module('app', ['ngRoute']);

    app.run(function ($http, $rootScope, $location, $window) {




    })


    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: './views/main.html',
            controller: 'MainController',
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        });

        $routeProvider.when('/stock/:id', {
            templateUrl: './views/stock.html',
            controller: 'StockController',
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        });



        $routeProvider.otherwise('/');
    })


    app.controller('MainController', MainController);

    function MainController($location, $window, $http, $timeout, $interval) {
        var vm = this;

        vm.stocks = [];
        vm.stockIndex;
        vm.stock = {
            symbol: ''
        }

        vm.stockIndexSelect = function () {
            console.log(vm.stocks[vm.stockIndex].symbol);
            var id = vm.stocks[vm.stockIndex].symbol;

            $location.path('/stock/' + id);
        }

        // intial return of all stocks saved to db
        vm.getAllStocks = function () {
            $http.get('/api/stocks')
                .then(function (res) {
                    vm.stocks = res.data;

                }, function (err) {
                    console.log(err);
                })
        }

        vm.getAllStocks();


        vm.addStock = function () {
            if (vm.stocks.length === 9) {
                alert("Stock Limit Reached Please Delete Some Old Stocks");
                return;
            } else if (!vm.stock) {
                console.log("Invalid data supplied");
                return;
            }
            console.log("this is the stock SYMBOL" + vm.stock.symbol)

            $http.post('/api/stocks', vm.stock)
                .then(function (res) {
                    vm.stock = {};
                    vm.getAllStocks();

                    console.log(res);
                }, function (err) {
                    console.log(err);
                });


        }

        vm.removeStock = function () {

            $http.put('api/deleteStock', vm.stock)
                .then(function (response) {
                    console.log('removing stock ' + vm.stock.symbol);
                    vm.getAllStocks();
                }, function (err) {
                    throw {
                        err
                    };
                })
        }



        var date = new Date();
        vm.d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        vm.time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        var temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0];
        
                vm.changeColor = function(index) {
           
        var x = document.getElementById('cryTable').getElementsByTagName('td');
              var f = parseFloat(x[index].innerHTML);
              console.log(temp[index])
        console.log('f is ' + f)
        if (f > temp[index]) {
        x[index].style.backgroundColor = 'green';
        }
        else if (f < temp[index]) {
            x[index].style.backgroundColor = 'red';
        }
        else {
            x[index].style.backgroundColor = '';
        }
        
        $timeout(function() {
          
        x[index].style.backgroundColor = '';
        temp[index] = (f);
            console.log('tempindex is ' + temp[index]);
        }, 1500);
    } 
        
        
        
        
        
        
        vm.startCurrency = function () {
   
            
            
            
            
            
            
            
            
            
            
            
            
            //$interval(function() {
            $http.get('/api/test')
                .then(function (res) {

                    console.log("get request firing")
                    console.log('this is res data' +res.data);
                    vm.currenciesUS = res.data[0];
                    vm.currenciesEURO = res.data[1];
                    vm.currenciesPOUNDS = res.data[2];
                    vm.currenciesCANADIAN = res.data[3];
                    vm.currenciesAUSTRALIAN = res.data[4];
                    vm.currenciesYEN = res.data[5];
                   
            /*vm.changeColor(2);
            vm.changeColor(3);
            vm.changeColor(4);
            vm.changeColor(5);
            vm.changeColor(6);
            vm.changeColor(8);
            vm.changeColor(10);
            vm.changeColor(11);
            vm.changeColor(12);
            vm.changeColor(13);
            vm.changeColor(15);
            vm.changeColor(16);
            vm.changeColor(18);
            vm.changeColor(19);
            vm.changeColor(20);
            vm.changeColor(22);
            vm.changeColor(23);
            vm.changeColor(24);
            vm.changeColor(26);
            vm.changeColor(27);
            vm.changeColor(29);
            vm.changeColor(30);
            vm.changeColor(31);
            vm.changeColor(32);
            vm.changeColor(34);
            vm.changeColor(36);
            vm.changeColor(37);
            vm.changeColor(38);
            vm.changeColor(39);
            vm.changeColor(40);*/

                }, function (err) {
                    console.log(err);
                })
            //second request here
            //}, 20000);
            
          
            
        }
        vm.startCurrency();


             vm.getNews = function(source) {
           
          $http.get('https://newsapi.org/v1/articles?source=' + source + '&sortBy=top&apiKey=ca9303cd118242fd94495589428e10ad')
                .then(function (res) {

                    console.log(res)
                    vm.news = res.data.articles;
                   vm.newsSource = res.data.source;
                }, function (err) {
                    console.log(err);
                })
        
        }
        vm.getNews('the-wall-street-journal');
        
        
        
        
        

        vm.getAllcommodities = function() {
        
        vm.getGold = function () {

            $http.get('/api/goldQuote')
                .then(function (res) {
                vm.goldres = res.data;
                console.log(vm.goldres);
                    console.log('this is gold response ' + vm.goldres.dataset_code);

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getGold();
        
        //get silver data
        
         vm.getSilver = function () {

            $http.get('/api/silverQuote')
                .then(function (res) {
                    vm.silverres = res.data;
                console.log(vm.silverres)
                    console.log('this is silver response ' + vm.silverres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getSilver();

        
        
        
        
        
        
        
          vm.getOil = function () {

            $http.get('/api/oilQuote')
                .then(function (res) {
                    vm.oilres = res.data;
                console.log(vm.oilres)
                    console.log('this is oil response ' + vm.oilres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getOil();
        
        
         vm.getAluminum = function () {

            $http.get('/api/aluminumQuote')
                .then(function (res) {
                    vm.aluminumres = res.data;
                    console.log('this is aluminum response ' + vm.aluminumres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getAluminum();
        
        
           vm.getTin = function () {

            $http.get('/api/tinQuote')
                .then(function (res) {
                    vm.tinres = res.data;
                    console.log('this is tin response ' + vm.tinres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getTin();
        
         vm.getCorn = function () {

            $http.get('/api/cornQuote')
                .then(function (res) {
                    vm.cornres = res.data;
                    console.log(vm.cornres)
                    console.log('this is corn response ' + vm.cornres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getCorn();
        
          vm.getWheat = function () {

            $http.get('/api/wheatQuote')
                .then(function (res) {
                    vm.wheatres = res.data;
                console.log(vm.wheatres)
                    console.log('this is wheat response ' + vm.wheatres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getWheat();
        
        
        //new commodity routes
        
        vm.getCattle = function () {

            $http.get('/api/cattleQuote')
                .then(function (res) {
                    vm.cattleres = res.data;
                console.log(vm.cattleres)
                    console.log('this is cattle response ' + vm.cattleres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getCattle();
        
        vm.getNaturalGas = function () {

            $http.get('/api/naturalGasQuote')
                .then(function (res) {
                    vm.naturalGasres = res.data;
                console.log(vm.naturalGasres)
                    console.log('this is gas response ' + vm.naturalGasres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getNaturalGas();
        
        
            vm.getIridium = function () {

            $http.get('/api/iridiumQuote')
                .then(function (res) {
                    vm.iridiumres = res.data;
                console.log(vm.coalres)
                    console.log('this is iridium response ' + vm.iridiumres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getIridium();
        
        
           vm.getLumber = function () {

            $http.get('/api/lumberQuote')
                .then(function (res) {
                    vm.lumberres = res.data;
                console.log(vm.lumberres)
                    console.log('this is lumber response ' + vm.lumberres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getLumber();
        
           vm.getSugar = function () {

            $http.get('/api/sugarQuote')
                .then(function (res) {
                    vm.sugarres = res.data;
                console.log(vm.sugarres)
                    console.log('this is sugar response ' + vm.sugarres.dataset_code)

                }, function (err) {
                    console.log(err);
                })
        }
        vm.getSugar();
        
        };
        vm.getAllcommodities();
        
        $interval(vm.getAllcommodities,60000);


    }

    //end main controller



    //chart info


    app.controller('StockController', StockController);

    function StockController($location, $window, $http, $timeout, $interval) {
        var vm = this;
        var url = window.location.toString();
        vm.loaded = false;
        console.log(url)
        vm.tof = false;
        // vm.param = parseInt(url.charAt(url.length - 1));
        //get stock symbol from url
        var reverseURL = url.split('').reverse().join('');
        vm.currentSymbol = reverseURL.substring(0, reverseURL.indexOf('/')).split('').reverse().join('');
        vm.interval = 'daily';
        vm.amount = 2;
        vm.getSelectionInterval = function (sel) {
            vm.interval = sel;
        }
        vm.getSelectionPeriod = function (num) {
            vm.amount = num;
        }


        vm.reCalc = function () {

            vm.tof = true;
        }




        var currentChart = 'ScatterChart';

        vm.chartType = function (buttonValue) {
            if (buttonValue === 2) {
                currentChart = 'LineChart';
                console.log(currentChart)
            }
        }









        var stocks = new Stocks('TREDUDKWKMGY7666');


        vm.runStockRequest = function (type) {
            vm.currentGraph = 0;
            console.log(vm.currentGraph)
            console.log("this is now the interval " + vm.interval)

            async function request() {
                var result = await stocks.timeSeries({
                    symbol: vm.currentSymbol,
                    interval: vm.interval,
                    amount: vm.amount

                });



                console.log(result);


                var arr = [];
                for (var i = 0; i < result.length; i++) {
                    arr.unshift([result[i].date, result[i].open, result[i].high, result[i].low, result[i].close]);
                    vm.volume += result[i].volume;
                }

                console.log(arr);
                arr.unshift(['Year', 'open', 'high', 'low', 'close']);

                var closeData = arr[arr.length - 1].toString();
                vm.formattedCloseData = closeData.substr(0, closeData.indexOf('('));
                vm.closePrice = arr[arr.length - 1][4].toFixed(2).toString() + ' ' + 'USD';
                vm.priceChange = arr[arr.length - 1][4] - arr[1][4];
                vm.priceChange = vm.priceChange.toFixed(2);
                vm.pricePercent = ((vm.priceChange / arr[arr.length - 1][4]) * 100).toFixed(2).toString() + '%';
                console.log('this is vm.close ' + vm.formattedCloseData)
                console.log(vm.priceChange);
                console.log(vm.pricePercent);

                vm.historic = result;



                //this can be deleted if not needed in final version

                /* $http.get('/api/singleQuote',vm.currentSymbol)
                 .then(function(res) {
                     console.log('this is the single stock response ' + res);
                     
                 }, function(err) {
                     console.log(err);
                 })*/




                $timeout(function () {

                    google.charts.load('current', {
                        'packages': ['corechart']
                    });


                    // Set a callback to run when the Google Visualization API is loaded.
                    google.charts.setOnLoadCallback(drawChart);



                    // Callback that creates and populates a data table,
                    // instantiates the pie chart, passes in the data and
                    // draws it.
                    function drawChart() {

                        //3d button

                        // Create the data table.
                        var data = new google.visualization.arrayToDataTable(
                            arr
                            /*[
          ['Year', 'open', 'high', 'low', 'close'],
           
              
              ['2004',  1000, 1200, 380, 400],
              ['2005',  1170, 2000, 460, 460],
              ['2006',  660, 1564, 490, 1120],
              ['2007',  1030, 1180, 520, 540],
              ['2008',  1000, 1200, 380, 400],
              ['2005',  1170, 2000, 460, 460],
              ['2009',  660, 1564, 490, 1120],
              ['2010',  1030, 1180, 520, 540]     

        ]*/

                        );


                        // Set chart options
                        var options = {
                            'title': vm.currentSymbol,

                            titleTextStyle: {
                                color: '#FBBE01', // any HTML string color ('red', '#cc00cc')
                                fontName: 'Arial',
                                fontSize: 50, // 12, 18 whatever you want (don't specify px)
                                bold: true // true or false
                            },
                            legend: {
                                textStyle: {
                                    fontSize: 12
                                }
                            },
                            crosshair: {
                                trigger: 'both'
                            },
                            is3D: true,
                            animation: {
                                duration: 1000,
                                easing: 'out',
                                startup: true
                            },
                            curveType: '',
                            backgroundColor: {
                                fill: 'transparent'
                            },
                            'width': 1000,
                            'height': 800
                        };

                        // Instantiate and draw our chart, passing in some options.
                        if (vm.currentGraph === 1 || vm.currentGraph === 0) {
                            var chart = new

                            google.visualization.LineChart(document.getElementById('chartContainer'));

                            chart.draw(data, options);
                            vm.currentGraph = type;

                        }
                        if (vm.currentGraph === 2) {
                            var chart = new

                            google.visualization.ScatterChart(document.getElementById('chartContainer'));

                            chart.draw(data, options);
                            vm.currentGraph = type;
                        }
                        if (vm.currentGraph === 3) {
                            var chart = new

                            google.visualization.AreaChart(document.getElementById('chartContainer'));

                            chart.draw(data, options);
                            vm.currentGraph = type;
                        }

                    }
                    vm.loaded = true;
                    vm.tof = false;
                    vm.intLabel = (vm.interval === 'daily') ? 'Days' : (vm.interval === '1min') ? 'Mins' : (vm.interval === '60min') ? 'Hours' : (vm.interval === 'weekly') ? 'Weeks' : (vm.interval === 'monthly') ? 'Months' : 'interval';


                }, 1000) //end google chart   


            }
            request();


        }
        vm.runStockRequest();


        //scatterchart request





    }
    //end stock controller








}());
