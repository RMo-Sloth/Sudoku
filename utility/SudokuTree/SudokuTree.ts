import { Utility } from '../Utility';

export class SudokuTreeNode {
  // this is a composite generating a tree of all possible paths to a solution for a sudoku
  private _sudoku;
  // _parent = null;
  private _children: Array<SudokuTreeNode> = [];

  constructor( sudoku: string ){
    this._sudoku = sudoku;
    if( this._sudoku.includes('0') ){ // check if isSolved
      let index = this._sudoku.indexOf('0');
      for( let value=1; value<10 ; value++ ) {
        let childSudoku = Utility.mutate( this._sudoku, index, value );
        if( Utility.validate( childSudoku ) ) {
          this.addChild( childSudoku );
        }
      }
    } else {
      console.log( this._sudoku );
    }
  }

  get sudoku(): string {
    return this._sudoku;
  }
  get children() {
    return this._children;
  }
  public addChild( sudoku ) {
    this._children.push( new SudokuTreeNode( sudoku ) );
  }
  // removeChild
}

// cannot stop iteration with a huge amount of solutions ( e.g. an empty sudoku )
