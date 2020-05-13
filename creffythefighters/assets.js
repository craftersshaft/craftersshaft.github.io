
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 46072, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 46072, "end": 63124, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 63124, "end": 151047, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 151047, "end": 152491, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 152491, "end": 368984, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 368984, "end": 2161349, "audio": 0}, {"filename": "/assets/chars/creffy/creffybootleg.cns", "start": 2161349, "end": 2255384, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 2255384, "end": 2256152, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 2256152, "end": 2256920, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 2256920, "end": 2257688, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 2257688, "end": 2258456, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 2258456, "end": 2258678, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 2258678, "end": 2259446, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2259446, "end": 2259668, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2259668, "end": 2287688, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2287688, "end": 2307226, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2307226, "end": 2323357, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2323357, "end": 2414988, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2414988, "end": 2416333, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2416333, "end": 2822189, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 2822189, "end": 10638512, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 10638512, "end": 10711217, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 10711217, "end": 10754416, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 10754416, "end": 10770874, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 10770874, "end": 10841536, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 10841536, "end": 10931115, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 10931115, "end": 10935036, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 10935036, "end": 11083251, "audio": 0}, {"filename": "/assets/data/font.def", "start": 11083251, "end": 11083969, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 11083969, "end": 11099251, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 11099251, "end": 11099611, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 11099611, "end": 11118708, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 11118708, "end": 11161858, "audio": 0}, {"filename": "/assets/data/select.def", "start": 11161858, "end": 11165572, "audio": 0}, {"filename": "/assets/data/system.def", "start": 11165572, "end": 11180810, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 11180810, "end": 11287237, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 11287237, "end": 11296213, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 11296213, "end": 11331597, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 11331597, "end": 11332125, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 11332125, "end": 11352264, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 11352264, "end": 11353843, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 11353843, "end": 11383174, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 11383174, "end": 11384251, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 11384251, "end": 11390018, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 11390018, "end": 11393301, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 11393301, "end": 11490884, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 11490884, "end": 11521778, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 11521778, "end": 11522233, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 11522233, "end": 11530230, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 11530230, "end": 11533752, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 11533752, "end": 11547836, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 11547836, "end": 11566025, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 11566025, "end": 11811732, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 11811732, "end": 11832507, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 11832507, "end": 12800223, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 12800223, "end": 12800891, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 12800891, "end": 12842975, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 12842975, "end": 12843607, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 12843607, "end": 12887617, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 12887617, "end": 12888285, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 12888285, "end": 12891313, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 12891313, "end": 12896944, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 12896944, "end": 12901258, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 12901258, "end": 12901926, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 12901926, "end": 12906336, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 12906336, "end": 12912955, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 12912955, "end": 12917262, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 12917262, "end": 12920290, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 12920290, "end": 12924604, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 12924604, "end": 12929014, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 12929014, "end": 12933321, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 12933321, "end": 12934969, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 12934969, "end": 12935660, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 12935660, "end": 12942689, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 12942689, "end": 12943394, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 12943394, "end": 12944086, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 12944086, "end": 12945415, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 12945415, "end": 12949274, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 12949274, "end": 12949933, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 12949933, "end": 12970496, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 12970496, "end": 12971163, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 12971163, "end": 12973640, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 12973640, "end": 12983743, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 12983743, "end": 12984413, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 12984413, "end": 13000717, "audio": 0}, {"filename": "/assets/font/options.def", "start": 13000717, "end": 13001408, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 13001408, "end": 13241528, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 13241528, "end": 13865938, "audio": 1}, {"filename": "/assets/stages/fanboy.def", "start": 13865938, "end": 13867666, "audio": 0}, {"filename": "/assets/stages/fanboy.mp3", "start": 13867666, "end": 14107786, "audio": 1}, {"filename": "/assets/stages/fanboy.sff", "start": 14107786, "end": 14624805, "audio": 0}, {"filename": "/assets/stages/kfm.def", "start": 14624805, "end": 14636184, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 14636184, "end": 14865943, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 14865943, "end": 14877146, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 14877146, "end": 14881348, "audio": 0}], "remote_package_size": 14881348, "package_uuid": "d817842f-6f15-4d2f-9f23-1d79746f2bcf"});

})();
