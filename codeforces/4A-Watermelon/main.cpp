// Copyright © 2020 Kamil Kozioł

#include <iostream>

using namespace std;

int main() 
{
  int w;
  cin >> w;

  string answ = (w % 2 == 0 && w > 2) ? "YES" : "NO";
  cout << answ << endl;
}
