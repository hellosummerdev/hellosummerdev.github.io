// 스크린샷 크게 보기, 현재 섹션 메뉴 표시
document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('lightbox');
    if (box && typeof box.showModal === 'function') {
        const img = box.querySelector('img');
        const caption = box.querySelector('.lightbox-caption');
        document.querySelectorAll('.shot-open').forEach((btn) => {
            btn.addEventListener('click', () => {
                img.src = btn.dataset.src;
                img.alt = btn.dataset.caption;
                caption.textContent = btn.dataset.caption;
                box.showModal();
            });
        });
        box.querySelector('.lightbox-close').addEventListener('click', () => box.close());
        box.addEventListener('click', (e) => {
            if (e.target === box) box.close();
        });
    }

    const links = [...document.querySelectorAll('.nav-list a')];
    const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        sections.forEach((s) => io.observe(s));
    }

    // 주소에 #project-xxx 가 있으면 해당 항목을 펼친다
    const openFromHash = () => {
        const el = location.hash && document.querySelector(location.hash);
        if (el && el.tagName === 'DETAILS') el.open = true;
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
});

// 이메일 주소 복사
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach((btn) => {
        const done = btn.parentElement.querySelector('.copy-done');
        let timer;
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            let ok = false;
            try {
                await navigator.clipboard.writeText(text);
                ok = true;
            } catch (e) {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
                ta.remove();
            }
            if (!done) return;
            done.textContent = ok ? '복사했습니다' : '복사하지 못했습니다';
            clearTimeout(timer);
            timer = setTimeout(() => { done.textContent = ''; }, 2000);
        });
    });
});
