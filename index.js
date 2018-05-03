//module.exports = spongibobu;

/*

      .--..--..--..--..--..--.
    .' \  (`._   (_)     _   \
  .'    |  '._)         (_)  |
  \ _.')\      .----..---.   /
  |(_.'  |    /    .-\-.  \  |
  \     0|    |   ( O| O) | o|
   |  _  |  .--.____.'._.-.  |
   \ (_) | o         -` .-`  |
    |    \   |`-._ _ _ _ _\ /
    \    |   |  `. |_||_|   |
    | o  |    \_      \     |     -.   .-.
    |.-.  \     `--..-'   O |     `.`-' .'
  _.'  .' |     `-.-'      /-.__   ' .-'
.' `-.` '.|='=.='=.='=.='=|._/_ `-'.'
`-._  `.  |________/\_____|    `-.'
   .'   ).| '=' '='\/ '=' |
   `._.`  '---------------'
           //___\   //___\
             ||       ||
             ||_.-.   ||_.-.
            (_.--__) (_.--__)
*/

function spongibobu(str) {
    str = String(str);
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (Math.random() >= 0.5) {
            res = res.concat(str[i].toUpperCase());
            if (i + 1 < str.length) {
                i++;
            res = res.concat(str[i].toLowerCase());
                
            }
        } else {
            res = res.concat(str[i].toLowerCase());
        }
    }
    return res;
}
