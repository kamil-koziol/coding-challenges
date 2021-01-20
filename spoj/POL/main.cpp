#include <iostream>
#include <cstdlib>

using namespace std;

int main(int argc, char *argv[])
{
    int t;
    cin >> t;
    for(int i=0; i<t; i++) {
        string a;
        cin >> a;
        for(int j=0; j<a.length()/2; j++) {
            cout<<a[j];
        }
        cout<<endl;
    }
    return 0;
}
