document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  // Dark Mode toggle
  const darkToggle = document.getElementById("dark-mode-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Quick Messages
  const messages = {
    birthday: [
      "Happy Birthday! 🎉🎂",
      "Wishing you a wonderful year ahead!",
      "Many many happy returns of the day!"
    ],
    sorry: [
      "Sorry, I didn’t mean to upset you 🙏",
      "Please forgive me for my mistake.",
      "Apologies for the inconvenience."
    ],
    thanks: [
      "Thank you so much! 😊",
      "I really appreciate your help!",
      "Thanks a ton!"
    ],
    formal: [
      "I hope this message finds you well.",
      "I am writing to kindly remind you of the pending task.",
      "Please let me know if you need further details."
    ],
    whatsapp: [
      "I’ll call you later.",
      "Can’t talk now, will message soon.",
      "Okay 👍"
    ]
  };

  const messageBtn = document.getElementById("generate-message");
  const messageOutput = document.getElementById("message-output");
  const copyBtn = document.getElementById("copy-message");

  messageBtn.addEventListener("click", () => {
    const category = document.getElementById("message-category").value;
    const options = messages[category];
    const random = options[Math.floor(Math.random() * options.length)];
    messageOutput.textContent = random;
  });

  copyBtn.addEventListener("click", () => {
    if (messageOutput.textContent) {
      navigator.clipboard.writeText(messageOutput.textContent);
      alert("Message copied!");
    }
  });

  // Complaint Letters
  const letters = {
    landlord: "Dear Landlord,\n\nI am writing to bring to your attention an urgent matter regarding my apartment. Kindly resolve this at the earliest.\n\nSincerely,\n[Your Name]",
    school: "Dear Principal,\n\nI wish to file a complaint regarding the issue faced by students in the classroom. Kindly take necessary action.\n\nSincerely,\n[Your Name]",
    electricity: "To The Electricity Board,\n\nI am writing to report frequent power cuts in my area. Kindly look into this matter urgently.\n\nSincerely,\n[Your Name]"
  };

  const letterBtn = document.getElementById("generate-letter");
  const letterOutput = document.getElementById("letter-output");
  const copyLetterBtn = document.getElementById("copy-letter");

  letterBtn.addEventListener("click", () => {
    const category = document.getElementById("letter-category").value;
    letterOutput.value = letters[category];
  });

  copyLetterBtn.addEventListener("click", () => {
    if (letterOutput.value) {
      navigator.clipboard.writeText(letterOutput.value);
      alert("Letter copied!");
    }
  });

  // Life Hacks
  const hacks = [
    "Drink water before meals to aid digestion.",
    "Use vinegar to clean glass surfaces.",
    "Write tasks at night for a productive morning.",
    "Keep backup contacts saved in two places.",
    "Stretch for 5 minutes every morning."
  ];
  const hackOutput = document.getElementById("hack-output");
  const hackBtn = document.getElementById("next-hack");
  function showRandomHack() {
    const randomHack = hacks[Math.floor(Math.random() * hacks.length)];
    hackOutput.textContent = randomHack;
  }
  hackBtn.addEventListener("click", showRandomHack);
  showRandomHack();

  // Health Tracker
  const addMedicineBtn = document.getElementById("add-medicine");
  const medList = document.getElementById("medicine-list");
  addMedicineBtn.addEventListener("click", () => {
    const medName = document.getElementById("medicine-name").value;
    const medTime = document.getElementById("medicine-time").value;
    if (medName && medTime) {
      const li = document.createElement("li");
      li.textContent = `${medName} - ${medTime}`;
      medList.appendChild(li);
    }
  });

  // Emergency Contacts
  const addContactBtn = document.getElementById("add-contact");
  const contactList = document.getElementById("contact-list");
  addContactBtn.addEventListener("click", () => {
    const name = document.getElementById("contact-name").value;
    const number = document.getElementById("contact-number").value;
    if (name && number) {
      const li = document.createElement("li");
      li.textContent = `${name} – ${number}`;
      contactList.appendChild(li);
    }
  });
});
