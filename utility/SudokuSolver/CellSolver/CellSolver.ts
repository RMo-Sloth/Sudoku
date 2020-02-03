import { Utility } from '../../Utility';

export abstract class CellSolver {
  protected _sudoku: string;
  protected _slicer;
  protected _solution: number;

  constructor( sudoku: string ) {
    this._sudoku = sudoku;
    this._slicer = Utility.slicer( sudoku );
  }

  // abstract canSolve( index: number ): boolean;
  abstract solve( index: number ): number;

}
