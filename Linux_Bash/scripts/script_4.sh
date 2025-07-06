#!/bin/bash

#Bienvenue sur mon script

read -p 'Donnez moi un nombre : ' nbr

if [ $nbr -ge 1000 ]
then
 echo c\'est un énorme nombre
elif [ $nbr -gt 100 ]
then
 echo c\'est un gros nombre
else
 echo c\'est un petit nombre
fi


