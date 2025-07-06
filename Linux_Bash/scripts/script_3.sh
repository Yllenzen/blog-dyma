#!/bin/bash

#Bienvenue sur mon script

# let a=1+1
# let b=1+$a
# let a++
# let b--
# let c=10%5

# expr 1 + 1
# expr 5+1
# expr 3 % 2

# a=$(expr 5 \* 2)

a=$(( 1 + 1 ))
echo $a
(( a++))
echo $a
(( a +=3 ))
b=$(( $a + 1 ))

echo $a
echo $b
# echo $c
