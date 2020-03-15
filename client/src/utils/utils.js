/* export const getBookIdFromUrl = ()=>{   //remove this from where its used and use the other one!
    var url = window.location.href;  //get the whole url
    var bookId = url.substr(url.lastIndexOf('/') + 1);
    return bookId;
};

export const getLastIdFromUrl = (url)=>{ 
    var id = url.substr(url.lastIndexOf('/') + 1);
    return id;
};
 */
export const getIdFromUrl = (url, section)=>{  //can just remake this one to use for all cases, with 1 more parameter, but then its annoying to remember the sections lol
    let splitUrl = url.split('/');
    let id = splitUrl[splitUrl.length - section]
    return id;
    //section = -1  = last part
    //section = -2  = next to last part
};