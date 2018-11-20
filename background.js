'use strict';

// Runs when the extension is installed / updated and when chrome updates
chrome.runtime.onInstalled.addListener(_ => {

  // Store an ugly green colour and print a message to the console on success
  chrome.storage.sync.set({color: '#3aa757'}, _ => {
    console.log('The color is green.');
  });

  // Disables the extension on other websites
  chrome.declarativeContent.onPageChanged.removeRules(undefined, _ => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'tf2center.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
