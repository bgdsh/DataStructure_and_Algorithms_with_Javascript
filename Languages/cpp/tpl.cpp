#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T>
class Stack {
  private:
    vector<T> elems;
  
  public:
    void push(T const&);
    void pop();
    T top() const;
    bool empty() const {
      return elems.empty();
    }
};

template <class T>
void Stack<T>::push(T const& elem) {
  elems.push_back(elem);
}

template <class T>
void Stack<T>::pop() {
  if (empty()) {
    throw out_of_range("Stack<>::pop(): empty stack");
  }
  elems.pop_back();
}



template <class T>
T Stack<T>::top() const {
  if (empty()) {
    throw out_of_range("Stack<>::top(): empty stack");
  }
  return elems.back();
}


int main() {
  
  try
  {
    Stack<int> intStack;
    Stack<string> strStack;
    intStack.push(7);
    cout << intStack.top() << endl;
    strStack.push("hello"); 
    cout << strStack.top() << std::endl; 
    strStack.pop(); 
    strStack.pop(); 
  }
  catch(const std::exception& e)
  {
    std::cerr << e.what() << '\n';
  }
  
}

