#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char *argv[])
{
    char c;
    int a, b;
    while (cin >> c >> a >> b)
    {
        switch (c)
        {
        case '+':
            cout << a + b << endl;
            break;
        case '-':
            cout << a - b << endl;
            break;
        case '*':
            cout << a * b << endl;
            break;
        case '/':
            cout << a / b << endl;
            break;
        case '%':
            cout << a % b << endl;
            break;
        }
    }
    return 0;
}
