        <!-- Scroll Javascript Code -->
        const triggers = [].slice.call(document.querySelectorAll('.trigger'));
triggers.forEach(function(ele) {
    ele.addEventListener('click', clickHandler);
});


const clickHandler = function(e) {
    e.preventDefault();

    const href = e.target.getAttribute('href');
    const id = href.substr(1);
    const target = document.getElementById(id);

    scrollToTarget(target);
};


window.scrollTo({ top, left, behavior: 'smooth' })
const duration = 800;

const scrollToTarget = function(target) {
    const top = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = top;

    let startTime = null;
    let requestId;
    
    const loop = function(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
        const time = currentTime - startTime;

        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startPos + diff * percent);
        
        if (time < duration) {
            requestId = window.requestAnimationFrame(loop);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);
};

const time = currentTime - startTime;

const percent = Math.min(time / duration, 1);
window.scrollTo(0, startPos + diff * percent);

if (time < duration) {
    requestId = window.requestAnimationFrame(loop);
} else {
    window.cancelAnimationFrame(requestId);
}

const easeInQuad = function(t) {
    return t * t;
};

const loop = function(currentTime) {
    ...
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startPos + diff * easeInQuad(percent));
});