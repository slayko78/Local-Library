function findAuthorById(authors, id) {
  let found = authors.find((account) => account.id === id);
  return found;
}

function findBookById(books, id) {
   let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
 let borrowedBooks=books.filter((book)=>book.borrows[0].returned===false)
 let returnedBooks=books.filter((book)=>book.borrows[0].returned===true)
 const bothArrays=[borrowedBooks,returnedBooks]
 return bothArrays;
}


function getBorrowersForBook(book, accounts) {
      let result = book.borrows.map(borrower => {
      let useraccount = accounts.find(account => borrower.id === account.id
        )
        useraccount.returned = borrower.returned

        return useraccount
    })
    console.log(result)
    return result.filter((borrower, id) => result.findIndex(item =>
      item.id === borrower.id) === id)
    }
// const borrower=book.map((prop)=>book.borrows[prop].id)
  //console.log(borrower)
  ///return borrower;


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
