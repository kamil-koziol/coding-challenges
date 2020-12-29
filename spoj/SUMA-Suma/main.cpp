/*

Copyright © 2020 Kamil Kozioł. All rights reserved.

CREATED BY: Kamil Kozioł

ID ZADANIA : 968
KOD ZADANIA : SUMA

INPUT:

Na wejście programu podana zostanie pewna nieokreślona, 
ale niewielka ilość małych liczb całkowitych (z zakresu -100..100).
Poszczególne liczby zostaną rozdzielone znakiem nowej linii.

OUTPUT :

Na wyjściu ma się pojawić ciąg liczbowy, którego i-ta pozycja jest równa sumie i pierwszych wczytanych z wejścia liczb. 
Poszczególne liczby należy rozdzielić znakami nowej linii.

EX :

Wejście:
6
8
-3

Wyjście:
6
14
11

*/

#include <iostream>
#include <cstdlib>

using namespace std;

int suma = 0;
int liczba;

int main(int argc, char *argv[])
{
	while (cin >> liczba)
	{
		suma += liczba;
		cout << suma << endl;
	}

	return 0;
}
