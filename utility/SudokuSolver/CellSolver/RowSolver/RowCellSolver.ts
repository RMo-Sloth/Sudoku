import { CellSolver } from '../CellSolver';

export class RowCellSolver extends CellSolver {
  private _row: string;

  constructor( sudoku: string ) {
    super( sudoku );
  }

  canSolve( index: number ): boolean {
    this._row = this._slicer.sliceRow( Math.ceil(index/9) );
    return this._row.charAt( (index-1) % 9 ) === '0' && this._row.match(/0/g).length === 1;
  }
  solve( index: number): number {
    this._row = this._slicer.sliceRow( Math.ceil(index/9) );
    for( let i=1; i<10; i++ ) {
      if( this._row.includes( i.toString() ) === false )
        return i;
    }
    return 0;
  }
}
