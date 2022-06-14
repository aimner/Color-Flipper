let gaps = []

function createGapsArr() {
    for (let i = 0; i <= 6; i++) {
        if (i === 0) {
            gaps.unshift(i)
        } else {
            gaps.push(colorScroll.offsetWidth / 6 * i)
        }
    }
}

createGapsArr()

