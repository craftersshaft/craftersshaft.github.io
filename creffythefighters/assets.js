
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
Module['FS_createPath']('/assets/chars', 'suave', true, true);
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
 loadPackage({"files": [{"filename": "/assets/chars/creffy/creffy.ai", "start": 0, "end": 28020, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.air", "start": 28020, "end": 45894, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cmd", "start": 45894, "end": 62220, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.cns", "start": 62220, "end": 148524, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.def", "start": 148524, "end": 149968, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.sff", "start": 149968, "end": 365213, "audio": 0}, {"filename": "/assets/chars/creffy/creffy.snd", "start": 365213, "end": 1913770, "audio": 0}, {"filename": "/assets/chars/creffy/green.act", "start": 1913770, "end": 1914538, "audio": 0}, {"filename": "/assets/chars/creffy/neilmaybe.act", "start": 1914538, "end": 1915306, "audio": 0}, {"filename": "/assets/chars/creffy/normal.act", "start": 1915306, "end": 1916074, "audio": 0}, {"filename": "/assets/chars/creffy/orange.act", "start": 1916074, "end": 1916842, "audio": 0}, {"filename": "/assets/chars/creffy/readme.txt", "start": 1916842, "end": 1917064, "audio": 0}, {"filename": "/assets/chars/creffy/temmie.act", "start": 1917064, "end": 1917832, "audio": 0}, {"filename": "/assets/chars/suave/ending.def", "start": 1917832, "end": 1919879, "audio": 0}, {"filename": "/assets/chars/suave/ending.sff", "start": 1919879, "end": 1952846, "audio": 0}, {"filename": "/assets/chars/suave/intro.def", "start": 1952846, "end": 1955835, "audio": 0}, {"filename": "/assets/chars/suave/intro.sff", "start": 1955835, "end": 2015506, "audio": 0}, {"filename": "/assets/chars/suave/sd.air", "start": 2015506, "end": 2102350, "audio": 0}, {"filename": "/assets/chars/suave/sd.cmd", "start": 2102350, "end": 2114801, "audio": 0}, {"filename": "/assets/chars/suave/sd.cns", "start": 2114801, "end": 2184837, "audio": 0}, {"filename": "/assets/chars/suave/sd.sff", "start": 2184837, "end": 2749615, "audio": 0}, {"filename": "/assets/chars/suave/sd.snd", "start": 2749615, "end": 2826246, "audio": 0}, {"filename": "/assets/chars/suave/suave.act", "start": 2826246, "end": 2827014, "audio": 0}, {"filename": "/assets/chars/suave/suave.def", "start": 2827014, "end": 2827726, "audio": 0}, {"filename": "/assets/chars/suave/suave2.act", "start": 2827726, "end": 2828494, "audio": 0}, {"filename": "/assets/chars/suave/suave3.act", "start": 2828494, "end": 2829262, "audio": 0}, {"filename": "/assets/chars/suave/suave4.act", "start": 2829262, "end": 2830030, "audio": 0}, {"filename": "/assets/chars/suave/suave5.act", "start": 2830030, "end": 2830798, "audio": 0}, {"filename": "/assets/chars/suave/suave6.act", "start": 2830798, "end": 2831566, "audio": 0}, {"filename": "/assets/chars/suave/suaveblack.act", "start": 2831566, "end": 2832334, "audio": 0}, {"filename": "/assets/chars/theguy/readme.txt", "start": 2832334, "end": 2832556, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.ai", "start": 2832556, "end": 2860576, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.air", "start": 2860576, "end": 2877980, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cmd", "start": 2877980, "end": 2893448, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.cns", "start": 2893448, "end": 2981298, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.def", "start": 2981298, "end": 2982635, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.sff", "start": 2982635, "end": 3253003, "audio": 0}, {"filename": "/assets/chars/theguy/theguy.snd", "start": 3253003, "end": 8986846, "audio": 0}, {"filename": "/assets/data/common.snd", "start": 8986846, "end": 9059551, "audio": 0}, {"filename": "/assets/data/common1.cns", "start": 9059551, "end": 9102750, "audio": 0}, {"filename": "/assets/data/fight.def", "start": 9102750, "end": 9119208, "audio": 0}, {"filename": "/assets/data/fight.sff", "start": 9119208, "end": 9189870, "audio": 0}, {"filename": "/assets/data/fight.snd", "start": 9189870, "end": 9279449, "audio": 0}, {"filename": "/assets/data/fightfx.air", "start": 9279449, "end": 9283370, "audio": 0}, {"filename": "/assets/data/fightfx.sff", "start": 9283370, "end": 9431585, "audio": 0}, {"filename": "/assets/data/font.def", "start": 9431585, "end": 9432303, "audio": 0}, {"filename": "/assets/data/mugen.cfg", "start": 9432303, "end": 9447585, "audio": 0}, {"filename": "/assets/data/osu.air", "start": 9447585, "end": 9447945, "audio": 0}, {"filename": "/assets/data/osu.sff", "start": 9447945, "end": 9467042, "audio": 0}, {"filename": "/assets/data/osu.snd", "start": 9467042, "end": 9510192, "audio": 0}, {"filename": "/assets/data/select.def", "start": 9510192, "end": 9513880, "audio": 0}, {"filename": "/assets/data/system.def", "start": 9513880, "end": 9529108, "audio": 0}, {"filename": "/assets/data/system.sff", "start": 9529108, "end": 9635535, "audio": 0}, {"filename": "/assets/data/system.snd", "start": 9635535, "end": 9644511, "audio": 0}, {"filename": "/assets/data/thieving-mice.ttf", "start": 9644511, "end": 9679895, "audio": 0}, {"filename": "/assets/data/big/readme.txt", "start": 9679895, "end": 9680423, "audio": 0}, {"filename": "/assets/data/big/system.def", "start": 9680423, "end": 9700562, "audio": 0}, {"filename": "/assets/data/kfm/credits.def", "start": 9700562, "end": 9702141, "audio": 0}, {"filename": "/assets/data/kfm/credits.sff", "start": 9702141, "end": 9731472, "audio": 0}, {"filename": "/assets/data/kfm/gameover.def", "start": 9731472, "end": 9732549, "audio": 0}, {"filename": "/assets/data/kfm/gameover.sff", "start": 9732549, "end": 9738316, "audio": 0}, {"filename": "/assets/data/kfm/intro.def", "start": 9738316, "end": 9741599, "audio": 0}, {"filename": "/assets/data/kfm/intro.sff", "start": 9741599, "end": 9839182, "audio": 0}, {"filename": "/assets/data/kfm/kfmtitle.sff", "start": 9839182, "end": 9870076, "audio": 0}, {"filename": "/assets/data/kfm/logo.def", "start": 9870076, "end": 9870531, "audio": 0}, {"filename": "/assets/data/kfm/logo.sff", "start": 9870531, "end": 9878528, "audio": 0}, {"filename": "/assets/data/kfm/select.def", "start": 9878528, "end": 9882050, "audio": 0}, {"filename": "/assets/data/kfm/system.def", "start": 9882050, "end": 9896134, "audio": 0}, {"filename": "/assets/data/mugen1/fight.def", "start": 9896134, "end": 9914323, "audio": 0}, {"filename": "/assets/data/mugen1/fight.sff", "start": 9914323, "end": 10160030, "audio": 0}, {"filename": "/assets/data/mugen1/system.def", "start": 10160030, "end": 10180805, "audio": 0}, {"filename": "/assets/data/mugen1/system.sff", "start": 10180805, "end": 11148521, "audio": 0}, {"filename": "/assets/font/arcade.def", "start": 11148521, "end": 11149189, "audio": 0}, {"filename": "/assets/font/arcade.sff", "start": 11149189, "end": 11191273, "audio": 0}, {"filename": "/assets/font/enter48.def", "start": 11191273, "end": 11191905, "audio": 0}, {"filename": "/assets/font/enter48.sff", "start": 11191905, "end": 11235915, "audio": 0}, {"filename": "/assets/font/f-4x6.def", "start": 11235915, "end": 11236583, "audio": 0}, {"filename": "/assets/font/f-4x6.fnt", "start": 11236583, "end": 11239611, "audio": 0}, {"filename": "/assets/font/f-4x6.sff", "start": 11239611, "end": 11245242, "audio": 0}, {"filename": "/assets/font/f-6x8f.fnt", "start": 11245242, "end": 11249556, "audio": 0}, {"filename": "/assets/font/f-6x9.def", "start": 11249556, "end": 11250224, "audio": 0}, {"filename": "/assets/font/f-6x9.fnt", "start": 11250224, "end": 11254634, "audio": 0}, {"filename": "/assets/font/f-6x9.sff", "start": 11254634, "end": 11261253, "audio": 0}, {"filename": "/assets/font/f-6x9f.fnt", "start": 11261253, "end": 11265560, "audio": 0}, {"filename": "/assets/font/f4x6.fnt", "start": 11265560, "end": 11268588, "audio": 0}, {"filename": "/assets/font/f6x8f.fnt", "start": 11268588, "end": 11272902, "audio": 0}, {"filename": "/assets/font/f6x9.fnt", "start": 11272902, "end": 11277312, "audio": 0}, {"filename": "/assets/font/f6x9f.fnt", "start": 11277312, "end": 11281619, "audio": 0}, {"filename": "/assets/font/fpad.fnt", "start": 11281619, "end": 11283267, "audio": 0}, {"filename": "/assets/font/infofont.def", "start": 11283267, "end": 11283958, "audio": 0}, {"filename": "/assets/font/jg.fnt", "start": 11283958, "end": 11290987, "audio": 0}, {"filename": "/assets/font/msgothic-tt36.def", "start": 11290987, "end": 11291692, "audio": 0}, {"filename": "/assets/font/mssansserif-tt36.def", "start": 11291692, "end": 11292384, "audio": 0}, {"filename": "/assets/font/n4x6.fnt", "start": 11292384, "end": 11293713, "audio": 0}, {"filename": "/assets/font/name1.fnt", "start": 11293713, "end": 11297572, "audio": 0}, {"filename": "/assets/font/name14.def", "start": 11297572, "end": 11298231, "audio": 0}, {"filename": "/assets/font/name14.sff", "start": 11298231, "end": 11318794, "audio": 0}, {"filename": "/assets/font/num1.def", "start": 11318794, "end": 11319461, "audio": 0}, {"filename": "/assets/font/num1.fnt", "start": 11319461, "end": 11321938, "audio": 0}, {"filename": "/assets/font/num1.sff", "start": 11321938, "end": 11332041, "audio": 0}, {"filename": "/assets/font/num48.def", "start": 11332041, "end": 11332711, "audio": 0}, {"filename": "/assets/font/num48.sff", "start": 11332711, "end": 11349015, "audio": 0}, {"filename": "/assets/font/options.def", "start": 11349015, "end": 11349706, "audio": 0}, {"filename": "/assets/sound/fanboy.mp3", "start": 11349706, "end": 11589826, "audio": 1}, {"filename": "/assets/sound/select.mp3", "start": 11589826, "end": 12214236, "audio": 1}, {"filename": "/assets/stages/kfm.def", "start": 12214236, "end": 12225615, "audio": 0}, {"filename": "/assets/stages/kfm.sff", "start": 12225615, "end": 12455374, "audio": 0}, {"filename": "/assets/stages/stage0.def", "start": 12455374, "end": 12466577, "audio": 0}, {"filename": "/assets/stages/stage0.sff", "start": 12466577, "end": 12470779, "audio": 0}], "remote_package_size": 12470779, "package_uuid": "001c18e1-21a9-41ff-a662-7660e6c997c5"});

})();
