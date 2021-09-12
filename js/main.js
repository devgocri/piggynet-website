
const getWidth = () => { // credit to travis on stack overflow
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};


// This is for the click to copy
let t;
$(document).ready(() => {
    t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
    let copy = document.createElement("textarea");
    copy.style.position = "absolute";
    copy.style.left = "-99999px";
    copy.style.top = "0";
    copy.setAttribute("id", "ta");
    document.body.appendChild(copy);
    copy.textContent = t;
    copy.select();
    document.execCommand("copy");
    $(".ip").html("<span class='extrapad'>IP copied!</span>");
    setTimeout(() => {
        $(".ip").html(t);
        var copy = document.getElementById("ta");
        copy.parentNode.removeChild(copy);
    }, 800);
});

// This is to fetch the player count
$(document).ready(() => {
    let ip = "play.piggymc.tk";
    let port = 19132;
    updatePlayercount(ip, port);
    // Updates every minute (not worth changing due to API cache)
    setInterval(() => {
        updatePlayercount(ip, port);
    }, 60000);
});

const updatePlayercount = (ip, port) => {
    $.get(`https://api.mcsrvstat.us/bedrock/2/${ip}:${port}`, (result) => {
          if (result.online === true){
            $(".status").html('Join <span class="count"></span> players <a href="minecraft://?addExternalServer=PiggyNetwork%7Cpiggymc.tk:19132">here</a>');
            $(".count").html(result.players.online);
    }else {
            $(".status").html('Currently offline');
        }
    });
};

