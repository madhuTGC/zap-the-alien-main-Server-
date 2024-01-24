// var url = new URL(window.location.href);
// var urlParams = new URLSearchParams(window.location.search);
// let paramUserID = urlParams.get('Email');
// let ParamOrgID= urlParams.get('OrgID');
//  let M2OstAssesmentID= urlParams.get('M2ostAssessmentId');
// let id_game=urlParams.get('idgame');
// let gameAssesmentId=urlParams.get('gameassid');
// let currentQuestionIndex=0;
// let UID=[];






// async function getIdUser(url=`https://www.playtolearn.in/Mini_games_beta/api/UserDetail?OrgId=${ParamOrgID}&Email=${paramUserID}`){
//  try{
//  const response= await fetch(url, { method: 'GET' });
//  const encryptedData = await response.json();
//  const IdUser=JSON.parse(encryptedData);
//  console.log(encryptedData);
//  UID.push(IdUser);
//  console.log(UID[0].Id_User);
//  getDetails();
// //  loader.style.display = "none";
//  return encryptedData;
 
//  }
//  catch (error) {
//  console.error('Fetch error:', error.message);
//  throw error;
//  }
// }

// async function getDetails(url =`https://www.playtolearn.in/Mini_games_beta/api/GetAssessmentDataList?OrgID=${ParamOrgID}&UID=${UID[0].Id_User}&M2ostAssessmentId=${M2OstAssesmentID}&idgame=${id_game}&gameassid=${gameAssesmentId}`) {
//  try {
//  const response = await fetch(url, { method: 'GET' });

//  // if (!response.ok) {
//  // throw new Error(`Network response was not ok, status code: ${response.status}`);
//  // }

//  const encryptedData = await response.json();
//  QuestionList=JSON.parse(encryptedData);
//  console.log('ResponseData',QuestionList);


//  // Assuming the response is the encrypted data
 

 
//  return encryptedData;
//  } catch (error) {
//  console.error('Fetch error:', error.message);
//  throw error;
//  }
// }


// function initializePage() {
//  try {
//  getIdUser();
 
 
//  } catch (error) {
//  // console.error('Error during initialization:', error.message);
//  }
// }

// document.addEventListener('DOMContentLoaded', initializePage);


// let getResponse;




//  async function saveAssessment(data) {
//  let postData = data;
 
 
//  const baseUrl = 'https://www.playtolearn.in/';
//  const endpoint = 'Mini_games_beta/api/assessmentdetailuserlog';
//  const url = baseUrl + endpoint;
 
 
 
//  const response = await fetch(url, {
//  method: 'POST',
//  headers: {
//  'Content-Type': 'application/json',
//  // Add any additional headers if required
//  },
//  body: JSON.stringify(postData),
//  });
 
//  // if (!response.ok) {
//  // throw new Error(`Network response was not ok, status code: ${response.status}`);
//  // }
//  console.log('response',response);
//  const responseData = await response.json();

 
 
//  return responseData;
//  }
//  async function saveAssessmentMasterLog(data) {
//  let postData = data;
//  console.log( JSON.stringify(postData));
 
 
//  const baseUrl = 'https://www.playtolearn.in/';
//  const endpoint = 'Mini_games_beta/api/gameusermasterlog';
//  const url = baseUrl + endpoint;
 
 
 
//  const response = await fetch(url, {
//  method: 'POST',
//  headers: {
//  'Content-Type': 'application/json',
//  // Add any additional headers if required
//  },
//  body: JSON.stringify(postData),
//  });

 
//  // if (!response.ok) {
//  // throw new Error(`Network response was not ok, status code: ${response.status}`);
 
//  // }
// // console.log('response',response);
//  const responseData = await response.json();
 
 
//  return responseData;
//  }
 




// let isGamePaused = true;


// function displayQuestion() {

//   if (!isGamePaused && currentQuestionIndex < QuestionList.length) {
//     pauseGame();
//     document.getElementById('rock').style.display = 'none';
//     document.getElementById('jet').style.display = 'none'
//     const currentQuestion = QuestionList[currentQuestionIndex];
//     displayQuestionInModal(QuestionList[currentQuestionIndex]);
//     currentQuestionIndex++;
//     backgroundMusic.pause();
//     // const backgroundMusic1 = document.getElementById("backgroundMusic1");

//     // backgroundMusic1.play()

//   }
//   else {
//     currentQuestionIndex = 0;
//     onGameOver();
//     }
// }




// let rank=0;
// let scores=10;
// let AssementData=[];
// let assessmentObject=[];
// let GivenAns;





// function displayQuestionInModal(questionObj) {
//   const question = questionObj.Assessment_Question;
//   console.log("question",question)
//   console.log("questionobj",questionObj)

//   const content = questionObj.assessment_question_url;
 
 
//   const options = questionObj.optionList;
//   console.log("option",options)
//   var assessmentType = questionObj.Assessment_Type;
//   var contentDiv = $('#contentDiv');
  
//   // Clear existing content in contentDiv
//   contentDiv.empty();
  
