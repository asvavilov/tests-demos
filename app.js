/*
var wd = require('selenium-webdriver');
var assert = require('assert');

var SELENIUM_HOST = 'http://localhost:4444/wd/hub';
var URL = 'http://www.yandex.ru';

var client = new wd.Builder()
   .usingServer(SELENIUM_HOST)
   .withCapabilities({ browserName: 'firefox' })
   .build();

client.get(URL).then(function() {
    client.findElement({ name: 'text' }).sendKeys('test');
    client.findElement({ css: '.suggest2-form__button' }).click();

    client.getTitle().then(function(title) {
        assert.ok(title.indexOf('test — Яндекс: нашлось') > -1, 'Ничего не нашлось :(');
    });

    client.quit();
});
*/
/*
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Поиск в Google';
 });
}, 1000);


var fs = require('fs');
driver.get('https://profi-studio.ru');
driver.takeScreenshot().then(function(data){
   var base64Data = data.replace(/^data:image\/png;base64,/,"")
   fs.writeFile("out.png", base64Data, 'base64', function(err) {
        if(err) console.log(err);
   });
});


driver.quit();
*/
