// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'addHighlight') {
        sendMessage('add');
    } else if (command === 'removeHighlight') {
        sendMessage('remove');
    }
});

const sendMessage = (msg) => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: msg
        }, function (response) {
            console.log('did the thing!');
        });
    });
}
