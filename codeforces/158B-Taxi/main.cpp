// Copyright © 2020 Kamil Kozioł

#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char* argv[])
{
    int n; cin >> n;
    int tab[5] = {0};
    for(int i=0; i<n; i++)
    {
        int num; cin >> num;
        tab[num]++;
    }
    
    int taxiCount = 0;
    // Getting rid of 4s
    taxiCount += tab[4];
    tab[4] = 0;

    // Pairs 3-1
    if(tab[3] >= tab[1])
    {
        taxiCount += tab[1];
        tab[3] -= tab[1];
        tab[1] = 0;
    }
    else
    {
        taxiCount += tab[3];
        tab[1] -= tab[3];
        tab[3] = 0;   
    }

    // Removing 2s
    taxiCount += tab[2] / 2;
    tab[2] = tab[2]%2;

    // Removing 1s
    taxiCount += tab[1] /4;
    tab[1] = tab[1]%4;
    
    // Removing 2-1-1
    taxiCount += tab[1] / 2;
    tab[2] -= tab[1]/2;
    tab[1] = tab[1]%2;

    for(int i=1; i<=4; i++)
    {
        taxiCount += tab[i];
    }

    cout << taxiCount << endl;

    return 0;
}

