#include <iostream>
#include <cstdlib>

using namespace std;

void shiftArray(int arr[], int size, int amount)
{
    for (int n = 0; n < amount; n++)
    {
        int firstElement = arr[0];
        for (int i = 0; i < size - 1; i++)
        {
            arr[i] = arr[i + 1];
        }

        arr[size - 1] = firstElement;
    }
}

int main(int argc, char *argv[])
{
    int t;
    cin >> t;

    for (int i = 0; i < t; i++)
    {
        int n;
        cin >> n;

        int *tab;
        tab = new int[n];

        for (int j = 0; j < n; j++)
        {
            cin >> tab[j];
        }

        shiftArray(tab, n, 1);
        for (int j = 0; j < n; j++)
        {
            cout << tab[j] << " ";
        }
        cout << endl;
    }
    return 0;
}
