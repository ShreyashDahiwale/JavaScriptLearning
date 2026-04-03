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

3. **What are the types of commands available in SQL?**
- DDL = Data Definition Language
- DML = Data Manipulation Language
- DQL = Data Query Language
- TCL = Transaction Control Language 

4. **Difference between WHERE and HAVING?**
- WHERE clause filters the rows before any group by or aggregation take place.
- HAVING clause filters after they have been grouped or aggerated. 

5. **What is Normalization?**
- Normalization is the process of structuring the data in such a way that decrease record duplication (redundancy) while increasing data integrity in relational database.

6. **What is subquery?** 
- Subquery is a query which is embedded in another query to return data that becomes availabel to main query.

7. **What is alias in SQL?**
- Alias is a temporary name assigned to a table and/or a column using the AS keyword (AS Not always requied in case of join) in the SQL query for readability. 

8. **What is an Index?**
- An index can improve the performance of SQL queries by facilitating the retrieval of data from tables more quickly. It can more seen like an index to a book. 
- It uses the B+ Tree data structure. In B+ Tree Data Structure where all the data is present at the leaf node. 

9. **What is View in SQL?**
- View is like a virtual table that acts as a stored SQL Statement. 
- It does not occupy physical storage space for data, but rather stores only its definition in database.

10. **What is trigger in SQL?**
- Trigger is a specialized stored procedure that automatically executes when specific event in database occured. Unlike stored procedures, triggers cannot be called manually; they are managed by the database engine to maintain data integrity and automate background tasks. 