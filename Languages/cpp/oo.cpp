#include <iostream>

using namespace std;

class Shape {
  public:
    void setWidth(int w) {
      width = w;
    }

    void setHeight(int h) {
      height = h;
    }
  
  protected:
    int width;
    int height;
};

class Rectangle : public Shape {
  public:
    int getArea() {
      return width * height;
    }
    void printArea() {
      cout << "Area is: " << getArea() << endl;
    }
};

int main() {
  Rectangle rect;
  rect.setHeight(100);
  rect.setWidth(100);
  rect.printArea();
  return 0;
}
