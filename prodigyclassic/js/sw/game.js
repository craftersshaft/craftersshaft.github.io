(function(){
	var sw;
	sw = window.sw || {};
	sw.overlayManager = sw.overlayManager || new SW.OverlayManagerView({el: "#overlay-mask"});
	sw.toastManager = new SW.ToastManager();
	sw.dialogManager = sw.dialogManager || new SW.DialogManager();
	sw.track = sw.track || new SW.Track();
	sw.config = sw.config || new SW.Config();
})();
