function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA,nameB)=>
    (nameA.name.last.toLowerCase()<nameB.name.last.toLowerCase() ? -1:1))
   return accounts;             
  
}

function getTotalNumberOfBorrows(account, books) {
let result = 0;
for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
    if (books[i].borrows[j].id === account.id) {
      result += 1;
    }
  }
}
console.log(result);
  return result 
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks=[];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false && books[i].borrows[0].id===account.id ) {
      possessedBooks.push(books[i]);
    }
   }
  const possessedBooksWithAuthor=[];
  for(let i=0;i<possessedBooks.length;i++){
  for(let j=0;j<authors.length;j++){
   // let booksAuthor=authors.filter((author)=>authors[j].id===possessedBooks[i].authorId);
    if(authors[j].id === possessedBooks[i].authorId){
    const newBook={...possessedBooks[i],
                   author:authors[j]}
    possessedBooksWithAuthor.push(newBook)
  }
  console.log(possessedBooksWithAuthor)
   
  }
 return possessedBooksWithAuthor;
}
}
   


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
