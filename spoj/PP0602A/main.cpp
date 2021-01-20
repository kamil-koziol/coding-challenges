#include <iostream>
#include <cstdlib>

using namespace std;

int tablica[100];
int t, n, a;

int main(int argc, char *argv[])
{
    cin >> t;
    for (int i = 0; i < t; i++)
    {
        cin >> n;
        for (int j = 0; j < n; j++)
        {
            cin >> a;
            tablica[j] = a;
        }

        // Numerujemy od 1.

        // Parzyste
        for (int i = 1; i < n; i += 2)
        {
            cout << tablica[i] << endl;
        }

        // Nieparzyste
        for (int i = 0; i < n; i += 2)
        {
            cout << tablica[i] << endl;
        }
    }

    return 0;
}
