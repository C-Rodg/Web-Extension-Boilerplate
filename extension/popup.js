let links = document.getElementById('links');

chrome.tabs.executeScript(null, {
    file: 'extractor.js'
}, (results) => {
    let anchors = results[0];
    anchors.forEach(function(a) {
        const tr = `<tr>
                        <td><a href="${a.href}">${a.href}</a><br />
                            ${a.text}
                        </td>
                        <td>${a.rel}</td>
                    </tr>
                    `;
        links.appendChild(tr);
    });
});