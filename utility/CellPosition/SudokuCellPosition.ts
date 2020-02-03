export class SudokuCellPosition {
  private _index;
  private _row = 0;
  private _column = 0;
  private _square = 0;

  constructor( index: number ) {
    this._index = index;
    if( this.isOutOfBounds() === false ) {
      this.calculateRow();
      this.calculateColumn();
      // NOTE: run calculateSquare AFTER _row and _column are set
      this.calculateSquare();
    }
  }
  get row(): number {
    return this._row;
  }
  get column(): number {
    return this._column;
  }
  get square(): number {
    return this._square;
  }
  private calculateRow(): void {
    this._row = Math.ceil( this._index / 9 );
  }
  private calculateColumn(): void {
    if( this._index % 9 !== 0 )
      this._column = this._index % 9;
    else // if( this._index % 9 === 0 )
      this._column = 9;
  }
  private calculateSquare(): void {
    this._square = Math.ceil(this.column / 3) + Math.floor( this._row / 3 ) * 3 ;
  }
  private isOutOfBounds(): boolean {
    return this._index < 1 || this._index > 81;
  }

}
