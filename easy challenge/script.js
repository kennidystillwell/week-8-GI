//declared "exerciseOfTheDay" function
function exerciseOfTheDay() {
    //created "exercise" variable and set it with a deafult of a rest day
    let exercise = "Rest";

    //created inner function of "newExercise"
    //remembers and modifies "exercise" variable
    return function(newExercise) {
        //if "newExercise" is called, the exercise variable updates to the new exercise
        if (newExercise) {
            exercise = newExercise;
        }
        console.log("Today's exercise: " + exercise);
        //returns updated exercise
        return exercise;
    };
}
//set constant variable "exerciseFunction" to what's returned by "exerciseOfTheDay" function
const exerciseFunction = exerciseOfTheDay();

console.log(exerciseFunction("Running"));
console.log(exerciseFunction("Swimming"));
console.log(exerciseFunction("Dancing"));
console.log(exerciseFunction("Fencing"));
