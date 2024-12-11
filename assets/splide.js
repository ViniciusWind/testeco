document.addEventListener('DOMContentLoaded', function () {
    var splide_clientes = document.getElementById('splide_clientes');
    new Splide(splide_clientes, {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        autoplay: true,
        reducedMotion: {
            interval: 5000,
            speed: 800,
            autoplay: "play"
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    var splide_prints = document.getElementById('splide_prints');
    new Splide(splide_prints, {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        autoplay: true,
        reducedMotion: {
            interval: 5000,
            speed: 800,
            autoplay: "play"
        }
    }).mount();
});
