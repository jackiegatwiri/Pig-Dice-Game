function Players(name)
{
  this.name = name;
  this.totalScore = 0;
  this.tempScore = 0;
  this.tempInstance = 0;
}
Players.prototype.roll = function()
{
  var random = Math.floor(Math.random() * 6) + 1;
  this.tempScore += random;
  this.tempInstance = random;
}
Players.prototype.addPoints = function()
{
  this.totalScore += this.tempScore;
}
Players.prototype.won = function()
{
  if (this.totalScore >= 100)
  {
    alert(this.name + " has won, the game is over");
    location.reload();
  }
}
Players.prototype.reset = function()
{
  this.totalScore = 0;
}
$(document).ready(function()
{
  $("#play").click(function(event)
  {
    event.preventDefault();
    var personOne = $("#player1").val();
    var personTwo = $("#player2").val();
    var newPlayer1 = new Players(personOne);
    var newPlayer2 = new Players(personTwo);
    if (personOne == "" || personTwo == "")
    {
      alert("Enter names of your Players!!");
      return;
    }
    $(".rules").hide();
    $(".name").hide();
    $("#person1").text(newPlayer1.name);
    $("#person2").text(newPlayer2.name);
    $(".game").toggle();
    $("#rolPlayer1").click(function()
    {
      newPlayer1.roll();
      if (newPlayer1.tempInstance === 1)
      {
        newPlayer1.tempScore = 0;
        $("#rolPlayer1").hide();
        $("#holdPlayer1").hide();
        $("#rolPlayer2").show(200);
        $("#holdPlayer2").show(200);
        $("#rollDice").text(0)
        $("#rollPoints").text(0)
        $("#turn2").hide();
        $("#turn1").show();
        $("#rolPlayer2").show();
        alert("Your dice has rolled on number one, wait until the alternate player takes the round");
      }
      else
      {
        $("#rollDice").text(newPlayer1.tempInstance);
        $("#rollPoints").text(newPlayer1.tempScore);
      }
    });
    $("#rolPlayer2").click(function()
    {
      newPlayer2.roll();
      if (newPlayer2.tempInstance === 1)
      {
        newPlayer2.tempScore = 0;
        $("#rolPlayer2").hide();
        $("#holdPlayer2").hide();
        $("#rolPlayer1").show(200);
        $("#holdPlayer1").show(200);
        $("#rollDice").text(0)
        $("#rollPoints").text(0)
        $("#turn1").hide();
        $("#turn2").show();
        $("#rolPlayer1").show();
        alert("Your dice has rolled on number one, wait until the alternate player takes the round");
      }
      else
      {
        $("#rollDice").text(newPlayer2.tempInstance);
        $("#rollPoints").text(newPlayer2.tempScore);
      }
    });
    $("#holdPlayer1").click(function()
    {
      newPlayer1.addPoints();
      $("#totalScoreP1").text(newPlayer1.totalScore);
      $("#rolPlayer1").hide();
      $("#rolPlayer2").show();
      $("#holdPlayer1").hide(200);
      $("#holdPlayer2").show(200);
      $("#rollDice").text(0)
      $("#rollPoints").text(0)
      $("#turn2").hide();
      $("#turn1").show();
      newPlayer1.tempScore = 0;
      newPlayer1.won();
    });
    $("#holdPlayer2").click(function()
    {
      newPlayer2.addPoints();
      $("#totalScoreP2").text(newPlayer2.totalScore);
      $("#rolPlayer2").hide();
      $("#rolPlayer1").show();
      $("#holdPlayer2").hide(200);
      $("#holdPlayer1").show(200);
      $("#rollDice").text(0)
      $("#rollPoints").text(0)
      $("#turn1").hide();
      $("#turn2").show();
      newPlayer2.tempScore = 0;
      newPlayer2.won();
    });
  });
});
