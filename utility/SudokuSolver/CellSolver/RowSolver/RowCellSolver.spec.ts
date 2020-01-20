import { RowCellSolver } from './RowCellSolver';

describe( 'RowCellSolver', () => {

  it( 'does not solve an empty sudoku', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeFalsy();
  });

  it( 'does not solve an empty sudoku when a value is already solved', () => {
    let sudoku = '123456780000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeFalsy();
  });

  it( 'solve returns 1 if sudoku is solved', () => {
    let sudoku = '023456789000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 1 );
  });

  it( 'solve returns 2 if sudoku is solved', () => {
    let sudoku = '013456789000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 2 );
  });

  it( 'solves various rows', () => {
    let sudoku = '000000000013456789000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 10 ) ).toBeTruthy();
    expect( solver.solve( 10 ) ).toBe( 2 );
  });

  it( 'solve returns 2 if last of row is solved', () => {
    let sudoku = '913456780000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new RowCellSolver( sudoku );
    expect( solver.canSolve( 9 ) ).toBeTruthy();
    expect( solver.solve( 9 ) ).toBe( 2 );
  });


});
