package MyProjectPackage;

import java.util.Scanner;

class Guesser
{
	int Guessernum;
	
	public int takeNumGuesser()
	{
		System.out.println("Guesser Guess a Number:");
		Scanner scan = new Scanner(System.in);
		Guessernum = scan.nextInt();
		//scan.close();
		return Guessernum;
	}
}

class Player
{
int Playernum;
	
	public int takeNumPlayer()
	{
		System.out.println("Player Guess a Number:");
		Scanner scan = new Scanner(System.in);
		Playernum = scan.nextInt();
		//scan.close();
		return Playernum;
	}
}

class Umpire
{
	int numfromGuesser;
	int numfromPlayer1;
	int numfromPlayer2;
	int numfromPlayer3;
	
	void collectfromGuesser()
	{
		Guesser g=new Guesser();
		numfromGuesser = g.takeNumGuesser();
	}
	
	void collectfromPlayer()
	{
		Player P1 = new Player();
		numfromPlayer1 = P1.takeNumPlayer();
		
		Player P2 = new Player();
		numfromPlayer2 = P2.takeNumPlayer();
		
		Player P3 = new Player();
		numfromPlayer3 = P3.takeNumPlayer();
	}
	
	void Compare()
	{
		if(numfromPlayer1 == numfromGuesser)
		{
			if(numfromPlayer2 == numfromGuesser && numfromPlayer3 == numfromGuesser)
			{
				System.out.println("All Players Won the Game.");
			}
			
			else if(numfromPlayer2 == numfromGuesser)
			{
				System.out.println("Player 1 and 2 Won the Game.");
			}
			
			else if(numfromPlayer3 == numfromGuesser)
			{
				System.out.println("Player 1 and 3 Won the Game.");
			}
			
			else
			{
				System.out.println("Player 1 Won the Game.");
			}
		}
		else if(numfromPlayer2 == numfromGuesser)
		{
			if(numfromPlayer3 == numfromGuesser)
			{
				System.out.println("Only Player 2 and 3 Won the Game.");
			}
			
			else
			{
				System.out.println("Only Player 2 Won the Game.");
			}
		}
		else if(numfromPlayer3 == numfromGuesser)
		{
			System.out.println("Only Player 3 Won the Game.");
		}
		else
		{
			System.out.println("No Player Won the Game.");
		}
	}
}

public class GuesserGameClass {

	public static void main(String[] args) 
	{
		Umpire U = new Umpire();
		U.collectfromGuesser();
		U.collectfromPlayer();
		U.Compare();
	}

}
