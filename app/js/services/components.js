angular.module('pedalApp')
    .component('inicio', {
        templateUrl: 'views/Inicio.html',
        controller: function ($scope) {

            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }

            $scope.SendMail = function () {
                window.open('mailto:pedaltourcajamarca@gmail.com');
            }
        }
    })
    .component('conoce', {
        templateUrl: 'views/ConoceCajamarca.html',
        controller: function () {
            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }
        }
    })
    .component('contacto', {
        templateUrl: 'views/Contacto.html',
        controller: function () {
            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }
        }
    })
    .component('galeria', {
        templateUrl: 'views/Galeria.html',
        controller: function ($scope, $http) {
            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }

            $http.get('app/json/gallery-list.json').then(function (response) {
                $scope.imgs = response.data.imgs;
            });
            $('.box').hide();

            $scope.ShowDetails = function (asd) {
                $("#img_detail").attr("src", asd);
                $('.box').show();
            }

            $scope.HideDetails = function () {
                $("#img_detail").attr("src", "");
                $('.gallery').show();
                $('.box').hide();
            }
        }
    })
    .component('nosotros', {
        templateUrl: 'views/Nosotros.html',
        controller: function () {
            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }
        }
    })
    .component('reservas', {
        templateUrl: 'views/Reservas.html',
        controller: function ($scope) {
            $(function () {
                $scope.model = {};

                if (!window.location.hash || !window.location.hash.includes("#en")) {
                    $(".lang-es").show();
                    $(".lang-en").hide();
                } else {
                    $(".lang-en").show();
                    $(".lang-es").hide();
                }

                const Toast = {
                    init() {
                        this.hideTimeout = null;

                        this.el = document.createElement("div");
                        this.el.className = "toast";
                        document.body.appendChild(this.el);
                    },

                    show(message, state) {
                        clearTimeout(this.hideTimeout);
                        this.el.textContent = message;
                        this.el.className = "toast toast--visible";

                        if (state) {
                            this.el.classList.add(`toast--${state}`);
                        }

                        this.hideTimeout = setTimeout(() => {
                            this.el.classList.remove("toast--visible");
                        }, 7000);
                    }
                };

                Toast.init();

                jQuery.datetimepicker.setLocale('es');
                $('.date').datetimepicker({
                    timepicker: false,
                    format: 'd/m/Y',
                    onChangeDateTime: function (dp, $input) {
                        $scope.model.date = $input.val();
                    }
                });
                $('.time').datetimepicker({
                    datepicker: false,
                    allowTimes: [
                        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
                        '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
                    ],
                    format: 'H:i',
                    onChangeDateTime: function (dp, $input) {
                        $scope.model.time = $input.val();
                    }
                });
                let reservasDB = firebase.database().ref("reservas");
                $scope.SendMail = function () {
                    if (!$scope.model.name || !$scope.model.date || !$scope.model.time || !$scope.model.mail || !$scope.model.phone) {
                        Toast.show("Todos los campos son obligatorios", "error");
                        return;
                    }

                    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
                    let localISOTime = (new Date(Date.now() + tzoffset)).toJSON();
                    let newReservation = reservasDB.push();
                    newReservation.set({
                        nombres: $scope.model.name,
                        fecha: $scope.model.date,
                        hora: $scope.model.time,
                        correo: $scope.model.mail,
                        celular: $scope.model.phone,
                        date: localISOTime,
                        hasScheduled: false
                    });
                    $scope.model = {};
                    Toast.show("Gracias por confiar en pedal Tour, para una mejor experiencia nos pondremos en contacto contigo.", "success");
                }
            });
        }
    })
    .component('ayuda', {
        templateUrl: 'views/Ayuda.html',
        controller: function ($scope, $http) {
            if (!window.location.hash || !window.location.hash.includes("#en")) {
                $(".lang-es").show();
                $(".lang-en").hide();
            } else {
                $(".lang-en").show();
                $(".lang-es").hide();
            }

            $http.get('app/json/faq.json').then(function (response) {
                $scope.faqs = response.data.faqs;
            });

            $http.get('app/json/normas.json').then(function (response) {
                $scope.normas = response.data.normas;
            });
        }
    })
    .component('error', {
        templateUrl: 'views/Error.html',
        controller: function () {
            function stars() {
                let count = 500;
                let scene = document.querySelector('.scene');
                let i = 0;
                while (i < count) {
                    let star = document.createElement("i");
                    let x = Math.floor(Math.random() * window.innerWidth);
                    let y = Math.floor(Math.random() * window.innerHeight);
                    let duration = Math.random() * 10;
                    let size = Math.floor((Math.random() * 5) + 1);
                    star.style.left = x + 'px';
                    star.style.top = y + 'px';
                    star.style.width = size + 'px';
                    star.style.height = size + 'px';
                    star.style.animationDuration = 5 + duration + 's';
                    star.style.animationDelay = duration + 's';
                    scene.appendChild(star);
                    i++;
                }
            }
            stars();
        }
    })
    .component('admin', {
        templateUrl: 'views/Admin.html',
        controller: function ($scope) {
            $(function () {
                $(".lang-es").show();
                $(".lang-en").hide();
                $(".eeuu").hide();
                $scope.loading = true;
                $scope.reservas = [];

                function SortByName(a, b) {
                    var aName = a.date;
                    var bName = b.date;
                    return ((aName > bName) ? -1 : ((aName < bName) ? 1 : 0));
                }

                $scope.Programar = function (reserva) {
                    reserva.hasScheduled = true;
                    console.log(reserva.id);

                    firebase.database().ref('reservas/' + reserva.id).set({
                        nombres: reserva.nombres,
                        fecha: reserva.fecha,
                        hora: reserva.hora,
                        correo: reserva.correo,
                        celular: reserva.celular,
                        date: reserva.date,
                        hasScheduled: reserva.hasScheduled
                    });
                    console.log("Terminado");
                }

                //retrieve data
                let reservasDB = firebase.database().ref("reservas");
                reservasDB.on("value", function (data) {
                    let info = data.val();
                    let keys = Object.keys(info);
                    $scope.reservas = [];
                    for (let i = 0; i < keys.length; i++) {
                        let j = keys[i];

                        let item = {
                            id: j,
                            nombres: info[j].nombres,
                            fecha: info[j].fecha,
                            hora: info[j].hora,
                            correo: info[j].correo,
                            celular: info[j].celular,
                            date: info[j].date,
                            hasScheduled: info[j].hasScheduled
                        }
                        $scope.reservas.push(item);
                    }
                    $scope.reservas.sort(SortByName);
                    $scope.$digest()
                })
            });
        }
    })
