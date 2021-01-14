// try example by running: npx nightwatch tests/nightwatch/example.js

module.exports = {
    'Demo test Google' : function (client) {
        client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .waitForElementVisible('#hptl', 1000)
        .click('link text', 'About')
        .pause(1000)
        .assert.containsText('h1', 'Our mission is to')
        .end()
    }
}


