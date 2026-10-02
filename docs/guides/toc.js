// Builds the sidebar's "On this page" list from the article's h2 headings
// and highlights the section currently being read.
(function () {
    const toc = document.querySelector('[data-toc]');
    const headings = [...document.querySelectorAll('article h2')];
    if (!toc || headings.length < 2) return;

    const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const title = document.createElement('p');
    title.className = 'toc-title';
    title.textContent = 'On this page';
    const list = document.createElement('div');
    list.className = 'toc-list';

    const links = headings.map(h => {
        if (!h.id) h.id = slug(h.textContent);
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        list.appendChild(a);
        return a;
    });
    toc.append(title, list);

    function update() {
        let current = 0;
        headings.forEach((h, i) => { if (h.getBoundingClientRect().top < 140) current = i; });
        links.forEach((a, i) => a.classList.toggle('active', i === current));
    }
    addEventListener('scroll', update, { passive: true });
    update();
})();
