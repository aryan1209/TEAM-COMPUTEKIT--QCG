# TEAM-COMPUTEKIT--QCG

HOW TO RUN PYTHON FILES OF OUR 2 GAMES

1. Open your google colab
2. Run the code over there and see the results as per your input


**MAKING LEARNING MEMORY GAMES USING RANDOM NUMBER AND AUDIO FILE CONVERTOR**

This project is made as a part of the IITR QCG-DEAD AND ALIVE HACKATHON,2022. It involves developing games used to enhance your memory and also to better your pronounciation of various english alphabets using random number audio file generator by qiskit.

***📓 Description / Internal Working***

This project aims to sharpen your memory by our memory game and also to help kids to train their pronounciation using english alphabets via the pronounciation game.
Random numbers will be generated using the qiskit and then corresponding to these numbers , which will be acting as indecis for a defined numpy array, audio files will run for the word corresponding to that particular index.


***WORKING***

**GAME 1- REMEMBER THE SEQUENCE**

In this game, we have stored an array of 6 famous words in our campus like chapo,BT etc in a particular sequence. Now, the user will be allowed to listen these words in the correct order from 1 to 6. After this, the user is asked to pick a number to generate a random number sequence.

For eg: The input is 7 and the random number sequence is [1,2,5,6,6,4,3] 

As per this sequence, the word corresponding to each will be played by an audio file. The user will listen these and then have to guess that random sequence of the audio files. This will help the user to enhance their memory.

**GAME 2- TYPING THE  CORRECT ALPHABET BY LISTENING TO THEIR VOICES WHICH ARE RANDOMLY GENERATED (FOR KIDS)**

In this game, a random number is being generated from 1-26 which corresponds to an array of voices of the alphabets. The random number is being generated through qiskit by making qubits and a circuit including hadmard gate. A random number from 1-26 will correspond to a certain voice and will be inputed to user. Then user have to type the correct alphabet for that voice. If user type the right answer game will continue else one will loose.

for ex:- 4 is the random number generated. Now user will listen the alphabet B and then one have to type the same alphabet from the screen. If it matches the actual alphabet user wins.

***💻 Tech Stack / Dependencies***

**PYTHON** - This project is made using the python programming language

**QISKIT** - Used to generate random numbers by applying hadamrad gates

**NUMPY** - To work with matrices

**GOOGLE COLAB** - Editor used in project

**💡CHALLENGES FACED AND LEARNING: **

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






