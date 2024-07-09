function getElementWidth(content, padding, border) {
    const content = parseFloat(content);
    const padding = parseFloat(padding) * 2;
    const border = parseFloat(border) * 2;
    return `content + padding + border` ;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
