money =0.0
maintaining =0.0
target = 0
day =1
gold = 0
loans=0
real_estate=0
loan_date=0
targetLoanPayment=0

# TODO: the end of the day [done]
# TODO: the start of the day [done]
# TODO: the 30th and the 60th from Gold bar and Real Estate 

def buyRealEstate():
    global money, real_estate
    if money>=4000000:
        money=money-4_000_000
        real_estate+=1
        print("Congratulations, you just bought one unit of real estate. You have ", money," left in your bank.")
        gameMenu()
    else:
        print("Sorry you do not have enough money, you must have more than 4000000 in  your bank to avail this option")
        gameMenu()

        
def loanRealEstate():
    global money, loans,loan_date,day,targetLoanPayment
    if money<2_000_000:
        print("Oopss, you do not have enough money. This option requires the player to have money more than 2,000,000")
        gameMenu()
    elif loans > 0:
        print("Oopss! This option is not applicable to you anymorer because you are already paying loaned real estate.")
        gameMenu()
    else:        
        money=money - 2_000_000
        loans+=1
        loan_date = day
        print("Congratulations! You just loaned a  real estate. You have ", money, " left in your bank.")
        gameMenu()

        
def sellRealEstate():
    global real_estate, money
    if real_estate<1:
        print("Sorry you cannot choose this action. You do not have at least one unit of real estate to sell.")
        gameMenu()
    else:
        
        
        real_estate= real_estate-1
        money= money + 2000000
        print("Congratulations, you just sell one unit of real estate for 2,000,000.")
        print("You have ", money, " left in your bank.")
        gameMenu()
    
def investGold():
    global money, gold
    if money >= 400000:
        buy_gold=int(input("How many gold bar would you like to buy? "))
        gold+=buy_gold
        goldprice=buy_gold*100_000
        money= money- goldprice
        print("Congratulations! You just bought ", gold, "gold bar/s for ", goldprice, ". You have ", money, " left in your bank")
        gameMenu()
    else:
        print("Oops, you cannot avail this choice. You must have at least 400,000 in your bank")
        gameMenu()

        
def sellGold():
    global gold, money
    print("You have ", gold," gold bar/s owned. ")
    goldsell=int(input("How many gold bar/s would you like to sell?"))
    if goldsell<=gold:
        goldprice=goldsell*75_000
        print("Congratulations! You just sold ", goldsell, " for ", goldprice)
        money= money+goldprice
        gameMenu()
        print("You have ", money," left in your bank.")
    else:
        print("Sorry, you cannot avail this choice. You do not have this much number of gold  bar owned.")
        gameMenu()

def checkIfYouWin():
  global target, money, maintaining
  if (target <=money ):
      print("You Win")
  elif (maintaining > money):
      print("You Lose")
  else:
    startDay()
  
def endTheDay():
    global day,money,real_estate,gold,maintaining
    
    if (money <50_000):
      money = money + 5_000
      print("You earned 5,000","Total Money: ",money)
    if (money>=50_000):
      n =money*0.01
      rounded_up = (n + 9) // 10 * 10
      money = money + rounded_up
      print("You earned",rounded_up ,"Total Money: ",money)
    if (day%30 == 0 and real_estate>0):
      money = money + real_estate*100_000
      print("You earned",real_estate*100_000,"Total Money: ",money)
    if (day%10 == 0 and gold>0):
      money = money + gold*10_000
      print("You earned",gold*10_000,"Total Money: ",money)
    if (real_estate==1):
      money = money - 1_000
      print("You've paid 1,000 for flat tax","Total Money: ",money)  
    if (real_estate>1):
      money = money - (real_estate *2_000)
      print("You've paid for",real_estate*2_000,"for the real estate tax","Total Money: ",money)
    if (gold>=1):
      money = money - (gold*500)
    if (day%100 ==0):
      money = money/2
      rounded_up = (n + 9) // 10 * 10
      money = money - rounded_up
      print("Catastrophic event you've lost your half of money","Total Money: ",money)
    checkIfYouWin()

def primeNumber(number):
  valid =0
  for i in number:
    if i in ["2","3","5","7","9"]:
      valid+=1
  return (valid==len(number))

