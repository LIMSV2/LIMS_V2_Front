var Vue = require("../../js/plugins/vue");
require("../../js/plugins/bootstrap-wizard.min");
require("../../js/plugins/jquery-ui-1.10.3.min");
require("../../js/plugins/jquery.validate.min");
//    require("../../js/plugins/messages_zh");
require("../../js/plugins/select2.min");



var $validator = jQuery("#firstForm").validate({
    highlight: function (element) {
        jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        jQuery(element).closest('.form-group').removeClass('has-error');
    }
});

jQuery('#validationWizard').bootstrapWizard({
    tabClass: 'nav nav-pills nav-justified nav-disabled-click',
    'nextSelector': '.next',
    'previousSelector': '.previous',
    onInit: function () {
        jQuery('.wizard .finish').hide();
        jQuery('.wizard .draft').hide();
    },
    onTabClick: function (tab, navigation, index) {
        return false;
    },
    onNext: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');

        //                var $valid = jQuery('#firstForm').valid();
        //                if (!$valid) {
        //                    $validator.focusInvalid();
        //                    return false;
        //                }

        if (index >= 3) {
            jQuery('.wizard .finish').show();
            jQuery('.wizard .draft').show();
        } else {
            jQuery('.wizard .finish').hide();
            jQuery('.wizard .draft').hide();
        }
    },
    onPrevious: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
        if (index >= 3) {
            jQuery('.wizard .finish').show();
            jQuery('.wizard .draft').show();
        } else {
            jQuery('.wizard .finish').hide();
            jQuery('.wizard .draft').hide();
        }
    },
    onTabShow: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;
        var $percent = ($current / $total) * 100;
        jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
    }
});

jQuery(".select2").select2({
    width: '100%',
    minimumResultsForSearch: -1
});
jQuery('#datepicker-multiple').datepicker({
    numberOfMonths: 3,
    showButtonPanel: true
});




//    module.exports = {
//        data: function () {
//            return {
//                "client_unit": "",
//                "client_code": "",
//                "client_address": "",
//                "client_tel": "",
//                "client": "",
//                "client_fax": "",
//                "trustee_unit": "",
//                "trustee_code": "",
//                "trustee_address": "",
//                "trustee_tel": "",
//                "trustee": "",
//                "trustee_fax": ""
//            }
//        },
//        methods: {
//            default_info: function () {
//                var me = this;
//                jQuery.fn.check_msg({
//                    msg: '是否导入系统预设的乙方信息？已经填写的信息将会被覆盖。',
//                    success: function () {
//                        me.$http.get('/assets/json/contract_default.json').then(function (response) {
//                            var data = response.data;
//                            for (var key in data) {
//                                var value = data[key];
//                                me.$set(key, value);
//                            }
//                        }, function (response) {
//                            //error handle
//
//                        })
//
//
//                    }
//                });
//            },
//            open_dialog: function () {
//                LIMS.dialog.$set('title', '从客户管理系统中导入');
//                LIMS.dialog.$set('template', 'aaa');
//            }
//        },
//        ready: function () {
//            // 带有表单验证的流程图
//            var $validator = jQuery("#firstForm").validate({
//                highlight: function (element) {
//                    jQuery(element).closest('.form-group').removeClass('has-success').addClass('has-error');
//                },
//                success: function (element) {
//                    jQuery(element).closest('.form-group').removeClass('has-error');
//                }
//            });
//
//            jQuery('#validationWizard').bootstrapWizard({
//                tabClass: 'nav nav-pills nav-justified nav-disabled-click',
//                'nextSelector': '.next',
//                'previousSelector': '.previous',
//                onInit: function () {
//                    jQuery('.wizard .finish').hide();
//                    jQuery('.wizard .draft').hide();
//                },
//                onTabClick: function (tab, navigation, index) {
//                    return false;
//                },
//                onNext: function (tab, navigation, index) {
//                    var $total = navigation.find('li').length;
//                    var $current = index + 1;
//                    var $percent = ($current / $total) * 100;
//                    jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
//
//                    //                var $valid = jQuery('#firstForm').valid();
//                    //                if (!$valid) {
//                    //                    $validator.focusInvalid();
//                    //                    return false;
//                    //                }
//
//                    if (index >= 3) {
//                        jQuery('.wizard .finish').show();
//                        jQuery('.wizard .draft').show();
//                    } else {
//                        jQuery('.wizard .finish').hide();
//                        jQuery('.wizard .draft').hide();
//                    }
//                },
//                onPrevious: function (tab, navigation, index) {
//                    var $total = navigation.find('li').length;
//                    var $current = index + 1;
//                    var $percent = ($current / $total) * 100;
//                    jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
//                    if (index >= 3) {
//                        jQuery('.wizard .finish').show();
//                        jQuery('.wizard .draft').show();
//                    } else {
//                        jQuery('.wizard .finish').hide();
//                        jQuery('.wizard .draft').hide();
//                    }
//                },
//                onTabShow: function (tab, navigation, index) {
//                    var $total = navigation.find('li').length;
//                    var $current = index + 1;
//                    var $percent = ($current / $total) * 100;
//                    jQuery('#validationWizard').find('.progress-bar').css('width', $percent + '%');
//                }
//            });
//
//            jQuery(".select2").select2({
//                width: '100%',
//                minimumResultsForSearch: -1
//            });
//            jQuery('#datepicker-multiple').datepicker({
//                numberOfMonths: 3,
//                showButtonPanel: true
//            });
//        }
//    };