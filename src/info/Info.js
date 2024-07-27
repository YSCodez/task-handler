import task from "../img/task.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = [" rgba(0,0,0,0), rgba(60,16,148,1) "];
export let colors = [" rgba(67,54,240,1), rgba(174,147,227,1) "];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  Name: "Yash Sakhare",
  ProjfirstName: "Task",
  ProjlastName: "Handler",
  initials: "𝕐𝕊", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  centreimg: task, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],

  socials: [],
};
