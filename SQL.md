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

11. **What is ACID Properties in SQL?**
- *Atomicity*: The "all-or-nothing" principle of a transaction. It ensures that a sequence of database operations is treated as a single, indivisible unit: either every operation in the sequence succeeds and is permanently saved (Commit), or if any single part fails, the entire transaction is cancelled and the database reverts to its previous state (Rollback). (Either all or none until COMMIT command).
- *Consistency*: Consistency ensures that a transaction brings the database from one valid state to another, adhering to all predefined rules and constraints.
- *Isolation*: Isolation ensures that concurrently executing transactions do not interfere with each other. 
- *Durability*: Durability guarantees that once a transaction is committed, it remains permanent even in the event of a system crash, power failure, or error.

12. **What is clustered index?**
- A clustered index sorts and stores the actual data in the table based on the indexed column; hence fast retrieval is possible.  
- Because data rows themselves are stored in this sorted order, only one clustered index is permitted per table, typically created on the primary key, making it ideal for range queries and fast retrieval.

13. **What is non-clustered index?**
- A non-clustered index creates an independent structure outside the table that points to the data in the table. This allows optimal flexibility of indexing.

14. **What is the difference between IN and BETWEEN operator?**
- The BETWEEN operator is used for range filtering.
- The IN operator is used to check the value exists in a group or not.

15. **What is the difference between NULL, zero, or blank?**
- NULL means no value or unknown.
- Zero means numeric 0 value.
- blank means blank string.

16. **How to find duplicate records in a table??**
- Use GROUP BY the column and filter using the HAVING COUNT (*) > 1. 

17. **What are aggregate functions in SQL?**
- Aggregate functions such as COUNT (), AVG (), MAX (), and SUM () take a set of values and perform a calculation, returning a single value.

---------------------------------------------------------------------------------

18. **What is a window function in SQL?**
- Window functions are powerful because they let you look across multiple rows while still keeping each row intact—unlike GROUP BY, which collapses rows.
- *ROW_NUMBER()*
    👉 What it does:
    Assigns a unique sequential number to each row within a partition.

    👉 Key points:
    No duplicates
    Always increments (1, 2, 3, 4…)
    Even if values are same → numbers will differ
    ```sql
    SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
    FROM employees;

    | name | salary | row_num |
    | ---- | ------ | ------- |
    | A    | 10000  | 1       |
    | B    | 9000   | 2       |
    | C    | 9000   | 3       |
    ```

- *RANK()*
    👉 What it does:
    Assigns rank based on order, but gives same rank for ties.

    👉 Key points:
    Same values → same rank
    Leaves gaps in ranking
    ```sql
    SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank
    FROM employees;

    | name | salary | rank |
    | ---- | ------ | ---- |
    | A    | 10000  | 1    |
    | B    | 9000   | 2    |
    | C    | 9000   | 2    |
    | D    | 8000   | 4    |
    ```

- *DENSE_RANK()*
    👉 Behavior:
    Same values → same rank
    No gaps in ranking

    ```sql
    SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
    FROM employees;

    | name | salary | dense_rank |
    | ---- | ------ | ---------- |
    | A    | 10000  | 1          |
    | B    | 9000   | 2          |
    | C    | 9000   | 2          |
    | D    | 8000   | 3          |
    ```
    
------------------------------------------------------------------------
------------------------------------------------------------------------

19. **For what purpose is a CTE (Common Table Expression) used?**
- A CTE is a temporary result set defined by using WITH. It is generally used to clarify complex queries and make them more readable.

20. **What is the execution order of clauses in SQL?**
- The execution order for the clauses in SQL: 
- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. 

21. **Does indexing improve the performance of SQL?**
- Indexes speed up SELECT queries but do ensure slow performance while INSERT, UPDATE, and DELETE operations happen due to maintenance overhead (have to update the indexes also).

