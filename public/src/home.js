function getTotalBooksCount(books) {
  let bookTotal=0;
  for (let book in books){
    bookTotal+=1;
  }
  return bookTotal;
}

function getTotalAccountsCount(accounts) {
    let accountTotal=0;
  for (let account in accounts){
    accountTotal+=1;
  }
  return accountTotal;
}

function getBooksBorrowedCount(books) {
let returnedBooks=books.filter((book)=>book.borrows[0].returned===false)
 return returnedBooks.length;
}

function topFive(array){
  const newArray=[]
  for (let i=0; i<5;i++){
    newArray.push(array[i])
  }
  return newArray;
}

function getMostCommonGenres(books) {
  let bookGenres=books.map((book)=>book.genre);
  bookGenres.sort((nameA,nameB)=>
    (nameA.toLowerCase()<nameB.toLowerCase() ? -1:1))
   // 
   const genreObjects=[];
  let genreCount=0;
   for(let i=0;i<bookGenres.length;i++){
      if(bookGenres[i]===bookGenres[i+1]){
       genreCount+=1;
     }
     else{
       const matchCount=bookGenres.filter((genre)=>genre===bookGenres[i]).length
       const newGenresObject={name:bookGenres[i],count:matchCount}
       genreObjects.push(newGenresObject);
       }
     
   }
  genreObjects.sort((genreA, genreB)=>(genreA.count>genreB.count ? -1 : 1));
 return topFive(genreObjects)
  }
     
  
 



function getMostPopularBooks(books) {
  let orderedBooks=books.sort((bookA, bookB)=>(bookA.borrows.length>bookB.borrows.length ? -1 : 1));
  let orderedLimitedBooks=topFive(orderedBooks)

  const topFiveList=orderedLimitedBooks.map((book)=>book.title)
  console.log(topFiveList);
  const topFiveListObjects=[];
   for(let i=0;i<5;i++){
     const newBook={
       name:topFiveList[i],
       count:books[i].borrows.length  
     }
     topFiveListObjects.push(newBook)
    
   }
  console.log(topFiveListObjects)
     return topFiveListObjects;
 } 

 // return books;


function getMostPopularAuthors(books, authors) {
  const authorArray=[];
 for (let i=0; i<authors.length;i++){
 let authorsBooks=books.filter((book)=>book.authorId===authors[i].id);
 let authorBorrow=authorsBooks.map((book)=>book.borrows.length)
 let tally=authorBorrow.reduce((acc,tally)=>acc+tally)
 const authorObj={
   name:authors[i].name.first+" "+authors[i].name.last,
   count:tally
 }
 authorArray.push(authorObj)
 
 //let authorTally=authorsBooks.reduce((tally, bookBorrows)=>)  
 
  }
 let orderedAuthors=authorArray.sort((authorA, authorB)=>(authorA.count>authorB.count ? -1 : 1));
 const topFive=[];
  for (let i=0; i<5;i++){
    topFive.push(orderedAuthors[i])
  }
 console.log(topFive) 
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
