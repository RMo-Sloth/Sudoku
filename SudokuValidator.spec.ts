import { SudokuValidator } from './SudokuValidator';

fdescribe( 'SudokuValidator', () => {
  // NOTE: SudokuValidator should only check if the structural integrity is violated. NOT if the sudoku can be solved

  it( 'should validate if an empty 9x9 sudoku', () => {
    // 81 length
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeTruthy();
  });
  it( 'should invalidate a sudokustring with an invalid length (e.g. 80)', () => {
    let sudoku = '00000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should validate a sudokuRow if it contains no identical values', () => {
    let sudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeTruthy();
  });
  it( 'should invalidate a sudokuRow if it contains identical values (1)', () => {
    let sudoku = '110000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuRow if it contains identical values in the last row (2)', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000011';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuRow if it contains identical values other than 1', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000022';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuColumn if it contains identical values', () => {
    let sudoku = '100000000100000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuColumn if it contains identical values in column 2', () => {
    let sudoku = '010000000010000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuSquare if it contains identical values in square 1', () => {
    let sudoku = '100000000010000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
  it( 'should invalidate a sudokuSquare other than 1', () => {
    let sudoku = '200000000020000000000000000000000000000000000000000000000000000000000000000000000';
    let validator = new SudokuValidator( sudoku );
    expect( validator.validate() ).toBeFalsy();
  });
});
