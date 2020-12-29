// Copyright © 2020 Kamil Kozioł

#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char* argv[])
{
    int m,n;
    cin >> m >> n;

    int pole = m*n;
    if(pole <= 1)
    {
        cout << 0 << endl;
    }
    else
    {
        cout << pole/2 << endl;
    }
    return 0;
}

