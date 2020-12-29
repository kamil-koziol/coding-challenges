// Copyright © 2020 Kamil Kozioł

#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char* argv[])
{
    int n,k;
    cin >> n >> k;
    
    int counter = 0;
    int last;
    for(int i=0; i<k; i++)
    {
        int num;
        cin >> num;
        if(num > 0)
        {
            counter++;
        }
        if(i==k-1) last=num;
    }
    
    if(last == 0)
    {
        cout << counter << endl;
        return 0;
    }

    for(int i=k; i<n; i++)
    {
        int num;
        cin >> num;
        if(num == last)
        {
            counter++;
        }
    }

    cout << counter << endl;

    return 0;
}

