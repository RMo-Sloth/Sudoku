import { SquareCellSolver } from "./SquareSolver";

describe( 'SquareSolver', () => {
  it( 'does not solve an empty sudoku', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeFalsy();
  });
  it( 'does solves a sudoku', () => {
    let sudoku = '023000000456000000789000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 1 );
  });

  it( 'solves sudokusquare with a value of 2', () => {
    let sudoku = '013000000456000000789000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.canSolve( 1 ) ).toBeTruthy();
    expect( solver.solve( 1 ) ).toBe( 2 );
  });
});
