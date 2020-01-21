import { ColumnCellSolver } from './ColumnCellSolver';

fdescribe( 'ColumnCellSolver', () => {
  it( 'does not solve an empty sudoku', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new ColumnCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeFalsy();
  });
  it( 'does not solve a sudoku when a value is already solved', () => {
    let sudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new ColumnCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeFalsy();
  });
  it( 'solve returns 1 if sudoku is solved', () => {
    let sudoku = '000000000200000000300000000400000000500000000600000000700000000800000000900000000';
    let solver = new ColumnCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 1 );
  });
  it( 'solve returns 2 if sudoku is solved', () => {
    let sudoku = '000000000100000000300000000400000000500000000600000000700000000800000000900000000';
    let solver = new ColumnCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 2 );
  });
  it( 'solve returns can also solve different columns', () => {
    let sudoku = '200000000100000000000000000400000000500000000600000000700000000800000000900000000';
    let solver = new ColumnCellSolver( sudoku );
    expect( solver.canSolve( 19 ) ).toBeTruthy();
    expect( solver.solve( 19 ) ).toBe( 3 );
  });

});
