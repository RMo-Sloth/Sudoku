import { SudokuCellPosition } from "./SudokuCellPosition";

describe( 'SudokuCellPosition', () => {
  describe( '.row', () => {
    it( 'returns 0 for too low out of range values', () => {
      let cellPosition = new SudokuCellPosition( 0 );
      expect( cellPosition.row ).toBe( 0 );
    });
    it( 'returns 0 for too high out of range values', () => {
      let cellPosition = new SudokuCellPosition( 82 );
      expect( cellPosition.row ).toBe( 0 );
    });
    it( 'returns 1 for cellIndex 1', () => {
      let cellPosition = new SudokuCellPosition( 1 );
      expect( cellPosition.row ).toBe( 1 );
    });
    it( 'returns 2 for cellIndex 10', () => {
      let cellPosition = new SudokuCellPosition( 10 );
      expect( cellPosition.row ).toBe( 2 );
    });
    it( 'returns 2 for cellIndex 18', () => {
      let cellPosition = new SudokuCellPosition( 18 );
      expect( cellPosition.row ).toBe( 2 );
    });
  });
  describe( '.column', () => {
    it( 'returns 0 for too low out of range values', () => {
      let cellPosition = new SudokuCellPosition( 0 );
      expect( cellPosition.column ).toBe( 0 );
    });
    it( 'returns 0 for too high out of range values', () => {
      let cellPosition = new SudokuCellPosition( 82 );
      expect( cellPosition.column ).toBe( 0 );
    });
    it( 'returns 1 for cellIndex 1', () => {
      let cellPosition = new SudokuCellPosition( 1 );
      expect( cellPosition.column ).toBe( 1 );
    });
    it( 'returns 2 for cellIndex 11', () => {
      let cellPosition = new SudokuCellPosition( 11 );
      expect( cellPosition.column ).toBe( 2 );
    });
    it( 'returns 1 for cellIndex 9', () => {
      let cellPosition = new SudokuCellPosition( 9 );
      expect( cellPosition.column ).toBe( 9 );
    });
  });
  describe( '.square', () => {
    it( 'returns 0 for too low out of range values', () => {
      let cellPosition = new SudokuCellPosition( 0 );
      expect( cellPosition.square ).toBe( 0 );
    });
    it( 'returns 0 for too high out of range values', () => {
      let cellPosition = new SudokuCellPosition( 82 );
      expect( cellPosition.square ).toBe( 0 );
    });
    it( 'returns 1 for cellIndex 1' , () => {
      let cellPosition = new SudokuCellPosition( 1 );
      expect( cellPosition.square ).toBe( 1 );
    });
    it( 'returns 2 for cellIndex 4' , () => {
      let cellPosition = new SudokuCellPosition( 4 );
      expect( cellPosition.square ).toBe( 2 );
    });
    it( 'returns 1 for cellIndex 19' , () => {
      let cellPosition = new SudokuCellPosition( 28 );
      expect( cellPosition.square ).toBe( 4 );
    });
  });
});
