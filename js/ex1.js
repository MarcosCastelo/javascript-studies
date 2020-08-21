export function sevenPrints( character ) {
    for ( let i = 1; i <= 7; i++) {
        console.log(`${character.repeat(i)}`);
    }
}

export function fizzBuzz() {
    for ( let i = 1; i <= 100; i++ ){
        if ( i % 3 == 0 && i % 5 == 0)
            console.log ( "FizzBuzz" );
        else if ( i % 5 == 0 )
            console.log ( "Buzz" );
        else if ( i % 3 == 0 )
            console.log ( "Fizz" );
        else
            console.log ( i );
    }
}

export function buildBoard( size ) {
    const black = "#";
    const white = " ";
    let board = "";

    for (let line = 0; line < size; line++) {
        for (let column = 0; column < size; column++) {
            if ( line % 2 == 0 )
                board += column % 2 == 0 ? black : white;
            else 
                board += column % 2 == 0 ? white : black;
        }
        board += "\n"
    }

    console.log(board);
}