def startDay():  
  global day,money,real_estate,gold,maintaining,loans,loan_date,targetLoanPayment
  day+=1
  #loan date 
  if((loans>0) and ((day-loan_date)%3 == 0)):
    if(targetLoanPayment==3_000_000):
      print("Congratulations you've completed the loan payment")
      real_estate +=1
      loans = 0 #no more loans
      targetLoanPayment = 0 # no more target loan 

    elif(1_000_000<=money):
      money = money-1_000_000
      targetLoanPayment +=1_000_000
      print("Paid Succesfully to your Loan!")
      print("You have",money,"money left")
      print("Total Payment for loans:",targetLoanPayment)
      
    else:
      money = money + 2_000_000  # refunded
      loans = 0 #no more loans
      targetLoanPayment = 0 

  #end of the season
  if (day%60==0):
    money += 1_000
    print("It's 60th day,  you earned 1,000","Total Money: ",money)
  if (day%40==0 and real_estate >=1):
    money +=55_000
    print("Hey it's 40th day, you earned 55,000 from your real estate","Total Money: ",money)
  if (primeNumber(str(day))):
    money += 5_896
    print("Yeeey it's prime number day you earn 5,896 ","Total Money: ",money)

  if (day%200==0):
    money = money * 2 
    print("Double money ","Total Money: ",money)

  if (day%50==0 and real_estate>1):
    real_estate =real_estate- 1
    print("It's 50th day one real estate removed","Total Money: ",money)
  if (day%13==0 and money >=50_000):
    money = money - 100
    print("It's 13th day, your money is deducted to 100","Total Money: ",money)
  if (day%30==0 and gold>0):
    money = money + 5_000
    print("You only earn 5,000 from your old bar","Total Money: ",money)
  if (day%90 ==0 and real_estate > 0):
    money = money + 40_000
    print("You only earn 40,000 from your real estate","Total Money: ",money)
  
  
    
def endDayTen():
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  endTheDay()
  gameMenu()

def gameMenu():
    global day, maintaining, target,money
    if (target <=money ):
      print("You Win")
    elif (maintaining > money):
      print("You Lose")
    else:
      print("**************")
      print("Day",day)
      print("**************")
      print("Bank Savings: ",money)
      print("Maintaining Balance: ",maintaining)
      print("Target Amount: ",target)
      print("")
      print(''''
      STATUS
  ===========================
  GOLD: {gold}
  REAL ESTATE: {real_estate}
  LOAN ESTATE: {loans}

  ===========================

      '''.format(gold=gold,real_estate=real_estate,loans=loans))
      print("What would you like to do?")
      print(" 1. Buy real estate")
      print(" 2. Loan real estate")
      print(" 3. Sell real estate")
      print(" 4. Invest in gold")
      print(" 5. Sell gold")
      print(" 6. End the day")
      print(" 7. End the day x10")
      choice = input("Enter the number of your choice: ")
      if choice not in ["1","2","3","4","5","6","7"]:
          print("Invalid Choices")
          gameMenu()
      else:
          if choice == "1": buyRealEstate()
          if choice == "2": loanRealEstate()
          if choice == "3": sellRealEstate()
          if choice == "4": investGold()
          if choice == "5": sellGold()
          if choice == "6": 
            endTheDay()
            gameMenu()

            
          if choice == "7": endDayTen()            
    
def getTargetMoney():
    global target
    global money
	
    target= float(input("How much is your target amount (>=starting amount)? "))
    if target < money:
        print("Invalid, the amount is less than your starting amount", money)
        getTargetMoney()
    else:
        print ("Succesfully get Target Money")
        gameMenu()
      


def getMaintainingMoney():
    global money
    global maintaining
    maintaining =float(input("How much is the maintaining balance(Choose from 100,000 to your {}): ".format(money)))
    if (maintaining < 100000):
        print("Invalid, the amount is less than 100000")
        getMaintainingMoney()
    elif (maintaining >=money):
        print("Invalid, the amount is greater than your starting amount", money)
        getMaintainingMoney()
    else:    	
        print("Successfully Maintain Money")  
        getTargetMoney()
          

def getMoney():
    global money
    money= float(input("How much would you like to start with (Choose from  100,000 to 10,000,000)? "))
    if money > 10000000:
        print("Oops! Sorry that's too much!")
        getMoney()
    elif money < 100000:
        print("Oops! That's too little!")
        getMoney()
    else:
        print("Successfully Start Money")
        getMaintainingMoney()
getMoney()