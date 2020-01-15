import { SudokuTreeNode } from './SudokuTree';

describe( 'SudokuTree', () => {
  it( 'getSudoku() should return its initial sudoku', () => {
    let sudoku = '123456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let treeNode = new SudokuTreeNode( sudoku );
    expect( treeNode.sudoku ).toBe( sudoku );
  });
  it( 'getSudoku() should return its initial sudoku (2)', () => {
    let sudoku = '835729416497561238261843759149387562573692841962415397358976124914258673726134985';
    let treeNode = new SudokuTreeNode( sudoku );
    expect( treeNode.sudoku ).toBe( sudoku );
  });
  it( 'getSudoku() should have one child with the value of 1 added', () => {
    let sudoku = '123456789789123456456789123312845967697312845845697312231574698968231574574968230';
    let solution = '123456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let treeNode = new SudokuTreeNode( sudoku );
    let childNodes = treeNode.children;

    expect( childNodes.length ).toBe( 1 );
    expect( childNodes[0].children.length ).toBe( 0 );
    expect( childNodes[0].sudoku ).toBe( solution );
  });
  it( 'getSudoku() should have one child with the value of 1 added at a different position', () => {
    let sudoku = '023456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let solution = '123456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let treeNode = new SudokuTreeNode( sudoku );
    let childNodes = treeNode.children;

    expect( childNodes.length ).toBe( 1 );
    expect( childNodes[0].children.length ).toBe( 0 );
    expect( childNodes[0].sudoku ).toBe( solution );
  });
  it( 'getSudoku() should have one child with a different value', () => {
    let sudoku = '103456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let solution = '123456789789123456456789123312845967697312845845697312231574698968231574574968231';
    let treeNode = new SudokuTreeNode( sudoku );
    let childNodes = treeNode.children;

    expect( childNodes.length ).toBe( 1 );
    expect( childNodes[0].children.length ).toBe( 0 );
    expect( childNodes[0].sudoku ).toBe( solution );
  });
})
