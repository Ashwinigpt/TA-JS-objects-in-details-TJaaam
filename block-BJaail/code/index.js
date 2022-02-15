class BookList{
    constructor(root, list = []){
        this.books = list;
        this.root = root;
    }
    add(text, author, url){
        let book = new Book(text, author, url);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id){
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice(index, 1);
        this.createUI;
        return this.books.length;
    }
    createUI(){
        this.root.innerHtml = "";
        this.books.forEach(book => {
            let ui = book.createUI();
            ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));
        this.root.append(ui);
        });
    }
}

class Book{
    constructor(text, author, url){
        this.text = text;
        this.author = author;
        this.url = url;
        this.isDone = false;
        this.id = `id-${Date.now()}`
    }
    handleCheck(){
        this.isDone = !this.isDone;
        this.createUI();
    }
    createUI(){
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = this.isDone;
        input.addEventListener("click", this.handleCheck.bind(this));
        let p = document.createElement("p");
        p.innerText = this.text;
        let span = document.createElement("span");
        span.innerText = "❌";
        span.addEventListener("click", handleDelete);
        li.append(input, p ,span);
        return li;
    }
}

let myBook = new BookList(document.querySelector(".books"));
myBook.add("Harry Potter", "J.K. Rowling", 768756598);
myBook.add("A Passage to India", "E.M. Foster", 987868798);