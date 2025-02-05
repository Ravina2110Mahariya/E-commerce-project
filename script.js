const contentDiv = document.getElementById('content');
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 1; j <= 4; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.textContent = `Row ${i + 1}, Column ${j}`;
        row.appendChild(col);
      }
      contentDiv.appendChild(row);
    }