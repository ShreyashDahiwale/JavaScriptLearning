# ls - list 

# mkdir devops - create folder/directory

# ls -l - gives extra information about it

# pwd - present working directory

# touch newfile.txt - create a new file with name newfile.txt

# cd - change directory ( cd .. , cd devops/)

# rm - remove file

# rm -r devops/ - ( remove recursively)

# rmdir  - remove directory

# cat demofile.txt - to see content

# echo "" - to print something

# echo "Hello" > fileName.txt - to write file

# zcat - to list the file from zip 

# head - top lines from the file

# tail - last lines from the file

# tail -f filename  - constantly fetches the update from the file

# less filename - shows the file page by page

# more filename - shows the file page by page but in more

# cp filename foldername/ = copy the file to the folder

# cp folder/filename foldername/ = copy file from one folder to another

# cp -r cloud/ devops/ 

# mv = used to move the file 

# mv devops/ linuxfordevops/ 

# cat myfile.txt  = word count

# What is Hardlink and Softlink?
*Softlink*
- A Soft Link acts like a "shortcut" in Windows. It is a separate file that contains a path (text string) pointing to another file or directory. 
- Behavior: If the original file is deleted, the soft link becomes "dangling" or broken because the filename it points to no longer exists.
- Inode: It has its own unique inode number, separate from the target file.
- Flexibility: Can link across different file systems (partitions) and can point to directories.
- Creation Command: ln -s [target] [link_name]

*Hardlink*
- A Hard Link is essentially an additional name for an existing file. Every "file" you see in Linux is technically a hard link to an inode. 
- Behavior: If you delete the original file, the data remains accessible through the hard link. The actual data is only deleted from the disk when the last hard link to it is removed.
- Inode: It shares the exact same inode number as the original file. To the system, they are the same physical data.
- Limitations: Cannot link across different file systems and cannot link to directories (to prevent recursive loops).
- Creation Command: ln [target] [link_name]


# cut = cut some part from the file and return

# echo "Hello Print" | tee   = saves in the file and also print on terminal

# sort

# diff - can compare two and more than two files

# vi - vi is the file editor
 - :wq -> write quite