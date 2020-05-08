const textInput: HTMLInputElement = document.getElementById("text-input") as HTMLInputElement;
const resultContainer = document.getElementById("result-container");


function onCountWords() {
    // clear table
    document.getElementById("table-result").innerHTML = "";
    if (textInput.value == "") {
        alert("Empty text field");
        return;
    }

    let result = countWord(textInput.value);
    let old_table = document.getElementById("table-result");
    let new_table = buildTable(result);

    resultContainer.replaceChild(new_table, old_table);
}


function countWord(text: string): Array<{}> {
    let pattern = RegExp("\\w{1,}", "g");
    let words: Array<any> = text.match(pattern);

    let result: Array<{}> = [];
    let lenght = words.length;
    for (let i = 0; i < lenght; i++) {
        // check if the list result contains the word
        if (result.filter((element => element["word"] == words[i])).length != 0) {
            continue;
        }
        // count
        let count: number = 0;
        for (let j = 0; j < lenght; j++) {
            if (words[i] == words[j]) {
                count += 1;
            }
        }
        result.push({ "word": words[i], "count": count });
    }
    // Sort data 
    result.sort((a, b) => a["count"] - b["count"]);
    return result.reverse();

}


function buildTable(data: Array<{}>): HTMLTableElement {
    let tableContainer = document.createElement("table");
    tableContainer.setAttribute("id", "table-result");

    let tableContent = `
        <tr>
            ${["Word", "Count"].map(element => (`
                <th>${element}</th>
            `)).join("")}
        </tr>
        ${data.map(element => (`
           <tr>
                <td>${element["word"]}</td>
                <td>${element["count"]}</td>
           </tr>
        `)).join("")}          
    `;
    tableContainer.insertAdjacentHTML("beforeend", tableContent);
    return tableContainer;

}