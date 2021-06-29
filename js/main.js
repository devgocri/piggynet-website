
const getWidth = () => { 
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

// This is to fetch the player count
$(document).ready(() => {
    let ip = "piggymc.ml";
    let port = 56395;
    updatePlayercount(ip, port);
    // Updates every minute (not worth changing due to API cache)
    setInterval(() => {
        updatePlayercount(ip, port);
    }, 60000);
});

const updatePlayercount = (ip, port) => {
    $.get(`https://api.mcsrvstat.us/bedrock/2/${ip}:${port}`, (result) => {
          if (result.online === true){
            $(".status").html('Join <span class="count"></span> players <a href="minecraft://?addExternalServer=PiggyNetwork%7Cpiggymc.ml:56395">here</a>');
            $(".count").html(result.players.online);
    }else {
            $(".status").html('Currently offline');
        }
    });
};
