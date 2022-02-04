function first(){
    setTimeout(() => {
        console.log('first');
    }, 2000);

}

function second(){
    console.log('second');
}

first();
second();
