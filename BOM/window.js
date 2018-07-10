var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
function closeWindow(){
    popup.close();
}
setTimeout(closeWindow, 10000);