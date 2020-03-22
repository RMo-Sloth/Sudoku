import { CellSolver } from '../CellSolver';
import { Utility } from '../../../Utility';

export class ColumnRowSolver extends CellSolver {
    private _row;
    constructor( sudoku: string ) {
        super( sudoku );
    }
    public solve( index: number ): number {
        let rowIndex = Utility.cellPosition( index ).row;
        this._row = this._slicer.sliceRow( rowIndex );

        if(this.rowHasOneMissingValue() )
            return 1;
        
        return 0;
    }
    private rowHasOneMissingValue() {
        return this._row.indexOf('0') === this._row.lastIndexOf('0');
    }
}