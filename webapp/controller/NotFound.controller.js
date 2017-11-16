sap.ui.define([
	"vn/com/cateringvietnam/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("vn.com.cateringvietnam.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});