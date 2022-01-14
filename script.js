function move() {
    var elem = document.getElementById("myBar"); //elem получает элементы myBar
    var width = 10; //размер ширины myBar
    var id = setInterval(frame, 10); //вызов функции регулярно, повторяя вызов через 10 сек.
    function frame() {
        if (width>=100) { // если ширина равна или больше 100, то нужно обнулить интервал
                clearInterval(id);// обнуление
        } 
        else {
            width++;//инклиминтировагие ширины бара
            elem.style.width = width + '%'; //получение элемента стиля ширины и прибавлять в % соотношений для него
            document.getElementById("label").innerHTML = width*1 + '%';// получение индитификатора label и внести значения действия
        }
    }
}