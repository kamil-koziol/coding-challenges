#include <iostream>
#include <cstdlib>

using namespace std;


int n, v1, v2;

int getAvgVel(int v1, int v2) {
    return 2*(v1*v2)/(v1+v2);
}

int main(int argc, char *argv[])
{   
    cin>>n;
    for(int i=0; i<n; i++) {
        cin>>v1>>v2;
        cout<<getAvgVel(v1, v2)<<endl;
    }
    return 0;
}
