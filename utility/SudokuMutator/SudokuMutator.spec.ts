import { SudokuMutator } from './SudokuMutator';

describe( 'SudokuMutator', () => {
  it( 'be able to mutate the first value', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let mutatedSudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
    expect( SudokuMutator.mutate( sudoku, 0, 1 ) ).toBe( mutatedSudoku );
  });
  it( 'be able to mutate the second value', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let mutatedSudoku = '010000000000000000000000000000000000000000000000000000000000000000000000000000000';
    expect( SudokuMutator.mutate( sudoku, 1, 1 ) ).toBe( mutatedSudoku );
  });
  it( 'be able to mutate values other than 1', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let mutatedSudoku = '020000000000000000000000000000000000000000000000000000000000000000000000000000000';
    expect( SudokuMutator.mutate( sudoku, 1, 2 ) ).toBe( mutatedSudoku );
  });
});

// what if a mutator tries to mutate a taken value???
  // return false would be odd
  // should that occur ever?
    // Maybe for undo operations?

// what if a mutation results to an invalid sudoku
 // external or internal isValid check? External.. can call validator?
  // do I perform the check always? Yes.
  // do I need alternate external behavior after checking isValid? Yes if not valid code may take another course... So isValid should be called externally
  // may even be useful solving sudokus? only run isValid() when asked for performance reasons?
 // also invalid trying to overwrite occupied index if unable isValid()


// idea undo functionality undo to the last valid state ( changes from view )
// possibly ask if sudoku isSolved??? // Sudoku isValid and no 0's in string.
// ask if a position isTaken()
