import { CellSolver } from "../CellSolver";
import { Utility } from "../../../Utility";

export class ColumnCellSolver extends CellSolver {
  private _column: string;

  canSolve(index: number): boolean {
    if( this._sudoku.charAt( index-1 ) === '0' ) {
      let columnIndex = index % 9;
      let slicer = Utility.slicer( this._sudoku );
      this._column = slicer.sliceColumn( columnIndex );
      if( this._column.indexOf('0') === this._column.lastIndexOf('0') )
        return true;
    }
    return false;
  }
  solve(index: number): number {
    let columnIndex = index % 9;
    let slicer = Utility.slicer( this._sudoku );
    this._column = slicer.sliceColumn( columnIndex );
    for( let i=1; i<10; i++) {
      if( this._column.includes( i.toString() ) === false )
        return i;
    }
  }

}
