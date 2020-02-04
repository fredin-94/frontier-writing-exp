export const getBookIdFromUrl = ()=>{
    var url = window.location.href;  //get the whole url
    var bookId = url.substr(url.lastIndexOf('/') + 1);
    return bookId;
};