![Project Banner](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e412eeeb-9336-4f40-adc5-6d2cb8f30a7f/The_Calibration_Game.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210325T212041Z&X-Amz-Expires=86400&X-Amz-Signature=5d7491f6e677fc51bd20425a1f0bde1798344ff582200e10177cf694a16f69e2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22The_Calibration_Game.webp%22)

## What is this?

We often overestimate the accuracy of our internal model of the world.  Those answers you were 99% sure were correct turn out to be wrong half the time.  Your stocks, conservatively bought because you're only 30% sure of their value going up, end up appreciating 80% of the time.

Now, am I telling you to spend all your money on stocks?  Possibly.  As long as I'm not liable.

But wouldn't it be nice if you could be as sure of an answer as one can, with the information you have?  You'll be wrong less times, be able to show a smug face to your friends more often, and generally live a better life if you simply had a better understanding of your own knowledge levels, and how they should relate to your beliefs about the truth.

## You still haven't said what this is

I think the best way to learn a skill as complex as this, is to try it in a less complex environment, so you can focus more on internal processes than external trivialities.  Hence, an app that asks of you how confident you are in your answers to simple trivia questions.  The more wildly over- or under-confident you are, the more you have to lose.

I mean, insofar as you lose numbers on an app on your phone that have no direct bearing on the real world (although a bad number may mean your real world wouldn't look much better).  Pride, maybe?  

There are a couple mathematical ideas about probability that work in the background while you're playing (hence the weird scoring pattern), so if you want to see those, go to [this page](https://acritch.com/credence-game/), where the same idea behind this app was created by the Centre for Applied Rationality.

## Current Release

The game is currently only available on Android, and the current release is Version 1.2.

Check out the latest release on Play Store [here](https://play.google.com/store/apps/details?id=com.the_calibration_game&hl=en_US&gl=US).

## Setting up the Environment for Development

### Prerequisites
Make sure that you have a React Native environment set up.  If not, [follow the instructions in this link.](https://reactnative.dev/docs/environment-setup)

### Dependencies

Once you do, move into the directory, and run

`npm install`

to install all the dependancies. 

(Some may not be installed, and may need to be installed manually using `npm install <package_name>`)

### Running the app in development mode

Then, with an Android device or emulator running, run 

`react-native run-android`

to compile the React Native project into the device, and run

`react-native start`

to start the development server.
