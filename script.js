var count = 0;
var state = 0;
var name_1, count_1 = 0;
var name_2, count_2 = 0;
var countRef_1;
var countRef_2;

function initGame() {
	state = 0;
	count = 0;
	var table = document.getElementsByClassName("gamefield")[0];
	var tbody = table.tBodies[0];
	var rows = tbody.rows;
	for (var i = 0; i < 3; i++) {
		var row = rows[i];
		var cells = row.cells;
		for (var j = 0; j < 3; j++) {
			var cell = cells[j];
			cell.innerText = "#";
		}
	}
	table.style.display = "block";
	document.getElementsByClassName("players")[0].style.display = "block";
}

function newText() {
	var symb;
	if (state == 0) symb = "X";
	else symb = "O";
	if (this.innerText == "#") {
		this.innerText = symb;
		if (state == 0) state = 1;
		else state = 0;
	}
	count = count + 1;
	checkWin();
}

window.onload = function() {
	var table = document.getElementsByClassName("gamefield")[0];
	var tbody = table.tBodies[0];
	var rows = tbody.rows;
	for (var i = 0; i < 3; i++) {
		var row = rows[i];
		var cells = row.cells;
		for (var j = 0; j < 3; j++) {
			var cell = cells[j];
			cell.addEventListener('click', newText);
		}
	}
	name_1 = prompt("Введите имя игрока 1.", "Игрок 1");
	name_2 = prompt("Введите имя игрока 2.", "Игрок 2");
	document.getElementById("player_1").innerText = name_1;
	document.getElementById("player_2").innerText = name_2;
	countRef_1 = document.getElementById("count_1");
	countRef_2 = document.getElementById("count_2");
	countRef_1.innerText = count_1;
	countRef_2.innerText = count_2;
}

function checkCombos(rows) {
	var row1 = rows[0];
	var row2 = rows[1];
	var row3 = rows[2];
	var cells1 = row1.cells;
	var cells2 = row2.cells;
	var cells3 = row3.cells;
	//Проверка для игрока за "Крестик"
	//по горизонтали
	if (cells1[0].innerText == "X" && cells1[1].innerText == "X" && cells1[2].innerText == "X") return 1;
	if (cells2[0].innerText == "X" && cells2[1].innerText == "X" && cells2[2].innerText == "X") return 1;
	if (cells3[0].innerText == "X" && cells3[1].innerText == "X" && cells3[2].innerText == "X") return 1;
	//по вертикали
	if (cells1[0].innerText == "X" && cells2[0].innerText == "X" && cells3[0].innerText == "X") return 1;
	if (cells1[1].innerText == "X" && cells2[1].innerText == "X" && cells3[1].innerText == "X") return 1;
	if (cells1[2].innerText == "X" && cells2[2].innerText == "X" && cells3[2].innerText == "X") return 1;
	//по диагонали
	if (cells1[0].innerText == "X" && cells2[1].innerText == "X" && cells3[2].innerText == "X") return 1;
	if (cells1[2].innerText == "X" && cells2[1].innerText == "X" && cells3[0].innerText == "X") return 1;
	//Проверка для игрока за "Нолик"
	//по горизонтали
	if (cells1[0].innerText == "O" && cells1[1].innerText == "O" && cells1[2].innerText == "O") return 0;
	if (cells2[0].innerText == "O" && cells2[1].innerText == "O" && cells2[2].innerText == "O") return 0;
	if (cells3[0].innerText == "O" && cells3[1].innerText == "O" && cells3[2].innerText == "O") return 0;
	//по вертикали
	if (cells1[0].innerText == "O" && cells2[0].innerText == "O" && cells3[0].innerText == "O") return 0;
	if (cells1[1].innerText == "O" && cells2[1].innerText == "O" && cells3[1].innerText == "O") return 0;
	if (cells1[2].innerText == "O" && cells2[2].innerText == "O" && cells3[2].innerText == "O") return 0;
	//по диагонали
	if (cells1[0].innerText == "O" && cells2[1].innerText == "O" && cells3[2].innerText == "O") return 0;
	if (cells1[2].innerText == "O" && cells2[1].innerText == "O" && cells3[0].innerText == "O") return 0;
	//Выигрышной комбинации нет и часть полей не заполнены
	if (count == 9) return 2;
	return -1;
}

function endGame() {
	count = 0;
	state = 0;
	document.getElementsByClassName("gamefield")[0].style.display = "none";
}


function checkWin() {
	var table = document.getElementsByClassName("gamefield")[0];
	var tbody = table.tBodies[0];
	var rows = tbody.rows;
	var result = checkCombos(rows);
	if (result == 1) {
		alert("!!!X!!!");
		count_1 = count_1 + 1;
		countRef_1.innerText = count_1;
		endGame();
	} else if (result == 0) {
		alert("!!!O!!!");
		count_2 = count_2 + 1;
		countRef_2.innerText = count_2;
		endGame();
	} else if (result == 2) {
		alert("!!!Ничья!!!");
		endGame();
	}
}