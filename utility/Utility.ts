import { SudokuSlicer, SudokuSlicer9x9 } from './SudokuSlicer/SudokuSlicer';
import{ SudokuValidator } from './SudokuValidator/SudokuValidator';
import { SudokuMutator } from './SudokuMutator/SudokuMutator';
import { SudokuTreeNode } from './SudokuTree/SudokuTree';
import { SudokuCellPosition } from './CellPosition/SudokuCellPosition';
// all utility classes should exclusively be called through this facade
export { SudokuSlicer9x9 } from './SudokuSlicer/SudokuSlicer';

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
  public static generateTree( sudoku: string ) {
    // take extreme care not to process big trees
    return new SudokuTreeNode( sudoku );
  }
  public static cellPosition( cellIndex: number ): SudokuCellPosition {
    return new SudokuCellPosition( cellIndex );
  }
}
