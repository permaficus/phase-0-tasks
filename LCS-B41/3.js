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
	const move = [[0,1,2],[0,3,6],[0,4,8],[2,4,6],[6,7,8],[3,4,5],[1,4,7],[2,6,8]]
	let [c,x_,o_,board,axis] = [0,0,0,array,0]

	while (c<8) {
		while (axis < 3) {
			let x = move[c][axis];
			// check the x and o position based on move guide above
			if (x >=0 && x <3) { x_ += (board[0][axis] == 'X') ? 1:0; o_ += (board[0][axis] == 'O') ? 1:0 }
			if (x >=3 && x <6) { x_ += (board[1][axis] == 'X') ? 1:0; o_ += (board[1][axis] == 'O') ? 1:0 }
			if (x >=6 && x <9) { x_ += (board[2][axis] == 'X') ? 1:0; o_ += (board[2][axis] == 'O') ? 1:0 }
			axis++
		}
		// if x_ or o_ value under 2 point (we need 3), reset counter
		if (x_ <= 2 && o_ <= 2) {
			x_ = 0; o_ = 0;
		// or else break from while-loop (assume we have the winner or draw)
		} else {
			break;
		}
		c++;
		axis=0;
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