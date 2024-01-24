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






const QuestionList=
    [
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 79,
          "Id_Assessment": 14,
          "Assessment_Question": "1.भारत के वर्तमान सीईओ कौन हैं?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 280,
              "Id_Assessment_question": 79,
              "Answer_Description": "a)गुंजन शाहrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946587000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 281,
              "Id_Assessment_question": 79,
              "Answer_Description": "b)संदीप कटारिया",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946621000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 282,
              "Id_Assessment_question": 79,
              "Answer_Description": "ग) क्रिस किर्क",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946648000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 283,
              "Id_Assessment_question": 79,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701946673000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 80,
          "Id_Assessment": 14,
          "Assessment_Question": "3.बाटा इंडिया लिमिटेड (BIL) की शुरुआत हुई:rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 288,
              "Id_Assessment_question": 80,
              "Answer_Description": "ए)1894",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947726000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 289,
              "Id_Assessment_question": 80,
              "Answer_Description": "बी)1931",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947748000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 290,
              "Id_Assessment_question": 80,
              "Answer_Description": "ग)1936",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947769000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 291,
              "Id_Assessment_question": 80,
              "Answer_Description": "घ) उपरोक्त में से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947796000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 81,
          "Id_Assessment": 14,
          "Assessment_Question": "4. भारत में 3 विनिर्माण इकाइयों के नाम बताइए।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 292,
              "Id_Assessment_question": 81,
              "Answer_Description": "ए) बाटा नगर,",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947821000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 293,
              "Id_Assessment_question": 81,
              "Answer_Description": "b) बाटा गंज",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947844000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 294,
              "Id_Assessment_question": 81,
              "Answer_Description": "c) बता शतक",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947866000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 295,
              "Id_Assessment_question": 81,
              "Answer_Description": "D। उपरोक्त सभी",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947885000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 82,
          "Id_Assessment": 14,
          "Assessment_Question": "5. बाटा कंपनी की दुनिया भर में __ उत्पादन इकाई है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 296,
              "Id_Assessment_question": 82,
              "Answer_Description": "ए) 32",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947915000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 297,
              "Id_Assessment_question": 82,
              "Answer_Description": "बी)34",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947936000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 298,
              "Id_Assessment_question": 82,
              "Answer_Description": "ग) 26",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947961000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 299,
              "Id_Assessment_question": 82,
              "Answer_Description": "घ) 26",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947977000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 83,
          "Id_Assessment": 14,
          "Assessment_Question": "6.BC की उपस्थिति __ से अधिक देशों में है।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 300,
              "Id_Assessment_question": 83,
              "Answer_Description": "ए)50+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947998000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 301,
              "Id_Assessment_question": 83,
              "Answer_Description": "बी)70+",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948021000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 302,
              "Id_Assessment_question": 83,
              "Answer_Description": "ग)80+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948064000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 303,
              "Id_Assessment_question": 83,
              "Answer_Description": "घ)100+",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948092000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 84,
          "Id_Assessment": 14,
          "Assessment_Question": "7.BCP का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 304,
              "Id_Assessment_question": 84,
              "Answer_Description": "a) बाटा चैट प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948118000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 305,
              "Id_Assessment_question": 84,
              "Answer_Description": "b)बाटा चिल्ड्रेन प्रोग्राम",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948144000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 306,
              "Id_Assessment_question": 84,
              "Answer_Description": "c) बाटा कॉर्पोरेशन प्रोग्राम",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948166000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 307,
              "Id_Assessment_question": 84,
              "Answer_Description": "d)बाटा कंपनी प्रोफाइलrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948192000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 85,
          "Id_Assessment": 14,
          "Assessment_Question": "rnrn8)बाटा कंपनी की शुरुआत कब हुई?rn",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 308,
              "Id_Assessment_question": 85,
              "Answer_Description": "1894rn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948219000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 309,
              "Id_Assessment_question": 85,
              "Answer_Description": "बी) 1856",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948240000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 310,
              "Id_Assessment_question": 85,
              "Answer_Description": "ग) 1908",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948263000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 311,
              "Id_Assessment_question": 85,
              "Answer_Description": "घ) 1915",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948289000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 86,
          "Id_Assessment": 14,
          "Assessment_Question": "9. BIL के भारत में __ संख्या में स्टोर हैं।",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 312,
              "Id_Assessment_question": 86,
              "Answer_Description": "ए) 1558",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948324000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 313,
              "Id_Assessment_question": 86,
              "Answer_Description": "बी) 1200",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948340000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 314,
              "Id_Assessment_question": 86,
              "Answer_Description": "ग) 1100",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948370000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 315,
              "Id_Assessment_question": 86,
              "Answer_Description": "घ) 5000",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948416000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 87,
          "Id_Assessment": 14,
          "Assessment_Question": "10.कंप्यूटर सीखना विज्ञान प्रयोगशालाओं तक पहुंच किस कार्यक्रम के अंतर्गत आता है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 316,
              "Id_Assessment_question": 87,
              "Answer_Description": "क) गर्व के साथ आगे बढ़ें।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948447000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 317,
              "Id_Assessment_question": 87,
              "Answer_Description": "ख) नन्हीं कली।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948467000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 318,
              "Id_Assessment_question": 87,
              "Answer_Description": "ग) एसटीईएम कार्यक्रम।",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948492000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 319,
              "Id_Assessment_question": 87,
              "Answer_Description": "घ) हैप्पी फीट।",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701948517000)",
              "Id_CmsUser": 21
            }
          ]
        },
        {
          "Id_Game": 10,
          "Start_Date": null,
          "Expiry_Date": null,
          "Id_Assessment_question": 88,
          "Id_Assessment": 14,
          "Assessment_Question": "2.BIL का पूर्ण रूप क्या है?",
          "allow_attempt": 1,
          "Previous_button": 0,
          "Assessment_Type": 4,
          "assessment_question_url": null,
          "Timer": 30,
          "optionList": [
            {
              "Id_Assessment_question_ans": 284,
              "Id_Assessment_question": 88,
              "Answer_Description": "a) बाटा इंडिया लिमिटrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947631000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 285,
              "Id_Assessment_question": 88,
              "Answer_Description": "b) बाटा इंडियन लिमिटेडrn",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947650000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 286,
              "Id_Assessment_question": 88,
              "Answer_Description": "c) बाटा इंडिया लिमिटेडrn",
              "Right_Ans": 1,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947675000)",
              "Id_CmsUser": 21
            },
            {
              "Id_Assessment_question_ans": 287,
              "Id_Assessment_question": 88,
              "Answer_Description": "d)इनमें से कोई नहीं",
              "Right_Ans": 2,
              "Score_Coins": 10,
              "ID_ORGANIZATION": 15,
              "IsActive": "A",
              "Updated_Date_Time": "Date(1701947701000)",
              "Id_CmsUser": 21
            }
          ]
        }

]







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
