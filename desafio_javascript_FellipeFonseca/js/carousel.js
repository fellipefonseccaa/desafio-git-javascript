class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(items) {
        let position = 0;
        let automatico;

        function showSlide() {
            const item = items[position];

            document.getElementById("carousel").style.backgroundImage = `url('img/${item.image}')`;
            document.getElementById("carousel-title").textContent = item.title;
            document.getElementById("carousel-link").href = item.url;
        }

        function nextSlide() {
            position++;
            if (position >= items.length) {
                position = 0;
            }
            showSlide();
        }

        function previousSlide() {
            position--;
            if (position < 0) {
                position = items.length - 1;
            }
            showSlide();
        }

        function restartAutomatic() {
            clearInterval(automatico);
            automatico = setInterval(nextSlide, 5000);
        }

        document.querySelector(".carousel-next").addEventListener("click", function(event) {
            event.preventDefault();
            nextSlide();
            restartAutomatic();
        });

        document.querySelector(".carousel-prev").addEventListener("click", function(event) {
            event.preventDefault();
            previousSlide();
            restartAutomatic();
        });

        showSlide();
        restartAutomatic();
    }
}

const carouselArr = [];

carouselArr.push(new Carousel(
    "imagem_1.jpg",
    "Conheça a Ford Ranger 2022",
    "lancamento.html"
));

carouselArr.push(new Carousel(
    "imagem_2.jpg",
    "Ford: uma história que atravessa gerações",
    "#"
));

carouselArr.push(new Carousel(
    "imagem_3.jpg",
    "Bronco Sport: pronto para novos caminhos",
    "lancamento.html"
));

document.addEventListener("DOMContentLoaded", function() {
    Carousel.Start(carouselArr);
});
