//declared "exerciseOfTheDay" function
function exerciseOfTheDay() {
    //created exercise variable with a deafult exercise, which is a rest day
    let exercise = "Rest";
    //created inner funtion of "newExercise"
    //"newExercise" function will remember and modify the exercise variable
    return function(newExercise) {
        //if "newExercise" is called, the exercise variable updates to the new exercise
        if (newExercise) {
            exercise = newExercise;
        }
    }
    console.log("Today's exercise: " + exercise);
    return exercise;
};
//set constant variable exercise to what's returned by the exerciseOfTheDay function
const exercise = exerciseOfTheDay();


console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));
