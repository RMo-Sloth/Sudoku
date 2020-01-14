
export class SudokuMutator {
  static mutate( sudoku: string, index: number, value: number ): string {
    let beforeIndex = sudoku.substring( 0, index );
    let afterIndex = sudoku.substring( index + 1 );;
    return beforeIndex + value + afterIndex;
  }
}
