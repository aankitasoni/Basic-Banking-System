let netBalance = parseInt(document.getElementById("netBalance").innerText);

function sendMoney() {
  var enterName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);

  if (enterAmount > 10000) {
    alert("To Much Value.")
  } else {
    var userAccount = enterName + "BankBalance";
    var finalAmount = parseInt(document.getElementById(userAccount).innerHTML) + enterAmount;
    var netBalance = parseInt(document.getElementById("netBalance").innerText) - enterAmount
    document.getElementById("netBalance").innerText = netBalance
    document.getElementById(userAccount).innerHTML = finalAmount;
    alert(`Successful Transaction !!
      $${enterAmount} is sent to ${enterName}@email.com.`)

    // transaction history
    var createPTag = document.createElement("li");
    var data = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
    createPTag.appendChild(data);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
