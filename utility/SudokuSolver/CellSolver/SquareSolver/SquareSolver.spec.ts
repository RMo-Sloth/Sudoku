import { SquareCellSolver } from "./SquareSolver";

describe( 'SquareSolver', () => {
  it( 'does not solve an empty sudoku', () => {
    let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 0 );
  });
  it( 'does not solve a fully solved square', () => {
    let sudoku ='123000000456000000789000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 0 );
  });
  it( 'solves sudokuSquare no 1', () => {
    let sudoku = '023000000456000000789000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 1 );
  });

  it( 'solves sudokuSquare no 1 with a value other than 1', () => {
    let sudoku = '013000000456000000789000000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.solve( 1 ) ).toBe( 2 );
  });

  it( 'solves sudokusquare no 2', () => {
    let sudoku = '000023000000456000000789000000000000000000000000000000000000000000000000000000000';
    let solver = new SquareCellSolver( sudoku );
    expect( solver.solve( 4 ) ).toBe( 1 );
  });
});
