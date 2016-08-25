$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');
    initGame();
});

function initGame() {
    console.log('initGame');





    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======




    function initGameObjects() {
        console.log('initGameObjects');

        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======


        // players and dealer initialized regardless of number of actual players
        // actual players are tracked via playerNamesArray (which then refers to playerObjectsArray)
        var player1 = new Player(1, "player1");
        var player2 = new Player(2, "player2");
        var player3 = new Player(3, "player3");
        var dealer = new Player(4, "dealer");


        // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======

        // screen objects (regions) hold row/col/width/height, styling, tooltips and other data
        // player sceens become "subscreens" of the gameScreen object
        var player1_scr = new Screen("player1", "player");
            player1_scr.borderH = { name:"borderH", type:"bg", iR:1,iC:1,iW:6,iH:1, merge:null, class:"pBorder_1" };
            player1_scr.borderV = { name:"borderV", type:"bg",iR:1,iC:6,iW:1,iH:3, merge:"merge", class:"pBorder_1" };
            player1_scr.pName = { name:"pName", type:"text",iR:1,iC:2,iW:3,iH:1, merge:"merge", class:"pBorder_1", value:null };
            player1_scr.pScore = { name:"pScore", type:"text",iR:2,iC:6,iW:1,iH:1, merge:null, class:"pBorder_1", value:0 };
            player1_scr.pBet = { name:"pBet", type:"text",iR:5,iC:11,iW:1,iH:1, merge:null, class:"pBorder_1 bet", value:"0" };
            player1_scr.pBank = { name:"pBank", type:"text",iR:1,iC:6,iW:1,iH:1, merge:null, class:"pBorder_1 bank", value:"100" };
            player1_scr.pBet1s = { name:"pBet1s", type:"text",iR:5,iC:12,iW:1,iH:1, merge:null, class:"pBorder_1 table", value:"0" };
            player1_scr.pBet5s = { name:"pBet5s", type:"text",iR:5,iC:13,iW:1,iH:1, merge:null, class:"pBorder_1 table", value:"0" };
            player1_scr.pBet10s = { name:"pBet10s", type:"text",iR:5,iC:14,iW:1,iH:1, merge:null, class:"pBorder_1 table", value:"0" };
            player1_scr.pBank1s = { name:"pBank1s", type:"text",iR:1,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver:"", tooltipOut:""  };
            player1_scr.pBank5s = { name:"pBank5s", type:"text",iR:2,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver:"", tooltipOut:""  };
            player1_scr.pBank10s = { name:"pBank10s", type:"text",iR:3,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver:"", tooltipOut:""  };
            player1_scr.pCards = { name:"pCards", type:"text",iR:2,iC:5,iW:1,iH:2, merge:"merge", class:"card-1", value:null };
            player1_scr.hitMeBtn = { name:"hitMeBtn", callback:"hitMe", type:"btn",iR:1,iC:8,iW:1,iH:1, merge:null, class:"hitHold", image:"hitMeBW.png", value:"hit me!", tooltipOver:"hit me!", tooltipOut:""};
            player1_scr.holdMeBtn = { name:"holdMeBtn", callback:"holdMe", type:"btn",iR:1,iC:9,iW:1,iH:1, merge:null, class:"hitHold", image:"holdMeBW.png", value:"hold", tooltipOver:"hold...", tooltipOut:"" };
            player1_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:1,iC:8,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver:"slide to bet $1", tooltipOut:""  };
            player1_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:2,iC:8,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver:"slide to bet $5", tooltipOut:""  };
            player1_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:3,iC:8,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver:"slide to bet $10", tooltipOut:""  };
            player1_scr.BetBtn1s = { name:"BetBtn1s", callback:"mngBets", type:"toggle",iR:1,iC:8,iW:1,iH:1, merge:null, class:"ones", image:"Bet", value:"bet $1", tooltipOver:"$1", tooltipOut:""};
            player1_scr.BetBtn5s = { name:"BetBtn5s", callback:"mngBets", type:"toggle",iR:2,iC:8,iW:1,iH:1, merge:null, class:"fives", image:"Bet", value:"bet $5", tooltipOver:"$5", tooltipOut:""};
            player1_scr.BetBtn10s = { name:"BetBtn10s", callback:"mngBets", type:"toggle",iR:3,iC:8,iW:1,iH:1, merge:null, class:"tens", image:"Bet", value:"bet $10", tooltipOver:"$10", tooltipOut:""};

        var player2_scr = new Screen("player2", "player");
            player2_scr.borderH = { name: "borderH", type: "bg",iR:5,iC:1,iW:6,iH:1, merge: null, class: "pBorder_2" };
            player2_scr.borderV = { name: "borderV", type: "bg",iR:5,iC:6,iW:1,iH:3, merge: "merge", class: "pBorder_2" };
            player2_scr.pName = { name: "pName", type: "text",iR:5,iC:2,iW:3,iH:1, merge: "merge", class: "pBorder_2", value: null };
            player2_scr.pScore = { name: "pScore", type: "text",iR:6,iC:6,iW:1,iH:1, merge: null, class: "pBorder_2", value: 0 };
            player2_scr.pBet = { name: "pBet", type: "text",iR:6,iC:11,iW:1,iH:1, merge: null, class: "pBorder_2 bet", value: "0" };
            player2_scr.pBank = { name: "pBank", type: "text",iR:5,iC:6,iW:1,iH:1, merge: null, class: "pBorder_2 bank", value: "100" };
            player2_scr.pBet1s = { name: "pBet1s", type: "text",iR:6,iC:12,iW:1,iH:1, merge: null, class: "pBorder_2 table", value: "0" };
            player2_scr.pBet5s = { name: "pBet5s", type: "text",iR:6,iC:13,iW:1,iH:1, merge: null, class: "pBorder_2 table", value: "0" };
            player2_scr.pBet10s = { name: "pBet10s", type: "text",iR:6,iC:14,iW:1,iH:1, merge: null, class: "pBorder_2 table", value: "0" };
            player2_scr.pBank1s = { name:"pBank1s", type:"text",iR:5,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "", tooltipOut: ""  };
            player2_scr.pBank5s = { name:"pBank5s", type:"text",iR:6,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "", tooltipOut: ""  };
            player2_scr.pBank10s = { name:"pBank10s", type:"text",iR:7,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "", tooltipOut: ""  };
            player2_scr.pCards = { name: "pCards", type: "text",iR:6,iC:5,iW:1,iH:2, merge: "merge", class: "card-2", value: null };
            player2_scr.hitMeBtn = { name: "hitMeBtn", callback: "hitMe", type: "btn",iR:5,iC:8,iW:1,iH:1, merge: null, class: "hitHold", image: "hitMeBW.png", value: "hit me!", tooltipOver:"hit me!", tooltipOut:""  };
            player2_scr.holdMeBtn = { name: "holdMeBtn", callback: "holdMe", type: "btn",iR:5,iC:9,iW:1,iH:1, merge: null, class: "hitHold", image: "holdMeBW.png", value: "hold", tooltipOver:"hold...", tooltipOut:""  };
            player2_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:5,iC:8,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  };
            player2_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:6,iC:8,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  };
            player2_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:7,iC:8,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  };
            player2_scr.BetBtn1s = { name:"BetBtn1s", callback:"mngBets", type:"toggle",iR:5,iC:8,iW:1,iH:1, merge:null, class:"ones", image:"Bet", value:"bet $1", tooltipOver:"$1", tooltipOut:""};
            player2_scr.BetBtn5s = { name:"BetBtn5s", callback:"mngBets", type:"toggle",iR:6,iC:8,iW:1,iH:1, merge:null, class:"fives", image:"Bet", value:"bet $5", tooltipOver:"$5", tooltipOut:""};
            player2_scr.BetBtn10s = { name:"BetBtn10s", callback:"mngBets", type:"toggle",iR:7,iC:8,iW:1,iH:1, merge:null, class:"tens", image:"Bet", value:"bet $10", tooltipOver:"$10", tooltipOut:""};

        var player3_scr = new Screen("player3", "player");
            player3_scr.borderH = { name: "borderH", type: "bg",iR:9,iC:1,iW:6,iH:1, merge: null, class: "pBorder_3" };
            player3_scr.borderV = { name: "borderV", type: "bg",iR:9,iC:6,iW:1,iH:3, merge: "merge", class: "pBorder_3" };
            player3_scr.pName = { name: "pName", type: "text",iR:9,iC:2,iW:3,iH:1, merge: "merge", class: "pBorder_3", value: null };
            player3_scr.pScore = { name: "pScore", type: "text",iR:10,iC:6,iW:1,iH:1, merge: null, class: "pBorder_3", value: 0 };
            player3_scr.pBet = { name: "pBet", type: "text",iR:7,iC:11,iW:1,iH:1, merge: null, class: "pBorder_3 bet", value: "0" };
            player3_scr.pBank = { name: "pBank", type: "text",iR:9,iC:6,iW:1,iH:1, merge: null, class: "pBorder_3 bank", value: "100" };
            player3_scr.pBet1s = { name: "pBet1s", type: "text",iR:7,iC:12,iW:1,iH:1, merge: null, class: "pBorder_3 table", value: "0" };
            player3_scr.pBet5s = { name: "pBet5s", type: "text",iR:7,iC:13,iW:1,iH:1, merge: null, class: "pBorder_3 table", value: "0" };
            player3_scr.pBet10s = { name: "pBet10s", type: "text",iR:7,iC:14,iW:1,iH:1, merge: null, class: "pBorder_3 table", value: "0" };
            player3_scr.pBank1s = { name:"pBank1s", type:"text",iR:9,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "", tooltipOut: ""  };
            player3_scr.pBank5s = { name:"pBank5s", type:"text",iR:10,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "", tooltipOut: ""  };
            player3_scr.pBank10s = { name:"pBank10s", type:"text",iR:11,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "", tooltipOut: ""  };
            player3_scr.pCards = { name: "pCards", type: "text",iR:10,iC:5,iW:1,iH:2, merge: "merge", class: "card-3", value: null };
            player3_scr.hitMeBtn = { name: "hitMeBtn", callback: "hitMe", type: "btn",iR:9,iC:8,iW:1,iH:1, merge: null, class: "hitHold", image: "hitMeBW.png", value: "hit me!", tooltipOver:"hit me!", tooltipOut:""  };
            player3_scr.holdMeBtn = { name: "holdMeBtn", callback: "holdMe", type: "btn",iR:9,iC:9,iW:1,iH:1, merge: null, class: "hitHold", image: "holdMeBW.png", value: "hold", tooltipOver:"hold...", tooltipOut:""  };
            player3_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:9,iC:8,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "$1", tooltipOut: ""  };
            player3_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:10,iC:8,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "$5", tooltipOut: ""  };
            player3_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:11,iC:8,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "$10", tooltipOut: ""  };
            player3_scr.BetBtn1s = { name:"BetBtn1s", callback:"mngBets", type:"toggle",iR:9,iC:8,iW:1,iH:1, merge:null, class:"ones", image:"Bet", value:"bet $1", tooltipOver:"$1", tooltipOut:""};
            player3_scr.BetBtn5s = { name:"BetBtn5s", callback:"mngBets", type:"toggle",iR:10,iC:8,iW:1,iH:1, merge:null, class:"fives", image:"Bet", value:"bet $5", tooltipOver:"$5", tooltipOut:""};
            player3_scr.BetBtn10s = { name:"BetBtn10s", callback:"mngBets", type:"toggle",iR:11,iC:8,iW:1,iH:1, merge:null, class:"tens", image:"Bet", value:"bet $10", tooltipOver:"$10", tooltipOut:""};

        var dealer_scr = new Screen("dealer", "player");
            dealer_scr.borderH = { name: "borderH", type: "bg",iR:3,iC:10,iW:6,iH:1, merge: null, class: "dBorder" };
            dealer_scr.borderV = { name: "borderV", type: "bg",iR:1,iC:10,iW:1,iH:3, merge: "merge", class: "dBorder" };
            dealer_scr.pName = { name: "pName", type: "text",iR:3,iC:12,iW:3,iH:1, merge: "merge", class: "dBorder", value: null };
            dealer_scr.pScore = { name: "pScore", type: "text",iR:3,iC:10,iW:1,iH:1, merge: null, class: "dBorder", value: 0 };
            dealer_scr.pCards = { name: "pCards", type: "text",iR:1,iC:11,iW:1,iH:2, merge: "merge", class: "card-d", value: null };

        // intended to replace alert box in future versions
        var scoreboard_scr = new Screen();

        var game_scr = new Screen("gameScreen", "game");
            game_scr.orbBtn = { name:"orbBtn", callback:"nextGameScreen", type:"btn", iR:7,iC:12,iW:3,iH:1, merge:"merge", class:"button", value:"START", tooltipOver:"start game", tooltipOut:"" };
            game_scr.enterBtn = { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR:6,iC:12,iW:3,iH:1, merge: "merge", class: "button", value: "ENTER", tooltipOver:  "save player", tooltipOut: "" };
            game_scr.playerName = { name: "playerName", type: "input",iR:5,iC:12,iW:3,iH:1, merge: "merge", class: "inputText", value: "" };
            game_scr.startBtn = { name: "startBtn", callback: "startGame", type: "btn", iR:7,iC:12,iW:3,iH:1, merge: "merge", class: "button", value: "START", tooltipOver: "play", tooltipOut: "" };
            game_scr.playBtn = { name: "playBtn", callback: "playGame", type: "btn", iR:8,iC:12,iW:3,iH:1, merge: "merge", class: "button", value: "START ROUND", tooltipOver: "bet before clicking!", tooltipOut: "" };
            game_scr.playAgainBtn = { name: "playAgainBtn", callback: "playAgain", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "button", value: "AGAIN", tooltipOver: "play another hand", tooltipOut: "" };
            game_scr.newGameBtn = { name: "newGameBtn", callback: "newGame", type: "btn", iR: 11, iC: 13, iW: 1, iH: 1, merge: null, class: "button", value: "NEW", tooltipOver: "new game", tooltipOut: "" };
            game_scr.message = { name:"message", type:"text", iR:9,iC:11,iW:5,iH:2, merge:"merge", class:"message", value: "" };
            game_scr.betLabel = { name:"betLabel", type:"label", iR:0,iC:7,iW:3,iH:1, merge:"merge", class:"message", value: "your chips" };

        // source of instructions throughout game
        var messageArray = [
            ["Welcome to Blackjack!",
             "Click START"],
            ["Enter a player name...",
             "then click ENTER"],
            ["Enter another name...",
             "or START to begin playing"],
            ["Place bets with chips",
             "($1s, $5s or $10s)",
             "then click START ROUND"],
            ["Hand over!!",
             "Click AGAIN for new round"]
        ];

        // screen data is packed into gameObjectsArray and returned for storage in game and player objects
        gameObjectsArray = [player1, player2, player3, dealer, player1_scr, player2_scr, player3_scr, dealer_scr, scoreboard_scr, game_scr, messageArray];
        return gameObjectsArray;
    }

    // ======= ======= ======= newGame ======= ======= =======
    function newGame() {
	    console.log("newGame");

        // clear previous objects
        game.playerNamesArray = [];
        game.currentPlayer = 0;
        game.currentScreen = null;
        display.resetGridCells();
        game = null;
        display = null;
        gameObjectsArray = null;

        // re-initialize objects
        gameObjectsArray = initGameObjects();
        game = new Game("game1", gameObjectsArray);
        display = new Display("display1");
        display.initRowSpans();
        display.nextGameScreen();
    }





    // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======





    function Screen(name, type) {
        console.log('Screen');
        this.name = name;
        this.type = type;
    }
    function Player(id, name) {
        console.log('Player');
        this.id = id;
        this.name = name;
        this.state = "inactive";
        this.hand = null;
        this.score = 0;
        this.aceFlag = false;
        this.onesBet = 0;
        this.fivesBet = 0;
        this.tensBet = 0;
        this.onesBank = 20;
        this.fivesBank = 30;
        this.tensBank = 50;
    }
    function Game(whichGame, gameObjectsArray) {
        console.log('Game');
        this.name = whichGame;
        this.deckArray = [];
        this.deckPointsArray = [];
        this.currentPlayer = 0;
        this.currentScreen = null;
        this.currentMessage = gameObjectsArray[10][0];
        this.playerNamesArray = [];
        this.playerObjectsArray = [gameObjectsArray[0], gameObjectsArray[1], gameObjectsArray[2], gameObjectsArray[3]];
        this.screenNamesArray = ["splash", "nameEnter", "enterPlay", "playGame", "doTheMath"];
        this.screenObjectScreen = gameObjectsArray[9];
        this.subscreenNamesArray = ["inactive", "active", "placeBets", "hitMeHoldMe", "turnOver", "handOver", "gameOver"];
        this.subscreenObjectsArray = [gameObjectsArray[4], gameObjectsArray[5], gameObjectsArray[6], gameObjectsArray[7], gameObjectsArray[8]];
        this.messageArray = [gameObjectsArray[10][0], gameObjectsArray[10][1], gameObjectsArray[10][2], gameObjectsArray[10][3], gameObjectsArray[10][4]];
    }
    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.rowSpansArray = null;
        this.playerStateItems = {
            inactive: ["borderH","borderV","pName","pBank"],
            active: ["borderH","borderV","pName","pBank"],
            // placeBets: ["borderH","borderV","pName","pBank","pBank1s","pBank5s","pBank10s","chips1s","chips5s","chips10s","pBet","pBet1s","pBet5s","pBet10s"],
            placeBets: ["borderH","borderV","pName","pBank","pBank1s","pBank5s","pBank10s","BetBtn1s","BetBtn5s","BetBtn10s","pBet","pBet1s","pBet5s","pBet10s"],
            hitMeHoldMe: ["borderH","borderV","pName","pBank","pBank1s","pBank5s","pBank10s","pBet","pBet1s","pBet5s","pBet10s","hitMeBtn","holdMeBtn"],
            turnOver: ["borderH","borderV","pName","pBank","pBank1s","pBank5s","pBank10s","pBet","pBet1s","pBet5s","pBet10s"],
            handOver: ["borderH","borderV","pName","pBank"],
            gameOver: []
        };
        this.gameStateItems = {
            splash: ["orbBtn","message"],
            nameEnter: ["enterBtn","playerName","message"],
            enterPlay: ["enterBtn","startBtn","playerName","message"],
            playGame: ["betLabel","playBtn","message"],
            doTheMath: ["playAgainBtn","newGameBtn","message"]
        };
    }




    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======





    // ======= ======= ======= nextGameScreen ======= ======= =======
    Display.prototype.nextGameScreen = function(nextGame) {
        console.log("");
        console.log("nextGameScreen");
        console.log("== PREV game screen == " + game.currentScreen);

        // identify where we are in the game (prev screen/next screen/selected screen)
        // use current screen name to identify current screen index

        var prevItemNames, nextItemNames, nextScreenIndex;
        var REMprevItems = [];
        var ADDnextItems = [];

        // == game start initialize first screen ("splash")
        if ((game.currentScreen == null) && (nextGame == null)) {
            game.currentScreen = "splash";
            prevItemNames = [];
            nextItemNames = display.gameStateItems[game.currentScreen];
            nextScreenIndex = game.screenNamesArray.indexOf(game.currentScreen);

        // == get next screen (game play), new game screen, or new hand screen
        } else {
            prevItemNames = display.gameStateItems[game.currentScreen];
            if (nextGame == "newGame") {
                nextItemNames = display.gameStateItems["splash"];
                game.currentScreen = "splash";
                nextScreenIndex = game.screenNamesArray.indexOf(game.currentScreen);
            } else if (nextGame == "playAgain"){
                nextItemNames = display.gameStateItems["playGame"];
                game.currentScreen = "playGame";
                nextScreenIndex = game.screenNamesArray.indexOf(game.currentScreen);

            // increment screen index to get next screen object
            } else {
                nextScreenIndex = game.screenNamesArray.indexOf(game.currentScreen) + 1;
                if (nextScreenIndex == game.screenNamesArray.length) {
                    nextScreenIndex = game.screenNamesArray.indexOf("playGame");
                }
                nextGameScreenName = game.screenNamesArray[nextScreenIndex];
                nextItemNames = display.gameStateItems[nextGameScreenName];
                game.currentScreen = nextGameScreenName;
            }
        }

        // == display instructions (message) for current game state
        game.currentMessage = game.messageArray[nextScreenIndex];
        console.log("== NEXT game screen == " + game.currentScreen);

        // == identify items to add or remove (by comparison of NAME strings)
        var REMprevNames = $(prevItemNames).not(nextItemNames).get();
        var ADDnextNames = $(nextItemNames).not(prevItemNames).get();

        // == get screen item OBJECTS from lists of screen item NAMES
        if (prevItemNames) {
            for (var i = 0; i < prevItemNames.length; i++) {
                prevItemName = prevItemNames[i];
                var found = $.inArray(prevItemName, REMprevNames)
                if (found > -1) {
                    var game_scr = game.screenObjectScreen;
                    prevItem = game_scr[prevItemName];
                    REMprevItems.push(prevItem);
                }
            }
        }
        for (var i = 0; i < nextItemNames.length; i++) {
            nextItemName = nextItemNames[i];
            var found = $.inArray(nextItemName, ADDnextNames)
            if (found > -1) {
                var game_scr = game.screenObjectScreen;
                nextItem = game_scr[nextItemName];
                ADDnextItems.push(nextItem);
            }
        }

        // == send screen data to screen building functions
        this.addRemoveScreenItems(REMprevItems, ADDnextItems);
        this.updateMessage();
    }

    // ======= ======= ======= initSubscreen ======= ======= =======
    Display.prototype.initSubscreen = function(playerID) {
        console.log("");
        console.log("initSubscreen");

        // == player screen items include player index as suffix (e.g. "_1")
        // == makePlayerItems adds current player suffix to generic item names

        var nextSubscreenItems = [];
        currentPlayer = game.playerObjectsArray[playerID - 1];
        currentPlayerScreen = game.subscreenObjectsArray[playerID - 1];

        // == check for special case of dealer
        if (playerID == 4) {
            playerID = "D";
        }

        // == game start initialize first screen ("splash")
        if (currentPlayer.state == null) {
            currentPlayer.state = "inactive";
        }
        if (currentPlayer.name == "dealer") {
            subscreenItemNames = ["borderH","borderV","pName"];
        } else {
            subscreenItemNames = this.playerStateItems[currentPlayer.state];
        }

        for (var i = 0; i < subscreenItemNames.length; i++) {
            nextItemName = subscreenItemNames[i];
            nextItemObject = currentPlayerScreen[nextItemName];
            nextSubscreenItems.push(nextItemObject);
        }

        // == put items from current player state onto screen
        for (var j = 0; j < nextSubscreenItems.length; j++) {
            nextItem = nextSubscreenItems[j];
            nextType = nextItem.type;
            indexCell = display.modifyGridRegion(nextItem, playerID);
            if (nextType == "input") {
                newTextInput = "<input id='" + nextItem.name + "Input' class='" + nextItem.class + "' type='text' value=''>"
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", nextItem.name);
            }
            if ((nextType == "btn") || (nextType == "slider") || (nextType == "toggle")) {
                display.activateNextItem(nextItem, indexCell);
            }
        }
    }

    // ======= ======= ======= updateSubscreen ======= ======= =======
    Display.prototype.updateSubscreen = function(playerId, nextPlayerState) {
        console.log("");
        console.log("updateSubscreen");
        console.log("  playerId: " + playerId);

        // this manages changes as player state changes through betting, taking new cards,
        // holding (passing turn to next player) or waiting for final results from "doTheMath"
        var prevItemNames, nextItemNames, nextScreenIndex;
        var REMprevItems = [];
        var ADDnextItems = [];

        // dealer id string to number for indexing
        if (playerId == "D") {
            playerId = 4;
        }

        // == get previous and next player items lists
        var whichPlayer = game.playerObjectsArray[playerId - 1];
        var whichPlayerScreen = game.subscreenObjectsArray[playerId - 1];
        var prevPlayerState = whichPlayer.state;
        prevItemNames = this.playerStateItems[prevPlayerState];
        whichPlayer.state = nextPlayerState;
        nextItemNames = this.playerStateItems[nextPlayerState];
        console.log("== PREV playerState == " + prevPlayerState);
        console.log("== NEXT playerState == " + nextPlayerState);

        // == identify items to add or remove (by comparison of NAME strings)
        var REMprevNames = $(prevItemNames).not(nextItemNames).get();
        var ADDnextNames = $(nextItemNames).not(prevItemNames).get();

        // == update message for placing bets
        var playerStateIndex = game.subscreenNamesArray.indexOf(nextPlayerState);
        if (playerStateIndex == 3) {
            $("#betLabel").text("hit or hold");
            game.currentMessage = null;
            this.updateMessage(whichPlayer.name + "'s turn");
        } else if (playerStateIndex == 2) {
            $("#betLabel").text("your chips");
        } else {
            $("#betLabel").text("");
        }

        // == get screen item OBJECTS from lists of screen item NAMES
        if (prevItemNames) {
            for (var i = 0; i < prevItemNames.length; i++) {
                prevItemName = prevItemNames[i];
                var found = $.inArray(prevItemName, REMprevNames)
                if (found > -1) {
                    prevItem = whichPlayerScreen[prevItemName];
                    REMprevItems.push(prevItem);
                }
            }
        }
        for (var i = 0; i < nextItemNames.length; i++) {
            nextItemName = nextItemNames[i];
            var found = $.inArray(nextItemName, ADDnextNames)
            if (found > -1) {
                nextItem = whichPlayerScreen[nextItemName];
                ADDnextItems.push(nextItem);
            }
        }

        // == send screen data to screen building functions
        this.addRemoveScreenItems(REMprevItems, ADDnextItems, playerId);
    }

    // ======= ======= ======= addRemoveScreenItems ======= ======= =======
    Display.prototype.addRemoveScreenItems = function(removeItemsArray, addItemsArray, playerIndex) {
        console.log("addRemoveScreenItems");

        var nextItem, nextType, indexCell, newTextInput, indexCellId;
        var sliderLoc, sliderId, sliderString, sliderElement, toggleLoc, toggleId, toggleString, toggleElement;
        var locX, locY;

        // == remove prev items via unModifyGridRegion function
        if (removeItemsArray) {
            for (var j = 0; j < removeItemsArray.length; j++) {
                nextItem = removeItemsArray[j];
                nextType = nextItem.type;
                if ((nextType == "btn") || (nextType == "slider") || (nextType == "toggle")) {
                    display.deActivateNextItem(nextItem, indexCell);
                }
                display.unModifyGridRegion(nextItem);
            }
        }

        // == add new items via modifyGridRegion and append child elements if any
        for (var j = 0; j < addItemsArray.length; j++) {
            nextItem = addItemsArray[j];
            nextType = nextItem.type;

            // == modify item region and return indexCell element
            indexCell = display.modifyGridRegion(nextItem, playerIndex);

            // append input element
            if (nextType == "input") {
                newTextInput = "<input id='" + nextItem.name + "Input' class='" + nextItem.class + "' type='text' value=''>";
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", nextItem.name);
            }

            // == build, append and activate slider elements
            if (nextType == "slider") {

                // == get location of index grid cell
                indexCellId = nextItem.name + "_" + playerIndex;
                sliderLoc = $("#" + indexCellId).offset();
                locX =  sliderLoc.left + 10;
                locY =  sliderLoc.top + 10;

                // == make and append slider div
                sliderId = nextItem.name + "_slider" + "_" + playerIndex;
                sliderString = "<div id='" + sliderId + "' class='slider " + nextItem.class + "'>&nbsp;</div>";
                $("#" + indexCellId).append(sliderString);
                $("#" + sliderId).css("left", locX);
                $("#" + sliderId).css("top", locY);
                sliderElement = $("#" + sliderId);
                display.activateNextItem(nextItem, sliderElement);
            }

            // == build, append and activate toggle image elements
            if (nextType == "toggle") {
                console.log("-- TOGGLE --");

                // == get location of index grid cell
                indexCellId = nextItem.name + "_" + playerIndex;
                toggleLoc = $("#" + indexCellId).offset();
                locX =  toggleLoc.left - 8;
                locY =  toggleLoc.top + 8;

                // == make and append toggle divs
                toggleString = "";
                toggleId = nextItem.name + "_toggleO_" + playerIndex;
                toggleString += "<div id='" + toggleId + "' class='toggle out  " + nextItem.class + "'></div>";
                $("#" + indexCellId).append(toggleString);
                $("#" + toggleId).css("left", locX);
                $("#" + toggleId).css("top", locY);
                // $("#" + toggleId).css("background-image", "url(images/" + nextItem.image + "Out_n.png)");
                console.log("*** j: ", j);
                toggleElement = $("#" + toggleId);
                display.activateNextItem(nextItem, toggleElement);

                toggleString = "";
                toggleId = nextItem.name + "_toggleI_" + playerIndex;
                toggleString += "<div id='" + toggleId + "' class='toggle in " + nextItem.class + "'></div>";
                $("#" + indexCellId).append(toggleString);
                $("#" + toggleId).css("left", parseInt(locX + 34));
                $("#" + toggleId).css("top", locY);
                // $("#" + toggleId).css("background-image", "url(images/" + nextItem.image + "In_n.png)");
                toggleElement = $("#" + toggleId);
                display.activateNextItem(nextItem, toggleElement);

            }

            // == click listener added to image for image-based buttons
            if (nextType == "btn") {
                if (nextItem.image != null) {
                    indexCell = $("#" + nextItem.name + "_" + playerIndex)
                }

                // == add text to item if present
                if (nextItem.value) {
                    $(indexCell).text(nextItem.value);
                }
                display.activateNextItem(nextItem, indexCell);
            }
        }
    }

    // ======= ======= ======= updateMessage ======= ======= =======
    Display.prototype.updateMessage = function(nextMessage) {
        console.log("updateMessage");

        // three message paragraphs are available
        // current message is stored on game object (as array) for game state changes
        // nextMessage argument is used for player state message updates
        var msg1, msg2, msg3;
        if (nextMessage) {
            msg1 = "<p class='message'>" + nextMessage + "</p>";
        } else {
            if (game.currentMessage) {
                if (game.currentMessage[0]) {
                    msg1 = "<p class='message'>" + game.currentMessage[0] + "</p>";
                } else {
                    msg1 = "";
                }
            }
        }
        if (game.currentMessage) {
            if (game.currentMessage[1]) {
                msg2 = "<p class='message'>" + game.currentMessage[1] + "</p>";
            } else {
                msg2 = "";
            }
            if (game.currentMessage[2]) {
                msg3 = "<p class='message'>" + game.currentMessage[2] + "</p>";
            } else {
                msg3 = "";
            }
        } else {
            msg2 = "";
            msg3 = "";
        }

        // == display assembled message
        $("#message").html(msg1 + msg2 + msg3);
    }





    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======





    // ======= ======= ======= resetGridCells ======= ======= =======
    Display.prototype.resetGridCells = function() {
        console.log("resetGridCells");

        // iterates through all cells of table to remove assigned classes
        // and other attributes and reset initialized class/id conditions
        // each cell reset to generic "cell" class and "row-col" id

        // == get current cell conditions
        var tableRows = $("tr");
        for (var row = 0; row < 12; row++){
            var addCells = 0;
            nextRow = $(tableRows)[row];
            cellCount = $(nextRow).children().length;
            for (var col = 0; col < cellCount; col++) {
                nextCell = $(nextRow).children()[col];
                rowspans = $(nextCell).attr('rowSpan');
                colspans = $(nextCell).attr('colSpan');

                // == remove all spans and classes; set class to "cell"
                if (rowspans > 1) {
                    cleanUpCell(nextCell);
                }

                // == add cells to space left by col-spanned cell
                if (colspans > 1) {
                    cleanUpCell(nextCell);
                    for (var newCellCol = 1; newCellCol < colspans; newCellCol++) {
                        var newCell = document.createElement("td");
                        $(nextCell).after(newCell);
                        $(newCell).addClass("cell");
                        $(newCell).attr("id", row + "-" + (col + newCellCol));
                    }
                    col = col + (colspans - 1);
                } else {
                    cleanUpCell(nextCell);
                }
            }

            // == check cleaned-up row for missing cells (should be 18 total)
            var tableRowsTest = $("tr");
            nextRowTest = $(tableRowsTest)[row];
            cellCountTest = $(nextRowTest).children().length;

            // == count how many cells are missing
            if (cellCountTest < 18) {
                addCells = 18 - cellCountTest;
            }

            // == add new cells to make total of 18 per row
            if (addCells > 0) {
                indexCell = $(nextRowTest).children()[cellCountTest - 1];
                for (var i = 0; i < addCells; i++) {
                    var newCell = document.createElement("td");
                    $(indexCell).after(newCell);
                    $(newCell).addClass("cell");
                    $(newCell).attr("id", row + "-" + (cellCountTest + i));
                }
            }
        }

        // == remove children, classes, spans; add "cell" class and id
        function cleanUpCell(whichCell) {
            // console.log("cleanUpCell");
            $(whichCell).off("mouseenter");
            $(whichCell).off("mouseout");
            $(whichCell).empty();
            $(whichCell).removeClass();
            $(whichCell).removeAttr('colSpan');
            $(whichCell).removeAttr('rowSpan');
            $(whichCell).addClass("cell");
            $(whichCell).attr("id", row + "-" + col);
        }
    }

    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, playerIndex, offsetR, offsetC) {
        console.log("modifyGridRegion: " + whichItem.name);

        // == distinguish game items from player items (player items get player id suffix)
        if (playerIndex) {
            playerSuffix = "_" + playerIndex;
        } else {
            playerSuffix = "";
        }

        // offsets are used to modify placement of items under special conditions
        // example: column offsets are used to place cards (based on number of cards in player hand)
        // row offsets are not currently used in the game
        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;

        // == iterate through rows of current region, then cells of current row
        for (var row = 0; row < whichItem.iH; row++) {
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;

            // == remove cells from merge area (check row/colspans in each row)
            if (regionType == "merge") {
                for (var col = 0; col < whichItem.iW; col++) {
                    if (((row == 0) && (col == 1))) {
                        totalColOffset = temp_iC + col;
                    }
                    if (row > 0) {
                        totalColOffset = temp_iC;
                        // toggleRowspans stores rowspan state for affected cells
                        // it is used later to identify active rowspans from other regions to left
                        // of new region currently being placed
                        display.toggleRowspans(whichItem, offsetR, offsetC, "on")
                    }

                    // remove all but index cell in merge area
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        $(indexCell).attr("colSpan", whichItem.iW);
                        $(indexCell).attr("rowSpan", whichItem.iH);
                        $(indexCell).addClass(whichItem.class);
                        if (whichItem.type != "input") {
                            $(indexCell).attr("id", whichItem.name + playerSuffix);
                        }
                        if (whichItem.type == "label") {
                            $(indexCell).text(whichItem.value);
                        }
                    } else {
                        nextCell = $(nextRowObject).children()[totalColOffset];
                        $(nextCell).remove();
                    }
                }

            // == modify region cells via item class parameters
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[temp_iC + col];
                    if ((whichItem.type == "slider") || (whichItem.type == "toggle")) {
                        if ((row == 0) && (col == 0)) {
                            indexCell = $(nextRowObject).children()[temp_iC];
                            $(indexCell).attr("id", whichItem.name + playerSuffix);
                        }

                    // == modify class of cells in region via item class parameters
                    } else {
                        $(nextCell).removeClass();
                        $(nextCell).addClass(whichItem.class);

                        // == set id of indexCell (row0/col0 of region)
                        if ((row == 0) && (col == 0)) {
                            indexCell = $(nextRowObject).children()[temp_iC];

                            // == append image to index if part of item
                            if (whichItem.image != null) {
                                newImage = $(new Image()).attr('src', "images/" + whichItem.image).appendTo($(indexCell));
                                $(newImage).attr("id", whichItem.name + playerSuffix);
                                $(indexCell).attr("id", (nextRow) + "-" + (nextCol + col));
                            } else {
                                $(indexCell).attr("id", whichItem.name + playerSuffix);
                            }

                        // == set id of non-indexCells of region
                        } else {
                            $(nextCell).attr("id", (nextRow) + "-" + (nextCol + col));
                        }
                    }
                }
            }
        }
        return indexCell;
    }

    // ======= ======= ======= unModifyGridRegion ======= ======= =======
    Display.prototype.unModifyGridRegion = function(whichItem, offsetR, offsetC) {
        console.log("unModifyGridRegion: " + whichItem.name);

        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;
        var gridEdgeFlag, nextRow, nextCol, nextRowObject, colspans, rowspans, temp_iC;

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            gridEdgeFlag = false;
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;

            // because merged regions result from a single cell expanded across rows/columns,
            // new cells need to be created/appended to fill spaces left when merged region is removed
            if (regionType == "merge") {
                for (var col = 0; col < (whichItem.iW); col++) {
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        $(indexCell).remove();
                    }

                    if (temp_iC < 1) {
                        indexRowCell = $(nextRowObject).children()[0];
                        colId = 0;
                        gridEdgeFlag = true;
                    } else {
                        indexRowCell = $(nextRowObject).children()[temp_iC - 1];
                        colId = nextCol + (whichItem.iW - 1 - col);
                    }

                    var newCell = document.createElement("td");
                    if ((gridEdgeFlag == true) && (offsetC == 0)) {
                        $(indexRowCell).before(newCell);
                    } else {
                        $(indexRowCell).after(newCell);
                    }
                    $(newCell).addClass("cell");
                    $(newCell).attr("id", (nextRow) + "-" + colId);

                    if (row > 0) {
                        display.toggleRowspans(whichItem, offsetR, offsetC, "off")
                    }
                }

            // remove event listeners from active items (buttons/sliders)
            // remove child objects (images/slider divs) from region being removed
            // restore generic id and class values for "cleaned-up" cells
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[temp_iC + col];
                    if ((whichItem.type == "slider") || (whichItem.type == "toggle")) {
                        $(nextCell).empty();
                        display.deActivateNextItem(whichItem, nextCell);
                    } else {
                        if (whichItem.type == "btn") {
                            $(nextCell).empty();
                            display.deActivateNextItem(whichItem, nextCell);
                        }
                        $(nextCell).removeClass();
                        $(nextCell).addClass("cell");
                        colId = nextCol + col;
                        $(nextCell).attr("id", (nextRow) + "-" + colId);
                    }
                }
            }
        }
    }

    // ======= ======= ======= activateNextItem ======= ======= =======
    Display.prototype.activateNextItem = function(whichItem, indexCell) {
        console.log("activateNextItem");

        // assign behaviors to active items (buttons/sliders)
        // all items get mouseover/mouseout behaviors for tooltips

        var self = this;
        var indexElement, tooltip;
        var whichAction = whichItem.callback;

        // ======= tooltips =======
        $(indexCell).off("mouseenter").on("mouseenter", function(event){
            // console.log("-- mouseenter");
            console.log("  event.target.id: " + event.target.id);
            indexElement = event.target;
            tooltip = display.getTooltip(indexElement, "over");
        });
        $(indexCell).off("mouseout").on("mouseout", function(event){
            // console.log("-- mouseout");
            indexElement = event.target;
            tooltip = display.getTooltip(indexElement, "out");
        });

        // ======= general =======
        switch(whichAction) {
            case "nextGameScreen":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- nextGameScreen -- -- -- ");
                    self.nextGameScreen();
                });
                break;
            case "saveNewPlayer":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- saveNewPlayer -- -- -- ");
                    game.saveNewPlayer();
                });
                break;
            case "startGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- startGame -- -- -- ");
                    game.startGame();
                });
                break;
            case "mngBets":
                var indexClass = $(indexCell).attr('class');
                var checkSlider = indexClass.indexOf("slider");
                var checkToggle = indexClass.indexOf("toggle");
                if (checkToggle > -1) {
                    $(indexCell).on("mouseenter", function(event){
                        // console.log("-- mouseenter");
                        console.log("  event.target.id: " + event.target.id);
                        indexElement = event.target;
                        // display.setBetTips(indexElement, "over");
                        display.mngBets(indexElement);
                    });
                }
                if (checkSlider > -1) {
                    $(indexCell).off("mousedown").on("mousedown", function(){
                        console.log("-- -- -- mngBets dn -- -- -- ");
                        var indexClass = $(indexCell).attr('class');
                        var checkSlider = indexClass.indexOf("slider");
                        display.moveSlider(event);
                    });
                }
                break;
            case "playGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- playGame -- -- -- ");
                    game.playGame();
                });
                break;
            case "hitMe":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- hitMe -- -- -- ");
                    game.hitMe();
                });
                break;
            case "holdMe":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- holdMe -- -- -- ");
                    game.holdMe();
                });
                break;
            case "playAgain":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- -- -- playAgain -- -- -- -- -- ");
                    game.playAgain();
                });
                break;
            case "newGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- -- -- newGame -- -- -- -- -- ");
                    newGame();
                });
                break;
        }
        $("#tooltips").html("");
        $("#tooltips").css("visibility", "hidden");
    }

    // ======= ======= ======= deActivateNextItem ======= ======= =======
    Display.prototype.deActivateNextItem = function(whichItem, indexCell) {
        console.log("deActivateNextItem: " + whichItem.name);

        $(indexCell).off("mouseenter");
        $(indexCell).off("mouseout");
        $(indexCell).off("click");
    }

    // ======= ======= ======= checkRowSpans ======= ======= =======
    Display.prototype.checkRowSpans = function(whichRow, whichCol) {
        // console.log("checkRowSpans");

        // rowSpansArray contains record objects for each cell address (row/col)
        // example: a cell in row 1 with a rowspan of "3" will affect cells in rows 2 and 3
        // rspan value in corresponding data object in rowSpansArray will be set to TRUE
        // FALSE = no rowspans affecting cell; TRUE = span from row(s) above is affecting cell

        var rowspans = 0;
        var indexRow = 0;
        for (var col = 0; col < 18; col++) {
            if (col < whichCol) {
                rowspanSpanObject = this.rowSpansArray[whichRow][col];
                if (rowspanSpanObject.rspan == true) {
                    rowspans++;
                }
            }
        }
        return rowspans;
    }

    // ======= ======= ======= checkColumnSpans ======= ======= =======
    Display.prototype.checkColumnSpans = function(whichRowObject, whichRow, whichCol) {
        // console.log("checkColumnSpans");

        // colspan attributes are set on index cells
        // cells to the left of current region index cell are checked for colspans > 1

        var colspans = 0;
        var indexCol = 0;
        var rowspans = this.checkRowSpans(whichRow, whichCol);
        for (var col = 0; col < $(whichRowObject).children().length; col++) {
            nextColumnObject = $(whichRowObject).children()[col];
            nextColspan = $(nextColumnObject).attr('colSpan');
            nextColId = $(nextColumnObject).attr('id');
            if ((nextColspan > 1) && (col < (whichCol - colspans - rowspans))) {
                colspans += nextColspan - 1;
            }
        }
        return colspans;
    }

    // ======= ======= ======= toggleRowspans ======= ======= =======
    Display.prototype.toggleRowspans = function(whichItem, offsetR, offsetC, onOff) {
        // console.log("toggleRowspans");

        // record cells affected by rowspans in rowSpansArray
        // default value (FALSE) is set to TRUE if rowspan affects row/col cell location

        if (whichItem.iH > 1) {
            for (var row = 0; row < whichItem.iH; row++) {
                for (var col = 0; col < whichItem.iW; col++) {
                    // rowspans not recorded for first row of multi-row area
                    if (row != 0) {
                        tableRow = whichItem.iR + offsetR + row;
                        tableCol = whichItem.iC + offsetC + col;
                        if (onOff == "on") {
                            this.rowSpansArray[tableRow][tableCol].rspan = true;
                        } else {
                            this.rowSpansArray[tableRow][tableCol].rspan = false;
                        }
                    }
                }
            }
        }
    }

    // ======= ======= ======= reportRowspans ======= ======= =======
    Display.prototype.reportRowspans = function(whichRow) {
        console.log("reportRowspans ------- ------- row: " + whichRow);

        // == display rowspan status for targeted row
        targetRow = 7;
        if (whichRow == targetRow) {
            for (var row = 0; row < this.tableRowspansArray.length; row++) {
                nextRow = this.tableRowspansArray[row];
                if (row == whichRow) {
                    console.log("   nextRow.length: " + nextRow.length);
                    for (var col = 0; col < nextRow.length; col++) {
                        nextCol = nextRow[col];
                        if (nextCol.rspan == true) {
                            console.log("  rowspan TRUE: " + row + "/" +  col);
                        } else {
                            console.log("  rowspan FALSE: " + row + "/" +  col);
                        }
                    }
                }
            }
        }
    }

    // ======= ======= ======= clearPlayerScreenData ======= ======= =======
    Display.prototype.clearPlayerScreenData = function(whichPlayerScreen, whichPlayer) {
        console.log("clearPlayerScreenData");

        if (whichPlayer.id < 4) {
            $("#pName_" + whichPlayer.id).text("");
            // $("#pScore_" + whichPlayer.id).text("");
            $("#pBank_" + whichPlayer.id).text("");
            $("#pBank1s_" + whichPlayer.id).text("");
            $("#pBank5s_" + whichPlayer.id).text("");
            $("#pBank10s_" + whichPlayer.id).text("");
            $("#pBet_" + whichPlayer.id).text("");
            $("#pBet1s_" + whichPlayer.id).text("");
            $("#pBet5s_" + whichPlayer.id).text("");
            $("#pBet10s_" + whichPlayer.id).text("");
        } else {
            whichPlayer.id = "D";
            $("#pName_" + whichPlayer.id).text("");
            // $("#pScore_" + whichPlayer.id).text("");
        }
    }

    // ======= ======= ======= updatePlayerScreenData ======= ======= =======
    Display.prototype.updatePlayerScreenData = function(whichPlayerScreen, whichPlayer, hand) {
        // console.log("updatePlayerScreenData");

        if (whichPlayer.id < 4) {
            var totalBank = whichPlayer.onesBank + whichPlayer.fivesBank + whichPlayer.tensBank;
            var totalBet = whichPlayer.onesBet + whichPlayer.fivesBet + whichPlayer.tensBet;
            if (hand) {
                // $("#pScore_" + whichPlayer.id).text(whichPlayer.score);
            }
            $("#pBank_" + whichPlayer.id).text("$" + totalBank);
            $("#pBank1s_" + whichPlayer.id).text("$" + whichPlayer.onesBank);
            $("#pBank5s_" + whichPlayer.id).text("$" + whichPlayer.fivesBank);
            $("#pBank10s_" + whichPlayer.id).text("$" + whichPlayer.tensBank);
            $("#pBet_" + whichPlayer.id).text("$" + totalBet);
            $("#pBet1s_" + whichPlayer.id).text("$" + whichPlayer.onesBet);
            $("#pBet5s_" + whichPlayer.id).text("$" + whichPlayer.fivesBet);
            $("#pBet10s_" + whichPlayer.id).text("$" + whichPlayer.tensBet);
            // $("#pBetOnes_" + whichPlayer.id).text("$" + whichPlayer.onesBank);
        } else {
            whichPlayer.id = "D";
            if (hand) {
                // $("#pScore_" + whichPlayer.id).text(whichPlayer.score);
            }
        }
    }

    // ======= ======= ======= setBetTips ======= ======= =======
    Display.prototype.setBetTips = function(whichElement, overOut) {
        console.log("setBetTips");

    }

    // ======= ======= ======= getTooltip ======= ======= =======
    Display.prototype.getTooltip = function(whichElement, overOut) {
        console.log("getTooltip");

        var playerCheck = whichElement.id.indexOf("_") > -1;
        var toggleCheck = whichElement.id.indexOf("toggle") > -1;
        var sliderCheck = whichElement.id.indexOf("slider") > -1;
        var classCheck = whichElement.className;
        var chipsCheck = classCheck.split(" ")[2];
        var tooltipLoc = $("#" + whichElement.id).offset();
        var tooltipX = tooltipLoc.left + 50;
        var tooltipY = tooltipLoc.top - 50;

        if (playerCheck) {
            var playerId = whichElement.id.charAt(whichElement.id.length - 1);
            var itemName = whichElement.id.split("_")[0];
            var currentSubscreen = game.subscreenObjectsArray[playerId - 1];
            var currentItem = currentSubscreen[itemName];
            if ((sliderCheck) || (toggleCheck)) {
                switch(chipsCheck) {
                    case "ones":
                        var chipElement = $("#pBank1s_" + playerId);
                        break;
                    case "fives":
                        var chipElement = $("#pBank5s_" + playerId);
                        break;
                    case "tens":
                        var chipElement = $("#pBank10s_" + playerId);
                        break;
                }
                if (overOut == "over") {
                    $(chipElement).addClass("betting");
                } else {
                    $(chipElement).removeClass("betting");
                }
            }
        } else {
            var game_scr = game.screenObjectScreen;
            var currentItem = game_scr[whichElement.id];
        }

        if (overOut == "over") {
            if (toggleCheck) {
                var toggleCheckI = whichElement.id.indexOf("toggleI") > -1;
                if (toggleCheckI) {
                    var nextTooltip = "add " + currentItem.tooltipOver + " chips";
                } else {
                    var nextTooltip = "return " + currentItem.tooltipOver + " chips";
                }
                // $("#betLabel").css("z-index", 9);
                $("#betLabel").text(nextTooltip);
            } else {
                var nextTooltip = currentItem.tooltipOver;
                $("#tooltips").css("visibility", "visible");
                $("#tooltips").css("z-index", 9);
                $("#tooltips").css("left", tooltipX);
                $("#tooltips").css("top", tooltipY);
                $("#tooltips").text(nextTooltip);
            }
        } else {
            var nextTooltip = currentItem.tooltipOut;
            $("#tooltips").css("visibility", "hidden");
            $("#betLabel").text("");
        }
    }

    // ======= ======= ======= initRowSpans ======= ======= =======
    Display.prototype.initRowSpans = function() {
        console.log("initRowSpans");

        var nextRow, nextCol, tableCol, cellRC;
        var rowSpansArray = [];
        var tableRows = $(".row");
        for (var row = 0; row < tableRows.length; row++) {
            nextRow = tableRows[row];
            nextRowArray = [];
            tableCols = $(nextRow).children(".cell");
            for (var col = 0; col < tableCols.length; col++) {
                nextCol = tableCols[col];
                $(nextCol).attr("id", row + "-" + col);
                cellRC = { R:row, C:col, rspan:false };
                nextRowArray.push(cellRC);
            }
            rowSpansArray.push(nextRowArray);
        }
        this.rowSpansArray = rowSpansArray;
    }

    // ======= ======= ======= updatePlayerBet ======= ======= =======
    Display.prototype.updatePlayerBet = function(bankEl, betEl) {
        console.log("updatePlayerBet");
        $(bankEl).removeClass();
        $(betEl).removeClass();
        $(bankEl).addClass("betting");
        $(betEl).addClass("betting");
    }





    // ======= ======= ======= ======= ======= ACTORS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ACTORS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ACTORS ======= ======= ======= ======= =======




    // ======= ======= ======= mngBets ======= ======= =======
    Display.prototype.mngBets = function(whichToggle) {
	    console.log("-- mngBets");

        var whichBet, whichBank, increment;

        // ======= selected toggle object ======= ======= ======= ======= =======
	    var toggle = {
	        zLevel: 3,
            self: this,

	        // ======= MOUSE_OVER ======= MOUSE_OVER ======= MOUSE_OVER ======= MOUSE_OVER =======
			initToggle: function(event) {
                console.log("initToggle");

                toggle.toggle_id = whichToggle.id;
                toggle.toggle_element = whichToggle;
                toggle.inOut = whichToggle.className.split(/\s+/)[1];
                toggle.player_id = whichToggle.id.charAt(whichToggle.id.length - 1);
                toggle.player_chips = whichToggle.className.split(/\s+/)[2];
                toggle.player_object = game.playerObjectsArray[toggle.player_id - 1];
                toggle.player_screen = game.subscreenObjectsArray[toggle.player_id - 1];

                console.log("  toggle.inOut: ", toggle.inOut);
                console.log("  toggle.player_chips: ", toggle.player_chips);
                switch(toggle.player_chips) {
                    case "ones":
                        whichBet = "onesBet";
                        whichBank = "onesBank";
                        increment = 1;
                        break;
                    case "fives":
                        whichBet = "fivesBet";
                        whichBank = "fivesBank";
                        increment = 5;
                        break;
                    case "tens":
                        whichBet = "tensBet";
                        whichBank = "tensBank";
                        increment = 10;
                        break;
                }

                toggle.bank_element =  $("#pBank" + increment + "s_" + toggle.player_id);
                toggle.bet_element =  $("#pBet" + increment + "s_" + toggle.player_id);
                toggle.bank_classes = $(toggle.bank_element).attr('class');
                toggle.bet_classes = $(toggle.bet_element).attr('class');

                $("#" + whichToggle.id).off("mousedown").on("mousedown", function(){
                    console.log("-- -- -- mousedown -- -- -- ");
                    toggle.clickToggle(event);
                });
            },

	        // ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN =======
			clickToggle: function (newEvent) {
                console.log("clickToggle");

                $(window.document).off("mouseup").on("mouseup", toggle.dropToggle);
                display.updateMessage(toggle.player_object.name + " is adding " + toggle.player_chips + " to kitty");

                if (toggle.inOut == "in") {
                    game.placeBet(toggle.player_object, whichBet, whichBank, -increment);
                } else {
                    game.placeBet(toggle.player_object, whichBet, whichBank, increment);
                }
                display.updatePlayerScreenData(toggle.player_screen, toggle.player_object, false);
                toggle.bank_element.removeClass();
                toggle.bet_element.removeClass();
                toggle.bank_element.addClass("betting");
                toggle.bet_element.addClass("betting");
            },

            // ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP =======
            dropToggle: function(newEvent) {
                console.log("dropToggle");
                display.updateMessage(" ");
                toggle.bank_element.addClass(toggle.bank_classes);
                toggle.bet_element.addClass(toggle.bet_classes);
                toggle.bank_element.removeClass("betting");
                toggle.bet_element.removeClass("betting");
                $(window.document).off("mouseup", toggle.dropToggle);
            }
        }
        toggle.initToggle(event);
 		return toggle;
    }

    // ======= ======= ======= moveSlider ======= ======= =======
    Display.prototype.moveSlider = function(event) {
	    console.log("-- moveSlider");

	    var dX, dY;
	    var maxY = 100;
	    var minY = 100;
	    var updateChips;
	    var triggerFlag = true;
		var whichSlider = event.target;
        var player_chips = whichSlider.className.split(/\s+/)[1];
        switch(player_chips) {
            case "ones":
                increment = 1;
                break;
            case "fives":
                increment = 5;
                break;
            case "tens":
                increment = 10;
                break;
        }
        var player_id = whichSlider.id.charAt(whichSlider.id.length-1);
        var player_object = game.playerObjectsArray[player_id - 1];
        var player_screen = game.subscreenObjectsArray[player_id - 1];
        var bank_element =  $("#pBank" + increment + "s_" + player_id);
        var bet_element =  $("#pBet" + increment + "s_" + player_id);
        var bank_classes = $(bank_element).attr('class');
        var bet_classes = $(bet_element).attr('class');

        var updateChipsTimer;

        switch(slider.player_chips) {
            case "ones":
                whichBet = "onesBet";
                whichBank = "onesBank";
                increment = 1;
                break;
            case "fives":
                whichBet = "fivesBet";
                whichBank = "fivesBank";
                increment = 5;
                break;
            case "tens":
                whichBet = "tensBet";
                whichBank = "tensBank";
                increment = 10;
                break;
        }

	    // ======= selected slider object ======= ======= ======= ======= =======
	    var slider = {
	        slider_id: whichSlider.id,
	        slider_element: whichSlider,
            player_id: player_id,
            player_chips: player_chips,
            player_object: player_object,
            player_screen: player_screen,
            bank_element: bank_element,
            bet_element: bet_element,
            bank_classes: bank_classes,
            bet_classes: bet_classes,
	        start_mouseX: 0,
	        start_elementX: 0,
	        drag_elementX: 0,
	        zLevel: 3,
            self: this,

	        // ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN =======
			initSlider: function (newEvent) {
                // console.log("initSlider");

			    event.preventDefault();
		        var evt = newEvent || window.event;
	            this.start_mouseX = newEvent.clientX;
	            this.start_elementX = this.slider_element.offsetLeft;

		        removeEventSimple(window.document, 'mousedown', display.moveSlider);
	            addEventSimple(window.document, 'mousemove', slider.dragSlider);
	            addEventSimple(window.document, 'mouseup', slider.dropSlider);
	        },

	        // ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE =======
	        dragSlider: function (newEvent) {
	            // console.log("dragSlider");

		        var evt = newEvent || window.event;
	            dX = parseInt(evt.clientX) - parseInt(slider.start_mouseX);
	            if (dX < -15) {
	            	dX = -15;
	            }
	            if (dX > 15) {
	            	dX = 15;
	            }
	            slider.updateSlider(dX);
	            if (triggerFlag == true) {
		            slider.updateChips(dX);
		            triggerFlag = false;
	            }
	        },
	        updateSlider: function (dX) {
	            // console.log("updateSlider");
	            slider.slider_element.style.left = slider.start_elementX + dX + "px";
	            slider.drag_elementX = slider.start_elementX + dX;
	        },
	        updateChips: function (dX) {
	            // console.log("updateChips");
                switch(slider.player_chips) {
                    case "ones":
                        whichBet = "onesBet";
                        whichBank = "onesBank";
                        increment = 1;
                        break;
                    case "fives":
                        whichBet = "fivesBet";
                        whichBank = "fivesBank";
                        increment = 5;
                        break;
                    case "tens":
                        whichBet = "tensBet";
                        whichBank = "tensBank";
                        increment = 10;
                        break;
                }
            	if (dX > 0) {
                    display.updateMessage(slider.player_object.name + " is adding " + slider.player_chips + " to kitty");
            		updateChipsTimer = setInterval(function() {
                        game.placeBet(player_object, whichBet, whichBank, -increment);
                        display.updatePlayerScreenData(player_screen, player_object, false);
                        slider.bank_element.removeClass();
                        slider.bet_element.removeClass();
                        slider.bank_element.addClass("betting");
                        slider.bet_element.addClass("betting");
            		}, 300);
            	} else {
                    display.updateMessage(slider.player_object.name + " is removing " + slider.player_chips + " from kitty");
            		updateChipsTimer = setInterval(function() {
                        game.placeBet(player_object, whichBet, whichBank, increment);
                        display.updatePlayerScreenData(player_screen, player_object, false);
                        slider.bank_element.removeClass();
                        slider.bet_element.removeClass();
                        slider.bank_element.addClass("betting");
                        slider.bet_element.addClass("betting");
	            	}, 300);
	            }
	        },

	        // ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP =======
	        dropSlider: function(newEvent) {
	            // console.log("dropSlider");
                display.updateMessage(" ");
	            clearInterval(updateChipsTimer);
                slider.bank_element.addClass(slider.bank_classes);
                slider.bet_element.addClass(slider.bet_classes);
                slider.bank_element.removeClass("betting");
                slider.bet_element.removeClass("betting");
	            slider.slider_element.style.left = slider.start_elementX + "px";
		        removeEventSimple(window.document, 'mouseup', slider.dropSlider);
		        removeEventSimple(window.document, 'mousemove', slider.dragSlider);
	        }
 		}

        // ======= events ======= ======= ======= ======= ======= ======= =======
    	function addEventSimple(obj,evt,fn) {
    	    // console.log('addEventSimple');
    	    if (obj.addEventListener)
    	        obj.addEventListener(evt,fn,false);
    	    else if (obj.attachEvent)
    	        obj.attachEvent('on'+evt,fn);
    	}

    	function removeEventSimple(obj,evt,fn) {
    	    // console.log('removeEventSimple');
    	    if (obj.removeEventListener)
    	        obj.removeEventListener(evt,fn,false);
    	    else if (obj.detachEvent)
    	        obj.detachEvent('on'+evt,fn);
    	}

		slider.initSlider(event);
 		return slider;
	}





    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======




    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Game.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        // player objects are pre-initialized
        // new players are added as name strings to playerNamesArray on game object

        var playerName, playerCount, playerState, newPlayer, playerNameCell;

        playerName = $('#playerNameInput').val();
        if (playerName != "") {
            playerCount = this.playerNamesArray.length;
            if (playerCount == 0) {

                // == activates play game button if all players now entered
                display.nextGameScreen();
            }
            if (playerCount < 3) {

                // == get pre-made player object and set player name on it
                newPlayer = this.playerObjectsArray[playerCount];
                newPlayer.name = playerName;

                // == player names array tracks actual players in current game
                this.playerNamesArray.push(newPlayer.name);
                playerCount = this.playerNamesArray.length;
                display.initSubscreen(playerCount);
                playerNameCell = "#pName_" + newPlayer.id;
                $(playerNameCell).text(newPlayer.name);
            }
            if (playerCount == 3) {

                // == max of 3 players; advance to game start
                $("#message").text("Max of 3 players.  Start game!");
                game.startGame();
            }
            $("#playerNameInput").val("");
        } else {
            $("#message").text("Need a name!");
        }
    }

    // ======= ======= ======= startGame ======= ======= =======
    Game.prototype.startGame = function() {
        console.log("startGame");

        // users have added all player names (or max of 3 names)
        // dealer is created as 4th "player"
        // game screen and player subscreens are advanced to "placeBets" state

        var nextPlayer, nextPlayerScreen;
        display.initSubscreen(4);   // create dealer screen elements
        playerNameCell = "#pName_D";
        $(playerNameCell).text("dealer");
        display.nextGameScreen();
        for (var i = 0; i < this.playerNamesArray.length; i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subscreenObjectsArray[i];
            display.updateSubscreen(nextPlayer.id, "placeBets");
        }
        this.currentPlayer = game.playerObjectsArray[0];
        game.dealCards();
    }

    // ======= ======= ======= dealCards ======= ======= =======
    Game.prototype.dealCards = function(indexCell, whichAction) {
        console.log("");
        console.log("dealCards");

        var winnersArray = [];
        var dealerScreen = this.subscreenObjectsArray[3];
        var nextPlayer, nextSuit, nextValue, nextPoints, cardPointsArray, nextCard, nextPoints, dealer;

        // ======= initialize deck
        var suitArray = ['C','D','H','S'];
        var valueArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var pointsArray = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var tableString, nextValue, nextPoints, cardPoints, nextCard, nextPlayer;

        // ======= store assembled cards and values in matched arrays (deckArray/deckPointsArray)
        for (var i = 0; i < suitArray.length; i++) {
            nextSuit = suitArray[i];
            for (var j = 0; j < valueArray.length; j++) {
                nextValue = valueArray[j];
                nextPoints = pointsArray[j];
                this.deckArray.push(nextValue + nextSuit);
                this.deckPointsArray.push(nextPoints);
            }
        }

        // ======= clear previous player hands
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayer.hand = [];
        }

        // ======= deal cards to each player and dealer
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subscreenObjectsArray[i];

            // ======= getNextCard
            for (var j = 0; j < 2; j++) {
                cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
                nextCard = cardPointsArray[0];
                nextPoints = cardPointsArray[1];
                nextPlayer.hand.push(nextCard);
                nextPlayer.score = nextPlayer.score + nextPoints;   // calculate player score
                this.displayNextCard(nextPlayer, nextPlayerScreen);
            }

            // ======= if Ace card and > 21 (2 aces)
            if (nextPlayer.score > 21) {
                console.log('  2 aces: ' + nextPlayer.score);
                nextPlayer.aceFlag = true;
                nextPlayer.score = nextPlayer.score - 10;
            }

            // ======= instant winner
            if (nextPlayer.score == 21) {
                winnersArray.push(nextPlayer);
            }

        }

        // ======= deal to dealer
        dealer = this.playerObjectsArray[3];
        dealer.hand = []
        for (var j = 0; j < 2; j++) {
            cardPointsArray = game.getNextCard();			// get card from deck; shrink deck
            nextCard = cardPointsArray[0];
            nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            dealer.score = dealer.score + nextPoints;       // calculate player score
            this.displayNextCard(dealer, dealerScreen);
        }
        this.flipCards();
    }

    // ======= ======= ======= getNextCard ======= ======= =======
    Game.prototype.getNextCard = function() {
        // console.log("getNextCard");
		var cardIndex = parseInt(Math.random() * this.deckArray.length);
		var nextCard = this.deckArray[cardIndex];
		var nextPoints = this.deckPointsArray[cardIndex];
		this.deckArray.splice(cardIndex, 1);
		this.deckPointsArray.splice(cardIndex, 1);
		return [nextCard, nextPoints];
	}

    // ======= ======= ======= displayNextCard ======= ======= =======
    Game.prototype.displayNextCard = function(whichPlayer, whichSubscreen) {
        // console.log("displayNextCard");

        var whichMerge, cardDivString;
        var playerIndex = whichPlayer.id;

        // == get player card object for positioning
        whichCardObject = whichSubscreen.pCards;
        whichClass = whichCardObject.class;
        var whichName = whichCardObject.name;
        var cardCount = whichPlayer.hand.length;
        var cardValue = whichPlayer.hand[cardCount - 1];

        // get suit and corresponding image (C, D, H, S)
        var whichSuit = cardValue.substr(cardValue.length - 1);
        var whichValue = cardValue.substring(0, cardValue.length - 1);
        switch(whichSuit) {
            case "C":
                imageString = "<img src='images/clubs.png' alt='clubs'>";
                break;
            case "D":
                imageString = "<img src='images/diamonds.png' alt='diamonds'>";
                break;
            case "H":
                imageString = "<img src='images/hearts.png' alt='hearts'>";
                break;
            case "S":
                imageString = "<img src='images/spades.png' alt='spades'>";
                break;
        }

        // ======= offset determines screen location fo next card (player cards to left/dealer to right)
        if (whichPlayer.name == "dealer") {
            offsetC = cardCount - 1;
        } else {
            offsetC = -(cardCount - 1);
        }
        offsetR = 0;

        // ======= index cell defines location for appended card html
        indexCell = display.modifyGridRegion(whichCardObject, playerIndex, offsetR, offsetC)
        $(indexCell).removeClass();

        // ======= card html with text, image, flip classes
        // cardDivString = "<div class='flip-container'>";
        // cardDivString += "<div class='cardFlip' id='" + cardValue + "'>";
        // cardDivString += "<div class='front " + whichClass + "'><p class='cardText'>&nbsp;</p></div>";
        // cardDivString += "<div class='back " + whichClass + "'>" + imageString + "<p class='cardText'>" + whichValue + "</p></div>";
        // cardDivString += "</div></div>";

        cardDivString = "<div class='flip-container'>";
        cardDivString += "<div class='card' id='" + cardValue + "'>";
        cardDivString += "<div class='front " + whichClass + "'><p class='cardText'>&nbsp;</p></div>";
        cardDivString += "<div class='back " + whichClass + "'>" + imageString + "<p class='cardText'>" + whichValue + "</p></div>";
        cardDivString += "</div></div>";

        $(indexCell).append(cardDivString);

    }

    // ======= ======= ======= flipCards ======= ======= =======
    Game.prototype.flipCards = function() {
        console.log("flipCards");

        // all cards for players/dealer flipped in sequence on timer for visual clarity

        self = this;
        interval = 400;
        cardIndex = -1;
        cardCount = 0;
        playerIndex = 0;
        nextPlayer = this.playerObjectsArray[0];

        flipCards = setInterval(function() {
            cardCount++;
            // backup condition
            if (cardCount > 20) {
                stopFlips();
            }
            // longer interval signals last card has been dealt
            if (interval > 400) {
                stopFlips();
            }
            cardIndex++;
            if (cardIndex > nextPlayer.hand.length - 1) {
                if (nextPlayer.name == "dealer") {
                    interval = 1000;
                } else {
                    playerIndex++;
                    if (playerIndex > self.playerNamesArray.length - 1) {
                        nextPlayer = self.playerObjectsArray[3];
                    } else {
                        nextPlayer = self.playerObjectsArray[playerIndex];
                    }
                }
                cardIndex = 0;
            }
            nextCard = nextPlayer.hand[cardIndex];
            $("#" + nextCard).addClass('flipped');
        }, interval);

        // ======= stops flipping actions and updates player subscreens for betting functionality
        function stopFlips() {
            clearInterval(flipCards);
            for (var i = 0; i < self.playerNamesArray.length; i++) {
                nextPlayer = self.playerObjectsArray[i];
                nextPlayerScreen = self.subscreenObjectsArray[i];
                display.updatePlayerScreenData(nextPlayerScreen, nextPlayer, true);
            }
            dealerObject = self.playerObjectsArray[3];
            dealerScreen = self.subscreenObjectsArray[3];
            display.updatePlayerScreenData(dealerScreen, dealerObject, true);
        }
    }

    // ======= ======= ======= placeBet ======= ======= =======
    Game.prototype.placeBet = function(whichPlayer, whichBet, whichBank, increment) {
        console.log("placeBet");

        // subtracts bet money (chips) from player "bank" on player object
        // adds bet money (chips) to player bet on player object

        var textValue;

        switch(whichBet) {
            case "onesBet":
                textValue = "$1";
                break;
            case "fivesBet":
                textValue = "$5";
                break;
            case "tensBet":
                textValue = "$10";
                break;
        }

        var limitFlag = false;
        if (increment < 0) {
            whichPlayer[whichBank] = whichPlayer[whichBank] + increment;
            if (whichPlayer[whichBank] < 0) {
                whichPlayer[whichBank] = 0;
                $("#betLabel").text("Oops! No more " + textValue + "chips!");
            } else {
                whichPlayer[whichBet] = whichPlayer[whichBet] - increment;
            }
        } else {
            whichPlayer[whichBet] = whichPlayer[whichBet] - increment;
            if (whichPlayer[whichBet] < 0) {
                whichPlayer[whichBet] = 0;
                $("#betLabel").text("All " + textValue + " chips returned");
            } else {
                whichPlayer[whichBank] = whichPlayer[whichBank] + increment;
            }
        }
    }

    // ======= ======= ======= playGame ======= ======= =======
    Game.prototype.playGame = function() {
        console.log("playGame");

        // assign hitme/holdme buttons to first player after placing bets

        this.currentPlayer = game.playerObjectsArray[0];
        display.updateSubscreen(this.currentPlayer.id, "hitMeHoldMe");
        for (var i = 1; i < this.playerNamesArray.length; i++) {
            nextPlayer = this.playerObjectsArray[i];
            display.updateSubscreen(nextPlayer.id, "turnOver");
        }
        $("#betLabel").text("");
    }

    // ======= ======= ======= hitMe ======= ======= =======
    Game.prototype.hitMe = function() {
	    console.log("hitMe");

	    var nextPlayer = this.currentPlayer;
        var nextPlayerScreen = this.subscreenObjectsArray[nextPlayer.id - 1];
		var cardPoints = this.getNextCard();				// get card from deck; shrink deck
		var nextCard = cardPoints[0];
		var nextPoints = cardPoints[1];
		nextPlayer.hand.push(nextCard);
		nextPlayer.score = nextPlayer.score + nextPoints;
        this.displayNextCard(nextPlayer, nextPlayerScreen);
        // $("#pScore_" + nextPlayer.id).text(nextPlayer.score);
        // console.log("  nextPlayer.score: " + nextPlayer.score);
        // console.log("  nextPlayer.aceFlag: " + nextPlayer.aceFlag);

		// ======= check for Aces and adjust score
		if (nextPlayer.score > 21) {
            if (nextPlayer.aceFlag == false) {
                for (var i = 0; i < nextPlayer.hand.length; i++) {
    				checkCard = nextPlayer.hand[i];
                    // console.log("  checkCard: " + checkCard);

    				// ======= change A value to 1 if > 21 score
    				if (checkCard.indexOf("A") > -1) {
                        console.log("  checkCard.indexOf('A'): " + checkCard.indexOf('A'));
                        nextPlayer.aceFlag = true;
    					nextPlayer.score = nextPlayer.score - 10;

            			// ======= score still high after adjustment
            			if (nextPlayer.score > 21) {
                            $("#message").text("Bummer... you're over 21!");
            				this.turnOver();
            			} else {
                            $("#message").text("You're okay with ace value = 1");
                        }
    					break;
    				}
    			}
                if (nextPlayer.score > 21) {
                    $("#message").text("Bummer... you're over 21!");
                    this.turnOver();
                }
            } else {
                if (nextCard.indexOf("A") > -1) {
                    nextPlayer.score = nextPlayer.score - 10;

        			// ======= score still high after adjustment
        			if (nextPlayer.score > 21) {
                        $("#message").text("Bummer... you're over 21!");
        				this.turnOver();
        			} else {
                        $("#message").text("You're okay with ace value = 1");
                    }
                } else {
                    $("#message").text("Bummer... you're over 21!");
                    this.turnOver();
                }
            }
		}

        // ======= flip new card after slight delay
        flipCardsP = setTimeout(function(){
            nextCard = nextPlayer.hand[nextPlayer.hand.length - 1];
             $("#" + nextCard).addClass('flipped');
         }, 200);

	}

    // ======= ======= ======= holdMe ======= ======= =======
    Game.prototype.holdMe = function() {
	    console.log("holdMe");
        $("#message").text("Next player turn");
        this.turnOver();
    }

    // ======= ======= ======= turnOver ======= ======= =======
    Game.prototype.turnOver = function() {
	    console.log("turnOver");

        var currentPlayerIndex = this.currentPlayer.id;
        var currentPlayer = this.currentPlayer;
        var nextPlayer;

        if (currentPlayerIndex < (this.playerNamesArray.length)) {
            display.updateSubscreen(currentPlayerIndex, "turnOver");
            nextPlayer = this.playerObjectsArray[currentPlayerIndex];
            this.currentPlayer = nextPlayer;
            display.updateSubscreen(currentPlayerIndex + 1, "hitMeHoldMe");
            $("#message").text(nextPlayer.name + "'s turn");
        } else {
            display.updateSubscreen(currentPlayerIndex, "turnOver");
            this.currentPlayer = this.playerObjectsArray[3];
            $("#message").text("dealer's turn");
            this.hitDealer();
        }
    }

    // ======= ======= ======= hitDealer ======= ======= =======
    Game.prototype.hitDealer = function() {
	    console.log("");
        console.log("hitDealer");

        var self = this;
        var flipCards, viewCards;
        var dealer = this.playerObjectsArray[3];
        var dealer_scr = this.subscreenObjectsArray[3];

        // == hit dealer again or end hand
        if (dealer.score < 18) {
            var cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
            var nextCard = cardPointsArray[0];
            var nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            dealer.score = dealer.score + nextPoints;               // calculate dealer score
            this.displayNextCard(dealer, dealer_scr);               // display new card
            // $("#pScore_D").text(dealer.score);

            // == flip dealer cards with slight delay for each
            flipCards = setTimeout(function(){
                var nextCard = dealer.hand[dealer.hand.length - 1];
                 $("#" + nextCard).addClass('flipped');
                 if (dealer.score < 18) {
                     self.hitDealer();
                 } else {

                     // == slight delay for viewing final hands
                     viewCards = setTimeout(function() {
                         display.nextGameScreen();
                         game.doTheMath();
                     }, 800);
                 }
             }, 800);

        // == dealer holds if hand score is 17 or above
        } else {
            display.nextGameScreen();
            game.doTheMath();
        }
    }

    // ======= ======= ======= doTheMath ======= ======= =======
    Game.prototype.doTheMath = function() {
	    console.log("doTheMath");

	    var nextPlayer, nextName, winLossLabel;
        var dealer = this.playerObjectsArray[3];
	    var dealerScore = dealer.score;
        var dealerScreen = this.subscreenObjectsArray[3];
        var self = this;
	    var playerWinLoss = 0;
	    var playerWinLossString = 'RESULTS!!\nDealer score:  ' + dealerScore + '\n\n';

	    // ======= calculate winnings/losses for each player
	    for (var i = 0; i < (game.playerNamesArray.length); i++) {
	    	nextPlayer = this.playerObjectsArray[i];
            nextName = nextPlayer.name;
            nextPlayerScreen = this.subscreenObjectsArray[i];

	    	// ======= calculate win/loss results
	    	playerWinLoss = nextPlayer.onesBet + nextPlayer.fivesBet + nextPlayer.tensBet;

    		// ======= calculate wins/losses for players
	    	if ((nextPlayer.score > dealerScore) && (nextPlayer.score < 22)) {
	    		winLossLabel = ' and won $';
                nextPlayer.onesBank += (nextPlayer.onesBet * 2);
                nextPlayer.fivesBank += (nextPlayer.fivesBet * 2);
                nextPlayer.tensBank += (nextPlayer.tensBet * 2);
	    		nextPlayer.totalBank = nextPlayer.totalBank + (playerWinLoss * 2);
	    	} else if ((dealerScore > 21) && (nextPlayer.score < 22)) {
                winLossLabel = ' and won $';
                nextPlayer.onesBank += (nextPlayer.onesBet * 2);
                nextPlayer.fivesBank += (nextPlayer.fivesBet * 2);
                nextPlayer.tensBank += (nextPlayer.tensBet * 2);
	    		nextPlayer.totalBank = nextPlayer.totalBank + (playerWinLoss * 2);
	    	} else if (((nextPlayer.score > 21) || (nextPlayer.score < dealerScore)) && (dealerScore < 22)) {
                winLossLabel = ' and lost $';
            } else {
                winLossLabel = ' tie game' + '\n';
                nextPlayer.onesBank += nextPlayer.onesBet;
                nextPlayer.fivesBank += nextPlayer.fivesBet;
                nextPlayer.tensBank += nextPlayer.tensBet;
                nextPlayer.totalBank = nextPlayer.totalBank + playerWinLoss;
                playerWinLoss = ' no wins/losses' + '\n';
            }
            playerWinLossString += nextName + "'s score:  " + nextPlayer.score + winLossLabel + playerWinLoss + '\n\n';
            nextPlayer.score = 0;
            nextPlayer.onesBet = 0;
            nextPlayer.fivesBet = 0;
            nextPlayer.tensBet = 0;
	    }
        dealer.score = 0;

        // == hand is over; reset player bank/bet values
        var clearPlayers = setTimeout(function(){
            alert(playerWinLossString);
            for (var i = 0; i < (self.playerNamesArray.length); i++) {
    	    	nextPlayer = self.playerObjectsArray[i];
                nextName = nextPlayer.name;
                nextPlayerScreen = self.subscreenObjectsArray[i];
                display.updatePlayerScreenData(nextPlayerScreen, nextPlayer, false);
            }
            var dealerObject = self.playerObjectsArray[3];
            var dealerScreenObject = self.subscreenObjectsArray[3];
            display.updatePlayerScreenData(dealerScreenObject, dealerObject, false);
        }, 1000);
	}

    // ======= ======= ======= playAgain ======= ======= =======
    Game.prototype.playAgain = function() {
	    console.log("playAgain");
        display.updatePlayerScreenData(nextPlayerScreen, nextPlayer, true);
        display.clearAllCardstacks();
        for (var i = 0; i < game.playerNamesArray.length; i++) {
            nextPlayer = game.playerObjectsArray[i];
            display.updateSubscreen(nextPlayer.id, "placeBets");
        }
        display.nextGameScreen("playAgain");
        game.dealCards();
    }

    // ======= ======= ======= clearAllCardstacks ======= ======= =======
    Display.prototype.clearAllCardstacks = function() {
	    console.log("clearAllCardstacks");

        var cardCount;
        var offsetR = 0;
        var dealer = game.playerObjectsArray[3];
        var dealerScreen = game.subscreenObjectsArray[3];

        for (var i = 0; i < game.playerNamesArray.length; i++) {
            nextPlayer = game.playerObjectsArray[i];
            nextPlayerScreen = game.subscreenObjectsArray[i];
            nextHand = nextPlayer.hand;
            cardCount = nextPlayer.hand.length;
            playerCardObject = nextPlayerScreen.pCards;
            for (var j = 0; j < cardCount; j++) {
                // offsetC = -(cardCount - 1 - j);
                offsetC = -j;
                console.log("  offsetC: " + offsetC);
                this.unModifyGridRegion(playerCardObject, offsetR, offsetC)
            }
        }
        // dealer = game.playerObjectsArray[3];
        nextHand = dealer.hand;
        cardCount = dealer.hand.length;
        dealerCardObject = dealerScreen.pCards;
        for (var j = 0; j < cardCount; j++) {
            offsetC = (cardCount - 1 - j);
            console.log("  offsetC: " + offsetC);
            this.unModifyGridRegion(dealerCardObject, offsetR, offsetC)
        }
    }

    var gameObjectsArray = initGameObjects();
    var game = new Game("game1", gameObjectsArray);
    var display = new Display("display1");
    display.initRowSpans();
    display.nextGameScreen();
}
