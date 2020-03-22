import {ColumnRowSolver} from './ColumnRowSolver';

fdescribe( 'ColumnRowSolver', () => {
    it( 'does not solve an empty sudoku', ()=>{
      let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let solver = new ColumnRowSolver( sudoku );
      expect( solver.solve(1) ).toBe(0);
    });
    it( '', () => {
      let sudoku = '023456789000000000000000000000000000000000000000000000000000000000000000000000000';
      let solver = new ColumnRowSolver( sudoku );
      expect( solver.solve(1) ).toBe(1);
    });
});