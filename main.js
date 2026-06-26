function checkPassword(){

let password =
document.getElementById("password").value;

let result =
document.getElementById("result");

let score =
document.getElementById("score");

if(password.length < 6){

result.innerHTML =
"❌ Weak Password";

score.innerHTML =
"Score : 30/100";
}

else if(password.length < 10){

result.innerHTML =
"⚠️ Medium Password";

score.innerHTML =
"Score : 65/100";
}

else{

result.innerHTML =
"✅ Strong Password";

score.innerHTML =
"Score : 95/100";
}

}
function generatePassword(){

let length =
document.getElementById("length").value;

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password = "";

for(let i=0;i<length;i++){

password += chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById(
"generatedPassword"
).value = password;

}
function analyzeRisk(){

let antivirus =
Number(
document.getElementById(
"antivirus"
).value
);

let mfa =
Number(
document.getElementById(
"mfa"
).value
);

let update =
Number(
document.getElementById(
"update"
).value
);

let score =
antivirus + mfa + update;

let result =
document.getElementById(
"riskResult"
);

let securityScore =
document.getElementById(
"securityScore"
);

let recommendation =
document.getElementById(
"recommendation"
);

let progressBar =
document.getElementById(
"progress-bar"
);

if(score === 3){

result.innerHTML =
"✅ LOW RISK";

result.style.color =
"lime";

securityScore.innerHTML =
"Security Score : 100%";

progressBar.style.width =
"100%";

progressBar.style.background =
"lime";

recommendation.innerHTML =
"Excellent Security Practices!";
}

else if(score === 2){

result.innerHTML =
"⚠️ MEDIUM RISK";

result.style.color =
"orange";

securityScore.innerHTML =
"Security Score : 67%";

progressBar.style.width =
"67%";

progressBar.style.background =
"orange";

recommendation.innerHTML =
"Enable MFA and keep software updated.";
}

else{

result.innerHTML =
"❌ HIGH RISK";

result.style.color =
"red";

securityScore.innerHTML =
"Security Score : 33%";

progressBar.style.width =
"33%";

progressBar.style.background =
"red";

recommendation.innerHTML =
"Install Antivirus, Enable MFA, Update Software.";
}

}
