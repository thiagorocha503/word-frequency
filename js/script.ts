const textInput: HTMLInputElement = document.getElementById("text-input") as HTMLInputElement;
const resultContainer = document.getElementById("result-container");


function onCount() {
    // clear table
    document.getElementById("table-result").innerHTML = "";
    if (textInput.value == "") {
        alert("Empty text field");
        return;
    }

    let result = countWord(textInput.value);
    console.log(`count> ${result}`);
    renderTable(createTable(result));
}


function countWord(text: string): Array<{}> {
    let pattern = RegExp("\\w{1,}","g");
    let words: Array<any> = text.match(pattern);

    let result: Array<{}> = [];
    words.forEach(i => {
        let count: number = 0;
        words.forEach(j => {
            if(i == j){
                count += 1;
            }
        });
        result.push({"word": i, "count":count});
    });   
    return result;

}


function createTable(data: Array<{}>): HTMLTableElement {
    let tableContainer = document.createElement("table");
    tableContainer.setAttribute("id","table-result");

    //  Table header
    let tableHeader: HTMLElement = document.createElement("tr");
    let wordHeader: HTMLElement = document.createElement("th");
    wordHeader.innerHTML = "Word";
    tableHeader.appendChild(wordHeader);

    let countHeader: HTMLElement = document.createElement("th");
    countHeader.innerHTML = "Count"
    tableHeader.appendChild(countHeader);

    tableContainer.appendChild(tableHeader);
    //  Table row
    data.forEach(e => {
        let row = document.createElement("tr");
        let word = document.createElement("td");
        word.setAttribute("translate","no");
        word.innerHTML = e["word"];
        let count = document.createElement("td");
        count.setAttribute("translate","no");
        count.innerHTML =  e["count"];

        row.appendChild(word);
        row.appendChild(count);
        tableContainer.appendChild(row);
    });
    renderTable(tableContainer);
    return tableContainer;


}

function renderTable(new_table: HTMLElement): void {
    let old_table = document.getElementById("table-result");
    resultContainer.replaceChild(new_table, old_table);

}