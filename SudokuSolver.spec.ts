import { SudokuSolver } from './SudokuSolver';

describe( 'SudokuSolver', () => {
  it( 'should return an empty array with an invalid sudoku', () => {
    let sudoku = '110000000000000000000000000000000000000000000000000000000000000000000000000000000';
    let solver = new SudokuSolver( sudoku );
    expect( solver.solve() ).toEqual( [] );
  });
  // it( 'should return one solution for a solved sudoku', () => {
  //
  // });
});
