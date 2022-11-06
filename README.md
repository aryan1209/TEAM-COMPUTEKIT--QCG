# TEAM-COMPUTEKIT--QCG

HOW TO RUN PYTHON FILES OF OUR 2 GAMES

1. Open your google colab
2. Run the code over there and see the results as per your input


**MAKING LEARNING MEMORY GAMES USING RANDOM NUMBER AND AUDIO FILE CONVERTOR**

This project is made as a part of the IITR QCG-DEAD AND ALIVE HACKATHON,2022. It involves developing games used to enhance  memory and also to better pronounciation for kids of various english alphabets using random number audio file generator by qiskit.

**📌 TABLE OF CONTENTS-**

1. Description/Internal Working
2. GAME 1 & 2
3. About the webpage
4. Tech stack/dependancies
5. Challenges faced and learning
6. Resources
7. Bug reporting

***📓 DESCRIPTION / INTERNAL WORKING***

This project aims to sharpen your memory by our memory game and also to help kids to train their pronounciation using english alphabets via the pronounciation game.
Random numbers will be generated using the qiskit and then corresponding to these numbers , which will be acting as indices for a defined numpy array, audio files will run for the word corresponding to that particular index.

**GAME 1- REMEMBER THE SEQUENCE**

In this game, we have stored an array of 6 famous words in our campus like chapo, Dassi in a particular sequence. Now, the user will be allowed to listen these words in the correct order from 1 to 6. After this, the user is asked to pick a number to generate a random number sequence.

For eg: The input is 7 and the random number sequence is [1,2,5,6,6,4,3] 

As per this sequence, the word corresponding to each will be played by an audio file. The user will listen these and then have to guess that random sequence of the audio files. This will help the user to enhance their memory.

**GAME 2- TYPING THE  CORRECT ALPHABET BY LISTENING TO THEIR VOICES WHICH ARE RANDOMLY GENERATED (FOR KIDS)**

In this game, a random number is being generated from 1-26 which corresponds to an array of voices of the alphabets. The random number is being generated through qiskit by making qubits and a circuit including hadmard gate. A random number from 1-26 will correspond to a certain voice and will be inputed to user. Then user have to type the correct alphabet for that voice. If user type the right answer game will continue else one will loose.

for ex:- 4 is the random number generated. Now user will listen the alphabet D and then one have to type the same alphabet from the screen. If it matches the actual alphabet user wins.

**ABOUT THE WEBPAGE**


Inspite of the two python games which uses the concept random number generation using qiskit, we tried to develop a webpage on which these games could be played. So we just created a webpage which in future we could use by linking our pyhton-random number generator code. As of now we just used a number by ourself (6 digit) and then by using this number as the random number we wrote our further javascript code to develop the webpage.

***How to run the HTML,JAVASCRIPT,CSS files?***

1. Download all the files from the repository as zip files.
2. Extract the folder. 
3. Now create a folder named 'sounds' and keep it in the same folder which was extracted. 
4. Select all the sounds files(12 in number) and then move them into the folder named- 'sounds'. 
5. Now run the index.html file in microsoft edge. 
6. Press spacebar to start and again consecutively press spacebar to listen to the sounds. 
7. After that press the spacebar 6 times(as for reference we used 6 digit no. as a random no.) with some pause to listen to the random sounds. 
8. After that click on the buttons in the same order as the sound was played. 
9. If you got all correct you will win otherwise the screen will blink with red color.

***💻 TECH STACK / DEPENDANCIES***

**PYTHON** - This project is made using the python programming language

**QISKIT** - Used to generate random numbers by applying hadamrad gates

**NUMPY** - To work with matrices

**GOOGLE COLAB** - Editor used in project

**💡CHALLENGES FACED AND LEARNING:**

1. Learnt about qubits, quantum gates and quantum circuits.
2. Got familiar with Qiskit and Python language.
3. How to generate a random number
4. How to convert strings to audio files

**📚 RESOURCES**

1. [IITR QCG PORTAL](https://medium.com/@qcgiitr)
2. [AUDIO FILE MAKER](https://www.youtube.com/watch?v=lDAJxvnbUQ0)
3. [RANDOM NUMBER](https://www.youtube.com/watch?v=ryBziM92MgE)

**🐛 BUG REPORTING**

Feel free to [open an issue](https://github.com/aryan1209/TEAM-COMPUTEKIT--QCG/issues) on Github if you find bugs.






