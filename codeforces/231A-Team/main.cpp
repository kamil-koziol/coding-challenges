// Copyright © 2020 Kamil Kozioł

#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char* argv[])
{
    int n;
    cin >> n;

    int amt = 0;
    for(int i=0; i<n; i++)
    {
        int a,b,c;
        cin >> a >> b >> c;
        if((a+b+c) >= 2)
        {
            amt++;
        }
    }
    cout << amt << endl;
    return 0;
}

