//aquí van las funciones

function dataFilter(data, condition) {
    let filtered = [];
    for (let i = 0; i < data.length; i++){
        for (let e = 0; e < data[i].type.length; e++) {
            if(data[i].type[e] === condition){
                filtered.push(data[i]);
            }
        }
    }
    return filtered;
  }

function pokemon(){
    let result = [];
    for (let i = 0; i < data.length; i++){
        result.push(data[i].name + " " + data[i].num + " " + data[i].type + '<img id="img" src="' + data[i].img+'"/>');
    } 
      return (result)
    }

    console.log('hola')




