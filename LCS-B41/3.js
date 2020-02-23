/*
Tic-tac-toe adalah sebuah permainan dua orang dengan matrix 3x3 yang bergiliran.
Jika ada salah satu sisi yang ada 3 kemunculan dalam bentuk
horizontal, vertical maupun diagonal, dia menang.
Kak Semmi perlu bantuanmu untuk mencari pemenang tic-tac-toe.
Jika X menang, tampilkan "X"
Jika O menang, tampilkan "O"
Jika tidak ada pemenang, tampilkan "Draw"

RULES:
Hanya boleh menggunakan built-in function .push()
Harus memakai while-loop
*/
function ticTacToe(array) {
	//good luck!
	// Moves guide. if one of the char matched with this move, display the winner
	const move = [[0,1,2],[0,3,6],[0,4,8],[2,4,6],[6,7,8],[3,4,5],[1,4,7],[2,5,8]]
	// column conversion to valid index of array
	const col = {0:0,1:1,2:2,3:0,4:1,5:2,6:0,7:1,8:2};
	// Row conversion
    const row = n => {
        switch (true) {
            case (n >=0 && n <3) : return 0;
            case (n >=3 && n <6) : return 1;
            case (n >=6 && n <9) : return 2;
        }
    }

	let [c,x_,o_,board] = [0,0,0,array]

	while (c<8) {
        x_ += (board[row(move[c][0])][col[move[c][0]]] == 'X'|'x' && board[row(move[c][1])][col[move[c][1]]] == 'X'|'x' 
            && board[row(move[c][2])][col[move[c][2]]] == 'X'|'x') ? 1:0;
        o_ += (board[row(move[c][0])][col[move[c][0]]] == 'O'|'o' && board[row(move[c][1])][col[move[c][1]]] == 'O'|'o' 
            && board[row(move[c][2])][col[move[c][2]]] == 'O'|'o') ? 1:0;

		c++;
	}

	return x_ > o_ ? 'Winner : X' : x_ < o_ ? 'Winner : O' : 'Draw!'
}

console.log(
	ticTacToe([
		['X', 'O', 'X'],
		['O', 'X', 'O'],
		['O', 'X', 'X']
	])
); //"X"

console.log(
	ticTacToe([
		['O', 'O', 'O'],
		['O', 'X', 'X'],
		['X', 'O', 'X']
	])
); //"O"

console.log(
	ticTacToe([
		['X', 'X', 'O'],
		['O', 'O', 'X'],
		['X', 'X', 'O']
	])
); //"Draw"

console.log('====== MORE TEST =====')

console.log(ticTacToe([['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'X']])); //X WIN
console.log(ticTacToe([['O', 'O', 'X'], ['X', 'O', 'X'], ['X', 'X', 'O']])); //O WIN
console.log(ticTacToe([['X', 'X', 'O'], ['O', 'O', 'X'], ['X', 'O', 'X']])); //DRAW
console.log(ticTacToe([['O', 'O', 'X'], ['X', 'X', 'O'], ['O', 'O', 'O']])); //O WIN
console.log(ticTacToe([['X', 'O', 'X'], ['O', 'O', 'X'], ['O', 'X', 'X']])); //X WIN
console.log(ticTacToe([['O', 'X', 'O'], ['X', 'X', 'O'], ['X', 'O', 'X']])); //DRAW
console.log(ticTacToe([['X', 'X', 'O'], ['O', 'O', 'X'], ['O', 'X', 'X']])); //O WIN