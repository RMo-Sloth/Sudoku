import { SudokuSlicer, SudokuSlicer9x9 } from './SudokuSlicer/SudokuSlicer';
import{ SudokuValidator } from './SudokuValidator/SudokuValidator';
import { SudokuMutator } from './SudokuMutator/SudokuMutator';
// all utility classes should exclusively be called through this facade

export class Utility {
  public static slicer( sudoku: string ): SudokuSlicer {
    return new SudokuSlicer9x9( sudoku );
  }
  public static validate( sudoku: string ): boolean {
    // Validator only has one method to validate a sudoku so there is a minor implementation
    let _validator = new SudokuValidator( sudoku );
    return _validator.validate();
  }
  public static mutate( sudoku, index, value ): string {
    return SudokuMutator.mutate( sudoku, index, value );
  }

}
// SudokuSolutionTree is higher level composite SolutionTreeUtility
export class SolutionTree {
  // build( sudoku: string ){} // returns top level composite
}
