/*

Copyright © 2020 Kamil Kozioł. All rights reserved.

CREATED BY: Kamil Kozioł

ID ZADANIA: 969
KOD ZADANIA: ROWNANIE

*/

#include <iostream>
#include <cstdlib>

using namespace std;

float liczDelte(float a, float b, float c);

float a,b,c;
float delta;

int main(int argc, char* argv[])
{
	while(cin >> a >> b >> c)
	{
		delta = liczDelte(a,b,c);

		if (delta < 0)
		{
			cout << 0 << endl;
		}

		else if (delta == 0)
		{
			cout << 1 << endl;
		}

		else
		{
			cout << 2 << endl;
		}
	}

    return 0;
}

float liczDelte(float a, float b, float c)
{
	return (b*b) - (4 * a * c);
}
