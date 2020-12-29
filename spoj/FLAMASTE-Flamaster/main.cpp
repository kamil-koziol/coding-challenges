// Copyright © 2020 Kamil Kozioł

#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

string multChar(char c, int a);
void flamaster(char ch, int counter);

int main(int argc, char* argv[])
{
    int n;
    cin >> n;
    
    string s;
    for(int i=0; i<n; i++)
    {
        cin >> s;
        int len = s.length();

        int counter = 1;
        char ch = s[0];
        for(int j=1; j<len; j++)
        {
            if(s[j] == ch)
            {
                counter++;
            }
            else
            {
                flamaster(ch,counter);
                counter = 1;
                ch = s[j];
            }
        }

        flamaster(ch, counter);
        cout << endl;
    }

    
    
    return 0;
}

string multChar(char c, int a)
{
    string build;
    for(int i=0; i<a; i++)
    {
        build.push_back(c);
    }
    return build;
}

void flamaster(char ch, int counter)
{
    if(counter > 2)
    {
        cout << ch << counter;
    }
    else
    {
        cout << multChar(ch, counter);
    }
}
