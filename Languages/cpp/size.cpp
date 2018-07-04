#include <iostream>

using namespace std;

enum color {
  red, green, blue
} c; 

int a;

int main() {
  c = blue;
  cout << "Size of char : " << sizeof(char) << endl;
  cout << "Size of int : " << sizeof(int) << endl;
  cout << "Size of short int : " << sizeof(short int) << endl;
  cout << "Size of long int : " << sizeof(long int) << endl;
  cout << "Size of float : " << sizeof(float) << endl;
  cout << "Size of double : " << sizeof(double) << endl;
  cout << "Size of wchar_t : " << sizeof(wchar_t) << endl;
  cout << "Size of c : " << sizeof(c) << endl;
  cout << "Size of color : " << sizeof(color) << endl;
  cout << "a is : " << a <<endl;
  return 0;
}