(function() {
    const anchors = document.querySelectorAll('a[href]');
    let as = [];
    anchors.forEach((a) => {
        as.push({
            href: a.href,
            rel: a.rel,
            text: a.textContent
        });
    });
    return as;
})();