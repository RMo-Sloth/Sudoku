import { SudokuSlicer9x9 } from './SudokuSlicer';

export class SudokuValidator {
  protected _sudoku;
  protected _slicer;
  private _validator;

  public constructor( sudoku: string ) {
    this._sudoku = sudoku;
  }

  public validate(): boolean {
    if( this.setValidator() === false ) return false;
    if( this.validRows() === false ) return false;
    if( this.validColumns() === false ) return false;
    if( this.validSquares() === false ) return false;
    else return true;
  }
  protected validRows(): boolean {
    return this._validator.validRows();
  }
  protected validColumns(): boolean {
    return this._validator.validColumns();
  }
  protected validSquares(): boolean {
    return this._validator.validSquares();
  }
  private setValidator(): boolean {
    if( this._sudoku.length === 81 ) {
        this._validator = new SudokuValidator9x9( this._sudoku );
        return true;
    } else {
      console.error( 'this sudokurepresentation has an invalid length' );
      return false;
    }
  }
}

class SudokuValidator9x9 extends SudokuValidator {
  constructor( sudoku: string ) {
    super( sudoku );
    this._slicer = new SudokuSlicer9x9( this._sudoku );
  }

  protected validRows(): boolean {
    let validCharacters = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

    for( let i=0; i<validCharacters.length; i++ ) {
      if( this.validCharacterInRows( validCharacters[i] ) === false ) {
        return false;
      }
    }

    return true;
  }
  protected validColumns(): boolean {
    let validCharacters = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

    for( let i=0; i<validCharacters.length; i++ ) {
      if( this.validCharacterInColumns( validCharacters[i] ) === false ) {
        return false;
      }
    }

    return true;
  }

  protected validSquares(): boolean {
    let validCharacters = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

    for( let i=0; i<validCharacters.length; i++ ) {
      if( this.validCharacterInSquares( validCharacters[i] ) === false ) {
        return false;
      }
    }

    return true;
  }

  private validCharacterInRows( character: string ): boolean {
    for( let i=1; i<10; i++ ) {
      let row = this._slicer.sliceRow( i );
      if( this.validCharacterInArea( character, row ) === false )
        return false;
    }

    return true;
  }
  private validCharacterInColumns( character: string ): boolean {
    for( let i=1; i<10; i++ ) {
      let column = this._slicer.sliceColumn( i );
      if( this.validCharacterInArea( character, column ) === false )
        return false;
    }

    return true;
  }
  private validCharacterInSquares( character: string ) {
    for( let i=1; i<10; i++ ) {
      let column = this._slicer.sliceSquare( i );
      if( this.validCharacterInArea( character, column ) === false )
        return false;
    }

    return true;
  }
  private validCharacterInArea( character: string, area: string ): boolean {
    return area.indexOf( character ) === area.lastIndexOf( character );
  }
}
