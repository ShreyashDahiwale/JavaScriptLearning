# What is Internet and How it works.

# What is Server?

# What is Client?
- The one who request something from the Server. 

# What is DNS (Domain Name Server)?
- 

# Difference between Web Server and Application Server?
- *Web Server*: Serves the static information.
- *Application Server*: Serves the dynamic or live information.

# Unix and Linux
- *Unix*: Commercial e.g. MacOS
- *Linux*: Open source.

# Software Remote Location Server Tools.
- RDP 
- SSH
- AnyDesk

# What is Kernel, Bootloader, and Shell?
- Kernel is the heart of OS.
- Shell is the platform/terminal which allows us to interact with the Kernel.
- Bootloader is the very first program runs when starting the system.
- GRUB (GRand Unified Bootloader)

# Linux Architecture
- Applications -> Shell -> Kernel -> Hardware

# States of Processes in Linux?
- sleeping, running, killed/terminated, zombie

# SSH Key
- Public key goes to server
- Private key downloaded on our machine.



-------------------------------------------------------------------------------------------
**Disk**
df - used to get the disc information
du - information about folder
top - this commands shows all the running processes 
fuser - to get ubuntu running on which file system process (NAS = Network Attached Storage)
kill - kill process
free -h = free storage
nohup = it used to write some logs 
vmstat = gives information about RAM

------------------------------------------------------------------
# System Level Commands
- uname = shows you which system is running
- uptime = shows you how much time system is up
- date = 
- who = who logged in to the system, how much users logged in, etc
- whoami = current system logged in user
- which = gives us the location of particular (which python => location from where python is executing)
- id = id shows you user id, group id
- sudo = super user do (root user with all the persmission). It is a group
- shutdown = system will shutdown (sudo shutdown)
- reboot = restart the system
- apt = application commandline manager is for Ubuntu
    - sudo apt-get install nodejs npm = will install nodejs and npm
- yum = app package manager (CentOS)
- dnf = (Fedora)
- pacman = 

-----------------------------------------------------------------------
# User & Group Management Commands

<!-- ssh -i "ssh-client-key.pem" ubuntu@ec2-51-20-53-50.eu-north-1.compute.amazonaws.com -->

- useradd -m myownuser = add new user 
- passwd = to add password to the user
- su username = swith user
- cat /etc/passwd
- userdel username = remove user
- you can group the users in different categories of groups
- groupadd groupname = creation of group
- sudo gpasswd -a username groupname
- sudo gpasswd -M username, username, ... groupname
- groupdel = delete group

--------------------------------------------------------------------------
# File Permission Commands