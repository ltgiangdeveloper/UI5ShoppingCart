jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"vn/com/cateringvietnam/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"vn/com/cateringvietnam/test/integration/pages/Worklist",
		"vn/com/cateringvietnam/test/integration/pages/Object",
		"vn/com/cateringvietnam/test/integration/pages/NotFound",
		"vn/com/cateringvietnam/test/integration/pages/Browser",
		"vn/com/cateringvietnam/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "vn.com.cateringvietnam.view."
	});

	sap.ui.require([
		"vn/com/cateringvietnam/test/integration/WorklistJourney",
		"vn/com/cateringvietnam/test/integration/ObjectJourney",
		"vn/com/cateringvietnam/test/integration/NavigationJourney",
		"vn/com/cateringvietnam/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});