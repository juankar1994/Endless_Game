    // Returns a random integer between min and max
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Trunca el número 'num' a 'ndec' decimales. 
    function trunc(num, ndec) { 
        var fact = Math.pow(10, ndec); // 10 elevado a ndec 

        /* Se desplaza el punto decimal ndec posiciones, 
        se trunca el número y se vuelve a colocar 
        el punto decimal en su sitio. */ 
        return parseInt(num * fact) / fact; 
    } 