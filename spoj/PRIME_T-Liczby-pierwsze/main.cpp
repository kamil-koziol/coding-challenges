/*

Copyright © 2020 Kamil Kozioł. All rights reserved.

CREATED BY: Kamil Kozioł

ID ZADANIA: 438
KOD ZADANIA: PRIME_T

*/

#include <iostream>
#include <cstdlib>

using namespace std;

bool isPrime(int n);

int main(int argc, char* argv[])
{
	int n;
	cin >> n;

	int liczba;

	for(int i = 0; i < n; ++i)
	{
		cin >> liczba;

		if(isPrime(liczba))
		{
			cout << "TAK" << endl;
		}
		else
		{
			cout << "NIE" << endl;
		}
	}

    return 0;
}

bool isPrime(int n)
{
	if(n == 2)
	{
		return true;
	}

	if(n % 2 == 0 || n <= 1)
	{
		return false;
	}

	for(int i = 3; i < (n/2)+1; i += 2)
	{
		if(n % i == 0)
		{
			return false;
		}
	}

	return true;
}
