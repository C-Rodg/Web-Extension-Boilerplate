let links = document.getElementById('links');
console.log(links);

chrome.tabs.executeScript(null, {
    file: 'extractor.js'
}, (results) => {
    console.log(results);
    if (results) {
        let anchors = results[0];
        anchors.forEach(function(a) {
            let tr = document.createElement('tr'),
                td_text = document.createElement('td'),
                td_url = document.createElement('td'),
                link = document.createElement('a');

            link.href = a.href;
            link.target = "_blank";
            link.textContent = a.href;

            td_url.appendChild(link);
            td_text.textContent = a.text;

            tr.appendChild(td_text);
            tr.appendChild(td_url);

            links.appendChild(tr);
        });
    }    
});