//   // Depending on the assessment type, add the corresponding content
//   if (assessmentType === 1) {
//   // Add image
//   var imageUrl = questionObj.assessment_question_url;
//   var imageElement = $('<img>').attr('src', imageUrl).attr('alt', 'Image Alt Text').css({
//   'width': '100%',
//   'max-width': '100%',
//   'height': '26vh',
//   'border-radius':'10px'
//   });
//   contentDiv.append(imageElement);
//   } else if (assessmentType === 2) {
//   // Add audio
//   var audioUrl = questionObj.assessment_question_url;
//   var audioElement = $('<audio controls>').attr('src', audioUrl);
//   contentDiv.append(audioElement);
//   } else if (assessmentType === 3) {
//   // Add video
//   var videoUrl = questionObj.assessment_question_url;
//   var videoElement = $('<video controls>').attr('src', videoUrl).css({
//   'width': '100%',
//   'max-width': '100%',
//   'height': '26vh',
//   });
//   contentDiv.append(videoElement);
//   } else {
//   // Handle other assessment types or provide a default behavior
//   // contentDiv.text('Unsupported assessment type');
//   }
 
 
 
//  // Empty the contentDiv and append the new image
// //  $('#contentDiv').empty().append(imageElement);
 
//   // Display question number and text
//   const questionNumber = currentQuestionIndex + 1;
  
//   $('#questionText').html(`${question}`);
 
//   // Clear existing options
//   $('.radio-container').empty();
 
//   // Iterate over options and create radio buttons
//   options.forEach((option, index) => {
//   const optionLabel = $("<label>").text(option.Answer_Description);
//   const optionInput = $("<input>").attr({
//   type: "radio",
//   name: "group",
//   value: `${index + 1}`
//   });
 
//   optionLabel.prepend(optionInput);
//   $('.radio-container').append(optionLabel);
//   });
 
  
 
 
//   $('#continueButton').off('click').on('click', function () {
//   const selectedOption = $('input[name=group]:checked').val();
  
  
//   if (selectedOption) {
//   $('#questionModal').modal('hide');
//   // currentQuestionIndex++;
//   document.getElementById('jet').style.display = 'block'

//   resumeGame();
  
//   const errorTextElement = $('#error-text');
//   errorTextElement.text("");
//   const option=questionObj.optionList;
//   console.log(option);
//   AssementData.push(questionObj);
 
//   // let scores=10;
//   console.log(selectedOption);
//   console.log(QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1]);
//   if (QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Right_Ans=='1') {
//       console.log('correct ans')
  
//     id_question=QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Id_Assessment_question_ans;
//     GivenAns = '1';
//     scores = 10;
//   } else {
//     console.log('wrong answer');
//   // Incorrect answer
//     id_question=QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Id_Assessment_question_ans;
//     GivenAns = '2';
//     scores = 0; 
//   }
  
//   // Create an object with assessment data
//   const assessmentAnsResponse = {'isRightAns': GivenAns, 'AchieveScore': scores,'id_question':id_question};
//   console.log("assessmentAnsResponse",assessmentAnsResponse)
//   // Log the AssementData array
//   assessmentObject.push(assessmentAnsResponse);
 
//   }else {
//   const errorTextElement = $('#error-text');
//   errorTextElement.text("Click any one option");
//   // setTimeout(function () {
//   // $('#questionModal').modal('show');
  
  
//   // }, 0);
//   }
  
//   });
 




  


//   let timer = 30; // Set the timer duration in seconds
//   const timerElement = $('#timer');
//   timerElement.text(`${timer} sec`);

//   const timerInterval = setInterval(() => {
//       timer--;

//       if (timer >= 0) {
//           timerElement.text(`${timer} Sec`);
//       } else {
//           clearInterval(timerInterval);
//           // Time's up, handle it as needed

//           onTimeUp();
//       }
//   }, 1000);

//   // Clear timer when modal is hidden
//   $('#questionModal').on('hidden.bs.modal', function () {
//       clearInterval(timerInterval);
//   });

//   // Show the question modal
//   $('#questionModal').modal('show');
// }


// function onTimeUp() {
//     // Handle the timeout logic here

//     isGamePaused = true; // Set player start to true to resume the game
//     // gameStart.play(); // Play the game start audio

//     // Automatically select an option (you can modify this based on your logic)
//     $('input[name=group]').first().prop('checked', true);

//     // Proceed to the next question
//     // document.getElementById('jet').style.display = 'block'

//     resumeGame();

//     // Hide the question modal
//     $('#questionModal').modal('hide');
//     document.getElementById('jet').style.display = 'block'

// }




// function pauseGame() {
//   isGamePaused = true;
//   clearInterval(generaterocks);
//   clearInterval(moverocks);
  
// }

// function resumeGame() {
  
//   if (currentQuestionIndex <= QuestionList.length) {
//     // window.requestAnimationFrame(gamePlay);
//     isGamePaused = false;
    
//     generaterocks = setInterval(generateRocks, 1000);
//     moverocks = setInterval(moveRocks,100);
//     backgroundMusic.play();


//   }
//   else {
//     onGameOver()

//   }
  
// }

// function onGameOver(){
//   isGamePaused= true

//   const mergedData = AssementData.map((game, index) => ({ ...game, ...assessmentObject[index] }));

//   console.log(mergedData);
//   let assessmentData =[];
//   let assementDataForMasterLog=[];

