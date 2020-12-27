const loginButton = document.getElementById('loginbtn');
loginButton.addEventListener ('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display ="none";
    const transaction = document.getElementById("transaction-area");
    transaction.style.display ="block";
});
// Transaction Area
const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function(){
    const depositInput =document.getElementById("depoInput").value;
    const depositfinal = parseFloat(depositInput);
    const total = document.getElementById("finalDeposit").innerText;
    const currentdeposit = parseFloat(total);
    const finalDepo = depositfinal + currentdeposit;
    document.getElementById("finalDeposit").innerText = finalDepo;
    document.getElementById("depoInput").value ="";

    const currentBalance = document.getElementById("totalBalance").innerText;
    const totalBalance = parseFloat(currentBalance);
    const finalBalance = totalBalance + depositfinal;

    document.getElementById("totalBalance").innerText = finalBalance;
    });
    // Widthdraw area

    const widthdrawBtn = document.getElementById("widthdrawBtn");
    widthdrawBtn.addEventListener("click", function(){
        const amount = document.getElementById("widthdrawAmount").value;
        const amountTotal = parseFloat(amount);
        

        const addWidthdraw = document.getElementById("addWidthdraw").innerText;
        const pushWidthdraw = parseFloat(addWidthdraw);

        const finalAddWidthdraw = amountTotal + pushWidthdraw;
        document.getElementById("addWidthdraw").innerText = finalAddWidthdraw;
        // Remove From Balance
        const currentBalance = document.getElementById("totalBalance").innerText;
        const totalBalance = parseFloat(currentBalance);
        const finalBlnc = totalBalance - 1* amount;

        document.getElementById("totalBalance").innerText= finalBlnc;
        document.getElementById("widthdrawAmount").value = "";



    })
    


