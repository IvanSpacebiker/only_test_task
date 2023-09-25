const blue = 'rgba(56, 119, 238, 0.7)';
const green = 'rgba(106, 191, 75, 0.7)';

const properties = {
    color : [blue, blue, green, green, blue, green, blue, blue, green, blue],
    top : ['27vh', '67vh', '45vh', '38vh', '59vh', '74vh', '21vh', '44vh', '62vh', '66vh'],
    left : ['29vw', '23vw', '36vw', '60vw', '56vw', '57vw', '71vw', '73vw', '68vw', '83vw'],
    label : ['Общежитие №1', 'Мост', "Выставка", "Музей", "Конференц-холл", "Гостинница", "Общежитие №2", "Поликлиника", "Отель №1", "Отель №2"]
}

let clickHandler = function () {
    const b = event.currentTarget;
    if (b.isClicked) {
        b.isClicked = false;
        const label = b.querySelector('p');
        label.remove();
        b.style.width = '30px';
        b.innerText = '+';
    } else {
        const label = document.createElement('p');
        label.innerText = properties.label[b.id]
        b.style.width = '110px';
        b.innerText = '−';
        b.isClicked = true;
        b.append(label)
    }
}

for (let i = 0; i < 10; i++) {
    let b = document.createElement('button');
    b.onclick = clickHandler;
    b.id = i;
    b.innerText = '+';
    b.style.backgroundColor = properties.color[i];
    b.style.top = properties.top[i];
    b.style.left = properties.left[i];
    document.body.append(b);
}
