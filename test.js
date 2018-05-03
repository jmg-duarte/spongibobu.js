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
