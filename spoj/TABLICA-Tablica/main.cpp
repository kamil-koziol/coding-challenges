/*
Copyright © 2020 Kamil Kozioł
*/

#include <iostream>
#include <cstdlib>

using namespace std;


int main(int argc, char* argv[])
{
	int tab[100];

	int i = 0;
	while(cin >> tab[i])
	{
		i++;
	}

	for(int j = i-1; j >= 0; j--)
	{
		cout << tab[j] << " ";
	}

    return 0;
}