22. **How would you define a deadlock in SQL and how can it be resolved?**
- A deadlock occurs when two transactions are waiting indefinitely for one another to finish, it can be resolved by rolling back one of the transactions automatically.  

23. **What are some ways you can prevent SQL injection?**
- You can prevent SQL injections by using parameterized queries, validating inputs to forms, and using stored procedures.

24. **How to find common records from two tables?**
- Use either INTERSECT or INNER JOIN to retrieve records that exist in both tables based on a matching column.  

25. **How to check and handle the NULL values?**
- using IS NULL 
- IFNULL(column_name, 'NA')
- COALESCE(column1, column2, column3, 'Las') --> uses first non-NULL value

26. **Different Count() operations.**
- COUNT(*) includes rows with NULL Values also.
- COUNT(column_name) counts only non-NULL values.
- COUNT(DISTINCT column_name) counts unique non-NULL values
- COUNT(1) count 1 for each row just work same as COUNT(*)

27. **How NULLIF() works?**
- NULLIF(expression1, expression2)
- This function returns true if two specified expressions are equal, otherwise, it returns the first expression.

------------------------------------------------------------------
------------------------------------------------------------------

28. **What cursor in PL/SQL?**
- A cursor is a pointer to a memory location where SQL query data is stored. 
- A cursor allow us to process query result row by row instead of all at once.
- Using this:
    - We can apply logic per row.
    - Performing Calculations.
    - Looping through results.
- Types of Cursors:
    1) ***Implicit Cursor(Automatic)***
    - Created automatically by Oracle for SELECT INTO, DELETE, UPDATE, INSERT
    - Cursor attributes: SQL%FOUND, SQL%NOTFOUND, SQL%ROWCOUNT, SQL%ISOPEN
    - It is used for Single Row.
    - SQL%NOTFOUND returns true when no more records to fetch. 
    ```sql
        DECLARE
            v_name employees.name%TYPE;
        BEGIN
            SELECT name INTO v_name
            FROM employees
            WHERE id = 1;
        END;
    ```

    2) ***Explicit Cursor (Manual)***
    - Used to store the result of an query which returns more than one row.
    - Syntax: DECLARE → OPEN → FETCH → LOOP → DML → EXCEPTION → EXIT
    - *OPEN*: Executes query and loads result into memory
    - *CLOSE*: Releases memory. 
    ```mysql
        DECLARE cur CURSOR FOR SELECT col1, col2 FROM Temp;
    ```
    ```sql
        DECLARE
            CURSOR emp_cursor IS
            SELECT name, salary FROM employees;

            v_name employees.name%TYPE;
            v_salary employees.salary%TYPE;

        BEGIN
            OPEN emp_cursor;

            LOOP
                FETCH emp_cursor INTO v_name, v_salary;
                EXIT WHEN emp_cursor%NOTFOUND;

                DBMS_OUTPUT.PUT_LINE(v_name || ' - ' || v_salary);
            END LOOP;

            CLOSE emp_cursor;

            EXCEPTION
            WHEN OTHERS THEN
                -- Ensure cursor is closed if an error occurs
                IF emp_cursor%ISOPEN THEN
                    CLOSE emp_cursor;
                END IF;

            DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        END;
    ```
---------------------
---------------------

29. **What Bulk Collect?**
- Cursor: process data row by row
    - Fetches one row at a time
    - Context switch between SQL and PL/SQL for each row. (Problem is many context switches)
- BULK COLLECT: process data in batches. 
    - Fetches multiple rows at once into collections
    - Reduces context switching
    - We can use this to Insert bulk data
    ```sql
        DECLARE
        TYPE emp_table IS TABLE OF employees%ROWTYPE;
        v_emps emp_table;

        BEGIN
        SELECT * BULK COLLECT INTO v_emps
        FROM employees;

        FOR i IN 1 .. v_emps.COUNT LOOP
            DBMS_OUTPUT.PUT_LINE(v_emps(i).name || ' - ' || v_emps(i).salary);
        END LOOP;
        END;
    ```