//   var sum=0;
//   for (let i = 0; i < mergedData.length; i++) {
  
//   sum=mergedData[i].AchieveScore + sum ;
//   console.log('inSum',sum);
  
  
  
//   // i=1;mergedData
//   let model = {
//   ID_ORGANIZATION: ParamOrgID,
//   id_user:UID[0].Id_User,
//   Id_Assessment: mergedData[i].Id_Assessment,
//   Id_Game: mergedData[i].Id_Game,
//   attempt_no: mergedData[i].allow_attempt,
//   id_question:mergedData[i].Id_Assessment_question,
//   is_right: mergedData[i].isRightAns,
//   score: mergedData[i].AchieveScore,
//   Id_Assessment_question_ans:mergedData[i].id_question,
//   Time: mergedData[i].Timer,
//   M2ostAssessmentId: M2OstAssesmentID
//   };
//   console.log('OutSum',sum);
//   let modelForGameMasterLog = {
//   ID_ORGANIZATION: ParamOrgID,
//   id_user:UID[0].Id_User,
//   Id_Room: mergedData[0].Id_Assessment,
//   Id_Game: mergedData[0].Id_Game,
//   attempt_no: mergedData[0].allow_attempt,
//   score:sum,

// };

// assessmentData.push(model);
// assementDataForMasterLog.push(modelForGameMasterLog);
// }
// console.log('AssesmentLog',assementDataForMasterLog);

// saveAssessment(assessmentData);
// saveAssessmentMasterLog(assementDataForMasterLog[assementDataForMasterLog.length - 1]);

// showNewPopup()
// }







// var jet = document.getElementById("jet");
// var board = document.getElementById("board");
// var touchStartX;

// // window.addEventListener("keyup", (e) => {
// //   handleKeyPress(e);
// // });

// // jet.addEventListener("touchstart", (e) => {
// //   touchStartX = e.touches[0].clientX;
// // });

// // jet.addEventListener("touchmove", (e) => {
// //   e.preventDefault(); // Prevent default touchmove behavior (scrolling)

// //   var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
// //   var touchMoveX = e.touches[0].clientX;

// //   if (touchMoveX < touchStartX && left >0) {
// //     jet.style.left = left - 10 + "px"; // Move left
// //   } else if (touchMoveX > touchStartX && left <= 230) {
// //     jet.style.left = left + 10 + "px"; // Move right
// //   }

// //   touchStartX = touchMoveX;
// // });

// // jet.addEventListener("touchend", (e) => {
// //   // // Handle touch end event for shooting bullets
// //   // var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
// //   // shootBullet(left);
// //   var center = calculateJetCenter();
// //   shootBullet(center);
// // });

// // function handleKeyPress(e) {
// //   var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));

// //   if (e.key == "ArrowLeft" && left > 0) {
// //     jet.style.left = left - 10 + "px";
// //   } else if (e.key == "ArrowRight" && left <= 1500) {
// //     jet.style.left = left + 10 + "px";
// //   }

// //   if (e.key == "ArrowUp" ) {
// //     shootBullet(left);
// //   }
// // }




// let left = 0; // Initialize left variable outside the functions

// window.addEventListener("keydown", (e) => {
//   handleKeyDown(e);
// });

// window.addEventListener("keyup", (e) => {
//   handleKeyUp(e);
// });

// jet.addEventListener("touchstart", (e) => {
//   touchStartX = e.touches[0].clientX;
// });

// jet.addEventListener("touchmove", (e) => {
//   e.preventDefault(); // Prevent default touchmove behavior (scrolling)

//   left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
//   var touchMoveX = e.touches[0].clientX;

//   if (touchMoveX < touchStartX && left > 0) {
//     jet.style.left = left - 10 + "px"; // Move left
//   } else if (touchMoveX > touchStartX && left <= 230) {
//     jet.style.left = left + 10 + "px"; // Move right
//   }

//   touchStartX = touchMoveX;
// });

// jet.addEventListener("touchend", (e) => {
//   var center = calculateJetCenter();
//   shootBullet(center);
// });

// function handleKeyDown(e) {
//   left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));

//   if (e.key == "ArrowLeft" && left > 0) {
//     jet.style.left = left - 10 + "px";
//   } else if (e.key == "ArrowRight" && left <= 1500) {
//     jet.style.left = left + 10 + "px";
//   }
// }

// function handleKeyUp(e) {
//   // Handle keyup events if needed
//   if (e.key == "ArrowUp") {
//     // Handle keyup logic for "ArrowUp"
//     shootBullet(left);
//     console.log("ArrowUp key released");
//   }
// }





// function shootBullet(left) {
//   const backgroundMusic1 = document.getElementById("backgroundMusic1");

//   var bullet = document.createElement("div");
//   bullet.classList.add("bullets");
//   board.appendChild(bullet);

//   var movebullet = setInterval(() => {
//     var rocks = document.getElementsByClassName("rocks");

//     for (var i = 0; i < rocks.length; i++) {
//       var rock = rocks[i];
//       if (rock != undefined) {
//         var rockbound = rock.getBoundingClientRect();
       
//         var bulletbound = bullet.getBoundingClientRect();
        

