const container = document.getElementById("container")

function createTile () {
    for (i = 1; i<257; i++) {
        const tile = document.createElement('div');
        tile.style.minHeight = '10px';
        tile.style.minWidth = '10px';
        tile.className = 'title';
        container.appendChild(tile);
        tile.addEventListener('mouseenter', (e) => {
            tile.style.backgroundColor = 'rgb(66, 3, 50, 25%)'
            // tile.style.backgroundColor = 'purple';
            console.log(e)
        
        
        })
    }
}
createTile();

