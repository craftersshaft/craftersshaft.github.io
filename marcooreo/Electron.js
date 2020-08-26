var Electron=require("electron");

// https://github.com/electron/electron/issues/6571
Electron.app.commandLine.appendSwitch("high-dpi-support",1);
Electron.app.commandLine.appendSwitch("force-device-scale-factor",1);

Electron.app.on("ready",start);

function start()
{	
	var window=new Electron.BrowserWindow({width:480,height:360,useContentSize:true,title:""});
	window.loadFile("Electron.html");
	window.on("close",Electron.app.quit);
	
	// window.webContents.openDevTools();
}
