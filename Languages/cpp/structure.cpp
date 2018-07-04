#include <iostream>
#include <cstring>

using namespace std;

void printBook(struct Book *book);

struct Book {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

int main() {
  struct Book book1;
  struct Book book2;

  strcpy(book1.title, "Learn C++ programming.");
  strcpy(book1.author, "Chand Miyan");
  strcpy(book1.subject, "C++ Programming");
  book1.book_id = 6495407;

  printBook(&book1);
  printBook(&book2);
}


void printBook(struct Book *book) {
  cout << "Book 1 title : " << book->title <<endl;
  cout << "Book 1 author : " << book->author <<endl;
  cout << "Book 1 subject : " << book->subject <<endl;
  cout << "Book 1 id : " << book->book_id <<endl;
}

