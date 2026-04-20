(function () {
    function applyPremiumEnhancements() {
        document.body.classList.add('premium-ui');

        const isIndex = /(?:^|\/)index\.html$/i.test(window.location.pathname) || window.location.pathname.endsWith('/');

        if (!isIndex && !document.querySelector('.back-button') && !document.querySelector('.premium-floating-home')) {
            const homeBtn = document.createElement('a');
            homeBtn.href = 'index.html';
            homeBtn.className = 'premium-floating-home';
            homeBtn.setAttribute('aria-label', 'Back to tools home');
            homeBtn.innerHTML = '<i class="fas fa-arrow-left"></i><span>Tools Home</span>';
            document.body.appendChild(homeBtn);
        }

        const revealTargets = document.querySelectorAll('.tool-card, .conversion-section, .content > div, .options-grid, .upload-section, #dropZone, .drop-zone');
        revealTargets.forEach(function (el, index) {
            el.classList.add('premium-reveal');
            el.style.animationDelay = Math.min(index * 50, 450) + 'ms';
        });

        const dropZones = document.querySelectorAll('#dropZone, .drop-zone, .upload-area, .upload-box, .drag-area');
        dropZones.forEach(function (zone) {
            zone.classList.add('premium-dropzone');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPremiumEnhancements);
    } else {
        applyPremiumEnhancements();
    }
})();
