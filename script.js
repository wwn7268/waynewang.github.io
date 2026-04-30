// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Publication filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const publications = document.querySelectorAll('.publication');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter publications
            publications.forEach(pub => {
                const categories = pub.dataset.category || '';
                if (filter === 'all' || categories.includes(filter)) {
                    pub.classList.remove('hidden');
                } else {
                    pub.classList.add('hidden');
                }
            });
        });
    });
}
