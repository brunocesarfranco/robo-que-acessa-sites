const puppeteer = require('puppeteer');

console.log('Bem vindo ao Bot de acesso 🤖');
var chave = true;

async function robo() {
  while (chave == true) {
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    const qualquerUrl = `https://ranchtech4.wixsite.com/ranchtech/post/comunicação-empresarial`;

    try{
      await page.goto(qualquerUrl);
      console.log(`Acessando..`)
    }
    catch{
      console.log(`Erro ao acessando..`)
      await browser.close();
    }
  }
}

robo();