30. **Your Procedure is running slow now. How we can fix this?**
- First check the Explain Query Plan.
- Then check the full table scans. 
- Check if index is present or not on the table. 
- Check JOINs in query.
- Check after which JOINs data is multiplying. Check is it really required or correct.
- For data mismatch → test small blocks of logic
- “Fix hash → nested” → performance tuning decision
    - Hash Join → large data, no index
    - Nested Loop → small data, index exists
    - It means overriding the optimizer’s choice of a hash join and forcing a nested loop join, usually for better performance when dealing with smaller datasets or indexed columns.

---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

31. **Different JOINs in SQL?**
- INNER JOIN: Return only exact matches from both the table.
- LEFT JOIN: All rows from LEFT Table. Matching rows from RIGHT Table, otherwise, NULL.
- RIGHT JOIN: All rows from RIGHT Table. Matching rows from LEFT Table, otherwise, NULL.
- FULL OUTER JOIN: All rows from BOTH the tables. Matches where possible. NULL where no match.
- CROSS JOIN: Every row from table A joins with every row from table B. 
    ```sql
        SELECT e.emp_name, d.dept_name
        FROM emp e
        CROSS JOIN dept d;
        -- 3 employees × 4 departments → 12 rows
    ```
- SELF JOIN: Same table join with itself.
    ```sql
    SELECT e.emp_name, m.emp_name AS manager
    FROM emp e
    JOIN emp m
    ON e.manager_id = m.emp_id;
    ```

32. **Sessions in PL/SQL?**
-  Sessions store user context, variables, cursor states during code execution.

33. **Functions vs Procedures**
- *Functions* are just like other programming language. You can use it whenever you required. 
- There must be return value present. 
- We can use it in SQL Statement. 
- *Procedure* are for performing some set of actions. Return data should be optional.
- You have to call the Procedure. 

34. **Calling a Store Procedure.**
```sql
CREATE OR REPLACE PROCEDURE get_salary (
  p_emp_id IN NUMBER,
  p_salary OUT NUMBER
) AS
BEGIN
  SELECT salary INTO p_salary
  FROM employees
  WHERE emp_id = p_emp_id;
END;

-- calling SP
DECLARE
  v_salary NUMBER;
BEGIN
  get_salary(101, v_salary);
  DBMS_OUTPUT.PUT_LINE(v_salary);
END;
/
```
# Sample Store Procedure
```sql
CREATE OR REPLACE PROCEDURE process_employees (
    p_dept_id     IN NUMBER,
    p_increment   IN NUMBER,
    p_count       OUT NUMBER
)
IS
    -- Variables
    v_total_count NUMBER := 0;

    -- Record type
    TYPE emp_rec IS RECORD (
        emp_id   employees.emp_id%TYPE,
        salary   employees.salary%TYPE
    );

    -- Collection type
    TYPE emp_table IS TABLE OF emp_rec;
    v_emps emp_table;

    -- Cursor
    CURSOR emp_cursor IS
        SELECT emp_id, salary
        FROM employees
        WHERE department_id = p_dept_id;

BEGIN
    -- BULK COLLECT
    OPEN emp_cursor;
    LOOP
        FETCH emp_cursor BULK COLLECT INTO v_emps LIMIT 100;
        EXIT WHEN v_emps.COUNT = 0;

        -- Loop through collection
        FOR i IN 1 .. v_emps.COUNT LOOP
            -- Update salary
            UPDATE employees
            SET salary = salary + p_increment
            WHERE emp_id = v_emps(i).emp_id;

            v_total_count := v_total_count + 1;
        END LOOP;

    END LOOP;

    CLOSE emp_cursor;

    -- Assign OUT parameter
    p_count := v_total_count;

    -- Commit changes
    COMMIT;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No employees found');

    WHEN TOO_MANY_ROWS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected multiple rows');

    WHEN OTHERS THEN
        -- Rollback in case of error
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
```