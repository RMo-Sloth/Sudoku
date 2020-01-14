import { SudokuSlicer9x9 } from './SudokuSlicer';

describe( 'SudokuSlicer', () => {
  describe( '.sliceRow', () => {
    it( '(1) should return row one (1)', () => {
      let sudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceRow( 1 ) ).toBe( '100000000' );
    });
    it( '(1) should return row one (2)', () => {
      let sudoku = '205000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceRow( 1 ) ).toBe( '205000000' );
    });
    it( '(9) should return row nine', () => {
      let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000123';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceRow( 9 ) ).toBe( '000000123' );
    });
  });
  describe( '.sliceColumn', () => {
    it( 'should return row one #1', () => {
      let sudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceColumn( 1 ) ).toBe( '100000000' );
    });
    it( 'should return row one #2', () => {
      let sudoku = '010000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceColumn( 1 ) ).toBe( '000000000' );
    });
    it( 'should return row nine', () => {
      let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000000000000001';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceColumn( 9 ) ).toBe( '000000001' );
    });
  });

  describe( '.sliceColumn', () => {
    it( 'should return square one #1', () => {
      let sudoku = '100000000000000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceSquare( 1 ) ).toBe( '100000000' );
    });
    it( 'should return square one #2', () => {
      let sudoku = '100000000010000000000000000000000000000000000000000000000000000000000000000000000';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceSquare( 1 ) ).toBe( '100010000' );
    });
    it( 'should return square nine', () => {
      let sudoku = '000000000000000000000000000000000000000000000000000000000000000000000001000000101';
      let slicer = new SudokuSlicer9x9( sudoku );
      expect( slicer.sliceSquare( 9 ) ).toBe( '000001101' );
    });
  });
});
