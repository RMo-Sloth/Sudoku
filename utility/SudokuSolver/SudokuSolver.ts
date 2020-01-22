import { SquareCellSolver } from "./CellSolver/SquareSolver/SquareSolver";
import { RowCellSolver } from "./CellSolver/RowSolver/RowCellSolver";
import { ColumnCellSolver } from "./CellSolver/ColumnSolver/ColumnCellSolver";

export class SudokuSolver { // facade
  private _sudoku;

  constructor( sudoku: string ) {
    this._sudoku = sudoku;
  }
  columnSquareSolver() {
    return new ColumnCellSolver(this._sudoku );
  }
  rowCellSolver() {
    return new RowCellSolver( this._sudoku );
  }
  squareCellSolver() {
      return new SquareCellSolver( this._sudoku );
  }
}