//         if (
//           bulletbound.left >= rockbound.left &&
//           bulletbound.right <= rockbound.right &&
//           bulletbound.top <= rockbound.top &&
//           bulletbound.bottom <= rockbound.bottom
//         ) {
//           // createBlast(bulletbound.left, bulletbound.top);
          

//           // console.log("rockbound",rockbound);
//           // console.log("bulletbound",bulletbound.y);
//           if (bulletbound.y >=80){
//             backgroundMusic1.play();
//             setTimeout(() => {
//               backgroundMusic1.pause();
//               backgroundMusic1.currentTime = 0;
//             }, 1000); // Stop after 1 second
//             rock.parentElement.removeChild(rock);

//             displayQuestion();

            
//           }

          

//           // Call the blast effect function with the position of the collision
//         }
//       }
//     }
//     // console.log("movebullet",movebullet)
   

//     var bulletbottom = parseInt(
//       window.getComputedStyle(bullet).getPropertyValue("bottom")
//     );

//     if (bulletbottom >= 1000) {
//       clearInterval(movebullet);
//     }

//     bullet.style.left = left + (jet.offsetWidth / 10) + "px";
//     console.log("new",bullet.style.left)
//     bullet.style.bottom = bulletbottom + 3 + "px";
//   });
// }




// function calculateJetCenter() {
//   var jetRect = jet.getBoundingClientRect();
//   return jetRect.left + jetRect.width / 10;
// }




// var generaterocks = setInterval(generateRocks, 1000);
// var moverocks = setInterval(moveRocks, 100);

// // function generateRocks() {
// //   if (!isGamePaused) {
// //     // Introduce a random condition to decrease the quantity of rocks
// //     if (Math.random() < 0.3) {
// //       var rock = document.createElement("div");
// //       rock.classList.add("rocks");
// //       rock.style.left = "0";
// //       rock.style.right = "0"; 
// //      rock.style.left = "10px"; // Start rocks from the left side
// //       rock.style.top = Math.floor(Math.random() * 100) + "px"; 
// //       board.appendChild(rock);
// //     }
// //   }
// // }



// function generateRocks() {
//   if (!isGamePaused) {
//     // Introduce a random condition to decrease the quantity of rocks 
//     if  (Math.random()<0.3){
//       console.log("math",Math.random())
//       var rock = document.createElement("div");
//       rock.classList.add("rocks");
//       rock.style.left = "-50px"; // Decrease the starting position
//       rock.style.top = Math.floor(Math.random() * 100) + "px"; 

//       console.log("Rock position:", rock.style.left, rock.style.top);
//       board.appendChild(rock);
//     }
//   }
// }






// function moveRocks() {
//   if (!isGamePaused) {
//     var rocks = document.getElementsByClassName("rocks");

//     if (rocks != undefined) {
//       for (var i = 0; i < rocks.length; i++) {
//         var rock = rocks[i];
//         var rockleft = parseInt(
//           window.getComputedStyle(rock).getPropertyValue("left")
//         );

//         rock.style.left = rockleft + 15 + "px"; 
//       }
//     }
//   }
// }






// var jet = document.getElementById("jet");
// var board = document.getElementById("board");


// // For touch events on mobile
// var touchStartX;

// jet.addEventListener("touchstart", (e) => {
//   touchStartX = e.touches[0].clientX;
// });

// jet.addEventListener("touchmove", (e) => {
//   e.preventDefault(); // Prevent default touchmove behavior (scrolling)

//   var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
//   var touchMoveX = e.touches[0].clientX;

//   if (touchMoveX < touchStartX && left > 0) {
//     jet.style.left = left - 10 + "px"; // Move left
//   } else if (touchMoveX > touchStartX && left <= 1500) {
//     jet.style.left = left + 10 + "px"; // Move right
//   }

//   touchStartX = touchMoveX;
// });

// document.addEventListener("touchend", (e) => {
// });






// // Add this at the beginning of your existing JavaScript file

// // document.addEventListener("DOMContentLoaded", function () {
// //   // Elements
// //   const startPage = document.getElementById("startPage");
// //   const gamePage = document.getElementById("gamePage");
// //   const startButton = document.getElementById("startButton");

// //   // Event listeners
// //   startButton.addEventListener("click", startGame);

// //   // Function to start the game
// //   function startGame() {
// //       startPage.style.display = "none";
// //       gamePage.style.display = "block";
// //       resumeGame(); // Assuming you have a function to start/resume the game
// //   }
// // });



// window.onload = function() {
//   showPopup();
  
// };

// document.addEventListener('DOMContentLoaded', function() {
//   showPopup();
  
// });


// function showPopup() {
//   popup.classList.remove('hide');
//   // bg=document.getElementById('bg-filter');
//   // bg.style.filter = 'blur(10px)'
//   // body.style.filter = 'blur(10px)';
//   button=document.getElementById('startButton');
//   button.style.display = 'none';
//   // pauseGame();
//   isGamePaused = true;
// }

// function closePopup() {
//   const popup = document.getElementById('popup');
//   popup.classList.add('hide');
//   // body.style.filter = 'none';
//   button=document.getElementById('startButton');
//   button.style.display = 'block';
//   // pauseGame();
//   isGamePaused = true;
// }



// function showNewPopup() {
//   document.getElementById('jet').style.display = 'none'
  
//   document.getElementById('board').style.display = 'none'



