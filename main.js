function escape(){
    let escape = document.getElementById('text').value
    toEscape = string => JSON.stringify(string)
    document.getElementById('resultTxtArea').innerHTML = `<p>Escaped Json</p><textarea  cols="50" rows="10" > ${toEscape(escape).slice(1,-1)}</textarea>`

}

const specials = { 
    'b': '\b',  
    'f': '\f', 
    'n': '\n', 
    'r': '\r',  
    't': '\t', 
    '"': '"',
};  

function unescape(){
    let unescape = document.getElementById('text').value
    let result = ''
    for(i = 0; i < unescape.length; i++){
        if(unescape[i] == '\\'){
            i++;
            let char = unescape.charAt(i);
            if(char.key == specials.key){
                result += specials[char]
                console.log(specials[char])
            }else result += unescape[i];
        }
        else result += unescape[i];
    } unescape = result
    document.getElementById('resultTxtArea').innerHTML = `<p>Unescaped Json</p><textarea  cols="50" rows="10" > ${result}</textarea>`
}

