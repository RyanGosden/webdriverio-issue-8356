describe('It should check if the URL is correct', () => {

    it('Should obtain url', async () => {
        await browser.url('https://webdriver.io');
        await expect(await browser.getUrl()).toEqual("https://webdriver.io/")
    });

});

