import { Utility } from './utility/Utility';

export class SudokuSolver {
  // abstract factory
  protected _sudoku: string;
  protected _solver: SudokuSolver;

  constructor( sudoku: string ) {
    this._sudoku = sudoku;
  }
  solve( algorithm: string = 'recursive'): Array<string> {
    switch( algorithm ) {
      case 'recursive':
        this._solver = new RecursiveSudokuSolver( this._sudoku );
    }

    return  this._solver.solve();
  }
}

class RecursiveSudokuSolver extends SudokuSolver {
  // uses a tree structure from composite
  private _solutions = [];
  solve(): Array<string> {
    if( Utility.validate( this._sudoku ) === false ) {
      return this._solutions;
    }
  }


  // composite???
  // should I seperate creating a tree from applying solution
  // create a leaf if added value is valid
  // iterate over structure to retreive the solutions
  // each branch / leaf has a solution

}














class RecursiveSudokuComposite {
  private _sudokuState: string;
  private _parent: RecursiveSudokuComposite;
  private _children: Array<RecursiveSudokuComposite>;
  // store as {1: RecursiveSudokuComposite, 2: RecursiveSudokuComposite, 3: null, etc... } ???
  constructor( sudoku: string ) {
    this._sudokuState = sudoku;
  }
  protected add( parent: RecursiveSudokuComposite ): void {
    // if solution is valid add to parent
    // then check if there are valid children for this
  }
  protected remove( parent: RecursiveSudokuComposite ): void {}
  public get_children(){};

  // remove if no children after 1-9 are tested
  // LEAFS are solutions maybe use an Observer to log them???
  // another Observer to backlog from solution up to the initial sudokuState = just call parent() until none exist??? May be easier, but have to keep the entire structure in memory then.
}

class RecursiveSudokuLeaf {
  private _sudokuState: string;
  private _parent: RecursiveSudokuComposite;
  private _children: Array<RecursiveSudokuComposite>;
  // store as {1: RecursiveSudokuComposite, 2: RecursiveSudokuComposite, 3: null, etc... } ???
  constructor( sudoku: string ) {
    this._sudokuState = sudoku;
  }
  protected add( parent: RecursiveSudokuComposite ): void {
    // if solution is valid add to parent
    // then check if there are valid children for this
  }
  protected remove( parent: RecursiveSudokuComposite ): void {} // child removes parent or parent removes child ( garbage collection if invalid??? ) ?
  public get_children(): Array<RecursiveSudokuLeaf> {
    return [];
  };

  // remove if no children after 1-9 are tested
  // LEAFS are solutions maybe use an Observer to log them???
  // another Observer to backlog from solution up to the initial sudokuState = just call parent() until none exist??? May be easier, but have to keep the entire structure in memory then.
}
