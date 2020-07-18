## Inspiration
The world is under Covid-19 alert. As many countries ease lock-down restrictions, residents are returning to old spaces. Amidst all this, from time to time, people forget to keep all the necessary equipment  with them to keep them safe.

Presenting Heimdall: Your personal protector. 


## What it does
Every time you are about to step out of the door, you will have to stand in front of Heimdall (on-screen display with a camera attached to your main door) which will check if you have your mask on. Then, it'll present you with a checklist including essential items like hand sanitizer and gloves to keep you safe. 

Once you have completed the checklist, it'll send a signal to Arduino which will activate a servo and unlock the door.  

## How we built it

+ A JS client-based library called p5.js, which is based on the core principles of processing, has been used for creating the basic graphic layout

+ ml5.js, which is fundamentally a HLL to TensorFlow.js, is used for deployment of Machine Learning in the web browser.

+ A pre-trained model called 'mobilenet' from ml5.js has been used for the implementation of this Deep Learning project wherein the principles of Transfer Learning has been used to train the model through new images. 
+ An Arduino has been used to control the servo

## Challenges and Accomplishments
We had some difficulties connecting everything together. We are proud of how robust the model turned out to be and how well the end project looks.

