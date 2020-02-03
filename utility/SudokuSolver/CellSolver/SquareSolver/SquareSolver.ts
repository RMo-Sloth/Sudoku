import { CellSolver } from "../CellSolver";
import { Utility } from "../../../Utility";

export class SquareCellSolver extends CellSolver {
  private _square: string;

  constructor( sudoku: string ) {
    super( sudoku );
  }
  public solve( cellIndex: number ): number {
    let squareIndex = Utility.cellPosition( cellIndex ).square;
    this._square = this._slicer.sliceSquare( squareIndex );

    if( this.hasOneUnsolvedCellInSquare() === false )
      return 0;

    let i = 0;
    while( this._square.includes( i.toString() ) )
      i++;

    return i;
  }
  private hasOneUnsolvedCellInSquare(): boolean {
    return this._square.indexOf('0') === this._square.lastIndexOf('0');
  }
}
