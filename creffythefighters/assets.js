
var Module = typeof Module !== 'undefined' ? Module : {};

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'build/assets.data';
    var REMOTE_PACKAGE_BASE = 'assets.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'assets', true, true);
Module['FS_createPath']('/assets', 'chars', true, true);
Module['FS_createPath']('/assets/chars', 'creffy', true, true);
Module['FS_createPath']('/assets/chars', 'theguy', true, true);
Module['FS_createPath']('/assets', 'data', true, true);
Module['FS_createPath']('/assets/data', 'big', true, true);
Module['FS_createPath']('/assets/data', 'kfm', true, true);
Module['FS_createPath']('/assets/data', 'mugen1', true, true);
Module['FS_createPath']('/assets', 'font', true, true);
Module['FS_createPath']('/assets', 'sound', true, true);
Module['FS_createPath']('/assets', 'stages', true, true);

    function DataRequest(start, end, audio) {
      this.start = start;
      this.end = end;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
        this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

        var files = metadata.files;
        for (var i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_build/assets.data');

    };
    Module['addRunDependency']('datafile_build/assets.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62671, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62671, "end": 148832, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148832, "end": 150276, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 150276, "end": 365521, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365521, "end": 1914078, "audio": 0}, {"filename": "/assets/chars/creffy/creffybootleg.cns", "start": 1914078, "end": 2008911, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 2008911, "end": 2009679, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 2009679, "end": 2010447, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 2010447, "end": 2011215, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 2011215, "end": 2011983, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 2011983, "end": 2012205, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 2012205, "end": 2012973, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2012973, "end": 2013195, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2013195, "end": 2041215, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2041215, "end": 2060144, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2060144, "end": 2076302, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2076302, "end": 2167062, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2167062, "end": 2168407, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2168407, "end": 2552435, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 2552435, "end": 9660570, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 9660570, "end": 9733275, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9733275, "end": 9776474, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9776474, "end": 9792932, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9792932, "end": 9863594, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9863594, "end": 9953173, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9953173, "end": 9957094, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9957094, "end": 10105309, "audio": 0}, {"filename": "/assets/data/font.def", "start": 10105309, "end": 10106027, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 10106027, "end": 10121309, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 10121309, "end": 10121669, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 10121669, "end": 10140766, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 10140766, "end": 10183916, "audio": 0}, {"filename": "/assets/data/select.def", "start": 10183916, "end": 10187630, "audio": 0}, {"filename": "/assets/data/system.def", "start": 10187630, "end": 10202868, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 10202868, "end": 10309295, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 10309295, "end": 10318271, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 10318271, "end": 10353655, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 10353655, "end": 10354183, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 10354183, "end": 10374322, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 10374322, "end": 10375901, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 10375901, "end": 10405232, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 10405232, "end": 10406309, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 10406309, "end": 10412076, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 10412076, "end": 10415359, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 10415359, "end": 10512942, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 10512942, "end": 10543836, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 10543836, "end": 10544291, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 10544291, "end": 10552288, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 10552288, "end": 10555810, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 10555810, "end": 10569894, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 10569894, "end": 10588083, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 10588083, "end": 10833790, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10833790, "end": 10854565, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10854565, "end": 11822281, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11822281, "end": 11822949, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11822949, "end": 11865033, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11865033, "end": 11865665, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11865665, "end": 11909675, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11909675, "end": 11910343, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11910343, "end": 11913371, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11913371, "end": 11919002, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11919002, "end": 11923316, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11923316, "end": 11923984, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11923984, "end": 11928394, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11928394, "end": 11935013, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11935013, "end": 11939320, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11939320, "end": 11942348, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11942348, "end": 11946662, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11946662, "end": 11951072, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11951072, "end": 11955379, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11955379, "end": 11957027, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11957027, "end": 11957718, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11957718, "end": 11964747, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11964747, "end": 11965452, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11965452, "end": 11966144, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11966144, "end": 11967473, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11967473, "end": 11971332, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11971332, "end": 11971991, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11971991, "end": 11992554, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11992554, "end": 11993221, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11993221, "end": 11995698, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11995698, "end": 12005801, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 12005801, "end": 12006471, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 12006471, "end": 12022775, "audio": 0}, {"filename": "/assets/font/options.def", "start": 12022775, "end": 12023466, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 12023466, "end": 12263586, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 12263586, "end": 12887996, "audio": 1}, {"filename": "/assets/stages/fanboy.def", "start": 12887996, "end": 12889724, "audio": 0}, {"filename": "/assets/stages/fanboy.mp3", "start": 12889724, "end": 13129844, "audio": 1}, {"filename": "/assets/stages/fanboy.sff", "start": 13129844, "end": 13646863, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 13646863, "end": 13658242, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 13658242, "end": 13888001, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 13888001, "end": 13899204, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 13899204, "end": 13903406, "audio": 0}], "remote_package_size": 13903406, "package_uuid": "cfe8561f-6953-4f90-9fd1-02a60299a7ae"});

})();