//   isGamePaused=true
//   backgroundMusic.pause()
//   const newPopup = document.getElementById('newPopup');
//   newPopup.classList.remove('hide');
//   // startScreen.style.filter = 'blur(5px)';
// }

// function closeNewPopup() {
//   const newPopup = document.getElementById('newPopup');
//   newPopup.classList.add('hide');

//   // Unblur the start screen
//   const startScreen = document.querySelector('.startScreen');
//   // startScreen.style.filter = 'none';
// }





// document.addEventListener("DOMContentLoaded", function () {
//   // Elements
//   const startPage = document.getElementById("startPage");
//   const gamePage = document.getElementById("gamePage");
//   const startButton = document.getElementById("startButton");

//   // Audio
//   const backgroundMusic = document.getElementById("backgroundMusic");

//   // Event listeners
//   startButton.addEventListener("click", startGame);

//   // Function to start the game
//   function startGame() {
//       startPage.style.display = "none";
//       gamePage.style.display = "block";
//       resumeGame(); // Assuming you have a function to start/resume the game

//       // Play background music
//       backgroundMusic.play();
//   }
// });









var url = new URL(window.location.href);
var urlParams = new URLSearchParams(window.location.search);
let paramUserID = urlParams.get('Email');
let ParamOrgID= urlParams.get('OrgID');
 let M2OstAssesmentID= urlParams.get('M2ostAssessmentId');
let id_game=urlParams.get('idgame');
let gameAssesmentId=urlParams.get('gameassid');
let currentQuestionIndex=0;
let UID=[];






async function getIdUser(url=`https://www.playtolearn.in/Mini_games_beta/api/UserDetail?OrgId=${ParamOrgID}&Email=${paramUserID}`){
 try{
 const response= await fetch(url, { method: 'GET' });
 const encryptedData = await response.json();
 const IdUser=JSON.parse(encryptedData);
 console.log(encryptedData);
 UID.push(IdUser);
 console.log(UID[0].Id_User);
 getDetails();
//  loader.style.display = "none";
 return encryptedData;
 
 }
 catch (error) {
 console.error('Fetch error:', error.message);
 throw error;
 }
}

async function getDetails(url =`https://www.playtolearn.in/Mini_games_beta/api/GetAssessmentDataList?OrgID=${ParamOrgID}&UID=${UID[0].Id_User}&M2ostAssessmentId=${M2OstAssesmentID}&idgame=${id_game}&gameassid=${gameAssesmentId}`) {
 try {
 const response = await fetch(url, { method: 'GET' });

 // if (!response.ok) {
 // throw new Error(`Network response was not ok, status code: ${response.status}`);
 // }

 const encryptedData = await response.json();
 QuestionList=JSON.parse(encryptedData);
 console.log('ResponseData',QuestionList);


 // Assuming the response is the encrypted data
 

 
 return encryptedData;
 } catch (error) {
 console.error('Fetch error:', error.message);
 throw error;
 }
}


function initializePage() {
 try {
 getIdUser();
 
 
 } catch (error) {
 // console.error('Error during initialization:', error.message);
 }
}

document.addEventListener('DOMContentLoaded', initializePage);


let getResponse;




 async function saveAssessment(data) {
 let postData = data;
 
 
 const baseUrl = 'https://www.playtolearn.in/';
 const endpoint = 'Mini_games_beta/api/assessmentdetailuserlog';
 const url = baseUrl + endpoint;
 
 
 
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 // Add any additional headers if required
 },
 body: JSON.stringify(postData),
 });
 
 // if (!response.ok) {
 // throw new Error(`Network response was not ok, status code: ${response.status}`);
 // }
 console.log('response',response);
 const responseData = await response.json();

 
 
 return responseData;
 }
 async function saveAssessmentMasterLog(data) {
 let postData = data;
 console.log( JSON.stringify(postData));
 
 
 const baseUrl = 'https://www.playtolearn.in/';
 const endpoint = 'Mini_games_beta/api/gameusermasterlog';
 const url = baseUrl + endpoint;
 
 
 
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 // Add any additional headers if required
 },
 body: JSON.stringify(postData),
 });

 
 // if (!response.ok) {
 // throw new Error(`Network response was not ok, status code: ${response.status}`);
 
 // }
// console.log('response',response);
 const responseData = await response.json();
 
 
 return responseData;
 }
 




let isGamePaused = true;


function displayQuestion() {

  if (!isGamePaused && currentQuestionIndex < QuestionList.length) {
    pauseGame();
    document.getElementById('rock').style.display = 'none';
    document.getElementById('jet').style.display = 'none'
    const currentQuestion = QuestionList[currentQuestionIndex];
    displayQuestionInModal(QuestionList[currentQuestionIndex]);
    currentQuestionIndex++;
    backgroundMusic.pause();
    // const backgroundMusic1 = document.getElementById("backgroundMusic1");

    // backgroundMusic1.play()

  }
  else {
    currentQuestionIndex = 0;
    onGameOver();
    }
}




let rank=0;
let scores=10;
let AssementData=[];
let assessmentObject=[];
let GivenAns;





