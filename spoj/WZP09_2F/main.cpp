#include <iostream>
#include <cstdlib>

using namespace std;

int charToInt(char c)
{
    return (int)c - '0';
}

bool divisibleBy3(string n)
{
    int sum = 0;
    for (int i = 0; i < n.length(); i++)
    {
        sum += charToInt(n[i]);
    }
    return sum % 3 == 0;
}

bool divisibleBy5(string n)
{
    int len = n.length();
    return (n[len - 1] == '0' || n[len - 1] == '5');
}

int main(int argc, char *argv[])
{
    string a;

    while (true)
    {
        cin >> a;
        if (a == "0")
            break;

        if (divisibleBy3(a) && divisibleBy5(a))
        {
            cout << "TAK\n";
        }
        else
        {
            cout << "NIE\n";
        }
    }
    return 0;
}
