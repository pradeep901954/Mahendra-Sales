sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('msales.ext.controller.Obj_page_s', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf msales.ext.controller.Obj_page_s
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			editFlow: {
				onAfterEdit: function (mParameters) {
					debugger
					setTimeout(async () => {
						await this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(false);
						this.base.getView().mAggregations.content[0].mAggregations.sections[5].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].setEnabled(true);
					
					}, 800);
				},
				onAfterSave: function (mParameters) {
					debugger
					setTimeout(async () => {
						await this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(true);
					}, 800);
				}
			},
			routing: {
				onAfterBinding: async function (oParameter) {
					debugger
					this.base.getView().mAggregations.content[0].mAggregations.sections[5].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].setEnabled(false);
					// this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].mProperties.text = 'Raise Quotation';
					
					let funcname = 'postattach';
					let oFunction = oParameter.getModel().bindContext(`/${funcname}(...)`);
					var a;
					var uuid = window.location.href;
					const regex1 = /purchaseEnquiryUuid=([a-fA-F0-9-]+)/;;
					const match1 = uuid.match(regex1);
					if (match1) {
						a = match1[1];
						console.log(a); // Output: 1
					}
					oFunction.setParameter('p', a);
					await oFunction.execute();
					const oContext = oFunction.getBoundContext();
					var result = oContext.getValue();
					debugger
					if(result.value[0].status === 'Request'){
						this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(true);
						var Quotation = this.base.getView().mAggregations.content[0].mAggregations.sections[3].setVisible(false);
						var Quotation1 = this.base.getView().mAggregations.content[0].mAggregations.sections[2].setVisible(true);
						this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(true);
						

					}else if(result.value[0].status === 'Negotiation'){
						this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(true);
						var Quotation = this.base.getView().mAggregations.content[0].mAggregations.sections[3].setVisible(true);
						var Quotation1 = this.base.getView().mAggregations.content[0].mAggregations.sections[2].setVisible(false);
						this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(true);
			


					}else if (result.value[0].status === 'Approved'){
						this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(false);
						var Quotation = this.base.getView().mAggregations.content[0].mAggregations.sections[3].setVisible(true);
						var Quotation1 = this.base.getView().mAggregations.content[0].mAggregations.sections[2].setVisible(false);
						this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(false);
						

					}else if (result.value[0].status === 'In Process'){
						this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(false);
						var Quotation = this.base.getView().mAggregations.content[0].mAggregations.sections[3].setVisible(false);
						var Quotation1 = this.base.getView().mAggregations.content[0].mAggregations.sections[2].setVisible(true);
						this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[3].setVisible(false);
						
		
					}
				},
				onBeforeBinding: async function (oParameter) {
					debugger
				}

			}
		}
	});
});