function displayQuestionInModal(questionObj) {
  const question = questionObj.Assessment_Question;
  console.log("question",question)
  console.log("questionobj",questionObj)

  const content = questionObj.assessment_question_url;
 
 
  const options = questionObj.optionList;
  console.log("option",options)
  var assessmentType = questionObj.Assessment_Type;
  var contentDiv = $('#contentDiv');
  
  // Clear existing content in contentDiv
  contentDiv.empty();
  
  // Depending on the assessment type, add the corresponding content
  if (assessmentType === 1) {
  // Add image
  var imageUrl = questionObj.assessment_question_url;
  var imageElement = $('<img>').attr('src', imageUrl).attr('alt', 'Image Alt Text').css({
  'width': '100%',
  'max-width': '100%',
  'height': '26vh',
  'border-radius':'10px'
  });
  contentDiv.append(imageElement);
  } else if (assessmentType === 2) {
  // Add audio
  var audioUrl = questionObj.assessment_question_url;
  var audioElement = $('<audio controls>').attr('src', audioUrl);
  contentDiv.append(audioElement);
  } else if (assessmentType === 3) {
  // Add video
  var videoUrl = questionObj.assessment_question_url;
  var videoElement = $('<video controls>').attr('src', videoUrl).css({
  'width': '100%',
  'max-width': '100%',
  'height': '26vh',
  });
  contentDiv.append(videoElement);
  } else {
  // Handle other assessment types or provide a default behavior
  // contentDiv.text('Unsupported assessment type');
  }
 
 
 
 // Empty the contentDiv and append the new image
//  $('#contentDiv').empty().append(imageElement);
 
  // Display question number and text
  const questionNumber = currentQuestionIndex + 1;
  
  $('#questionText').html(`${question}`);
 
  // Clear existing options
  $('.radio-container').empty();
 
  // Iterate over options and create radio buttons
  options.forEach((option, index) => {
  const optionLabel = $("<label>").text(option.Answer_Description);
  const optionInput = $("<input>").attr({
  type: "radio",
  name: "group",
  value: `${index + 1}`
  });
 
  optionLabel.prepend(optionInput);
  $('.radio-container').append(optionLabel);
  });
 
  
 
 
  $('#continueButton').off('click').on('click', function () {
  const selectedOption = $('input[name=group]:checked').val();
  
  
  if (selectedOption) {
  $('#questionModal').modal('hide');
  // currentQuestionIndex++;
  document.getElementById('jet').style.display = 'block'

  resumeGame();
  
  const errorTextElement = $('#error-text');
  errorTextElement.text("");
  const option=questionObj.optionList;
  console.log(option);
  AssementData.push(questionObj);
 
  // let scores=10;
  console.log(selectedOption);
  console.log(QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1]);
  if (QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Right_Ans=='1') {
      console.log('correct ans')
  
    id_question=QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Id_Assessment_question_ans;
    GivenAns = '1';
    scores = 10;
  } else {
    console.log('wrong answer');
  // Incorrect answer
    id_question=QuestionList[currentQuestionIndex - 1].optionList[selectedOption-1].Id_Assessment_question_ans;
    GivenAns = '2';
    scores = 0; 
  }
  
  // Create an object with assessment data
  const assessmentAnsResponse = {'isRightAns': GivenAns, 'AchieveScore': scores,'id_question':id_question};
  console.log("assessmentAnsResponse",assessmentAnsResponse)
  // Log the AssementData array
  assessmentObject.push(assessmentAnsResponse);
 
  }else {
  const errorTextElement = $('#error-text');
  errorTextElement.text("Click any one option");
  // setTimeout(function () {
  // $('#questionModal').modal('show');
  
  
  // }, 0);
  }
  
  });
 




  


  let timer = 30; // Set the timer duration in seconds
  const timerElement = $('#timer');
  timerElement.text(`${timer} sec`);

  const timerInterval = setInterval(() => {
      timer--;

      if (timer >= 0) {
          timerElement.text(`${timer} Sec`);
      } else {
          clearInterval(timerInterval);
          // Time's up, handle it as needed

          onTimeUp();
      }
  }, 1000);

  // Clear timer when modal is hidden
  $('#questionModal').on('hidden.bs.modal', function () {
      clearInterval(timerInterval);
  });

  // Show the question modal
  $('#questionModal').modal('show');
}


function onTimeUp() {
    // Handle the timeout logic here

    isGamePaused = true; // Set player start to true to resume the game
    // gameStart.play(); // Play the game start audio

    // Automatically select an option (you can modify this based on your logic)
    $('input[name=group]').first().prop('checked', true);

    // Proceed to the next question
    // document.getElementById('jet').style.display = 'block'

    resumeGame();

    // Hide the question modal
    $('#questionModal').modal('hide');
    document.getElementById('jet').style.display = 'block'

}




function pauseGame() {
  isGamePaused = true;
  clearInterval(generaterocks);
  clearInterval(moverocks);
  
}

function resumeGame() {
  
  if (currentQuestionIndex <= QuestionList.length) {
    // window.requestAnimationFrame(gamePlay);
    isGamePaused = false;
    
    generaterocks = setInterval(generateRocks, 1000);
    moverocks = setInterval(moveRocks,100);
    backgroundMusic.play();


  }
  else {
    onGameOver()

  }
  
}

