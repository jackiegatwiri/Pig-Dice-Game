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
