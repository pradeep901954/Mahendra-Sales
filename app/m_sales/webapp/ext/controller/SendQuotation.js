sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        SendQuotation: async function(oEvent) {
            debugger
            MessageToast.show("Quotation Is Sent");
            let funcname = 'QuotationFunc';
					let oFunction = oEvent.getModel().bindContext(`/${funcname}(...)`);
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
        },
        Head: function() {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
