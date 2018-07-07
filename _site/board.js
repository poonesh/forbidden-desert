
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
		this.boardArr = [];
		this.initializeBoard();
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

	move(direction, count){
		if (direction === "UP"){
			for (let i = 0; i<count; i++){
				let x = this.emptyIndex[0];
				let y = this.emptyIndex[1];
				
				if ( + 1 < this.height){
					this.boardArr[x][y] = this.boardArr[x][y+1];
					this.boardArr[x][y].sandCovered += 1;
					this.boardArr[x][y+1] = null;
					this.emptyIndex = [x, y+1];
				}
			}
		} else if (direction === "DOWN"){
			for (let j = 0; j<count; j++){
				let x = this.emptyIndex[0];
				let y = this.emptyIndex[1];

				if (y - 1 >= 0){
					this.boardArr[x][y] = this.boardArr[x][y-1];
					this.boardArr[x][y].sandCovered += 1;
					this.boardArr[x][y-1] = null;
					this.emptyIndex = [x, y-1];
				}
			}
		} else if (direction === "LEFT"){
			for (let k=0; k<count; k++){
				let x = this.emptyIndex[0];
				let y = this.emptyIndex[1];

				if (x + 1 < this.width){
					this.boardArr[x][y] = this.boardArr[x+1][y];
					this.boardArr[x][y].sandCovered += 1;
					this.boardArr[x+1][y] = null;
					this.emptyIndex = [x+1, y];
				}
			}
		} else if (direction === "RIGHT"){
			for (let m=0; m<count; m++){
				let x = this.emptyIndex[0];
				let y = this.emptyIndex[1];

				if (x - 1 >= 0){
					this.boardArr[x][y] = this.boardArr[x-1][y];
					this.boardArr[x][y].sandCovered += 1;
					this.boardArr[x-1][y] = null;
					this.emptyIndex = [x-1, y];
				}
			}

		}
	}

	print(){
		let str = "";
		for(let j=0; j<this.height; j++){
			let tempStr = " ";
			for(let i=0; i<this.width; i++){
				if(this.boardArr[i][j] === null){
					tempStr += "X ";
				}else{
					let numSand = this.boardArr[i][j].sandCovered
					tempStr += numSand + " ";
				}
			}
			tempStr += "\n";
			str += tempStr;
		}
		return str;
	}
}




