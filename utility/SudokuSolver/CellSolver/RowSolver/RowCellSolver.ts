import { CellSolver } from '../CellSolver';
import { Utility } from "../../../Utility";

export class RowCellSolver extends CellSolver {
  private _row: string;

  constructor( sudoku: string ) {
    super( sudoku );
  }
  public solve( cellIndex: number): number {
    if( this.isAlreadySolved( cellIndex ) === true )
      throw new Error('The cell you are trying to solve is already solved.');

    let rowIndex = Utility.cellPosition( cellIndex ).row;
    this._row = this._slicer.sliceRow( rowIndex );

    if( this.hasOneUnsolvedCellInRow() === false )
      return 0;

    let i = 0;
    while( this._row.includes( i.toString() ) )
      i++;

    return i;
  }
  private hasOneUnsolvedCellInRow(): boolean {
    return this._row.indexOf('0') === this._row.lastIndexOf('0');
  }
}
