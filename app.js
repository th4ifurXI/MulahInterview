
    const table1Data = [
      { index: "A1", value: 41 },
      { index: "A2", value: 18 },
      { index: "A3", value: 21 },
      { index: "A4", value: 63 },
      { index: "A5", value: 2 },
      { index: "A6", value: 53 },
      { index: "A7", value: 5 },
      { index: "A8", value: 57 },
      { index: "A9", value: 60 },
      { index: "A10", value: 93 },
      { index: "A11", value: 28 },
      { index: "A12", value: 3 },
      { index: "A13", value: 90 },
      { index: "A14", value: 39 },
      { index: "A15", value: 80 },
      { index: "A16", value: 88 },
      { index: "A17", value: 49 },
      { index: "A18", value: 60 },
      { index: "A19", value: 26 },
      { index: "A20", value: 28 }
    ];

    const table1Body = document.getElementById("table1-body");
    table1Data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.index}</td><td>${row.value}</td>`;
      table1Body.appendChild(tr);
    });

    const valueMap = Object.fromEntries(table1Data.map(row => [row.index, row.value]));
    const alpha = valueMap["A5"] + valueMap["A20"];
    const beta = valueMap["A15"] / valueMap["A7"];
    const charlie = valueMap["A13"] * valueMap["A12"];

    const table2Body = document.getElementById("table2-body");
    const table2Data = [
      { category: "Alpha", value: alpha },
      { category: "Beta", value: beta },
      { category: "Charlie", value: charlie }
    ];
    table2Data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.category}</td><td>${row.value}</td>`;
      table2Body.appendChild(tr);
    });