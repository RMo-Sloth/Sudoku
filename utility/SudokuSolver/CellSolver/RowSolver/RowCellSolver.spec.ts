import { RowCellSolver } from './RowCellSolver';

describe( 'RowCellSolver', () => {

  it( 'does not solve an empty sudoku', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 0 );
  });

  it( 'throws error when a value is already solved', () => {
    let sudoku = '123456780000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( () => { solver.solve( 1 ) } ).toThrow( new Error('The cell you are trying to solve is already solved.') );
  });

  it( 'solves sudokuRow no 1', () => {
    let sudoku = '023456789000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 1 );
  });

  it( 'solve sudokuRow no 1 with a value other than 1', () => {
    let sudoku = '013456789000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 2 );
  });

  it( 'solve sudokuRow other than no 1', () => {
    let sudoku = '000000000013456789000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.solve( 10 ) ).toBe( 2 );
  });

  it( 'solve sudokuRow no 1 using a value from a different column', () => {
    let sudoku = '913456780000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.solve( 9 ) ).toBe( 2 );
  });


});
