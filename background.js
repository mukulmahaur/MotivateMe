'use strict';

chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({url: "popup.html"}, function (tab) {
  });
});