function onGameOver(){
  isGamePaused= true

  const mergedData = AssementData.map((game, index) => ({ ...game, ...assessmentObject[index] }));

  console.log(mergedData);
  let assessmentData =[];
  let assementDataForMasterLog=[];

  var sum=0;
  for (let i = 0; i < mergedData.length; i++) {
  
  sum=mergedData[i].AchieveScore + sum ;
  console.log('inSum',sum);
  
  
  
  // i=1;mergedData
  let model = {
  ID_ORGANIZATION: ParamOrgID,
  id_user:UID[0].Id_User,
  Id_Assessment: mergedData[i].Id_Assessment,
  Id_Game: mergedData[i].Id_Game,
  attempt_no: mergedData[i].allow_attempt,
  id_question:mergedData[i].Id_Assessment_question,
  is_right: mergedData[i].isRightAns,
  score: mergedData[i].AchieveScore,
  Id_Assessment_question_ans:mergedData[i].id_question,
  Time: mergedData[i].Timer,
  M2ostAssessmentId: M2OstAssesmentID
  };
  console.log('OutSum',sum);
  let modelForGameMasterLog = {
  ID_ORGANIZATION: ParamOrgID,
  id_user:UID[0].Id_User,
  Id_Room: mergedData[0].Id_Assessment,
  Id_Game: mergedData[0].Id_Game,
  attempt_no: mergedData[0].allow_attempt,
  score:sum,

};

assessmentData.push(model);
assementDataForMasterLog.push(modelForGameMasterLog);
}
console.log('AssesmentLog',assementDataForMasterLog);

saveAssessment(assessmentData);
saveAssessmentMasterLog(assementDataForMasterLog[assementDataForMasterLog.length - 1]);

showNewPopup()
}







var jet = document.getElementById("jet");
var board = document.getElementById("board");
var touchStartX;

// window.addEventListener("keyup", (e) => {
//   handleKeyPress(e);
// });

// jet.addEventListener("touchstart", (e) => {
//   touchStartX = e.touches[0].clientX;
// });

// jet.addEventListener("touchmove", (e) => {
//   e.preventDefault(); // Prevent default touchmove behavior (scrolling)

//   var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
//   var touchMoveX = e.touches[0].clientX;

//   if (touchMoveX < touchStartX && left >0) {
//     jet.style.left = left - 10 + "px"; // Move left
//   } else if (touchMoveX > touchStartX && left <= 230) {
//     jet.style.left = left + 10 + "px"; // Move right
//   }

//   touchStartX = touchMoveX;
// });

// jet.addEventListener("touchend", (e) => {
//   // // Handle touch end event for shooting bullets
//   // var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
//   // shootBullet(left);
//   var center = calculateJetCenter();
//   shootBullet(center);
// });

// function handleKeyPress(e) {
//   var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));

//   if (e.key == "ArrowLeft" && left > 0) {
//     jet.style.left = left - 10 + "px";
//   } else if (e.key == "ArrowRight" && left <= 1500) {
//     jet.style.left = left + 10 + "px";
//   }

//   if (e.key == "ArrowUp" ) {
//     shootBullet(left);
//   }
// }




let left = 0; // Initialize left variable outside the functions

window.addEventListener("keydown", (e) => {
  handleKeyDown(e);
});

window.addEventListener("keyup", (e) => {
  handleKeyUp(e);
});

jet.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

jet.addEventListener("touchmove", (e) => {
  e.preventDefault(); // Prevent default touchmove behavior (scrolling)

  left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  var touchMoveX = e.touches[0].clientX;

  if (touchMoveX < touchStartX && left > 0) {
    jet.style.left = left - 10 + "px"; // Move left
  } else if (touchMoveX > touchStartX && left <= 230) {
    jet.style.left = left + 10 + "px"; // Move right
  }

  touchStartX = touchMoveX;
});

jet.addEventListener("touchend", (e) => {
  var center = calculateJetCenter();
  shootBullet(center);
});

function handleKeyDown(e) {
  left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));

  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  } else if (e.key == "ArrowRight" && left <= 1500) {
    jet.style.left = left + 10 + "px";
  }
}

function handleKeyUp(e) {
  // Handle keyup events if needed
  if (e.key == "ArrowUp") {
    // Handle keyup logic for "ArrowUp"
    shootBullet(left);
    console.log("ArrowUp key released");
  }
}





function shootBullet(left) {
  const backgroundMusic1 = document.getElementById("backgroundMusic1");

  var bullet = document.createElement("div");
  bullet.classList.add("bullets");
  board.appendChild(bullet);

  var movebullet = setInterval(() => {
    var rocks = document.getElementsByClassName("rocks");

    for (var i = 0; i < rocks.length; i++) {
      var rock = rocks[i];
      if (rock != undefined) {
        var rockbound = rock.getBoundingClientRect();
       
        var bulletbound = bullet.getBoundingClientRect();
        

        if (
          bulletbound.left >= rockbound.left &&
          bulletbound.right <= rockbound.right &&
          bulletbound.top <= rockbound.top &&
          bulletbound.bottom <= rockbound.bottom
        ) {
          // createBlast(bulletbound.left, bulletbound.top);
          

          // console.log("rockbound",rockbound);
          // console.log("bulletbound",bulletbound.y);
          if (bulletbound.y >=80){
            backgroundMusic1.play();
            setTimeout(() => {
              backgroundMusic1.pause();
              backgroundMusic1.currentTime = 0;
            }, 1000); // Stop after 1 second
            rock.parentElement.removeChild(rock);

            displayQuestion();

            
          }

          

          // Call the blast effect function with the position of the collision
        }
      }
    }
    // console.log("movebullet",movebullet)
   

    var bulletbottom = parseInt(
      window.getComputedStyle(bullet).getPropertyValue("bottom")
    );

    if (bulletbottom >= 1000) {
      clearInterval(movebullet);
    }

    bullet.style.left = left + (jet.offsetWidth / 10) + "px";
    console.log("new",bullet.style.left)
    bullet.style.bottom = bulletbottom + 3 + "px";
  });
}




