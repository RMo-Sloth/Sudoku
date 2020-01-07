export abstract class SudokuSlicer {
  protected _sudoku: string;

  constructor( sudoku: string ) {
    this._sudoku = sudoku;
  }

  abstract sliceRow( index: number ): string;
}

export class SudokuSlicer9x9 extends SudokuSlicer {
  sliceSquare( index: number ): string {
    let square = '';
    index--;
    let rowPosition = Math.floor( index / 3 )*27;
    let columnPosition = index % 3 * 3;
    let topLeftCorner = rowPosition + columnPosition;

    for( let i=0; i<9;i++ ) {
      let stringPosition = topLeftCorner + i + Math.floor(i/3)*6;
      square += this._sudoku.charAt( stringPosition );
    }

    return square;
  }
  sliceColumn( index: number ): string {
    index--;
    let column = '';
    for( let i=0; i<9; i++ ) {
      column += this._sudoku.charAt( i*9+index );
    }

    return column;
  }
  sliceRow( index: number ): string {
    let lastChar = 9*index;
    let firstChar = 9*index - 9;
    return this._sudoku.slice( firstChar, lastChar );
  }
}
