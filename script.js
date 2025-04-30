const questions = [
    {
      question: "من هو مخترع المصباح الكهربائي؟",
      answers: ["توماس إديسون", "ألبرت أينشتاين", "نيوتن", "ماركوني"],
      correct: "توماس إديسون"
    },
    {
      question: "كم عدد ألوان قوس قزح؟",
      answers: ["5", "6", "7", "8"],
      correct: "7"
    },
    {
      question: "ما هو الكوكب الأقرب إلى الشمس؟",
      answers: ["الأرض", "عطارد", "الزهرة", "المريخ"],
      correct: "عطارد"
    },
    {
      question: "ما هو أطول حيوان بري في العالم؟",
      answers: ["الفيل", "الزرافة", "الأسد", "الحوت"],
      correct: "الزرافة"
    },
    {
      question: "في أي قارة تقع مصر؟",
      answers: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الجنوبية"],
      correct: "أفريقيا"
    },
    {
      question: "ما هي عاصمة اليابان؟",
      answers: ["كيوتو", "طوكيو", "أوساكا", "هيروشيما"],
      correct: "طوكيو"
    },
    {
      question: "كم عدد أرجل العنكبوت؟",
      answers: ["6", "8", "10", "12"],
      correct: "8"
    },
    {
      question: "من هو أول إنسان صعد إلى الفضاء؟",
      answers: ["نيل آرمسترونغ", "يوري غاغارين", "باز ألدرين", "ألبرت أينشتاين"],
      correct: "يوري غاغارين"
    },
    {
      question: "ما هو أسرع حيوان بري؟",
      answers: ["الفهد", "الأسد", "الغزال", "النمر"],
      correct: "الفهد"
    },
    {
      question: "ما هو البحر الذي يفصل بين السعودية وأفريقيا؟",
      answers: ["البحر الأحمر", "البحر الأبيض المتوسط", "البحر الأسود", "بحر قزوين"],
      correct: "البحر الأحمر"
    },
    
    {
    question: "ما عاصمة فرنسا؟",
    answers: ["برلين", "مدريد", "باريس", "روما"],
    correct: "باريس"
    },

  {
    question: "كم عدد الكواكب في المجموعة الشمسية؟",
    answers: ["7", "8", "9", "10"],
    correct: "8"
 },
  {
    question: "ما هو أطول نهر في العالم؟",
    answers: ["النيل", "الأمازون", "الفرات", "الدانوب"],
    correct: "النيل"
  },
  {
    question: "ما هو العنصر الأكثر وفرة في قشرة الأرض؟",
    answers: ["الحديد", "الأكسجين", "الكربون", "الهيدروجين"],
    correct: "الأكسجين"
  },
  {
    question: "في أي سنة بدأ أول كأس عالم لكرة القدم؟",
    answers: ["1920", "1930", "1940", "1950"],
    correct: "1930"
  },
  {
    question: "من هو مؤسس علم الجبر؟",
    answers: ["الخوارزمي", "ابن سينا", "ابن الهيثم", "أرسطو"],
    correct: "الخوارزمي"
  },
  {
    question: "ما هي أكبر قارة من حيث المساحة؟",
    answers: ["أفريقيا", "أوروبا", "آسيا", "أمريكا الشمالية"],
    correct: "آسيا"
  },
  
    {
      question: "شيء كلما أخذت منه يكبر، ما هو؟",
      answers: ["الفراغ", "الوقت", "المال", "الخبرة"],
      correct: "الفراغ"
    },
    {
      question: "ما هو الرقم الذي إذا ضربته بنفسه ثم أضفت له نفسه كان الناتج 30؟",
      answers: ["5", "6", "4", "3"],
      correct: "5"
    },
    {
      question: "ما هو الشيء الذي يسير بلا أرجل ولا يدخل إلا بالأذنين؟",
      answers: ["الهواء", "الصوت", "النور", "الرائحة"],
      correct: "الصوت"
    },
    {
      question: "له أوراق لكنه ليس شجرة، فما هو؟",
      answers: ["الكتاب", "الدفتر", "الصحيفة", "الخريطة"],
      correct: "الكتاب"
    },
    {
      question: "ما الشيء الذي كلما زاد نقص؟",
      answers: ["العمر", "العقل", "العلم", "النوم"],
      correct: "العمر"
    },
    {
      question: "ما هو الباب الذي لا يمكن فتحه؟",
      answers: ["باب السجن", "الباب المفتوح", "الباب المغلق", "الباب المقفول"],
      correct: "الباب المفتوح"
    },
  ];
  
  let currentQuestion = 0;/*رقم السؤال الحالي اللي يعرض للمستخدم (نبدأ من أول سؤال يعني رقم 0).*/
  let score = 0; // عداد النقاط


const questionElement  =document.getElementById("question")/*مكان كتابة السؤال.*/
const answersElement =document.getElementById("answers")/*مكان ظهور الأزرار اللي تمثل الإجابات.*/
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";/*نمسح الإجابات القديمة عشان ما تتراكم.*/ 
  
    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(answer,btn);
      answersElement.appendChild(btn);/*خذ الزر اللي أنشأناه وأضفه داخل مكان ظهور الإجابات في الصفحة*/
    });
  }
  
  function checkAnswer(selectedAnswer, button) {
    const correct = questions[currentQuestion].correct;
  
    if (selectedAnswer === correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("incorrect");
    }
  
    // تلوين الزر الصحيح مهما كانت الإجابة
    Array.from(answersElement.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });
  }
  
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = `انتهت اللعبة! ✅ نتيجتك: ${score} من ${questions.length}`;
      answersElement.innerHTML = "";
      nextBtn.style.display = "none";
      
    }
  };

    
  
  showQuestion();