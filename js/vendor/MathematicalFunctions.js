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

    function  getCenterVertex(num){
        var a = new BigNumber();
        a.set(num);
        var b  = a;
        var d  = a;
        if(a.mod(3).valueOf() == 0){
            return b;
        }else{
            if(a.subtract(1).mod(3).valueOf() == 0){
                return b.subtract(1);
            }else{
                return d.add(1);
            }
        }
    }

    function divideBigNumberBy3(num){
        var a = getCenterVertex(num);
        if(a.valueOf()==0)
            return 0;
        return a.divide(3);
    }


            
        