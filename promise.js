function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: Your promise has been resolved.");
        resolve("Shit is done, bitch.");
      } else {
        console.log("Function: Your promise is not fulfilled.");
        reject("Try it again Whore!");
      }
    }, 2000);
  });
}

func1()
  .then(function (error) {
    console.log("Harry: Thanks for resolving! " + error);
  })
  .catch(function (error) {
    console.log("Harry: Very bad! " + error);
  });
