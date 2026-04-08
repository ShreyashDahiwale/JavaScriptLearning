/*

    TS --> Lexer -> Parser --> Binder --> Type Checker --> Emitter --> JS d.ts .map

    Lexer: It takes the source code and breaks it down into tokens. Tokens are the smallest units of meaning in the code, such as keywords, identifiers, operators, and literals.

    Parser: It takes the tokens produced by the lexer and builds an Abstract Syntax Tree (AST). The AST is a hierarchical representation of the code that captures its structure and semantics.

    Binder: It takes the AST produced by the parser and resolves the names of variables, functions, and other identifiers. It also checks for any naming conflicts or errors.
        Symbol Table: The binder maintains a symbol table that keeps track of the names and types of variables, functions, and other identifiers in the code. The symbol table is used by the type checker to ensure that the types of variables and function parameters are consistent and compatible.
        Parent Pointer: The binder also maintains a parent pointer for each node in the AST. This allows the type checker to navigate the AST and check for type errors in a hierarchical manner.
    
    Type Checker: It takes the AST produced by the binder and checks for type errors. It ensures that the types of variables, function parameters, and return values are consistent and compatible. Syntax errors are also checked during this phase. If any errors are found, the type checker will report them to the developer.

    Emitter: It takes the AST produced by the type checker and generates JavaScript code. The emitted JavaScript code is then executed in a JavaScript runtime environment, such as a web browser or Node.js.

*/

/*
    npm i -D typescipt
    npx tsc --init  
*/