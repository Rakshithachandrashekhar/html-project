const quizData = [
    { question: "What is the default value of a local variable in Java?", options: ["0", "null", "undefined", "No default value"], correct: 3 },
    { question: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], correct: 0 },
    { question: "What is JVM?", options: ["Java Virtual Machine", "Java Variable Machine", "Java Value Machine", "Java Void Machine"], correct: 0 },
    { question: "Which method is called when an object is destroyed in Java?", options: ["delete()", "finalize()", "destroy()", "None"], correct: 1 },
    { question: "Which keyword is used to prevent inheritance in Java?", options: ["final", "static", "abstract", "protected"], correct: 0 },
    { question: "What is the size of an int in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], correct: 2 },
    { question: "What is the size of a long data type in Java?", options: ["16 bits", "32 bits", "64 bits", "128 bits"], correct: 2 },
    { question: "Which of these is not a Java feature?", options: ["Object-Oriented", "Platform Independent", "Use of Pointers", "Dynamic"], correct: 2 },
    { question: "Which method converts a string to an integer in Java?", options: ["parseInt()", "toInteger()", "convertInt()", "parseInteger()"], correct: 0 },
    { question: "What is the return type of a constructor in Java?", options: ["void", "Object", "Class", "None"], correct: 3 },
    { question: "Which loop guarantees execution at least once?", options: ["for", "while", "do-while", "None"], correct: 2 },
    { question: "Which method is used to find the length of a string in Java?", options: ["size()", "length()", "length", "getSize()"], correct: 1 },
    { question: "What is the default value of a boolean in Java?", options: ["true", "false", "null", "undefined"], correct: 1 },
    { question: "Which package is imported by default in Java?", options: ["java.util", "java.lang", "java.io", "java.net"], correct: 1 },
    { question: "What does the 'static' keyword mean?", options: ["Method belongs to class", "Method is thread-safe", "Method is abstract", "Method cannot be overridden"], correct: 0 },
    { question: "Which class is the parent of all classes?", options: ["Object", "Class", "Base", "Super"], correct: 0 },
    { question: "What is the size of a char in Java?", options: ["32 byte", "16 bytes", "4 bytes", "8 bytes"], correct: 1 },
    { question: "Which statement is true about Java?", options: ["Java is compiled", "Java uses garbage collection", "Java is not platform independent", "Java supports pointers"], correct: 1 },
    { question: "What is 'bytecode' in Java?", options: ["Code written by user", "Intermediate code", "Code executed by JVM", "None"], correct: 2 },
    { question: "Which loop is used to iterate over collections in Java?", options: ["for", "foreach", "while", "do-while"], correct: 1 },
    { question: "What is the purpose of the 'this' keyword in Java?", options: ["Refers to parent class", "Refers to current object", "Refers to a static context", "Refers to current package"], correct: 1 },
    { question: "What does 'abstract' mean in Java?", options: ["Non-inheritable", "Cannot be instantiated", "Immutable", "Static"], correct: 1 },
    { question: "Which exception is thrown when an array is accessed with an invalid index?", options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "ArithmeticException", "IOException"], correct: 0 },
    { question: "Which interface is used to define a collection without duplicates?", options: ["Set", "List", "Queue", "Deque"], correct: 0 },
    { question: "What does the 'finally' block do?", options: ["Always executes", "Handles exceptions", "Returns a value", "None"], correct: 0 },
    { question: "Which keyword is used to declare a constant variable?", options: ["const", "static", "final", "immutable"], correct: 2 },
    { question: "Which method starts a thread in Java?", options: ["init()", "start()", "run()", "begin()"], correct: 1 },
    { question: "How is an object created in Java?", options: ["Object obj = new Object();", "Object obj();", "Object obj = create();", "Object obj = Object.new();"], correct: 0 },
    { question: "What is the purpose of the 'super' keyword in Java?", options: ["Access child class variables", "Access parent class variables", "Access static variables", "Access sibling class variables"], correct: 1 },
    { question: "Which method in Java is used to handle strings?", options: ["equals()", "compareTo()", "substring()", "All of these"], correct: 3 }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let answeredQuestions = [];
  
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  const submitButton = document.getElementById("submit-btn");
  
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    answersElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("answer");
      button.addEventListener("click", () => checkAnswer(index, button));
      answersElement.appendChild(button);
    });
  
    nextButton.classList.add("hidden");
    submitButton.classList.add("hidden");
  }
  
  
  function checkAnswer(selectedIndex, button) {
    const correctIndex = quizData[currentQuestionIndex].correct;
  
    if (selectedIndex === correctIndex) {
      score++;
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  
    Array.from(answersElement.children).forEach((btn, index) => {
      btn.disabled = true;
      if (index === correctIndex) {
        btn.classList.add("correct");
      }
    });
  
    answeredQuestions.push(currentQuestionIndex);
  
    if (answeredQuestions.length === quizData.length) {
      submitButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
    }
  }
  
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    }
  });
  
  
  submitButton.addEventListener("click", () => {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", quizData.length);
    window.location.href = "result.html";
  });
  
  
  loadQuestion();
  
