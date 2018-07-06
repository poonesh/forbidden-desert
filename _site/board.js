
class Tile {
	constructor(){
		this.sandCovered = 0;
		this.hidden = true;
	}
}

class Board {
	constructor(width, height){
		this.width = width;
		this.height = height;
		this.initialSandIndices = [[2, 0], [1, 1], [3, 1], [0, 2], [4, 2], [1, 3], [3, 3], [2, 4]];
		this.emptyIndex = [Math.floor(this.width/2), Math.floor(this.height/2)];
		this.boardArr = []

	}

	initializeBoard(){
		for (let i=0; i<this.width; i++){
			let tempArr = [];
			for (let j=0; j<this.height; j++){
				if (j === 2 && i === 2){
					tempArr.push(null);
				}else{
					let tile = new Tile();
					tempArr.push(tile);	
				}
			}
			this.boardArr.push(tempArr);	
		}
		for (let index of this.initialSandIndices){
			this.boardArr[index[0]][index[1]].sandCovered = 1; 
		}
	}
}


let board = new Board(5, 5);
board.initializeBoard();
console.log(board.boardArr);


