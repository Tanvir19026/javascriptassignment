//1.kilometerToMeter

function kilometerToMeter(kilometer)
{
   if(kilometer>0)  //for valid input
   {
     var meter=kilometer*1000;
     return meter;
   }
   else //for invalid input
    {
      return "Error!! please input valid distance : ";
    }
}
var result = kilometerToMeter(10);
console.log(result);


//2.budgetCalculator

function budgetCalculator(watch,mobile,laptop)
{
  //for valid input

  if((watch>0 && mobile>0) &&(laptop>0 || mobile>0))
  {
    var watchCost=watch*50;
    var mobileCost=mobile*100;
    var laptopCost=laptop*500;
    var totalBudget=watchCost+mobileCost+laptopCost;  
  }
  //for inavalid input
  else
  {
    return 'Eror!!! please give valid input';
  }
  return totalBudget;

}
var totalcost=budgetCalculator(1,3,4);
console.log(totalcost);


//3.hotelCost

function hotelCost(days)
{
  if(days=== +days && days === (days|0))  //only integer number will valid
  {
    var cost = 0;
    if(days<=10)
  {
    cost=days*100; //10days cost
  }
  else if(days<=20)
  {
    var firstTenDays=10*100;
    var  remaining=days-10;             //10 to 20 days cost 
    var secondTenDays=remaining*80;
    cost=firstTenDays+secondTenDays;
  }
  else{
     firstTenDays=10*100;          //more than 20 days cost 
     secondTenDays=10*80;
     remaining=days-20;
     var lastFewDays=remaining*50;
     cost = firstTenDays+secondTenDays+lastFewDays;
 
  }
  return cost;
  }
  else
  {
    return 'Error input!!!';
  }
  
}
var totalcost=hotelCost(100);
console.log(totalcost);

//4.megaFriend

function megaFriend(friendList)

{
  var biggestWord = [];
  var lengthofWord=0;

//for valid input

  if (friendList.length != 0) 
    {
      for (var i = 0; i < friendList.length; i++) 
      {
          if (friendList[i].length > lengthofWord)
          {
            lengthofWord = friendList[i].length;
            var biggestWord = friendList[i];
          }
      }

      return biggestWord;
  }
  //invalid input
  else
  {
      return "Error!! please give valid input: ";
  }
}
var result =megaFriend(['rafi','tanvir'])
console.log(result);