class Book {
    constructor(title, category, author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedData = null;
    }
    markBookAsRead (){
        this.isRead = true;
        this.finishedData = Date.now();
    }
}

class BookList {
    constructor (){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add([books = []]){
        this.books = this.book.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.curentIndexBook];
    }
    getNextBook(){
        this.curentIndexBook = this.curentIndexBook + 1;
        return this.books[this.currentIndexBook];
    }
    getPrevBook(){
        this.curentIndexBook = this.curentIndexBook - 1;
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook;
    }
}

let book1 = new Book("The Grass is Always Greener", "Modern Times", "Jeffrey Archer");
let book2 = new Book("Murder!", "Crime", "Arnold Bennett");
let book3 = new Book("An Occurrence at Owl Creek Bridge One of the Missing", "Adventure", "Ambrose Bierce");
let book4 = new Book("The Grass is Always Greener", "Modern Times", "Jeffrey Archer");
let book5 = new Book("The Grass is Always Greener", "Modern Times", "Jeffrey Archer");

let library = new BookList();

library.add([book1, book2, book3, book4, book5]);