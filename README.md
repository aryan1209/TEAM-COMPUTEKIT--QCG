# TEAM-COMPUTEKIT--QCG

HOW TO RUN PYTHON FILES OF OUR 2 GAMES

I Method 1

1. Open your google colab
2. Run the code over there and see the results as per your input

II Method 2

1. Install Python and its modules including gtts,Ipython 
2. Install qiskit
3. Open the folder of the game you wanna play in your terminal
4. Executemain.py using the python command

**MAKING LEARNING MEMORY GAMES USING RANDOM NUMBER AND AUDIO FILE CONVERTOR**

This project is made as a part of the IITR QCG-DEAD AND ALIVE HACKATHON,2022. It involves developing games used to enhance your memory and also to better your pronounciation of various english alphabets using random number audio file generator by qiskit.

***📓 Description / Internal Working***

This project aims to sharpen your memory by our memory game and also to help kids to train their pronounciation using english alphabets via the pronounciation game.
Random numbers will be generated using the qiskit and then corresponding to these numbers , which will be acting as indecis for a defined numpy array, audio files will run for the word corresponding to that particular index.

***WORKING***

**GAME 1- REMEMBER THE SEQUENCE**

In this game, we have stored an array of 6 famous words in our campus like chapo,BT etc in a particular sequence. Now, the user will be allowed to listen these words in the correct order from 1 to 6. After this, the user is asked to pick a number to generate a random number sequence.

For eg: The input is 7 and the random number sequence is [1,2,5,6,6,4,3] 

As per this sequence, the word to corresponding to each will be played by an audio file



**GAME 2-TYPING CORRECT ALPHABET BY LISTING TO ALPHABETS AUDIO TO ENHANCE PRONOUNCIATION (KIDS) **

In this game, we have firstly generated a single random number from 1-26 correspoonding to each english alphabet. We make qubits corresponding to every numbers and then we built a circuit using a hadmard gate. We got an output of a number from 1-26 and then we make an array of 26 indices which corresponds to each voice of the given alphabet.  
