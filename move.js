function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let characterWidth = element.offsetWidth;
        let characterHeight = element.offsetHeight;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west' && x > 0){
                x-=1
            }
            if(direction === 'north' && y < screenHeight - characterHeight){
                y+=1
            }
            if(direction === 'east' && x < screenWidth - characterWidth){
                x+=1
            }
            if(direction === 'south' && y > 0){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 10)

        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}
