function copyText(id)
{
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    showToast("✔ Address copied to clipboard");
}

function showToast(message)
{
    const toast = document.getElementById("toast");

    toast.innerHTML = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function(){

        toast.classList.remove("show");

    },3000);
}

/* Lightbox for screenshots page */
(function(){
    function openLightbox(src, alt){
        const lb = document.getElementById('lightbox');
        const img = lb.querySelector('img');
        img.src = src;
        img.alt = alt || '';
        lb.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox(){
        const lb = document.getElementById('lightbox');
        if(!lb) return;
        lb.classList.remove('show');
        // clear image after close to release memory on some browsers
        const img = lb.querySelector('img');
        img.src = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', function(e){
        // image click
        const img = e.target.closest && e.target.closest('.screenshotCard img');
        if(img){
            openLightbox(img.src, img.alt);
            return;
        }

        // close button / backdrop
        if(e.target.matches && (e.target.id === 'lightbox' || e.target.classList.contains('close'))){
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') closeLightbox();
    });

    // expose for manual use if needed
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
})();