function calculateJetCenter() {
  var jetRect = jet.getBoundingClientRect();
  return jetRect.left + jetRect.width / 10;
}




var generaterocks = setInterval(generateRocks, 1000);
var moverocks = setInterval(moveRocks, 100);

// function generateRocks() {
//   if (!isGamePaused) {
//     // Introduce a random condition to decrease the quantity of rocks
//     if (Math.random() < 0.3) {
//       var rock = document.createElement("div");
//       rock.classList.add("rocks");
//       rock.style.left = "0";
//       rock.style.right = "0"; 
//      rock.style.left = "10px"; // Start rocks from the left side
//       rock.style.top = Math.floor(Math.random() * 100) + "px"; 
//       board.appendChild(rock);
//     }
//   }
// }



function generateRocks() {
  if (!isGamePaused) {
    // Introduce a random condition to decrease the quantity of rocks 
    if  (Math.random()<0.3){
      console.log("math",Math.random())
      var rock = document.createElement("div");
      rock.classList.add("rocks");
      rock.style.left = "-50px"; // Decrease the starting position
      rock.style.top = Math.floor(Math.random() * 100) + "px"; 

      console.log("Rock position:", rock.style.left, rock.style.top);
      board.appendChild(rock);
    }
  }
}






function moveRocks() {
  if (!isGamePaused) {
    var rocks = document.getElementsByClassName("rocks");

    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rockleft = parseInt(
          window.getComputedStyle(rock).getPropertyValue("left")
        );

        rock.style.left = rockleft + 15 + "px"; 
      }
    }
  }
}






var jet = document.getElementById("jet");
var board = document.getElementById("board");


// For touch events on mobile
var touchStartX;

jet.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

jet.addEventListener("touchmove", (e) => {
  e.preventDefault(); // Prevent default touchmove behavior (scrolling)

  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  var touchMoveX = e.touches[0].clientX;

  if (touchMoveX < touchStartX && left > 0) {
    jet.style.left = left - 10 + "px"; // Move left
  } else if (touchMoveX > touchStartX && left <= 1500) {
    jet.style.left = left + 10 + "px"; // Move right
  }

  touchStartX = touchMoveX;
});

document.addEventListener("touchend", (e) => {
});






// Add this at the beginning of your existing JavaScript file

// document.addEventListener("DOMContentLoaded", function () {
//   // Elements
//   const startPage = document.getElementById("startPage");
//   const gamePage = document.getElementById("gamePage");
//   const startButton = document.getElementById("startButton");

//   // Event listeners
//   startButton.addEventListener("click", startGame);

//   // Function to start the game
//   function startGame() {
//       startPage.style.display = "none";
//       gamePage.style.display = "block";
//       resumeGame(); // Assuming you have a function to start/resume the game
//   }
// });



window.onload = function() {
  showPopup();
  
};

document.addEventListener('DOMContentLoaded', function() {
  showPopup();
  
});


function showPopup() {
  popup.classList.remove('hide');
  // bg=document.getElementById('bg-filter');
  // bg.style.filter = 'blur(10px)'
  // body.style.filter = 'blur(10px)';
  button=document.getElementById('startButton');
  button.style.display = 'none';
  // pauseGame();
  isGamePaused = true;
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hide');
  // body.style.filter = 'none';
  button=document.getElementById('startButton');
  button.style.display = 'block';
  // pauseGame();
  isGamePaused = true;
}



function showNewPopup() {
  document.getElementById('jet').style.display = 'none'
  
  document.getElementById('board').style.display = 'none'



  isGamePaused=true
  backgroundMusic.pause()
  const newPopup = document.getElementById('newPopup');
  newPopup.classList.remove('hide');
  // startScreen.style.filter = 'blur(5px)';
}

function closeNewPopup() {
  const newPopup = document.getElementById('newPopup');
  newPopup.classList.add('hide');

  // Unblur the start screen
  const startScreen = document.querySelector('.startScreen');
  // startScreen.style.filter = 'none';
}





document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const startPage = document.getElementById("startPage");
  const gamePage = document.getElementById("gamePage");
  const startButton = document.getElementById("startButton");

  // Audio
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Event listeners
  startButton.addEventListener("click", startGame);

  // Function to start the game
  function startGame() {
      startPage.style.display = "none";
      gamePage.style.display = "block";
      resumeGame(); // Assuming you have a function to start/resume the game

      // Play background music
      backgroundMusic.play();
  }
});
