# SQL

1. **What is PL-SQL?**
- PL-SQL is extension to the SQL Language which enhances its capability by providing programming like features such as, functions, ifelse conditions, exception handling, etc.
- It is a block-structured language. 

2. **Basic Structure of PL-SQL**
```sql
DECLARE
    #Non-mandatory
    <variable declartion section, cursor, subporgrams>
BEGIN
    #mandatory
    <Executable commands statements>
    <at least one executable line of code, which maybe just a NULL command to indicate that nothing should be executed.>

EXCEPTION
    #Optional 
    <Handles errors in the program>
END;

DECLARE 
   message  varchar2(20):= 'Hello, World!'; 
BEGIN 
   dbms_output.put_line(message); 
END; 

```