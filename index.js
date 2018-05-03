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

function spongibobuTest() {
      let testStrings =  ["test", "Test", "tEst", "TEst", "teSt", "TeSt", "tESt", "TESt", "tesT", "TesT", "tEsT", "TEsT", "teST", "TeST", "tEST", "TEST"];
      let testCount = 0;
      let tests = 100;
      for (i = 0; i < tests; i++) {
	      testCount += (testStrings.includes(spongibobu("test"))) ? 1 : -1;
      }

      let passed = !!(testCount === tests);
      console.log("Test passed: " + String(passed));
      return passed;
}

function spongibobu(str) {
    str = String(str);
    
    if (!!(str.length == 0)) {
          return "";
    }
      
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (!!(Math.random() >= 0.5)) {
            res = res.concat(str[i].toUpperCase());
            if (!!(i + 1 < str.length)) {
                i++;
                res = res.concat(str[i].toLowerCase());                
            }
        } else {
            res = res.concat(str[i].toLowerCase());
        }
    }
    return res;
}
