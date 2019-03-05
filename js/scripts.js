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
$(document).ready(function()
{
  $("#but").click(function(event)
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
    $(".name").toggle();
    $("#person1").text(newPlayer1.name);
    $("#person2").text(newPlayer2.name);
    $(".game").toggle();
    $("#rolPlayer1").click(function()
