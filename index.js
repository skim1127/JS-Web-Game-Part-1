function newImage(url, left, bottom) {
    let element = document.createElement('img')
    element.src = url
    element.style.position = 'fixed'
    element.style.left = left + 'px'
    element.style.bottom = bottom + 'px'
    document.body.append(element)
    return element
}

function newItem(url, left, bottom) {
    let element = newImage(url, left, bottom)

    element.addEventListener('dblclick', function() {
        element.remove()
    })
}

newImage('./assets/red-character.gif', 200, 100)
newImage('./assets/green-character.gif', 150, 100)
newImage('./assets/pine-tree.png', 650, 200)
newImage('./assets/tree.png', 200, 300)
newImage('./assets/pillar.png', 10, 100)
newImage('./assets/crate.png', 150, 200)
newImage('./assets/well.png', 500, 425)

newItem('./assets/sword.png', 500, 405)
newItem('./assets/shield.png', 265, 185)
newItem('./assets/staff.png', 600, 100)