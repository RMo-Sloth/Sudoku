import { SudokuSlicer, SudokuSlicer9x9 } from './SudokuSlicer/SudokuSlicer';
import{ SudokuValidator } from './SudokuValidator/SudokuValidator';
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

}
// SudokuSolutionTree is higher level composite SolutionTreeUtility
export class SolutionTree {
  // build( sudoku: string ){} // returns top level composite
}
// sudokuMutator( sudoku )
// mutate( index, value ): string // sudoku
// check isValid???
// changes value sudoku
// set first char empty Sudoku
// set second char
// set different values
// what if a mutation results to an invalid sudoku
 // external or internal isValid check?
  // do I perform the check always? Yes.
  // do I need alternate external behavior after checking isValid? Yes if not valid code may take another course... So isValid should be called externally
  // may even be useful solving sudokus? only run isValid() when asked for performance reasons?
 // also invalid trying to overwrite occupied index if unable isValid()
