var express = require('express'); 
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
let scrapperPage = (cont)=>{
    if(cont<=251){
    url = `http://vidadesuporte.com.br/suporte-a-serie/flagras-de-atendimento-da-semana-${cont}/`;
request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);
        $("[alt='Flagras de Atendimento da Semana']").each((index, elemento)=>{
            if(elemento.name=='img'){
                fs.appendFileSync('linksImg.txt',elemento.attribs.src+'\r\n',{enconding : 'UTF-8'});
            }
        })
}
else{
    console.log(error);
}
scrapperPage(++cont);
});
    }
    else{
        console.log("fim");
    }
}


scrapperPage(10);
