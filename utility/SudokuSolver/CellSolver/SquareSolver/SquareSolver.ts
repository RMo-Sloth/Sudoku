import { CellSolver } from "../CellSolver";
import { Utility } from "../../../Utility";

export class SquareCellSolver extends CellSolver {
  private _square;

  constructor( sudoku: string ) {
    super( sudoku );

    let solver = Utility.slicer( this._sudoku );
    this._square = solver.sliceSquare( 1 );
  }

  canSolve( cellIndex: number ): boolean {
    if( this.isSolvedCell( cellIndex ) )
      return false;

    if( this.hasOneUnsolvedCellInSquare() )
      return true;
  }
  solve( cellIndex: number ): number {
    for( let i=1; i<10; i++ )
      if( this._square.includes( i.toString() ) === false ) return i;
  }
  private isSolvedCell( cellIndex ): boolean {
    return this._sudoku.charAt( cellIndex-1 ) !== '0';
  }
  private hasOneUnsolvedCellInSquare(): boolean {
    return this._square.indexOf('0') === this._square.lastIndexOf('0');
  }

}
