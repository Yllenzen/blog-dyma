#!/bin/bash

#Bienvenue sur mon script

function mafonction {
 echo Hello World !
}

mafonction2 () {
 echo Hello World 2!
}

monecho (){
 local result=$@
 echo $result
 return 0
}

mafonction
mafonction2
monecho Salut ça va ?
echo $?

monretour=$( monecho Salut, ça va bien. Et toi ? )

# echo $monretour
echo $result

ls () {
 command ls -l
}

ls
