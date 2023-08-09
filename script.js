const tagsElOrange = document.getElementById('tagsOrange');
const tagsElRed = document.getElementById('tagsRed');
const pickOrange = document.getElementById('pickOrange')
const pickRed = document.getElementById('pickRed')

// textarea.focus();

window.onload = function () {
    createTags();
}

pickOrange.addEventListener('click', function () {
    const tags = document.querySelectorAll('.tagOrange');

    for (let tag of tags) {
        unHighlightTag(tag);
    }
    randomSelect('Orange');
});

pickRed.addEventListener('click', function () {
    const tags = document.querySelectorAll('.tagRed');

    for (let tag of tags) {
        unHighlightTag(tag);
    }
    randomSelect('Red');
});


function createTags() {

    const orangeBalls = Array.from({ length: 69 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    // const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsElOrange.innerHTML = '';

    orangeBalls.forEach(orangeBall => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tagOrange');
        tagEl.innerText = orangeBall;
        tagsElOrange.appendChild(tagEl);
    });

    const redBalls = Array.from({ length: 26 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    tagsElRed.innerHTML = '';

    redBalls.forEach(redBall => {

        const tagEl = document.createElement('span');
        tagEl.classList.add('tagRed');
        tagEl.innerText = redBall;
        tagsElRed.appendChild(tagEl);

    });
}

function randomSelect(button = '') {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag(button);
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            let randomTags = [];
            if (button === 'Orange') {
                randomTags = pickOrangeTag();
            }
            else if (button === 'Red') {
                randomTags = [pickRedTag()];
            }

            for (let randomTag of randomTags) {
                highlightTag(randomTag);
            }

        }, 100);

    }, times * 100)
}

function pickRandomTag(button) {
    let tag = '';
    if (button === 'Orange') {
        tag = '.tagOrange';
    }
    if (button === 'Red') {
        tag = '.tagRed'
    }
    const tags = document.querySelectorAll(tag);
    return tags[Math.floor(Math.random() * tags.length)]
}

function pickOrangeTag() {
    const tags = document.querySelectorAll('.tagOrange');
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
        const number = Math.floor(Math.random() * tags.length) + 1;
        if (!randomNumbers.includes(tags[number])) {
            randomNumbers.push(tags[number]);
        }
    }
    return randomNumbers;
}

function pickRedTag() {
    const tags = document.querySelectorAll('.tagRed');
    let number = Math.floor(Math.random() * tags.length) + 1;
    return tags[number];

}

function highlightTag(tag) {
    tag.classList.add('highlight');

}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');

}



