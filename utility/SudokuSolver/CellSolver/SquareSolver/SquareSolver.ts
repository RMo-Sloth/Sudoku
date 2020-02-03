import { CellSolver } from "../CellSolver";
import { Utility } from "../../../Utility";

export class SquareCellSolver extends CellSolver {
  private _square;

  constructor( sudoku: string ) {
    super( sudoku );
  }
  public solve( cellIndex: number ): number {
    let solver = Utility.slicer( this._sudoku );
    // calculateSquare
    let column = cellIndex % 9;
    let row = Math.ceil( cellIndex / 9 );
    let squareIndex = Math.floor( row ) + Math.floor(column / 3);
    //
    this._square = solver.sliceSquare( squareIndex );

    let i = 0;
    if( this.hasOneUnsolvedCellInSquare() === false )
      return 0;

    while( this._square.includes( i.toString() ) )
      i++;

    return i;
  }
  private hasOneUnsolvedCellInSquare(): boolean {
    return this._square.indexOf('0') === this._square.lastIndexOf('0');
  }
}

export class SudokuCellPosition {
  private _row;
  private _column;
  private _square;

  constructor( index: number ) {
    if( index < 1 || index > 81 )
      this._row = 0;
  }
  get row(): number {
    return this._row;
  }
  get column(): number {
    return null;
  }
  get square(): number {
    return null;
  }
  private calculateRow() {

  }

}
