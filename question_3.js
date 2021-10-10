/**
 * Convert URLs in a string to anchor links
 * @param {!string} string
 * @returns {!string}
 */
const document = require("document");
const primordials = require("primordials");

 function URLify(string){
    const urls = string.match(/((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g);
    if (urls) {
      urls.forEach(function (url) {
        string = string.replace(url, '<a target="_blank" href="' + url + '">' + url + "</a>");
      });
    }
    return string.replace("(", "<br/>(");
  }
  
  const div = document.querySelector("#tahasoft");
  div.innerHTML = URLify(div.innerText);