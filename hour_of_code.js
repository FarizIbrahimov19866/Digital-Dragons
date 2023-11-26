document.addEventListener('DOMContentLoaded', function () {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 17)];
        }
        return color;
    }

    function changeColors() {
        var bgColor = getRandomColor();
        var headerColor = getRandomColor();

        document.body.style.backgroundColor = bgColor;
        document.querySelector('section').style.backgroundColor = headerColor;
    }

    setInterval(changeColors, 5000);
});