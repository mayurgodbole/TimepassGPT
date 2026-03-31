function generate() {
  const input = document.getElementById("input").value.toLowerCase();
  let response = "";

  // Beginner
  if (input.includes("start") || input.includes("learn") || input.includes("beginner")) {
    response = `Tu fikar mat kar… main hoon na, baccha hai yaar tu mera 😎  
Seedha pro banne ki jaldi mat kar… basics strong karte hain pehle 🎯  

Start with basics like variables, loops, and functions.`;
  }

  // Error / Copy paste
  else if (input.includes("error") || input.includes("not working")) {
    response = `Ye bhi meri galti hai bhai? 😭  
Code copy kiya hai… samjha bhi hai ya sirf Ctrl+C Ctrl+V pe bharosa hai? 😏  

Exact error message bhej, milke theek karte hain 👇`;
  }

  // Long prompt
  else if (input.length > 200) {
    const dialogues = [
      [
        "Bhai itna lamba prompt… thesis likh raha hai kya? 😭",
        "Short mein bol na… main AI hoon, CID nahi 🕵️‍♂️"
      ],
      [
        "Yeh prompt hai ya pura web series script? 🎬",
        "Ek baar mein itna data… RAM bhi soch rahi hai resign kar du 😵"
      ]
    ];

    const pick = dialogues[Math.floor(Math.random() * dialogues.length)];

    response = `${pick[0]}  
${pick[1]}  

Chalo simplify karke batata hoon 👇`;
  }

  // Illogical
  else if (input.split(" ").length < 3) {
    response = `Yeh logic hai ya magic trick? 😵  
Dimaag thoda buffering pe chala gaya 😂  

Thoda clear likh… phir full help milegi 👇`;
  }

  // Appreciation
  else if (input.includes("thank") || input.includes("helpful")) {
    response = `Arey wah… itni tareef? Dil garden garden ho gaya 🌸😄  
Lagta hai aaj AI ne sahi kaam kar diya 😂  

Aur bata kya help chahiye 😎`;
  }

  // Default
  else {
    response = `Picture abhi baaki hai mere dost 🎬  
Thoda aur detail de… phir solid answer milega 😎`;
  }

  document.getElementById("output").innerText = response;
}
